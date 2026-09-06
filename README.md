# StayNia

**Find trusted stays across Kenya**

StayNia is an independently developed, Kenya-first accommodation-discovery application designed for future expansion across Africa. It is a fixture-backed demonstration progressing toward production readiness—not a live marketplace.

## Current capabilities

- Search, filter and sort fictional Kenyan property fixtures with URL-backed state.
- Browse statically generated property details and deterministic related stays.
- Preview a nightly-rate accommodation subtotal locally.
- Read public product, help and contact information.
- Consume read-only fixture APIs.

All listings, locations, ratings, prices, amenities and availability are sample data. Properties cannot be reserved through StayNia. There are no accounts, hosts, availability checks, writes or payments.

## Architecture and stack

The project uses Next.js 16's Pages Router, React 19, TypeScript, Tailwind CSS 4, Vitest and Playwright. `constants/index.ts` is the single canonical fixture dataset. `lib/properties.ts` exposes it to statically generated pages and read-only API handlers; page components do not copy records.

- `/` and `/property/[id]` use static generation; React supplies filters and quote interactions after hydration.
- Informational pages and the custom 404 are automatically statically rendered.
- `/robots.txt` and `/sitemap.xml` are server-rendered so their canonical origin follows environment configuration.
- Property API routes are server-rendered from the same fixture repository.

## Local setup

Supported runtime: Node.js 20 or newer and npm.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`. On Windows PowerShell, use `Copy-Item .env.example .env.local` instead of `cp`.

### Environment variables

- `NEXT_PUBLIC_SITE_URL`: canonical origin; defaults to `http://localhost:3000` locally.
- `NEXT_PUBLIC_CONTACT_EMAIL`: optional operator-verified mailbox. When absent, no contact link appears and no data is collected.

## Commands

```bash
npm run dev
npm run typecheck
npm run lint
npm test
npm run build
npm start
npm run test:e2e
```

`npm ci` installs Playwright but not its browser binary. Install only Chromium separately before browser tests:

```bash
npx playwright install chromium
npm run test:e2e
```

## Fixture API

- `GET /api/properties` returns every sample property.
- `GET /api/properties/:id` returns one sample property or JSON `404`.
- Other methods return `405` with `Allow: GET`.

These endpoints are read-only and provide no availability, reservation or host information.

## Search-engine policy

Home, About, How it works, Help and Contact are indexable. Fixture detail, draft Privacy and draft Terms pages use `noindex, nofollow`. The sitemap contains only the indexable public routes. No listing structured data is emitted.

## Testing and verification

Vitest covers APIs, discovery, URL state and UTC calendar-day calculations. Playwright covers desktop and mobile Chromium, keyboard navigation, browser history, property navigation, validation and absence of booking submission fields.

## Current limitations and launch blockers

- Fixtures are not real or verified inventory.
- No database, authentication, authorization, host workflow, live availability, reservations or payments exist.
- Privacy and Terms require legal review.
- Monitoring, backups, deployment hardening and operational response are not configured.
- **Image launch blocker:** assets in `public/assets` have unknown provenance. The repository establishes no ownership, licence or commercial permission. Replace them with documented, appropriately licensed assets before public launch; see `docs/fixture-assets.md`.

## Production-readiness roadmap

1. Replace fixture images and content with rights-cleared, verified source material.
2. Complete legal, privacy, accessibility and security reviews.
3. Design authenticated guest and host roles with server-side authorization.
4. Add PostgreSQL models, migrations and auditable property moderation.
5. Introduce live availability and concurrency-safe reservation workflows.
6. Add compliant provider-hosted payments without handling raw card data.
7. Add observability, rate limiting, backups, recovery exercises and CI/CD gates.
