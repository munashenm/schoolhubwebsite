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


## Application privacy and data deletion

These public marketing-site pages are separate from the existing marketing-only `/privacy/` policy:

- `/application-privacy/`: the SchoolHub SA web and Android application privacy policy, based on the application repository's current policy with remembered-device details.
- `/data-deletion/`: a request form and reference-status checker.

This site is statically exported. **No SchoolHub learner, user or deletion-request database lives here.**
The forms use browser `POST` requests with `Content-Type: application/json` and
`credentials: omit` to the existing `https://app.schoolhubsa.co.za/api/privacy/deletion-requests`
and `/lookup` endpoints. The application backend is the source of truth for validation,
rate limits, identity review, audit logging and request status.

### Required deployment checks

1. Confirm the application repository's privacy CORS update (PR #185) is deployed. The API must
   allow requests from `https://schoolhubsa.co.za` and `https://www.schoolhubsa.co.za`,
   including `OPTIONS` and `POST`, without allowing credentialed cross-origin requests.
2. Merge this website PR only after review. GitHub Actions builds `main` to `cpanel-deploy`;
   cPanel still needs to pull/deploy the resulting static export.
3. Confirm both public URLs return HTTP 200 without login; canonical website may redirect `www`.
4. Confirm the published form can submit using a specially authorised **fictional** account and
   check the reference; avoid creating arbitrary test deletion requests in production. Verify
   rejection from unrelated origins and that no school record is changed.
5. Keep `https://app.schoolhubsa.co.za/application-privacy` and
   `https://app.schoolhubsa.co.za/data-deletion` available until the new pages and form work.
6. Only then change the Play Console URLs. Current deletion fulfilment can deactivate a login,
   revoke passkeys and push subscriptions, but does not permanently erase all eligible account
   data; assess and address applicable Google Play deletion requirements before public release.

No Android package or signing configuration changes are needed for these marketing pages.
