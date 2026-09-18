# Grambandhan — Database Setup (Handoff Notes)

The database schema is finished and verified. This is how to get it running on
your own machine so you can build against it.

## What's already done
- Full PostgreSQL schema: 16 tables covering every module in the SRS (users,
  projects, investments, marketplace, insurance, fraud, ratings, transactions,
  notifications, etc.)
- Verified with `psql` — schema deploys cleanly with zero errors.
- Verified with Prisma — introspected successfully, client generated, and a
  live test query (`test-connection.js`) confirmed a real connection works.

## 1. Install PostgreSQL (if you don't have it)
Download from postgresql.org/download and install. Remember the password you
set for the `postgres` user — you'll need it below.

## 2. Create the database
```
psql -U postgres
CREATE DATABASE grambandhan;
\q
```

## 3. Load the schema
```
psql -U postgres -d grambandhan -f grambandhan_schema.sql
```
You should see a stream of `CREATE TYPE` / `CREATE TABLE` / `CREATE INDEX`
lines with no errors. Verify with:
```
psql -U postgres -d grambandhan -c "\dt"
```
You should see all 16 tables listed.

## 4. If you're using Prisma (Node/TypeScript backend)
```
npm install prisma@7 --save-dev
npm install @prisma/client@7 @prisma/adapter-pg pg
npx prisma init --datasource-provider postgresql
```
**Important:** the very latest `prisma` npm version (8.x) is currently a
release candidate — install `prisma@7` and `@prisma/client@7` explicitly, not
the unpinned "latest," or `npx prisma init` will behave differently than
documented.

In `.env`, set:
```
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/grambandhan?schema=public"
```

Then pull the schema into Prisma automatically instead of hand-writing it:
```
npx prisma db pull
npx prisma generate
```

**Generator note:** if `prisma/schema.prisma` has `provider = "prisma-client"`
in the `generator client` block, change it to `provider = "prisma-client-js"`
— the newer default outputs raw TypeScript that needs a build step; the
`-js` version generates directly-runnable JavaScript.

**Prisma 7 also requires an explicit driver adapter** — plain connection
strings alone aren't enough anymore:
```js
const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });
```

## 5. If you're using something else (Rust/Diesel/SeaORM/raw SQL)
The schema is plain, standard PostgreSQL — no Prisma-specific magic in the
tables themselves. Point any tool at the same `grambandhan` database and it
will work identically. For Rust: `diesel print-schema` or
`sea-orm-cli generate entity` will introspect it the same way Prisma did.

## Notes on the schema itself
- Every table has a documented purpose tied to a specific SRS functional
  requirement — see the comments in `grambandhan_schema.sql`.
- Role-specific data (farmer, investor, field agent) lives in separate
  1:1 profile tables linked to a shared `users` table — not duplicated columns.
- Money fields use `NUMERIC`, not floating point — required for financial
  accuracy.
- CHECK constraints (e.g. `rating BETWEEN 0 AND 5`) are enforced at the
  database level regardless of what ORM or language touches it.

Questions → ask Partha, who built and verified this end-to-end tonight.
