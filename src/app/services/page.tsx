import type { Metadata } from "next";
import { LuCheck } from "react-icons/lu";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Detailed dog care services in Sri Lanka: tourist boarding, nutrition, medicine management, health monitoring and more.",
};

const sceneMap: Record<string, string> = {
  "tourist-dog-care": "/images/Services/TouristDog.jpg",
  "food-and-nutrition": "/images/Services/Foods.jpg",
  "medicine-management": "/images/Services/Medicines.jpg",
  "health-monitoring": "/images/Services/Health.jpg",
  "safe-environment": "/images/Services/Environment.jpg",
  "daily-attention": "/images/Services/Attention.jpg",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-forest-ink pb-12 pt-32 text-cream sm:pb-8 sm:pt-38">
        <div className="container-page">
          <p className="eyebrow text-gold">What We Offer</p>
          <h1 className="mt-3 max-w-2xl font-display text-3xl font-normal leading-tight sm:text-4xl lg:text-5xl">
            Care Built Around Every Detail of Your Dog&apos;s Day
          </h1>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-cream/65">
            Every service below works together as one routine — not separate add-ons — so your dog&apos;s stay feels familiar
            from the very first day.
          </p>
        </div>
      </section>

      <div className="container-page space-y-16 py-16 sm:space-y-20 sm:py-20">
        {business.services.map((s, i) => (
          <section
            key={s.slug}
            id={s.slug}
            className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
          >
            <div
              className={`reveal mx-auto w-full max-w-md overflow-hidden rounded-[24px] border border-forest/10 shadow-card lg:max-w-[400px] ${i % 2 === 1 ? "lg:order-2" : ""
                }`}
            >
              <img
                src={sceneMap[s.slug] ?? "/images/scene-garden.svg"}
                alt={s.title}
                className="aspect-[4/3] max-h-[290px] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div
              className={`reveal ${i % 2 === 1 ? "lg:order-1" : ""}`}
              style={{ transitionDelay: "100ms" }}
            >
              <span className="eyebrow text-gold-deep">Service {String(i + 1).padStart(2, "0")}</span>
              <h2 className="mt-3 font-display text-2xl font-normal leading-tight text-forest-ink sm:text-3xl">
                {s.title}
              </h2>
              <p className="mt-3 text-[14.5px] leading-relaxed text-forest-ink/65">{s.description}</p>
              <ul className="mt-5 space-y-2.5">
                {s.benefits.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 text-[14px] text-forest-ink/75">
                    <LuCheck className="mt-0.5 shrink-0 text-gold-deep" size={17} strokeWidth={2.8} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
