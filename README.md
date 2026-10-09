# Cleanest — Fresh & Friendly

A separate website redesign concept for **Cleanest Cleaning & Garden Care**, named **Fresh & Friendly** (Concept 2). This is a client-presentation preview, not the current official website. The official website is [cleanest.co.za](https://www.cleanest.co.za/). Concept 1 is a separate project and repository. The selected demo is hosted separately at https://cleanest-fresh-friendly.vercel.app; the official website is unchanged.

## Run

Node 22.12+; `npm ci`, then `npm run dev` (port 5183). `npm run build` checks TypeScript and creates `dist`. `npm run preview` uses port 4183.

To run `npm run test:ui`, first start a local server and set `SITE_URL` to its address. Tests use headless Edge; `UI_BROWSER_CHANNEL` can choose another installed channel. `npm run test:facts` verifies retained facts against locally archived source pages, or public source pages when archives are absent. `.qa` contains ignored screenshots.

## Design and editing

The new design uses strong blue, fresh green, pale blue and warm cream, bold sans-serif typography, dominant photography, asymmetric service tiles, a team introduction, varied gallery sizes, Johannesburg service coverage, one sourced testimonial, and an integrated quote/contact panel. Mobile call/WhatsApp/quote links live in the sticky header instead of a floating widget.

- `src/data.ts`: verified contacts, services, locations and reviews.
- `src/components.tsx`: reusable logo, headings, photos and CTAs.
- `src/QuoteForm.tsx`: local-only enquiry review and photo selection.
- `src/main.tsx`: homepage sections and interactions.
- `src/styles.css`: the independent Concept 2 design system.

No form request is sent. Photos stay on the device; no backend/upload storage exists. Real phone, email, WhatsApp and Facebook links open verified business channels. The gallery contains real source-site service photos, presented without claiming verified before/after pairs. Empty before/after preview slots have been removed for client presentation.

## Demo protections

HTML uses `noindex, nofollow, noarchive`. `robots.txt` disallows crawling. Prepared `vercel.json` adds X-Robots-Tag to every path, on the existing demo deployment. Noindex is not access control; configure host access protection for a private demo link. No official-site canonical or active business JSON-LD is added. The raster social preview includes the client-supplied logo and approved experience wording.

## Client confirmation

Experience wording, the new logo and the cleaning service list were supplied directly by Simone and Jason on 9 October 2026. Before official launch, confirm exact coverage, contact details/hours, testimonial authenticity and publication permission, image rights, high-resolution logo, matched before/after photos with captions, and final enquiry recipients/privacy/upload/retention requirements. See `research/CONTENT-SOURCES.md` for evidence and image provenance.

## Import into Vercel when authorised

The existing Vercel project imports `izelbia1-lgtm/cleanest-fresh-friendly`. Use the `main` branch, Vite framework, repository root, build command `npm run build`, and output directory `dist`. No environment variables are required for the demo. Pushes to main deploy through the existing integration; do not create an additional project.

Preserve the noindex settings and use hosting access protection if the demo link must be private. Do not connect or change the client's domain, DNS or existing hosting.

Business photos, branding and testimonials are attributable to Cleanest; repository publication does not grant reuse rights to those assets.


## Current service area

The client confirmed on 8 October 2026 that Cleanest serves Johannesburg only. This supersedes older location information on the official source website. Forms, metadata, service areas and testimonial content reflect that instruction.
