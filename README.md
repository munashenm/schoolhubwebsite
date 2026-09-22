# SchoolHub SA Marketing Website

Official product/marketing website for **SchoolHub SA**.

- Marketing site: https://schoolhubsa.co.za  
- Application: https://app.schoolhubsa.co.za  
- Developed by [Cyber Developers](https://www.cyberdevelopers.co.za)

This repository is **not** the SchoolHub application.

## Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

Central product/config lives in `src/lib/config.ts`:

- Application & company URLs
- Contact emails
- SA-SAMS wording / status
- Pricing enablement and plan amounts

Set `pricing.enabled` to `true` only when commercial rates are confirmed.

## Screenshots

Add real SchoolHub UI captures to:

- `public/images/screenshots/`
- `public/images/platform/`
- `public/images/branding/`

Then pass `src` into the `ProductScreenshot` component.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Deployment

Build for production with `npm run build`. Deploy the Next.js app to your preferred host and point `schoolhubsa.co.za` at it.
