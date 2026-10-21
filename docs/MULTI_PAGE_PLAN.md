# Multi-Page Conversion Plan

**Project:** Dr Khalil, MBBS, FCPS: clinic website
**Status:** Implemented on 2026-10-21. Differences from the original proposal:
- **Gap #3 (Vercel 404 on refresh):** solved by pre-rendering every route to its own HTML file plus a real `404.html`, instead of a catch-all rewrite. Unknown URLs now return a proper 404 status.
- **Gap #16 (ESLint/Prettier):** not added yet.
- **Gap #12 (unverified claims):** the "24/7 Care" and "2k+ reviews" cards were removed. The hero stats remain and are marked `TODO(client)`.
- **Also added:** a new visual design (warm palette, Fraunces + DM Sans, arch-framed hero), a browser-only chat assistant, and the WhatsApp number 0300 3777887 with the WhatsApp logo.
**Goal:** Convert the current single-page site into a multi-page site with detailed (dummy) content on every page. The client will replace the dummy content later.

---

## 1. The request as dictated

> "This is a single-page website. Convert it into a multi-page website and add detailed content on the other pages. For now the content will be dummy; later we will replace it according to client demand."

## 2. Gaps and loopholes in the request

| # | Gap | Why it matters | Suggested fix |
|---|-----|----------------|---------------|
| 1 | **Which pages?** The request does not list them. | Without a page list, scope and effort are open-ended. | Use the route map in section 3. Confirm it with the client before building. |
| 2 | **"Multi-page" can mean two different things:** separate HTML files, or one React app with routes. | It changes the architecture, SEO and hosting setup. | Use React Router (client-side routes) plus pre-rendering for SEO (see #5). |
| 3 | **Refreshing a page returns 404 on Vercel.** | With client-side routing, `/services` does not exist as a file on the server. | Add a rewrite to `vercel.json` so every route serves `index.html`. |
| 4 | **The navbar uses `#anchor` links** (`#about`, `#services`). | They break once sections become separate pages. | Change them to `<NavLink to="/about">` with an active state. Keep anchors only for in-page jumps. |
| 5 | **SEO per page.** A plain SPA gives every page the same title and description, and some crawlers do not run JS. | Search ranking and link previews suffer. | Add a per-route `<title>`/meta (react-helmet-async), pre-render each route to static HTML at build time, and add `sitemap.xml`. |
| 6 | **The home page would duplicate every other page.** | The same content in two places goes out of sync and hurts SEO. | Make home a summary (e.g. three services, three testimonials) with "View all" links. Reuse the same components with a `limit` prop. |
| 7 | **No plan for dummy content.** | Dummy content scattered across components is hard for the client to replace. | Keep all content in `src/data/*`, one file per page, and mark every placeholder `// TODO(client)`. Use realistic dummy text, not lorem ipsum, so the layout is tested with real lengths. |
| 8 | **No images for the new pages.** | Detail pages look empty without visuals. | Use neutral placeholder images in one folder and keep a shot list of photos to request from the client. |
| 9 | **Scroll position and focus on page change.** | React Router keeps the old scroll position, and screen-reader users are not told that the page changed. | Add a `ScrollToTop` component and move focus to the page `<h1>` on route change. |
| 10 | **No 404 page.** | Wrong URLs show a blank screen. | Add a branded `NotFound` page with links back. |
| 11 | **Medical and legal content is missing.** | Health sites need a disclaimer and a privacy note. Form data goes to WhatsApp. | Add Privacy Policy and Medical Disclaimer pages, plus a consent checkbox on the form. |
| 12 | **Unverified claims on the current site:** "24/7 Care", "4.9 from 2k+ reviews", "12,000+ patients". | Unverifiable claims on a medical site can mislead patients and break platform or PMDC advertising rules. | Mark them as dummy and confirm every number with the client before launch. |
| 13 | **Bundle size grows with every page.** | Mobile users on slow networks wait longer. | Lazy-load each page (`React.lazy` + `Suspense`). |
| 14 | **No page-change animation was specified.** | Instant swaps feel inconsistent with the animated sections. | Fade between pages with `AnimatePresence` (300 ms ease, matching the existing transition rule). |
| 15 | **No version control.** The project folder is not a git repo. | There is no history or rollback, and Vercel's Git integration cannot be used. | Run `git init`, commit the current single-page version as a baseline, and push to GitHub. |
| 16 | **No lint or format tooling.** | Code style drifts as pages are added. | Add ESLint and Prettier. |

## 3. Proposed route map

| Route | Page | Detailed content (dummy for now) |
|-------|------|----------------------------------|
| `/` | Home | Hero, stats, a 3-service preview, why-choose-us, a 3-testimonial preview, CTA band |
| `/about` | About | Full biography, qualifications, career timeline, memberships, awards, conferences and publications, clinic philosophy |
| `/services` | Services | All services as cards, each linking to its detail page |
| `/services/:slug` | Service detail | Overview, symptoms treated, what to expect during the visit, preparation, FAQs, related services, "Book this service" button (pre-fills the form) |
| `/timings` | Clinic timings | Weekly table, holiday notice, how to reach the clinic, what to bring |
| `/testimonials` | Patient reviews | Full grid or slider, review-source note, "Share your experience" CTA |
| `/faq` | FAQ | Accordion grouped by category: booking, fees, reports, follow-up |
| `/blog` + `/blog/:slug` | Health tips *(optional)* | Article list and article page. Good for SEO; confirm with the client. |
| `/gallery` | Clinic gallery *(optional)* | Clinic interior and equipment photos |
| `/appointment` | Book appointment | The existing form, with service pre-selected from the query string (`?service=diabetes-care`) |
| `/contact` | Contact | Map, address, phone, email, contact form |
| `/privacy-policy` | Privacy policy | How data shared via the form and WhatsApp is used |
| `/disclaimer` | Medical disclaimer | "Not a substitute for an in-person consultation" text |
| `*` | 404 | Friendly not-found page |

## 4. Target folder structure

```
src/
  components/
    layout/      Navbar, Footer, Layout (Outlet), ScrollToTop, PageTransition, Seo
    ui/          Section, SectionHeading, PageHero (banner + breadcrumbs), CountUp, Button, Accordion
    home/        Hero, ServicesPreview, TestimonialsPreview, CtaBand
    ...          (existing section components, reused across pages)
  pages/         Home, About, Services, ServiceDetail, Timings, Testimonials, Faq,
                 Appointment, Contact, PrivacyPolicy, Disclaimer, NotFound
  data/
    site.js          doctor info, nav, socials
    services.js      services + detail content (slug, overview, faqs, ...)
    about.js
    testimonials.js
    faq.js
    timings.js
  assets/
  routes.jsx
  App.jsx
```

## 5. Phases

| Phase | Work | Done when |
|-------|------|-----------|
| 0. Baseline | `git init`, commit the current site, add ESLint and Prettier | Clean first commit exists |
| 1. Routing shell | Install `react-router-dom`. Add `Layout`, `ScrollToTop`, page transitions, 404 and the Vercel rewrite. Convert nav links to `NavLink`. | Every route loads, refreshing works, the active link is highlighted |
| 2. Data split | Split `content.js` into per-page data files and add detail fields (slug, overview, FAQs) with `TODO(client)` markers | No component contains hard-coded copy |
| 3. Pages | Build every page in section 3 with a `PageHero` banner and breadcrumbs, reusing the existing sections | Each page has realistic dummy content and works on mobile |
| 4. Home refactor | Turn home into a summary with "View all" links | No duplicated full sections |
| 5. Form upgrades | Pre-fill the service from the query string, add a consent checkbox, link to the privacy policy | Booking from a service page selects that service |
| 6. SEO and a11y | Per-route meta, pre-rendering, `sitemap.xml`, focus management, Lighthouse pass | Lighthouse SEO and Accessibility at 95 or above on key pages |
| 7. Deploy | Vercel via the GitHub integration (preview URL for the client first) | Client approves the preview |

## 6. Questions for the client

1. Which optional pages are wanted: Blog, Gallery, FAQ?
2. Is Urdu needed alongside English? A bilingual site needs RTL layout and roughly doubles the content work.
3. Should consultation fees appear on the site?
4. Does the doctor work at more than one clinic or hospital? If so, timings and locations need a per-location structure.
5. Do patients only book through WhatsApp, or is an online booking system with confirmations or payment needed later?
6. Can the 24/7, rating and patient-count claims be verified? What is the PMDC registration number to display?
7. Are there real patient testimonials, with consent to publish them?
8. Who will supply the photos for the clinic, the services and the gallery?

## 7. Out of scope for now

- A CMS (Sanity, Decap, etc.). The `src/data` structure is designed so that one can be added later without changing components.
- Online payments, patient login, a backend.
