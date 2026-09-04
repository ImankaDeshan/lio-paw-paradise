import { business } from "@/config/business";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-forest-ink py-12 text-cream">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-forest/40 blur-3xl"></div>

      <div className="container-page relative">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold">Ready When You Are</p>
          <h2 className="mt-4 font-display text-3xl font-normal leading-tight sm:text-4xl">
            Travel Sri Lanka With Peace of Mind
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-cream/65">
            {business.pricingText}
          </p>

          <div className="mt-9 flex text-[var(--color-forest)] flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(business.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Request Dog Care on WhatsApp
            </a>
            <a href={`mailto:${business.email}`} className="btn-outline-light">
              Email Us
            </a>
          </div>

          <p className="mt-8 text-xs uppercase tracking-widest2 text-cream/40">
            This is a personal inquiry, not an automated booking — the owner confirms every stay directly.
          </p>
        </div>
      </div>
    </section>
  );
}
