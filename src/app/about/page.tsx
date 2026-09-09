import type { Metadata } from "next";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: {
    absolute: "About Us | Dog Boarding & Pet Care in Ahangama, Galle & Matara",
  },
  description:
    "Learn why Lio's Paw Paradise exists — dedicated dog boarding, housing, and pet care in Ahangama, Southern Sri Lanka, built on genuine love and trusted care.",
  alternates: {
    canonical: "https://liospawparadise.com/about",
  },
  openGraph: {
    title: "About Us | Dog Boarding & Pet Care in Ahangama, Galle & Matara",
    description:
      "Learn why Lio's Paw Paradise exists — dedicated dog boarding, housing, and pet care in Ahangama, Southern Sri Lanka, built on genuine love and trusted care.",
    url: "https://liospawparadise.com/about",
    siteName: business.name,
    images: [
      {
        url: "/images/About/Logo.jpg",
        width: 800,
        height: 600,
        alt: "About Lio's Paw Paradise Dog Boarding in Ahangama, Sri Lanka",
      },
    ],
  },
};

const pillars = [
  {
    title: "Love for Animals",
    desc: "This began simply — a genuine love for dogs, and a belief that care should never feel transactional.",
  },
  {
    title: "Responsible Care",
    desc: "Every routine, meal and medication is handled with the same seriousness we'd want for our own dogs.",
  },
  {
    title: "Safe Environment",
    desc: "A secure, shaded, enclosed garden home in Ahangama, built specifically with a dog's comfort and safety in mind.",
  },
  {
    title: "Helping Tourists & Locals Alike",
    desc: "Giving pet owners across Galle, Matara, and Southern Sri Lanka total confidence while travelling or away from home.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-forest-ink pb-12 pt-32 text-cream sm:pb-8 sm:pt-38">
        <div className="container-page">
          <p className="eyebrow text-gold">About Us</p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-normal leading-tight sm:text-5xl">
            Why {business.name} Exists
          </h1>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="reveal mx-auto w-full max-w-md overflow-hidden rounded-[28px] border border-forest/10 shadow-card lg:max-w-[400px]">
            <img
              src="/images/About/Logo.jpg"
              alt="Caregiver spending time with a dog at Lio's Paw Paradise in Ahangama, Sri Lanka"
              className="aspect-[4/5] max-h-[450px] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="reveal" style={{ transitionDelay: "100ms" }}>
            <p className="eyebrow text-gold-deep">Our Purpose</p>
            <h2 className="mt-4 font-display text-3xl font-normal leading-tight text-forest-ink">
              A Home Built On Trust, Not Just Space
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-forest-ink/65">
              Sri Lanka draws travellers and expats who bring their dogs along for the journey — but finding somewhere genuinely
              trustworthy to leave them, even for a few days, is hard. Located in Ahangama and serving dog owners across Galle, Matara, Weligama, and Unawatuna, {business.shortName} exists to close that gap: a
              real home, run by people who care, where your dog&apos;s routine, health and happiness come first.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-forest-ink/65">
              We&apos;re not a kennel and we&apos;re not an impersonal commercial facility. We&apos;re a dedicated team who believe every dog deserves
              the same warmth and attention they get at home — so you can explore Southern Sri Lanka with complete peace of mind.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-beige/40 py-16 sm:py-20">
        <div className="container-page">
          <div className="reveal mx-auto max-w-xl text-center">
            <p className="eyebrow text-gold-deep">What Guides Us</p>
            <h2 className="mt-4 font-display text-3xl font-normal leading-tight text-forest-ink sm:text-4xl">
              Our Foundations
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="reveal card-premium p-8"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="font-display text-3xl text-gold/70">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-lg font-medium text-forest-ink">{p.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-forest-ink/60">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
