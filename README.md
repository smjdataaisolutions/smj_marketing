# SMJ Data & AI Solutions — One Stop Analytics Landing Page

This is the standalone public marketing and beta-signup website for **One Stop Analytics**. It is intentionally separate from the embedded Shopify analytics application and can be developed, deployed, and versioned independently.

## Stack

- Next.js 16.3 (App Router)
- React 19.2
- TypeScript
- Tailwind CSS 4, plus a small custom design system in `app/globals.css`

## Local development

Node.js 20.9 or later is required.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). If port 3000 is occupied, Next.js prints the alternate local URL.

Useful checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## Replacing screenshot placeholders

Export real screenshots as PNG files and place them in `public/screenshots/`:

```text
public/screenshots/store-overview.png
public/screenshots/overview.png
public/screenshots/sales.png
public/screenshots/inventory.png
public/screenshots/orders.png
public/screenshots/products.png
```

The screenshot component tries each expected path and displays a clean labelled placeholder if the image is missing. No fake application screenshots are included.

## Beta form: current behavior

The browser and `POST /api/beta` both validate the required name, business email, and store URL plus optional field limits. The API normalizes the email and store hostname, filters a hidden honeypot, then uses a parameterized query to store the lead in a dedicated PostgreSQL database. The submit button and a server-side 60-second duplicate window protect against accidental repeat submissions.

No beta records are exposed through a public read endpoint. Database access exists only in server-only modules under `lib/`.

## Environment variables

Copy `.env.example` to `.env.local`:

```text
NEXT_PUBLIC_SITE_URL=https://your-domain.example
CONTACT_EMAIL=hello@yourdomain.com
MARKETING_DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/smj_marketing
```

`NEXT_PUBLIC_SITE_URL` is used for absolute social metadata. `CONTACT_EMAIL` is read on the server and displayed in the contact section. `MARKETING_DATABASE_URL` is server-only and must never use a `NEXT_PUBLIC_` prefix. The supplied values are placeholders.

## Beta database setup

The beta landing page must use its own PostgreSQL database and must never point to the Shopify Analytics application database.

1. Connect to PostgreSQL with an administrative account and create the dedicated database:

   ```sql
   CREATE DATABASE smj_marketing;
   ```

2. Configure a database user with only the permissions needed for `smj_marketing`.
3. Copy `.env.example` to `.env.local` and set the dedicated connection URL:

   ```text
   MARKETING_DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/smj_marketing
   ```

4. Run the migration against that URL only:

   ```bash
   psql "postgresql://postgres:jerini10@localhost:5432/smj_marketing" -f database/migrations/001_create_beta_signups.sql
   ```

5. Restart `npm run dev`, submit the beta form, then verify the saved row:

   ```sql
   SELECT
       id,
       name,
       business_email,
       shopify_store_url,
       monthly_orders,
       analytics_challenge,
       status,
       source,
       created_at
   FROM beta_signups
   ORDER BY created_at DESC;
   ```

Additional count and status queries are available in `database/verification-queries.sql`.

The migration creates `beta_signups` with UTC-aware PostgreSQL timestamps, constrained workflow statuses, and indexes for creation time, status, and email lookup. New records default to `status = 'new'` and `source = 'landing_page'`.

## Open Graph / LinkedIn

`public/og-image.svg` is a branded 1200×630 placeholder. For maximum compatibility across social platforms, replace it with a final, optimized 1200×630 PNG and update `app/layout.tsx` to reference `/og-image.png`. Set `NEXT_PUBLIC_SITE_URL` to the public production URL, then use LinkedIn's Post Inspector after deploying.

## Analytics placeholder

No analytics package is installed. Google Analytics, Vercel Analytics, or Plausible can later be added at the root layout level in `app/layout.tsx`. Update the privacy notice and consent behavior as needed before enabling tracking.

## Deploying to Vercel

1. Put this folder in its own Git repository, or import it as the root directory of a project in a monorepo.
2. In Vercel, select **Add New → Project** and import the repository.
3. If using a larger repository, set **Root Directory** to `SMJ Landing Page`.
4. Vercel detects Next.js automatically. Keep the standard build command (`npm run build`).
5. Add all environment variables, including `MARKETING_DATABASE_URL`, in **Project Settings → Environment Variables**. Configure it separately for Production and any Preview environments that should accept test leads.
6. Deploy, set `NEXT_PUBLIC_SITE_URL` to the final URL, and redeploy so social metadata uses the correct base URL.

The deployed application needs a PostgreSQL service that is securely reachable from Vercel. Vercel cannot connect to a database available only on your local computer. Use a managed/private production configuration supported by the database provider; do not expose a local PostgreSQL instance directly to the public internet as a shortcut. Review the provider's connection limits and use a pooled/serverless-compatible endpoint when one is offered.

To attach a custom domain, open the Vercel project and use **Settings → Domains**, then follow Vercel's DNS instructions for the domain provider.

## Legal and production notes

The `/privacy` and `/terms` pages are plainly marked starter documents. They avoid making guarantees, but they are not substitutes for legal review. Before public launch, add infrastructure-level rate limiting or stronger bot protection, database backups, monitoring and failure alerts, credential rotation, a finalized data retention/deletion process, and an operational test of the production database connection.
