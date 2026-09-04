import type { Metadata } from "next";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: "Our Dog Care Process",
  description:
    "A step-by-step look at how Serendib Paws Retreat personally cares for your dog, from first introduction to happy return home.",
};

export default function DogCareProcessPage() {
  return (
    <>
      <section className="bg-forest-ink pb-12 pt-32 text-cream sm:pb-8 sm:pt-38">
        <div className="container-page">
          <p className="eyebrow text-gold">Our Process</p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-normal leading-tight sm:text-5xl">
            A Journey Designed Around Trust
          </h1>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-cream/65">
            Every stay follows the same five steps — a clear order that builds familiarity for your dog and confidence for
            you, from the first hello to the happy day you&apos;re reunited.
          </p>
        </div>
      </section>

      <section className="container-page py-14 sm:py-18">
        <div className="relative mx-auto max-w-2xl">
          {/* Vertical gradient connecting timeline line */}
          <div className="absolute left-[19px] top-3 h-[calc(100%-24px)] w-px bg-gradient-to-b from-gold via-forest/25 to-transparent sm:left-[23px]"></div>

          <div className="space-y-7 sm:space-y-8">
            {business.process.map((step, i) => (
              <div
                key={step.step}
                className="reveal relative flex items-start gap-4 sm:gap-6"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                {/* Compact Step Number Circle */}
                <div className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-gold bg-cream font-display text-sm text-forest-ink shadow-sm sm:h-12 sm:w-12 sm:text-base">
                  {step.step}
                </div>

                {/* Compact Content Card */}
                <div className="card-premium flex-1 rounded-[20px] p-5 sm:p-6">
                  <p className="eyebrow text-[10.5px] text-gold-deep">
                    Step {step.step} of {business.process.length}
                  </p>
                  <h2 className="mt-1.5 font-display text-lg font-normal text-forest-ink sm:text-xl">
                    {step.title}
                  </h2>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-forest-ink/65">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
