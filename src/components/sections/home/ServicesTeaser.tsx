import Link from "next/link";
import ServiceCard from "@/components/ui/ServiceCard";
import { business } from "@/config/business";

export default function ServicesTeaser() {
  return (
    <section className="bg-beige/40 py-24 sm:py-28">
      <div className="container-page">
        <div className="reveal mx-auto max-w-xl text-center">
          <p className="eyebrow text-gold-deep">What We Offer</p>
          <h2 className="mt-4 font-display text-3xl font-normal leading-tight text-forest-ink sm:text-4xl">
            Every Detail of Care, Considered
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {business.services.map((s, i) => (
            <ServiceCard
              key={s.slug}
              title={s.title}
              description={s.shortDescription}
              icon={s.icon}
              index={i}
              href="/services"
            />
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <Link href="/services" className="btn-gold">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
