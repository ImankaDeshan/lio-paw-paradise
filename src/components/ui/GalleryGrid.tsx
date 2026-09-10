"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { LuX, LuZoomIn, LuChevronLeft, LuChevronRight } from "react-icons/lu";

export interface GalleryItem {
  src: string;

  category: "all" | "Outdoor" | "With Owners" | "care" | "rest";
  tall?: boolean;
}

const defaultImages: GalleryItem[] = [
  {
    src: "/images/Lio's Paw Paradise-Image-1.jpg",

    category: "With Owners",
    tall: true,
  },
  {
    src: "/images/Lio's Paw Paradise-Image-2.jpg",

    category: "care",
  },
  {
    src: "/images/Lio's Paw Paradise-Image-3.jpg",

    category: "With Owners",
  },
  {
    src: "/images/Lio's Paw Paradise-Image-4.jpg",

    category: "care",
    tall: true,
  },
  {
    src: "/images/Lio's Paw Paradise-Image-5.jpg",

    category: "With Owners",
  },
  {
    src: "/images/Lio's Paw Paradise-Image-6.jpg",

    category: "care",
  },
  {
    src: "/images/Lio's Paw Paradise-Image-7.jpg",

    category: "Outdoor",
  },
  {
    src: "/images/Lio's Paw Paradise-Image-8.jpg",

    category: "care",
    tall: true,
  },
  {
    src: "/images/Lio's Paw Paradise-Image-9.jpg",

    category: "Outdoor",
  },
  {
    src: "/images/Lio's Paw Paradise-Image-10.jpg",

    category: "With Owners",
  },
  {
    src: "/images/Lio's Paw Paradise-Image-11.jpeg",

    category: "rest",
  },

  {
    src: "/images/Lio's Paw Paradise-Image-12.jpeg",

    category: "rest",
  },

  {
    src: "/images/Lio's Paw Paradise-Image-13.jpeg",

    category: "With Owners",
  },

  {
    src: "/images/Lio's Paw Paradise-Image-14.jpeg",

    category: "Outdoor",
  },

  {
    src: "/images/Lio's Paw Paradise-Image-15.jpeg",

    category: "Outdoor",
  },

  {
    src: "/images/Lio's Paw Paradise-Image-16.jpeg",

    category: "Outdoor",
  },




];

const categories = [
  { key: "all", label: "All Moments" },
  { key: "rest", label: "Rest & Relax" },
  { key: "Outdoor", label: "Outdoor & Play" },
  { key: "care", label: "Daily Care" },
  { key: "With Owners", label: "With Owners" },
] as const;

export interface GalleryGridProps {
  images?: GalleryItem[];
}

export default function GalleryGrid({ images = defaultImages }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === "all") return images;
    return images.filter((img) => img.category === activeCategory);
  }, [images, activeCategory]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredImages.length - 1));
  }, [selectedIndex, filteredImages.length]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev !== null && prev < filteredImages.length - 1 ? prev + 1 : 0));
  }, [selectedIndex, filteredImages.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, handlePrev, handleNext]);

  const activeImage = selectedIndex !== null ? filteredImages[selectedIndex] : null;

  return (
    <>
      {/* Category Filter Pills */}
      <div className="reveal mb-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.key;
          return (
            <button
              key={cat.key}
              type="button"
              onClick={() => {
                setActiveCategory(cat.key);
                setSelectedIndex(null);
              }}
              className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300 ${isActive
                ? "border border-gold bg-forest text-gold shadow-sm"
                : "border border-forest/15 bg-cream text-forest-ink/70 hover:border-gold/60 hover:text-forest-ink"
                }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Modern 4-Column Compact Grid */}
      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [column-fill:_balance]">
        {filteredImages.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setSelectedIndex(i)}
            aria-label={`View photo ${i + 1} - ${img.category}`}
            className="group relative mb-4 block w-full overflow-hidden rounded-[18px] border border-forest/10 bg-forest/5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-card focus-visible:outline-2 focus-visible:outline-gold"
          >
            {/* Image */}
            <img
              src={img.src}
              alt={`Lio's Paw Paradise - ${img.category} photo ${i + 1}`}
              loading="lazy"
              className={`w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${img.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
            />

            {/* Modern Glassmorphic Hover Overlay */}
            <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-forest-ink/80 via-transparent to-transparent p-3.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="self-end rounded-full border border-white/20 bg-forest-ink/60 p-2 text-gold backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                <LuZoomIn size={15} />
              </span>
              <div>
                <span className="inline-block rounded-md border border-white/10 bg-forest-ink/75 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold backdrop-blur-md">
                  {img.category}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Modern Lightbox Modal with Prev/Next Controls */}
      {activeImage && (
        <div
          id="lightbox"
          onClick={() => setSelectedIndex(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-forest-ink/90 p-4 backdrop-blur-md animate-fade-in sm:p-6"
        >
          {/* Top Bar: Counter and Close */}
          <div className="absolute left-6 right-6 top-6 flex items-center justify-between">
            <span className="rounded-full border border-cream/15 bg-forest-ink/80 px-3.5 py-1 text-xs font-medium text-cream/80 backdrop-blur-sm">
              {selectedIndex! + 1} / {filteredImages.length}
            </span>
            <button
              type="button"
              id="lightbox-close"
              aria-label="Close modal"
              onClick={() => setSelectedIndex(null)}
              className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 bg-forest-ink/80 text-cream transition-colors hover:border-gold hover:text-gold"
            >
              <LuX size={20} />
            </button>
          </div>

          {/* Previous Button */}
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full border border-cream/15 bg-forest-ink/80 text-cream backdrop-blur-sm transition-all hover:scale-105 hover:border-gold hover:text-gold sm:left-6 sm:h-12 sm:w-12"
          >
            <LuChevronLeft size={22} />
          </button>

          {/* Next Button */}
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full border border-cream/15 bg-forest-ink/80 text-cream backdrop-blur-sm transition-all hover:scale-105 hover:border-gold hover:text-gold sm:right-6 sm:h-12 sm:w-12"
          >
            <LuChevronRight size={22} />
          </button>

          {/* Centered Image Card */}
          <div
            className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-cream/15 bg-forest-ink/60 shadow-soft"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage.src}
              alt={`Lio's Paw Paradise photo ${selectedIndex! + 1}`}
              className="max-h-[82vh] w-full rounded-2xl object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
