# Lio's Paw Paradise — Website & SEO Architecture

A modern, responsive, and SEO-optimized website for **Lio's Paw Paradise** — a premier dog boarding, dog housing, daycare, and pet care retreat based in **Ahangama, Galle, Southern Province, Sri Lanka**.

Built with **Next.js 16 (App Router) + TypeScript + Tailwind CSS**.

---

## 1. Business Profile & Contact Details

- **Business Name:** Lio's Paw Paradise
- **Location:** No. 75, Piyamis, Dikkumbura, Ahangama, Sri Lanka
- **Primary Phone / WhatsApp:** +94 71 636 8726 (`https://wa.me/94716368726`)
- **Emergency Phone:** +94 71 636 8726
- **Email:** contact@liospawparadise.com
- **Website:** [https://liospawparadise.com](https://liospawparadise.com)
- **Primary Service Areas:** Galle, Matara, Ahangama, Weligama, Unawatuna, Mirissa, and Southern Province, Sri Lanka.

---

## 2. SEO & Technical Architecture

- **Metadata & Canonicals:** Complete metadataBase configuration (`https://liospawparadise.com`) with canonical links, OpenGraph, and Twitter cards across all routes.
- **Dynamic Sitemap:** `src/app/sitemap.ts` generates `/sitemap.xml` with priority weighting for all indexable pages.
- **Robots Rules:** `src/app/robots.ts` serves `/robots.txt` pointing to the sitemap and allowing full crawlability.
- **Schema.org Structured Data:**
  - `@type: "LocalBusiness"` on `src/app/layout.tsx` (address, GeoCoordinates, hours, service area, and catalog).
  - `@type: "FAQPage"` on Home Page (`src/components/sections/home/FAQSection.tsx`).
  - `@type: "ItemList"` with `@type: "Service"` on `/services`.
  - `@type: "HowTo"` on `/dog-care-process`.
  - `@type: "ContactPage"` on `/contact`.
  - `@type: "ImageGallery"` on `/gallery`.
- **Heading Hierarchy:** Single, prominent `<h1>` per page, followed by semantic `<h2>` and `<h3>` tags.
- **Image SEO:** All images feature descriptive, keyword-rich `alt` attributes and responsive sizing.
- **Custom 404 Page:** `src/app/not-found.tsx` delivers a branded experience with internal navigation paths.

---

## 3. Local Development & Build

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production (static generation)
npm run build

# 4. Start production server
npm run start
```

---

## 4. Single Source of Truth: `src/config/business.ts`

All business details, phone numbers, addresses, services, FAQs, and SEO configuration defaults are centrally managed in `src/config/business.ts`. Updating this file updates the entire site upon build.
