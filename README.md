# MineYourBusiness

Skill Hub — subscription booking & marketplace MVP

Starter scaffold built with Next.js (App Router), TypeScript, Tailwind CSS, Prisma (SQLite local / Postgres-ready), NextAuth stub, and Stripe integration placeholders.

Quick start

1. Clone the repo

   git clone https://github.com/bryonmac84-stack/MineYourBusiness.git
   cd MineYourBusiness

2. Install dependencies

   npm install

3. Create a .env file from .env.example and fill in your local values (DATABASE_URL, NEXTAUTH_SECRET, STRIPE keys)

4. Run the dev server

   npm run dev

Notes
- This scaffold uses SQLite for local development. For production use Postgres and update DATABASE_URL accordingly.
- No secrets or API keys are included in the repo. Add them to environment variables or your deployment provider.


---

Mobile development & cloud workspaces

This project includes devcontainer and Gitpod configs so you can develop from a mobile device or cloud workspace (Codespaces, Gitpod). Below are step-by-step instructions and useful commands.

1) Open the project in a cloud workspace (recommended on mobile)

- GitHub Codespaces
  - From the MineYourBusiness repo page click Code → Codespaces → Create codespace (or click the Codespaces button).
  - Codespaces will build the container using `.devcontainer/devcontainer.json`. The container runs `npm ci && npx prisma generate` after creation.
  - Open the forwarded port 3000 (Ports/Preview) to view the running app in the mobile browser.

- Gitpod
  - Open https://gitpod.io/#https://github.com/bryonmac84-stack/MineYourBusiness in your mobile browser.
  - Gitpod reads `.gitpod.yml` and runs `npm ci` then `npm run dev` automatically.
  - Use the preview panel to open port 3000.

2) Run and preview from a local machine (view on same Wi‑Fi)

- Bind Next.js to all interfaces and start dev server:

  npm run dev:lan

  This runs the dev server bound to 0.0.0.0 so devices on the same LAN can access it.

- Find your machine's LAN IP (macOS: `ifconfig | grep inet`, Windows: `ipconfig`) and open `http://<LAN_IP>:3000` on your mobile device.

3) Quick remote preview using ngrok (works anywhere)

- Install or use the ngrok CLI and forward port 3000:

  npx ngrok http 3000

- Open the HTTPS ngrok URL on your phone to preview the app.

4) Environment variables & secrets

- Do NOT commit real keys. In Codespaces/Gitpod set workspace secrets via the provider UI.
- For local dev, copy `.env.example` → `.env` and set values:
  - NEXTAUTH_URL=http://localhost:3000
  - NEXTAUTH_SECRET=<random string>
  - DATABASE_URL="file:./dev.db" (SQLite local) or a Postgres URL for production
  - STRIPE_SECRET_KEY and STRIPE_WEBHOOK_SECRET for Stripe testing

5) Useful commands (in the workspace terminal)

- Install & generate prisma client:

  npm ci
  npx prisma generate

- Run local dev server (default):

  npm run dev

- Run local dev server bound to LAN (for mobile preview on same network):

  npm run dev:lan

- Run migrations (local dev):

  npm run prisma:migrate

6) Tips for mobile editing

- Increase editor/terminal font sizes in the cloud workspace settings for readability.
- Pin the preview or open the forwarded port in a separate browser tab to test live changes.
- For quick single-file edits, the GitHub mobile app or web UI is faster than a full IDE session.


If you want, I can add a small helper script to open ngrok automatically or add more platform-specific notes (iPad, Android Termux).