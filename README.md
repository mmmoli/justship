# Just Ship - SvelteKit Auth Boilerplate 🚀

**IMPORTANT: This template uses svelte 5 even though it is still in alpha. Svelte 5 is close to release but for now use at your own risk**

### Comes With 🌟

- 🚪 **Login with Github** (using Authjs)
- 📧 **Resend** to send emails
- 💻 **Svelte 5**
- 🎨 **Tailwind CSS** and **shadcn-svelte** for components (with built-in dark mode)
- 📦 **Turso** for the database
- 🛠️ **Drizzle** as ORM
- ✍️ **Superforms 2**
- ☁️ Hosted on **Vercel**

### Getting Started 🚀

#### Local Development

- Run `pnpm install` or 'npm install --force-legacy-deps'
- Run Mailpit for email testing: [Mailpit Instructions](https://github.com/axllent/mailpit)
- add a .env file with a PUBLIC_PROJECT_NAME variable e.g `PUBLIC_PROJECT_NAME="Just Ship"`
- run `npm run migrate` to initialise a local sqlite database
- Start the development server with `npm run dev`
- remove everything at `src/routes/(app)/+page.svelte`

#### Production 🌐

- 🌍 Get a domain name
- 📬 Create a **Resend** account and set up MX records as per [Resend Instructions](https://resend.com/domains)
- 💾 Set up a database with **Turso**: [Turso Setup](https://turso.tech/)
- 🔑 Create an OAuth credential in **Google Cloud**
- 🏗️ Set up a project from this repo on **Vercel**: [link-to-vercel](https://vercel.com)
- 🎯 Point your main domain name to your project on Vercel
- 🔐 create a `.env` at the root level and fill out the environment variables in `env.example`
- ⚙️ Add those environment variables to your project in Vercel

Feel free to contribute or suggest improvements! 🤝
