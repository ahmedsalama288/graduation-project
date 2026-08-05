# AGENTS.md

Arabic RTL website for "معهد الدلتا العالي" (Delta Institute for Management & Accounting Information Systems). Next.js 16 App Router + TypeScript (strict) + Tailwind 3.

## Commands

- `npm run dev` — dev server on :3000
- `npm run build` / `npm start` — production (Turbopack is the default for dev and build)
- `npm run lint` — ESLint CLI flat config (`eslint.config.mjs`); no formatter configured
- No test runner, no CI, no env files. Typecheck manually with `npx tsc --noEmit` (run `npx next typegen` first so generated types exist).

## Structure

- Routes live in route groups: `(main-root)` holds only `/`; `(main-navbar-links)/*` holds every navbar page (one `page.tsx` per route, no group layout). Root layout is `src/app/layout.tsx` (`<html lang="ar" dir="rtl">`, Cairo font, navbar + footer).
- `src/app/lib/constants.ts` is the content source of truth: `navbarLinks`, `instituteFloorsStructure`, `academicLeadersInfo`, etc. `src/app/lib/definitions.ts` has the types. Page components consume this data — update content there, not in pages.
- `src/app/lib/data.ts`, `lib/actions.ts`, `database/*.sql` are empty placeholders — do not assume a backend or DB exists. Nothing uses server actions.
- Shared UI is under `src/app/ui/` (shared-ui, root-layout, main-page, per-section folders). All copy and route names are Arabic.

## Gotchas

- Images are imported as modules through barrel files (`src/app/assets/*.ts`) that re-export from `@public/...` (path alias `@public/*` → `./public/*` in `tsconfig.json`). Paths include Arabic filenames and `.webp`/`.avif`/`.jpeg`. Keep this pattern; `@/public/...` will not resolve. Some pages import directly from `@public/...`.
- `next-env.d.ts` and `.next/` are gitignored and generated — run `npm run dev`, `build`, or `npx next typegen` before typechecking. `.next/types/**/*.ts` and `.next/dev/types/**/*.ts` are both in tsconfig `include` (dev and build write separate type dirs).
- `public/pdf/` is served statically; several pages pass `pdfHref=""` (placeholders awaiting files) — leave them.
- Contact-us map is Google Maps loaded via `next/dynamic` with `ssr: false` inside the client wrapper `src/app/ui/contact-us/institute-map-dynamic.tsx` (Server Components can't use `ssr: false`).
- Turbopack is the default bundler for dev and build. `next/image` quality props are constrained by `images.qualities: [30, 60, 70, 80, 85, 90, 100]` in `next.config.mjs` — add a value there before using a new `quality` prop. In dev, Turbopack warns it won't re-encode AVIF static imports (they're emitted as-is) — benign.
- Custom Tailwind colors in `tailwind.config.ts`: `main-blue` (#015994), `light-blue` (#016eac), `black-gray` (#1f1f1f). Reuse them rather than hex literals.
- Path aliases `@/*` → `./src/*` and `@public/*` → `./public/*`; utils `cn()` (clsx + tailwind-merge) is in `src/app/lib/utils.ts`.
