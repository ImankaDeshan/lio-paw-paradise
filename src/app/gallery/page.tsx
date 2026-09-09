import type { Metadata } from "next";
import GalleryGrid from "@/components/ui/GalleryGrid";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: {
    absolute: "Photo Gallery | Lio's Paw Paradise Dog Boarding Sri Lanka",
  },
  description:
    "Explore photos of dogs enjoying safe garden grounds, fresh meals, peaceful rest areas, and loving one-on-one care at Lio's Paw Paradise in Ahangama, Southern Sri Lanka.",
  alternates: {
    canonical: "https://liospawparadise.com/gallery",
  },
  openGraph: {
    title: "Photo Gallery | Lio's Paw Paradise Dog Boarding Sri Lanka",
    description:
      "Explore photos of dogs enjoying safe garden grounds, fresh meals, peaceful rest areas, and loving one-on-one care at Lio's Paw Paradise in Ahangama, Southern Sri Lanka.",
    url: "https://liospawparadise.com/gallery",
    siteName: business.name,
    images: [
      {
        url: "/images/Lio's Paw Paradise-Image-1.jpg",
        width: 800,
        height: 600,
        alt: "Dogs enjoying garden grounds at Lio's Paw Paradise in Sri Lanka",
      },
    ],
  },
};

export default function GalleryPage() {
  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Lio's Paw Paradise Photo Gallery",
    description:
      "Everyday moments of dogs relaxing, dining, playing, and resting in our safe garden home in Ahangama, Sri Lanka.",
    url: "https://liospawparadise.com/gallery",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />
      <section className="bg-forest-ink pb-12 pt-32 text-cream sm:pb-8 sm:pt-38">
        <div className="container-page">
          <p className="eyebrow text-gold">Gallery</p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-normal leading-tight sm:text-5xl">
            A Glimpse Inside Everyday Life Here
          </h1>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-cream/65">
            Resting, eating, playing, and being looked after — moments from a typical day at {business.name}.
          </p>
        </div>
      </section>

      <section className="container-page py-14 sm:py-18">
        <GalleryGrid />
      </section>
    </>
  );
}
