# AL Djisr Centre de Formation Website

Production-ready Next.js vitrine website for AL Djisr Centre de Formation (Bab Ezzouar, Alger).

## Stack

- Next.js App Router (TypeScript)
- Tailwind CSS
- React Hook Form + Zod
- Route Handlers for form submissions
- Metadata API, sitemap, robots, JSON-LD schema

## Features

- Public pages: Home, About, Formations, Course detail, Inscription, Why choose us, Gallery, FAQ, Contact, Blog, Privacy
- Responsive navigation with mobile quick action bar (call / WhatsApp / inscription)
- Global floating conversion actions (WhatsApp + S'inscrire)
- Unified lead form on Contact and Inscription pages with:
  - client + server validation
  - honeypot spam protection
  - rate limiting
  - lead routing (webhook / Resend email / local fallback)
- SEO foundations:
  - page metadata and canonical URLs
  - Open Graph and Twitter metadata
  - sitemap and robots
  - EducationalOrganization/LocalBusiness, Course, FAQ, Breadcrumb, and Article schema
- Analytics hooks for page views, CTA clicks, form submits, menu interactions, gallery interactions, and scroll depth

## Project Structure

- `app/` routes and API endpoints
- `components/` reusable UI, forms, analytics, schema components
- `content/` editable structured content
- `lib/` metadata, validation, security, lead processing helpers
- `public/gallery/` gallery assets
- `docs/content-guide.md` content update guide
- `docs/launch-checklist.md` launch checklist

## Local Development

1. Install dependencies:

```bash
npm install
```

1. Configure environment variables:

```bash
cp .env.example .env.local
```

1. Start the dev server:

```bash
npm run dev
```

1. Open `http://localhost:3000`.

## Environment Variables

Defined in `.env.example`:

- `NEXT_PUBLIC_SITE_URL` production base URL
- `NEXT_PUBLIC_GA_ID` Google Analytics Measurement ID (optional)
- `LEAD_WEBHOOK_URL` lead webhook endpoint (optional)
- `RESEND_API_KEY` Resend API key (optional)
- `LEADS_TO_EMAIL` destination inbox for lead notifications (optional)
- `MAIL_FROM` sender identity for transactional emails

Use at least one external lead channel in production (`LEAD_WEBHOOK_URL` or `RESEND_API_KEY` + `LEADS_TO_EMAIL`).

## Quality Checks

```bash
npm run lint
npm run build
```

## Deployment

Vercel deployment is recommended:

1. Import repository in Vercel.
1. Set all required environment variables.
1. Deploy with default Next.js settings.
1. Validate `/sitemap.xml`.
1. Validate `/robots.txt`.
1. Validate form submissions.
1. Validate analytics events.

For final launch validation, use `docs/launch-checklist.md`.
