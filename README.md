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

## Deployment (cPanel)

This site builds as a **static export** for Apache/cPanel hosting.

### Automatic build

Pushing to `main` runs GitHub Actions, which builds the site and publishes the static files to the **`cpanel-deploy`** branch.

### cPanel Git pull

1. In cPanel → **Git Version Control**, clone (or open) this repository into a folder such as `schoolhubwebsite`.
2. Set the deployment branch to **`cpanel-deploy`** (not `main`).
3. Deploy / pull into the document root for **schoolhubsa.co.za** (usually `public_html` or the domain’s addon domain folder).
4. Confirm `.htaccess` is present in the web root after deploy.

Manual local static build:

```bash
npm run build
# Output is in /out — upload contents to the domain document root
```
