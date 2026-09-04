import type { Metadata } from "next";
import GalleryGrid from "@/components/ui/GalleryGrid";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: "Gallery",
  description: `A look inside ${business.name} — dogs relaxing, eating, playing and being cared for in a tropical Sri Lankan garden home.`,
};

export default function GalleryPage() {
  return (
    <>
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
