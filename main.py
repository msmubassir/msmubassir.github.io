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
            
            # Create redirect index.html for GitHub Pages
            self.create_redirect_index()
            return True
            
        except subprocess.CalledProcessError as e:
            print(f"Build failed: {e}")
            print(f"Error output: {e.stderr}")
            self.send_telegram_message(f"❌ Build failed: {e.stderr}")
            return False
    
    def create_redirect_index(self):
        """Create index.html that redirects to the main app"""
        redirect_html = '''<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="refresh" content="0; url=/#/" />
    <title>Redirecting to Flet App</title>
    <script>
        window.location.href = "/#/";
    </script>
</head>
<body>
    <p>Redirecting to application... <a href="/#/">Click here if not redirected</a></p>
</body>
</html>'''
        
        with open('build/web/index.html', 'w') as f:
            f.write(redirect_html)
        print("Created redirect index.html")
    
    def check_github_pages_status(self):
        """Check if GitHub Pages is working"""
        url = "https://msmubassir.github.io/"
        try:
            response = requests.get(url, timeout=10)
            print(f"GitHub Pages status: {response.status_code}")
            return response.status_code == 200
        except requests.RequestException as e:
            print(f"Error checking GitHub Pages: {e}")
            return False
    
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
    
    def troubleshoot_blank_page(self):
        """Provide troubleshooting steps for blank page issue"""
        print("\n🔧 Troubleshooting blank page issue:")
        print("1. Check if GitHub Pages is enabled in repository settings")
        print("2. Verify the build folder structure in GitHub Actions artifacts")
        print("3. Try accessing: https://msmubassir.github.io/#/")
        print("4. Check browser console for JavaScript errors")
        print("5. Ensure all files are properly deployed")
    
    def run_deployment_pipeline(self):
        """Run complete deployment pipeline"""
        self.send_telegram_message("🚀 Starting deployment process...")
        
        if self.build_web_app():
            success_message = """✅ Build completed successfully!

📦 Deployment to GitHub Pages initiated
🌐 Site URL: https://msmubassir.github.io/
🔗 Direct app link: https://msmubassir.github.io/#/

💡 If you see a blank page:
1. Check browser console for errors
2. Try the direct link above
3. Wait a few minutes for deployment to complete"""
            
            self.send_telegram_message(success_message)
            print("Deployment process completed!")
            self.troubleshoot_blank_page()
        else:
            self.send_telegram_message("❌ Deployment failed! Check GitHub Actions logs.")

def main():
    deployer = WebDeployer()
    deployer.run_deployment_pipeline()

if __name__ == "__main__":
    main()
