<p align="center">
  <img src="public/logo.png" alt="SLS Analytics Dashboard Logo" width="100">
</p>

<h1 align="center">Analytics Dashboard</h1>

<p align="center">
  <i>Simple, fast, privacy-focused, open-source platform to view analytics of all projects in a single dashboard. Built on umami + neon.</i>
</p>

---

## 🚀 Getting Started

This project is built on [umami](https://github.com/umami-software/umami). For general concepts, configuration options, and the tracker API, the upstream documentation at [umami.is/docs](https://umami.is/docs/) applies.

The source code lives at [github.com/sudip0789/Analytics-Dashboard](https://github.com/sudip0789/Analytics-Dashboard) and is a fork of [umami](https://github.com/umami-software/umami).

---

## ☁️ Deploying on Vercel + Neon

This app is deployed on [Vercel](https://vercel.com) with a [Neon](https://neon.tech) serverless PostgreSQL database.

1. Create a PostgreSQL database on Neon and copy its connection string.
2. In your Vercel project, set the following environment variables:

   | Variable | Value |
   | --- | --- |
   | `DATABASE_URL` | Your Neon connection string (e.g. `postgresql://user:password@ep-xxx.neon.tech/dbname?sslmode=require`) |
   | `APP_SECRET` | A random string used to sign tokens |

3. Push to the `master` branch. Vercel automatically builds and deploys the app.

The build step creates the database tables on a first-time install and seeds a default login user.

### First login

On a fresh database, a default user is created:

- **Username:** `admin`
- **Password:** `umami`

> ⚠️ Change this password immediately after your first login (Settings → Profile), or run `pnpm change-password`.

---

## 🛠 Local Development

```bash
pnpm install
# create a .env file with DATABASE_URL (Neon) and APP_SECRET
pnpm dev
```

By default this runs the app on `http://localhost:3000`.

---

## 🙏 Built On

- [umami](https://github.com/umami-software/umami) — the open-source web analytics platform this project is based on (MIT License).
- [Neon](https://neon.tech) — serverless PostgreSQL.
