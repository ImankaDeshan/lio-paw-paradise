# Serendib Paws Retreat — Website

A premium, fully static website for a Sri Lankan dog-care business serving travellers. Built with **Astro + TypeScript + Tailwind CSS**. No backend, no database, no fake booking system — every "Request Dog Care" action opens WhatsApp or email so the owner can confirm manually.

---

## 1. How to run it (local development)

You need **Node.js 18+** installed (check with `node -v`).

```bash
# 1. Install dependencies
npm install

# 2. Start the local dev server
npm run dev
```

Then open the URL shown in the terminal (usually **http://localhost:4321**). The site live-reloads as you edit files.

---

## 2. How to build for production

```bash
npm run build
```

This creates a fully static site in the `dist/` folder — plain HTML, CSS and JS, ready to upload anywhere.

To preview that production build locally before deploying:

```bash
npm run preview
```

---

## 3. How to deploy

The `dist/` folder works on any static host. Pick one:

- **Netlify** — drag the `dist/` folder into Netlify's deploy UI, or connect the Git repo with build command `npm run build` and publish directory `dist`.
- **Vercel** — import the repo, framework preset "Astro" is auto-detected, no extra config needed.
- **GitHub Pages** — run `npm run build`, then push the contents of `dist/` to a `gh-pages` branch (or use the official `astro/actions` GitHub Action).
- **Normal shared hosting (cPanel, etc.)** — run `npm run build` and upload everything inside `dist/` to your `public_html` (or equivalent) folder via FTP.

---

## 4. The one file you'll edit most: `src/config/business.ts`

All business details live in a single file:

- Phone number, WhatsApp number, email
- Address, opening hours, emergency contact
- Social media links
- Services, pricing text
- Testimonials and the 5-step care process

**Edit `src/config/business.ts`, save, then re-run `npm run build`.** Every page (Home, Services, Contact, Footer, etc.) reads from this file automatically — you never need to hunt through individual pages to update a phone number or price.

---

## 5. Project structure

```
src/
  components/     → Navbar, Footer, HeroCarousel, ServiceCard, TestimonialCard,
                     GalleryGrid, ContactCTA, FeatureSection
  pages/          → index, services, dog-care-process, food-and-health,
                     gallery, about, contact  (each maps 1:1 to a URL)
  layouts/        → Layout.astro (shared <head>, nav, footer, SEO tags)
  config/         → business.ts  (single source of truth — see above)
  styles/         → global.css (Tailwind + design tokens)
public/
  images/         → all image assets (see below)
scripts/
  generate-images.mjs → regenerates the placeholder illustrations
```

---

## 6. Replacing the placeholder images with real photography

Because this build has no internet/photo access, `public/images/*.svg` currently
contains **branded illustrated placeholders** (using the site's forest-green /
gold / beige palette, paw prints and garden motifs) instead of real photos —
so the site looks finished and on-brand out of the box, not broken.

**To use real photography** (strongly recommended for launch):

1. Shoot or source real photos matching the style prompt at the bottom of this file.
2. Save them into `public/images/` — you can keep the same filenames and just
   change the extension (e.g. `scene-garden.jpg` instead of `scene-garden.svg`),
   or use new filenames.
3. Update the `src` attributes referencing those files in:
   - `src/components/HeroCarousel.astro` (4 hero slides)
   - `src/components/GalleryGrid.astro` (gallery photos)
   - `src/pages/*.astro` (each page's supporting images)
4. Re-run `npm run build`.

**Suggested photography direction** (matches the premium eco-resort brand):
Realistic, natural-light photography of Sri Lankan dogs in a tropical garden
setting — dogs relaxing, eating fresh meals, being attended to by a caregiver,
playing safely — warm tones, calm and trustworthy mood, high-end pet resort
advertisement style.

---

## 7. Editing colors, fonts or layout

- Colors and fonts are defined once in `tailwind.config.mjs` (`forest`, `gold`, `beige`, `cream` + `Fraunces`/`Manrope` fonts) and used everywhere via Tailwind utility classes — change them there to restyle the whole site.
- Global styles (buttons, cards, glass effect) live in `src/styles/global.css` under `@layer components`.

---

## 8. Notes on how "Request Dog Care" works

There is no booking backend. Every call-to-action does one of two things:

- **WhatsApp** — opens `https://wa.me/<number>?text=<prefilled message>` in a new tab.
- **Email** — opens a `mailto:` link with a prefilled subject/body.

The Contact page's inquiry form collects the visitor's details (name, phone,
dog's name/breed, travel dates, food & medical notes, message) purely in the
browser with plain JavaScript, formats them into a message, and hands off to
WhatsApp or email — nothing is stored, submitted to a server, or auto-confirmed.
