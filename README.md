# Grambandhan — Vanilla HTML/CSS/JS Build

## ⚠️ Read this first — an important scope note

Your dev guide recommends **React + Node/Express + Prisma + PostgreSQL** as the real
tech stack. You asked for "individual HTML, CSS, JavaScript" files instead, which
means **no build tooling and no real server/database**. Those two things can't both
be true at once, so here's exactly what I built and what trade-off that implies:

- This is a **fully client-side simulation**. There is no Node server, no Express API,
  and no PostgreSQL database. Every "backend" operation (auth, CRUD, payments,
  approvals) is implemented in plain JavaScript and persisted to the browser's
  **localStorage** (`js/db.js`), which stands in for the database from section 3 of
  your guide.
- Because everything runs in the browser with no server, there is **no real security**:
  passwords are only lightly obfuscated (not bcrypt-hashed), there's no JWT, and
  anyone with browser dev tools can see or edit the data. This is fine for a lab
  demo, but say so explicitly in your report — don't imply it's production-secure.
- Data is **per-browser**. If you demo on a different computer or clear browser
  storage, it reseeds from scratch (5 demo users, 4 projects, 3 products — see below).
- "File uploads" (KYC docs, project images, product photos) are **simulated** —
  the file picker appears but nothing is actually stored or displayed, consistent
  with how your guide already flags payments and AI risk scoring as simulated.
- Charts on the SDG dashboard use Chart.js loaded from a CDN — this needs an internet
  connection the first time each browser loads that page.

If your rubric specifically requires the React/Node/Prisma/Postgres stack from
section 1 of the guide, this build **does not satisfy that** — it satisfies "runs from
plain HTML/CSS/JS files with no build step," which is what you asked for instead.
Tell me which one you actually need and I can adjust.

## How to run it

No install, no build step. Two options:

1. **Simplest:** double-click `index.html` to open it directly in a browser.
2. **More robust** (avoids occasional browser file:// quirks): serve the folder locally, e.g.
   `cd grambandhan && python3 -m http.server 8000` then visit `http://localhost:8000`.

## Demo accounts (password for all: `password123`)

| Role | Email |
|---|---|
| Admin | admin@grambandhan.bd |
| Farmer | karim@grambandhan.bd |
| Farmer (women-led, unverified) | mizanur@grambandhan.bd |
| Investor | nusrat@grambandhan.bd |
| Field Agent | farzana@grambandhan.bd |
| Buyer | shamsul@grambandhan.bd |

You can also register a new account from `register.html`.

## Feature checklist (mapped to guide section 2)

| # | Feature | Where |
|---|---|---|
| 1 | Auth & registration, role selection | `login.html`, `register.html`, `js/auth.js` |
| 2 | Profile management, KYC upload (simulated) | `profile.html` |
| 3 | Role-based dashboards | `dashboard.html`, `js/dashboard.js` |
| 4 | Project listing (farmer CRUD) | `project-form.html`, `js/project-form.js` |
| 5 | Admin project approval | `admin.html` (Approvals tab), `js/admin.js` |
| 6 | Project browsing + filters | `projects.html`, `js/projects.js` |
| 7 | Investment flow (simulated payment) | `projects.html` invest modal |
| 8 | Investor portfolio | `portfolio.html`, `js/portfolio.js` |
| 9 | Progress tracking timeline | `projects.html` progress tab |
| 10 | Field agent verification | `projects.html` (Verify button), agent dashboard |
| 11 | Fraud protection / flag queue | `projects.html` (Flag button), `admin.html` (Fraud tab) |
| 12 | Ratings & feedback | `projects.html` rating modal, `profile.html` reputation |
| 13 | Product listing | `product-form.html` |
| 14 | Marketplace browse/purchase | `marketplace.html`, `js/marketplace.js`, `js/cart.js` |
| 15 | Order management | `orders.html` |
| 16 | AI-based (rule-based) risk suggestion | `js/risk.js` — documented as a heuristic, not ML |
| 17 | Insurance & claims | Invest modal opt-in + `portfolio.html` (Insurance tab) |
| 18 | Digital payments (simulated) | Invest/checkout flows + `portfolio.html` (Transactions tab) |
| 19 | Notifications | Bell icon in top bar, `js/notifications.js` |
| 20 | Women empowerment tag/filter | Project & marketplace filters, women-led badges |
| 21 | SDG / impact dashboard | `sdg.html` |
| 22 | Admin panel | `admin.html` (all tabs) |

## Known limitations / honest caveats

- No real backend, no real payment gateway, no real file storage — see the note at
  the top of this file.
- Risk scoring is a transparent weighted heuristic (documented in `js/risk.js`), not
  a trained model — this matches your guide's own recommendation for the lab scope.
- This hasn't been tested across every browser; built and checked in a Chromium-based
  environment. If something looks off in Safari/Firefox, it's most likely a
  `backdrop-filter` or `localStorage` quirk worth a quick check.
- No automated test suite — for a lab report, you'll want to write your own test
  cases against this checklist per your rubric's expectations.
