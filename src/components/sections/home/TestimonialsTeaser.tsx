import TestimonialCard from "@/components/ui/TestimonialCard";
import { business } from "@/config/business";

export default function TestimonialsTeaser() {
  return (
    <section className="bg-forest/[0.04] py-24 sm:py-28">
      <div className="container-page">
        <div className="reveal mx-auto max-w-xl text-center">
          <p className="eyebrow text-gold-deep">Trusted By Travellers</p>
          <h2 className="mt-4 font-display text-3xl font-normal leading-tight text-forest-ink sm:text-4xl">
            Stories From Dog Owners
          </h2>
        </div>
        <div>

          <script src="https://elfsightcdn.com/platform.js" async></script>
          <div className="elfsight-app-f2ccb257-4287-464a-a2fe-2bc1828cd248" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  );
}
