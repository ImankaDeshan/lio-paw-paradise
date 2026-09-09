import type { Metadata } from "next";
import HeroSection from "@/components/sections/hero/HeroSection";
import TrustFeatures from "@/components/sections/home/TrustFeatures";
import StorySection from "@/components/sections/home/StorySection";
import ServicesTeaser from "@/components/sections/home/ServicesTeaser";
import ServiceAreasSection from "@/components/sections/home/ServiceAreasSection";
import ProcessTeaser from "@/components/sections/home/ProcessTeaser";
import FAQSection from "@/components/sections/home/FAQSection";
import TestimonialsTeaser from "@/components/sections/home/TestimonialsTeaser";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: "Dog Boarding & Pet Care in Ahangama, Galle & Matara | Lio's Paw Paradise",
  description: business.seo.defaultDescription,
  alternates: {
    canonical: "https://liospawparadise.com",
  },
  openGraph: {
    title: "Dog Boarding & Pet Care in Ahangama, Galle & Matara | Lio's Paw Paradise",
    description: business.seo.defaultDescription,
    url: "https://liospawparadise.com",
    siteName: business.name,
    images: [
      {
        url: "/images/Hero/Image1.jpg",
        width: 1200,
        height: 630,
        alt: "Happy dog relaxing at Lio's Paw Paradise in Ahangama, Sri Lanka",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Page Section */}
      <HeroSection />

      {/* 2. Trust Highlights Section */}
      <TrustFeatures />

      {/* 3. About / Story Section */}
      <StorySection />

      {/* 4. Services Showcase Section */}
      <ServicesTeaser />

      {/* 5. Local Service Areas & Regional Access */}
      <ServiceAreasSection />

      {/* 6. Process Teaser Section */}
      <ProcessTeaser />

      {/* 7. Frequently Asked Questions & FAQ Schema */}
      <FAQSection />

      {/* 8. Testimonials Section */}
      <TestimonialsTeaser />
    </>
  );
}

