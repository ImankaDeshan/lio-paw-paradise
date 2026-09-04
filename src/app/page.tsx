import HeroSection from "@/components/sections/hero/HeroSection";
import TrustFeatures from "@/components/sections/home/TrustFeatures";
import StorySection from "@/components/sections/home/StorySection";
import ServicesTeaser from "@/components/sections/home/ServicesTeaser";
import ProcessTeaser from "@/components/sections/home/ProcessTeaser";
import TestimonialsTeaser from "@/components/sections/home/TestimonialsTeaser";

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

      {/* 5. Process Teaser Section */}
      <ProcessTeaser />

      {/* 6. Testimonials Section */}
      <TestimonialsTeaser />
    </>
  );
}
