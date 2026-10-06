# Cleanest — Fresh & Friendly

A separate website redesign concept for **Cleanest Cleaning & Garden Care**, named **Fresh & Friendly** (Concept 2). This is a client-presentation preview, not the current official website. The official website is [cleanest.co.za](https://www.cleanest.co.za/). Concept 1 is a separate project and repository. No Vercel deployment has been made for this concept.

## Run

Node 22.12+; `npm ci`, then `npm run dev` (port 5183). `npm run build` checks TypeScript and creates `dist`. `npm run preview` uses port 4183.

To run `npm run test:ui`, first start a local server and set `SITE_URL` to its address. Tests use headless Edge; `UI_BROWSER_CHANNEL` can choose another installed channel. `npm run test:facts` verifies retained facts against locally archived source pages, or public source pages when archives are absent. `.qa` contains ignored screenshots.

## Design and editing

The new design uses strong blue, fresh green, pale blue and warm cream, bold sans-serif typography, dominant photography, asymmetric service tiles, a team introduction, varied gallery sizes, tabbed service areas, one rotating testimonial, and an integrated quote/contact panel. Mobile call/WhatsApp/quote links live in the sticky header instead of a floating widget.

- `src/data.ts`: verified contacts, services, locations and reviews.
- `src/components.tsx`: reusable logo, headings, photos and CTAs.
- `src/QuoteForm.tsx`: local-only enquiry review and photo selection.
- `src/main.tsx`: homepage sections and interactions.
- `src/styles.css`: the independent Concept 2 design system.

No form request is sent. Photos stay on the device; no backend/upload storage exists. Real phone, email, WhatsApp and Facebook links open verified business channels. The gallery contains real source-site service photos, presented without claiming verified before/after pairs. Empty before/after preview slots have been removed for client presentation.

## Demo protections

HTML uses `noindex, nofollow, noarchive`. `robots.txt` disallows crawling. Prepared `vercel.json` adds X-Robots-Tag to every path, should deployment later be authorised. Noindex is not access control; configure host access protection for a private demo link. No official-site canonical or active business JSON-LD is added. The SVG social preview can be replaced by an approved raster version for platforms that require one after a deployment URL is known.

## Client confirmation

Confirm current experience wording, branch-specific services and exact coverage, contact details/hours, testimonial authenticity and publication permission, image rights, high-resolution logo, matched before/after photos with captions, and final enquiry recipients/privacy/upload/retention requirements. See `research/CONTENT-SOURCES.md` for evidence and image provenance.

## Import into Vercel when authorised

Create a new Vercel project and import `izelbia1-lgtm/cleanest-fresh-friendly`. Use the `main` branch, Vite framework, repository root, build command `npm run build`, and output directory `dist`. No environment variables are required for the demo. Review the settings before choosing Deploy; deployment is a separate step from publishing this repository.

Preserve the noindex settings and use hosting access protection if the demo link must be private. Do not connect or change the client's domain, DNS or existing hosting.

Business photos, branding and testimonials are attributable to Cleanest; repository publication does not grant reuse rights to those assets.

