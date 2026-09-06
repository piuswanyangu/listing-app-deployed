# StayNia

**Find trusted stays across Kenya**

StayNia is an independently developed accommodation discovery and booking platform, initially focused on Kenya and designed for future expansion across Africa. The repository currently provides a property-browsing application backed by clearly labelled fixture data. It is progressing toward production readiness; it is not yet a production marketplace.

## Current capabilities

- Browse responsive demo property cards.
- Open a property detail page through a stable property ID.
- Consume read-only fixture-backed property APIs.
- Distinguish loading, empty, error, success, and not-found states.
- Preview a local-only contact form that sends no information.
- Run automated API handler tests, TypeScript checks, ESLint, and a production build.

The catalogue is demonstration data. Availability, reservations, user accounts, host verification, payment processing, and completed bookings are not implemented.

## Architecture and technology

StayNia uses the Next.js Pages Router:

```text
pages/                 Page and API route entry points
components/            Layout, property, booking, and reusable UI components
constants/             Fixture property catalogue
interfaces/            Shared TypeScript contracts
styles/                Tailwind CSS global entry point
public/                Static assets
tests/                  API handler tests
```

The browser loads the listing or detail page, requests data from a same-origin Next.js API route, and renders the result with React components. The API reads only from the in-memory fixture catalogue; there is no database or write endpoint.

Major technologies:

- Next.js 16 with the Pages Router
- React 19
- TypeScript in strict mode
- Tailwind CSS 4
- ESLint with Next.js Core Web Vitals rules
- Vitest for API handler tests

## Requirements

- Node.js 20.9 or newer
- npm 10 or newer

Use a current Node.js LTS release for routine development and deployment.

## Local setup

```bash
git clone https://github.com/piuswanyangu/listing-app-deployed.git
cd listing-app-deployed
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The local directory and Git remote retain their existing names. See the repository-renaming instructions below if you control the remote and want them to match the StayNia package name.

## Environment variables

Phase 1 requires no environment variables and no external services. Do not add secrets to the repository. Future integrations should be documented in an `.env.example` containing names and safe placeholders only.

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Serve an existing production build |
| `npm run typecheck` | Run strict TypeScript checks without emitting files |
| `npm run lint` | Run ESLint |
| `npm test` | Run the Vitest suite once |

## Fixture API

### `GET /api/properties`

Returns the complete demo property array.

### `GET /api/properties/:id`

Returns one demo property with the requested stable ID. Unknown IDs return:

```json
{
  "error": "Property not found"
}
```

Both endpoints are read-only. Unsupported methods return HTTP 405 and an `Allow: GET` header.

Example:

```bash
curl http://localhost:3000/api/properties
curl http://localhost:3000/api/properties/luxury-safari-lodge
```

## Testing and verification

Run the checks independently so a failure is visible:

```bash
npm ci
npm audit --omit=dev
npm run typecheck
npm run lint
npm test
npm run build
```

For a manual journey check, start the application, open the listing page, select a property card, and confirm that its detail page matches the corresponding API response.

## Current limitations

- Properties are fixtures and currently include locations outside the initial Kenya focus.
- No database, migrations, or durable storage.
- No authentication, authorization, profiles, or host workflows.
- No availability engine, reservation locking, or booking write API.
- No payment collection; StayNia must eventually use provider-hosted or tokenized payment fields.
- No production monitoring, structured server logging, rate limiting, backups, or recovery process.
- No CI/CD workflow or checked-in infrastructure configuration.
- External fixture images have not yet been migrated to a controlled asset pipeline.

## Production-readiness roadmap

1. Replace or curate fixtures with Kenya-focused, licensed demonstration content.
2. Define property, availability, user, and booking domain models.
3. Add validated persistence with migrations and deterministic seeds.
4. Add authentication and role-based authorization.
5. Implement concurrency-safe availability and idempotent booking creation.
6. Integrate a hosted or tokenized payment provider without handling raw card details.
7. Add integration and end-to-end tests, CI/CD, observability, rate limits, security headers, backups, restore exercises, and rollback procedures.
8. Complete accessibility, privacy, performance, and threat-model reviews.

## Renaming the repository

The npm package is named `staynia`. Renaming the local directory or hosted repository is intentionally outside application code changes.

After renaming the repository to `staynia` in the hosting provider:

```bash
git remote set-url origin https://github.com/piuswanyangu/staynia.git
cd ..
mv listing-app-deployed staynia
cd staynia
git remote -v
```

On PowerShell, replace the `mv` line with:

```powershell
Rename-Item -LiteralPath listing-app-deployed -NewName staynia
```
