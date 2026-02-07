# Telegram Contact Worker

This Cloudflare Worker forwards contact form submissions to a Telegram bot.

## Deploy
1. Create a new Worker in Cloudflare (Dashboard -> Workers & Pages -> Create).
2. Paste `worker/telegram-worker.js` as the Worker code.
3. Add environment variables:
   - `BOT_TOKEN` = your Telegram bot token
   - `CHAT_ID` = your chat ID
   - `ALLOWED_ORIGIN` = `https://msmubassir.github.io` (optional but recommended)
4. Set the Worker route or use the default URL:
   - `https://<your-worker>.workers.dev/contact`

## Update the site
Replace the form action in `src/app/page.tsx` with your Worker URL:
```
action="https://<your-worker>.workers.dev/contact"
```

## Notes
- The `website` field is a honeypot for spam.
- The Worker accepts form-encoded or JSON POST bodies.
