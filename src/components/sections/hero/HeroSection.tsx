"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import HeroSlide from "./HeroSlide";
import HeroContent from "./HeroContent";
import HeroBadges from "./HeroBadges";
import HeroPagination from "./HeroPagination";

const slides = [
  {
    image: "/images/Hero/Image1.jpg",
    eyebrow: "Serendib Paws Retreat",
    title: "A Safe Second Home\nFor Your Beloved Dog",
    subtitle: "Professional dog care while you explore Sri Lanka.",
    cta: true,
  },
  {
    image: "/images/Hero/Image3.jpg",
    eyebrow: "Fed With Care",
    title: "Healthy Meals.\nProper Nutrition.\nHappy Dogs.",
    subtitle: "Fresh, home-style meals matched to your dog's routine.",
    cta: false,
  },
  {
    image: "/images/Hero/Image2.jpg",
    eyebrow: "One-On-One Care",
    title: "Personal Attention\nEvery Day",
    subtitle: "Familiar caregivers who genuinely enjoy their work.",
    cta: false,
  },
  {
    image: "/images/Hero/Image4.jpg",
    eyebrow: "Enclosed Garden Grounds",
    title: "Safe.\nCalm.\nLoved.",
    subtitle: "Dogs relaxing and playing safely, always supervised.",
    cta: false,
  },
];

const DURATION = 6000;

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, DURATION);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const handleSelect = (index: number) => {
    setCurrent(index);
    startTimer();
  };

  return (
    <section
      className="hero-wrapper relative h-[100svh] min-h-[720px] w-full overflow-hidden bg-forest-ink sm:min-h-[640px]"
      aria-roledescription="carousel"
      aria-label="Serendib Paws Retreat highlights"
    >
      {/* Background Track & Slides */}
      <div id="hero-track" className="hero-track absolute inset-0">
        {slides.map((slide, i) => (
          <HeroSlide
            key={i}
            image={slide.image}
            index={i}
            isActive={i === current}
          />
        ))}
      </div>

      {/* Content & Feature Badges Layer */}
      <div className="hero-content-layer relative z-10 flex h-full items-end">
        <div className="container-page w-full pb-24 pt-32 sm:pb-32 sm:pt-40">
          <div className="max-w-2xl">
            {slides.map((slide, i) => (
              <HeroContent
                key={i}
                eyebrow={slide.eyebrow}
                title={slide.title}
                subtitle={slide.subtitle}
                cta={slide.cta}
                index={i}
                isActive={i === current}
              />
            ))}
          </div>

          <HeroBadges />
        </div>
      </div>

      {/* Pagination Controls */}
      <HeroPagination
        count={slides.length}
        currentIndex={current}
        onSelect={handleSelect}
      />
    </section>
  );
}
