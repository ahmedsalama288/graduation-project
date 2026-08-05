# Home Page Redesign — "دلتا" (Delta) Direction

Design plan for `src/app/(main-root)/page.tsx` using the `frontend-design` skill.

## Design brief

**Subject:** معهد الدلتا العالي للنظم والمعلومات الإدارية والمحاسبية — a private Egyptian higher institute in Mansoura–Talkha, literally in the Nile Delta. Founded 2000 (ministerial decree 1200), accredited BSc in MIS + Accounting/Auditing, 3 departments. Vision: "منارة للتميز" and "التحول الرقمي".

**Audience:** prospective students + parents (Arabic, RTL). **The page's single job:** establish credibility and modernness at first glance, then guide to the next step.

**The one aesthetic risk:** a **delta motif** — the institute's name is "Delta", and its own vision is a "منارة" (lighthouse) on the Delta's riverside. A small recurring geometric mark of two converging lines (Δ — the rivers meeting the sea, also the symbol for change) anchors the hero and marks every section. It is geometric, so it genuinely fits a "نظم ومعلومات" institute.

## Token system

**Color** (cool, blue-led — avoiding the cream+serif+terracotta, near-black+acid, and broadsheet defaults):

| Token       | Hex       | Usage                                            |
| ----------- | --------- | ------------------------------------------------ |
| `mist`      | `#F5F8FB` | page background (cool near-white, not cream)     |
| `paper`     | `#FFFFFF` | cards                                            |
| `deep-navy` | `#062A44` | hero overlay + numbers band (blue, not near-black)|
| `delta-blue`| `#015994` | primary (existing `main-blue`)                   |
| `river`     | `#016eac` | secondary (existing `light-blue`, navbar/footer) |
| `fertile`   | `#1E7B62` | single muted teal-green accent (Delta farmland), used only for eyebrows, the delta mark, hover states |

**Type** (two faces, deliberate):

- **Reem Kufi** (700/600) — geometric Kufic display; reads "systems/architecture", memorable, distinct from any generic pairing. Used with restraint: hero title + the big stat numerals.
- **Cairo** (existing, 400/600/700) — body + labels, with `tabular-nums` for data.

**Layout rhythm** — hero (full-bleed, no redundant "الصفحة الرئيسية" strip) → "عن المعهد" two-column → "بالأرقام" navy band → "الأسئلة الشائعة" accordion. No 01/02/03 numbering (content isn't a sequence).

**Signature** — the delta mark: tiny glyph before each section eyebrow; hero has the larger mark above the name plus a divider that draws in on load. RTL-mirrored.

## Wireframe

```
HERO  [photo slider, navy gradient]
      (Δ)  معهد الدلتا العالي       Reem Kufi, staggered reveal
           للنظم والمعلومات الإدارية والمحاسبية
           ──╱╲──  delta divider (draws in)
      [تعرف على المعهد]  [تواصل معنا]

عن المعهد   (Δ eyebrow)
  ┌ narrative ────┐   ┌ أهداف (3 Δ-bullets) ┐

بالأرقام    (deep-navy band)
  +5,769 طالب    +10,609 خريج    (Reem Kufi counters, animate in view)

الأسئلة الشائعة  (accordion, one open at a time, chevron + aria)
```

## Motion

Orchestrated hero load (mark → name → divider → CTAs), scroll reveals (existing `AnimatedSection` pattern), the in-view counters, and a new accessible FAQ accordion. `prefers-reduced-motion` respected; `focus-visible` rings added.

## Critique vs the defaults

Checked against the three "AI" looks: no cream/terracotta (cool white/blue), no near-black+acid (deep *navy* + muted teal), no hairline broadsheet (keeps soft rounded cards consistent with the current site). The delta motif is the one bold element; everything else stays quiet. The teal-green is restrained to tiny accents.

## Confirmed decisions

- Remove the "الصفحة الرئيسية" gray header strip from the home page so the hero starts at the top.
- Keep the 3-photo hero slider with its arrows, restyled only.
- Add two more truthful stats to the numbers band: 3 academic departments, 2 accredited degrees (alongside the existing 5,769 students / 10,609 graduates).
- Add the Reem Kufi display font (Google webfont via `next/font`).
- Scope: restyle only the home page; shared gray page components (used on all subpages) stay untouched.

## Files

1. **`tailwind.config.ts`** — add `mist: "#F5F8FB"`, `deep-navy: "#062A44"`, `fertile: "#1E7B62"` (keep `main-blue`, `light-blue`, `black-gray`).
2. **`src/app/ui/fonts.ts`** — add `reemKufi` export (Reem Kufi, weights 600/700, `subsets: ["arabic"]`).
3. **`src/app/ui/main-page/delta-mark.tsx`** *(new)* — SVG Δ component (two converging strokes), accepts `className`; stroke-draw via CSS class. Mirrored for RTL via `dir`/rotation.
4. **`src/app/ui/globals.css`** — `.delta-stroke` draw-in keyframes, `.focus-ring` utility, `@media (prefers-reduced-motion)` overrides (no draw/translate, instant opacity).
5. **`(main-root)/page.tsx`** — drop `MainPageHeader`; compose hero → brief → numbers → FAQ on `bg-mist`; keep `AnimatedSection` reveals.
6. **`hero-images/slider-images.tsx`** — keep 3-photo slider + arrows; add deep-navy gradient overlay, staggered load reveal (Δ mark → "معهد الدلتا العالي" in Reem Kufi → delta divider draw → subtitle → CTAs), primary CTA "تعرف على المعهد" (anchor to عن المعهد) + secondary "تواصل معنا" (`/contact-us`).
7. **`brief-about-us.tsx`** — two-column: narrative paragraph + 3 goals as delta-bullet list; Δ eyebrow "عن المعهد".
8. **`institute-info-section/`** — navy full-width band: 4 stats (5,769 طالب، 10,609 خريج، 3 أقسام أكاديمية، 2 درجة علمية) in Reem Kufi with `tabular-nums`, existing in-view counters kept, delta accents.
9. **`common-questions-section/`** — convert to accordion (new client component), one-open-at-a-time, chevron rotation, `aria-expanded`/`aria-controls`, smooth height; all 4 Q&A kept verbatim.

Shared gray components (used on subpages) stay untouched.
