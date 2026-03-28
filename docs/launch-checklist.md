# Launch Checklist

## 1. Brand and Content

- [ ] Logo and favicon validated.
- [ ] All training center contact details verified.
- [ ] Course descriptions approved by management.
- [ ] FAQ reviewed and approved.
- [ ] Privacy page validated.
- [ ] Replace placeholder gallery visuals with real training-center photos where possible.

## 2. Forms and Leads

- [ ] Lead form tested on Contact page (success and failure cases).
- [ ] Lead form tested on Inscription page (validation, success, failure).
- [ ] Anti-spam honeypot and rate limit behavior verified.
- [ ] Lead channel configured:
  - [ ] `LEAD_WEBHOOK_URL` and/or
  - [ ] `RESEND_API_KEY` + `LEADS_TO_EMAIL`

## 3. SEO and Analytics

- [ ] `NEXT_PUBLIC_SITE_URL` set to production domain.
- [ ] Unique metadata validated across pages.
- [ ] `sitemap.xml` and `robots.txt` accessible in production.
- [ ] FAQ schema and article schema visible in page source.
- [ ] Google Analytics ID (`NEXT_PUBLIC_GA_ID`) configured.
- [ ] CTA and form events verified in analytics.

## 4. Accessibility and UX

- [ ] Keyboard navigation tested for menus and forms.
- [ ] Focus states visible.
- [ ] Contrast checked on key components.
- [ ] Mobile quick actions (call/WhatsApp/inscription) verified.
- [ ] Floating CTA + WhatsApp buttons verified on desktop.
- [ ] Map and contact links tested on mobile.

## 5. Performance and Deployment

- [ ] Run `npm run lint` with no blocking issues.
- [ ] Run `npm run build` successfully.
- [ ] Verify production pages on mobile and desktop.
- [ ] Configure hosting (Vercel recommended) and environment variables.
- [ ] Post-deploy smoke test completed.
