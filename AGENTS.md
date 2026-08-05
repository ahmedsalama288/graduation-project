# AGENTS.md

Arabic RTL website for "معهد الدلتا العالي" (Delta Institute for Management & Accounting Information Systems). Next.js 16 App Router + TypeScript (strict) + Tailwind 4.

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
- Tailwind v4 is CSS-first (`@import "tailwindcss"` in `src/app/ui/globals.css`); there is no `tailwind.config.ts`. Custom brand colors are `@theme` tokens in globals.css: `main-blue` (#015994), `light-blue` (#016eac), `black-gray` (#1f1f1f), `mist` (#F5F8FB), `deep-navy` (#062A44), `fertile` (#1E7B62). Reuse them rather than hex literals.
- shadcn/ui is installed (`components.json`, aliases `ui`/`components` → `@/app/ui/components`, `utils` → `@/app/lib/utils`, `hooks` → `@/app/lib/hooks`). Components live in `src/app/ui/components/`. RTL is on, base is radix, style is radix-nova. Globals.css keeps the shadcn `:root`/`.dark` oklch tokens and imports `tw-animate-css` + `shadcn/tailwind.css` (needed for `data-open:`/`data-closed:` variants and accordion keyframes).
- Path aliases `@/*` → `./src/*` and `@public/*` → `./public/*`; utils `cn()` (clsx + tailwind-merge) is in `src/app/lib/utils.ts`.
