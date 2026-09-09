import type { Metadata } from "next";
import { FaWhatsapp } from "react-icons/fa";
import { LuMail, LuMapPin } from "react-icons/lu";
import ContactForm from "./ContactForm";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: {
    absolute: "Contact & Book Dog Boarding | Lio's Paw Paradise Sri Lanka",
  },
  description:
    "Contact Lio's Paw Paradise directly via WhatsApp (+94 75 636 8726) or email to enquire about dog boarding, housing, and daycare availability in Ahangama, Galle & Matara.",
  alternates: {
    canonical: "https://liospawparadise.com/contact",
  },
  openGraph: {
    title: "Contact & Book Dog Boarding | Lio's Paw Paradise Sri Lanka",
    description:
      "Contact Lio's Paw Paradise directly via WhatsApp (+94 75 636 8726) or email to enquire about dog boarding, housing, and daycare availability in Ahangama, Galle & Matara.",
    url: "https://liospawparadise.com/contact",
    siteName: business.name,
    images: [
      {
        url: "/images/Hero/Image1.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Lio's Paw Paradise Dog Boarding in Southern Sri Lanka",
      },
    ],
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Lio's Paw Paradise",
    url: "https://liospawparadise.com/contact",
    description:
      "Contact information for booking dog boarding, housing, and daycare at Lio's Paw Paradise in Ahangama, Southern Sri Lanka.",
    mainEntity: {
      "@type": "LocalBusiness",
      name: business.name,
      telephone: business.phoneDisplay,
      email: business.email,
      url: "https://liospawparadise.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: business.address.line1,
        addressLocality: business.address.line2,
        addressRegion: "Southern Province",
        addressCountry: "LK",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <section className="bg-forest-ink pb-12 pt-32 text-cream sm:pb-8 sm:pt-38">
        <div className="container-page">
          <p className="eyebrow text-gold">Get In Touch</p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-normal leading-tight sm:text-5xl">
            Let&apos;s Talk About Your Dog&apos;s Stay
          </h1>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-cream/65">
            Send an enquiry and the owner will personally confirm availability and details — this is not an automated
            booking system.
          </p>
        </div>
      </section>

      <section className="container-page py-24 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Contact info */}
          <div className="reveal space-y-8">
            <div className="card-premium p-8">
              <p className="eyebrow text-gold-deep">Reach Us Directly</p>
              <div className="mt-6 space-y-5">
                <a
                  href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(business.whatsappDefaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-forest/8 p-4 transition-colors hover:border-gold/50 hover:bg-gold/5"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-forest text-gold">
                    <FaWhatsapp size={22} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-forest-ink">WhatsApp</p>
                    <p className="text-[13px] text-forest-ink/55">{business.phoneDisplay}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-4 rounded-2xl border border-forest/8 p-4 transition-colors hover:border-gold/50 hover:bg-gold/5"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-forest text-gold">
                    <LuMail size={20} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-forest-ink">Email</p>
                    <p className="text-[13px] text-forest-ink/55">{business.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-forest/8 p-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-forest text-gold">
                    <LuMapPin size={20} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-forest-ink">Location</p>
                    <a
                      href={business.address.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] text-forest-ink/55 hover:text-gold-deep"
                    >
                      {business.address.line1}, {business.address.line2}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-premium p-8">
              <p className="eyebrow text-gold-deep">Hours</p>
              <ul className="mt-5 space-y-3">
                {business.hours.map((h, idx) => (
                  <li key={idx} className="flex items-center justify-between text-[14px] text-forest-ink/70">
                    <span>{h.day}</span>
                    <span className="font-medium text-forest-ink">{h.time}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl bg-forest/6 p-4 text-[13px] leading-relaxed text-forest-ink/60">
                Emergency contact:{" "}
                <a
                  href={`tel:${business.emergencyPhoneDial}`}
                  className="font-semibold text-forest-ink hover:text-gold-deep"
                >
                  {business.emergencyPhoneDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Inquiry form */}
          <div className="reveal card-premium p-8 sm:p-10" style={{ transitionDelay: "100ms" }}>
            <p className="eyebrow text-gold-deep">Send an Enquiry</p>
            <h2 className="mt-3 font-display text-2xl font-normal text-forest-ink">Tell Us About Your Dog</h2>
            <p className="mt-2 text-[13.5px] text-forest-ink/55">
              This opens a pre-filled WhatsApp message or email — nothing is booked automatically.
            </p>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
