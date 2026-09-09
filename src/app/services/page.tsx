import type { Metadata } from "next";
import Link from "next/link";
import { LuCheck, LuMessageCircle } from "react-icons/lu";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: {
    absolute: "Dog Boarding, Housing & Pet Care in Galle & Matara | Lio's Paw Paradise",
  },
  description:
    "Comprehensive dog boarding, dog housing, daycare, and pet care services in Ahangama, serving Galle, Matara, and Southern Sri Lanka. Safe, healthy, and personalized.",
  alternates: {
    canonical: "https://liospawparadise.com/services",
  },
  openGraph: {
    title: "Dog Boarding, Housing & Pet Care in Galle & Matara | Lio's Paw Paradise",
    description:
      "Comprehensive dog boarding, dog housing, daycare, and pet care services in Ahangama, serving Galle, Matara, and Southern Sri Lanka. Safe, healthy, and personalized.",
    url: "https://liospawparadise.com/services",
    siteName: business.name,
    images: [
      {
        url: "/images/Services/TouristDog.jpg",
        width: 800,
        height: 600,
        alt: "Dog boarding and care at Lio's Paw Paradise in Southern Sri Lanka",
      },
    ],
  },
};

const sceneMap: Record<string, { img: string; alt: string }> = {
  "tourist-dog-care": {
    img: "/images/Services/TouristDog.jpg",
    alt: "Safe dog boarding for tourists and expats in Southern Sri Lanka",
  },
  "food-and-nutrition": {
    img: "/images/Services/Foods.jpg",
    alt: "Fresh home-cooked nutritious meals for dogs staying at Lio's Paw Paradise",
  },
  "medicine-management": {
    img: "/images/Services/Medicines.jpg",
    alt: "Careful veterinary medication management and health tracking for dogs",
  },
  "health-monitoring": {
    img: "/images/Services/Health.jpg",
    alt: "Daily observation and gentle health checkups for dogs",
  },
  "safe-environment": {
    img: "/images/Services/Environment.jpg",
    alt: "Clean, secure, and enclosed garden environment for dogs in Ahangama",
  },
  "daily-attention": {
    img: "/images/Services/Attention.jpg",
    alt: "Caregiver providing daily love, companionship, and enrichment to a dog",
  },
};

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: business.services.map((s, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: s.title,
        description: s.description,
        provider: {
          "@type": "LocalBusiness",
          name: business.name,
          url: "https://liospawparadise.com",
          telephone: business.phoneDisplay,
          address: {
            "@type": "PostalAddress",
            streetAddress: business.address.line1,
            addressLocality: business.address.line2,
            addressRegion: "Southern Province",
            addressCountry: "LK",
          },
        },
        areaServed: [
          { "@type": "City", name: "Galle" },
          { "@type": "City", name: "Matara" },
          { "@type": "AdministrativeArea", name: "Ahangama" },
          { "@type": "AdministrativeArea", name: "Weligama" },
          { "@type": "AdministrativeArea", name: "Unawatuna" },
          { "@type": "AdministrativeArea", name: "Mirissa" },
          { "@type": "AdministrativeArea", name: "Southern Province, Sri Lanka" },
        ],
      },
    })),
  };

  return (
    <>
      {/* Schema.org Service ItemList structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="bg-forest-ink pb-12 pt-32 text-cream sm:pb-8 sm:pt-38">
        <div className="container-page">
          <p className="eyebrow text-gold">What We Offer</p>
          <h1 className="mt-3 max-w-2xl font-display text-3xl font-normal leading-tight sm:text-4xl lg:text-5xl">
            Dog Boarding, Housing & Care Services in Southern Sri Lanka
          </h1>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-cream/65">
            Serving dog owners across Ahangama, Galle, Matara, Weligama, and Unawatuna. Every service below works together as one seamless routine so your dog feels right at home.
          </p>
        </div>
      </section>

      <div className="container-page space-y-16 py-16 sm:space-y-20 sm:py-20">
        {business.services.map((s, i) => {
          const visual = sceneMap[s.slug] ?? {
            img: "/images/scene-garden.svg",
            alt: s.title,
          };

          return (
            <section
              key={s.slug}
              id={s.slug}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
            >
              <div
                className={`reveal mx-auto w-full max-w-md overflow-hidden rounded-[24px] border border-forest/10 shadow-card lg:max-w-[400px] ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <img
                  src={visual.img}
                  alt={visual.alt}
                  className="aspect-[4/3] max-h-[290px] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div
                className={`reveal ${i % 2 === 1 ? "lg:order-1" : ""}`}
                style={{ transitionDelay: "100ms" }}
              >
                <span className="eyebrow text-gold-deep">
                  Service {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 font-display text-2xl font-normal leading-tight text-forest-ink sm:text-3xl">
                  {s.title}
                </h2>
                <p className="mt-3 text-[14.5px] leading-relaxed text-forest-ink/65">
                  {s.description}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {s.benefits.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-[14px] text-forest-ink/75">
                      <LuCheck className="mt-0.5 shrink-0 text-gold-deep" size={17} strokeWidth={2.8} />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  <a
                    href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Lio's Paw Paradise! I'd like to enquire about your ${s.title} service.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-forest/15 px-4 py-2 text-xs font-semibold text-forest transition-colors hover:border-gold hover:bg-gold/10"
                  >
                    <LuMessageCircle size={15} className="text-gold-deep" />
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}

