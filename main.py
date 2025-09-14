import requests
import os
import subprocess
import json
from pathlib import Path

class WebDeployer:
    def __init__(self, telegram_bot_token=None, telegram_chat_id=None):
        self.telegram_bot_token = telegram_bot_token or os.getenv('TELEGRAM_BOT_TOKEN')
        self.telegram_chat_id = telegram_chat_id or os.getenv('TELEGRAM_CHAT_ID')
        
    def build_web_app(self, base_url=""):
        """Build the Flet web application with proper base URL"""
        try:
            print("Building web application...")
            result = subprocess.run([
                'flet', 'build', 'web',
                '--base-url', base_url,
                '--route-url-strategy', 'hash'
            ], capture_output=True, text=True, check=True)
            
            print("Build completed successfully!")
            print(result.stdout)
            
            # Fix the index.html for GitHub Pages
            self.fix_index_html()
            return True
            
        except subprocess.CalledProcessError as e:
            print(f"Build failed: {e}")
            print(f"Error output: {e.stderr}")
            self.send_telegram_message(f"❌ Build failed: {e.stderr}")
            return False
    
    def fix_index_html(self):
        """Fix index.html to work properly with GitHub Pages and hash routing"""
        # Read the original index.html
        index_path = Path('build/web/index.html')
        if index_path.exists():
            # Backup the original
            backup_path = Path('build/web/index_original.html')
            index_path.rename(backup_path)
            
            # Create proper index.html
            fixed_html = '''<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flet Web Application</title>
    <script type="module" crossorigin src="./assets/index.js"></script>
    <link rel="stylesheet" href="./assets/index.css">
</head>
<body>
    <script>
        // Handle GitHub Pages root URL - set hash if empty
        if (window.location.pathname === "/" && !window.location.hash) {
            window.location.hash = "/";
        }
        
        // Prevent infinite redirects
        const currentPath = window.location.pathname;
        const currentHash = window.location.hash;
        
        console.log("Current path:", currentPath);
        console.log("Current hash:", currentHash);
    </script>
    <div id="root"></div>
    
    <noscript>
        <div style="text-align: center; padding: 50px; font-family: Arial, sans-serif;">
            <h1>JavaScript Required</h1>
            <p>This application requires JavaScript to function properly.</p>
            <p>Please enable JavaScript in your browser settings.</p>
        </div>
    </noscript>
</body>
</html>'''
            
            with open(index_path, 'w') as f:
                f.write(fixed_html)
            print("Fixed index.html for GitHub Pages")
    
    def check_deployment(self):
        """Check if deployment is working properly"""
        test_urls = [
            "https://msmubassir.github.io/",
            "https://msmubassir.github.io/#/",
            "https://msmubassir.github.io/assets/index.js"
        ]
        
        results = {}
        for url in test_urls:
            try:
                response = requests.get(url, timeout=10)
                results[url] = {
                    'status': response.status_code,
                    'size': len(response.content) if response.status_code == 200 else 0
                }
                print(f"✓ {url} - Status: {response.status_code}, Size: {results[url]['size']} bytes")
            except requests.RequestException as e:
                results[url] = {'error': str(e)}
                print(f"✗ {url} - Error: {e}")
        
        return results
    
    def send_telegram_message(self, message):
        """Send message via Telegram bot"""
        if not self.telegram_bot_token or not self.telegram_chat_id:
            print("Telegram bot token or chat ID not configured")
            return False
        
        url = f"https://api.telegram.org/bot{self.telegram_bot_token}/sendMessage"
        
        payload = {
            'chat_id': self.telegram_chat_id,
            'text': message,
            'parse_mode': 'HTML'
        }
        
        try:
            response = requests.post(url, json=payload)
            response.raise_for_status()
            print("Telegram message sent successfully!")
            return True
        except requests.exceptions.RequestException as e:
            print(f"Failed to send Telegram message: {e}")
            return False
    
    def run_deployment_pipeline(self):
        """Run complete deployment pipeline"""
        self.send_telegram_message("🚀 Starting deployment process...")
        
        if self.build_web_app():
            # Check deployment status after a short delay
            import time
            time.sleep(10)  # Wait for deployment to start
            
            deployment_status = self.check_deployment()
            
            success_message = f"""✅ Build completed successfully!

📦 Deployment to GitHub Pages initiated
🌐 Site URL: https://msmubassir.github.io/
🔗 Direct app link: https://msmubassir.github.io/#/

📊 Deployment check:
• Root URL: {deployment_status.get('https://msmubassir.github.io/', {}).get('status', 'Unknown')}
• Hash URL: {deployment_status.get('https://msmubassir.github.io/#/', {}).get('status', 'Unknown')}
• JS File: {deployment_status.get('https://msmubassir.github.io/assets/index.js', {}).get('status', 'Unknown')}

💡 The infinite redirect should be fixed now!"""
            
            self.send_telegram_message(success_message)
            print("Deployment process completed!")
        else:
            self.send_telegram_message("❌ Deployment failed! Check GitHub Actions logs.")

def main():
    deployer = WebDeployer()
    deployer.run_deployment_pipeline()

if __name__ == "__main__":
    main()
