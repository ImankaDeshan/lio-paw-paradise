import Link from "next/link";
import { LuMapPin, LuCompass } from "react-icons/lu";
import { business } from "@/config/business";

const locations = [
  {
    name: "Galle & Fort",
    role: "Primary Service Area",
    desc: "Convenient dog care for residents, expats, and travelers exploring the historic Galle Fort and coastline.",
  },
  {
    name: "Matara",
    role: "Primary Service Area",
    desc: "Trusted pet boarding and housing for local dog owners and visitors throughout the Matara district.",
  },
  {
    name: "Ahangama",
    role: "Facility Location",
    desc: "Our tranquil, enclosed garden home — ideally situated on the Southern coastal belt.",
  },
  {
    name: "Weligama & Mirissa",
    role: "Nearby Coastal Hubs",
    desc: "Just minutes away — perfect for surfers, travelers, and tourists needing a secure day or overnight stay.",
  },
  {
    name: "Unawatuna",
    role: "Nearby Coastal Hub",
    desc: "Easy access for beach resort visitors seeking compassionate, supervised accommodation for their dogs.",
  },
  {
    name: "Southern Province",
    role: "Regional Coverage",
    desc: "Serving pet owners across the entire southern coast of Sri Lanka with tailored long and short stays.",
  },
];

export default function ServiceAreasSection() {
  return (
    <section className="bg-beige/30 py-24 sm:py-28" id="service-areas">
      <div className="container-page">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold-deep">Local Service Areas</p>
          <h2 className="mt-4 font-display text-3xl font-normal leading-tight text-forest-ink sm:text-4xl">
            Dog Boarding Across Galle, Matara & Southern Sri Lanka
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-forest-ink/65">
            Our private care facility is based in <strong>Ahangama</strong>, providing safe and comfortable dog boarding, housing, and daycare for dog owners and foreign visitors throughout the Southern Province.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc, i) => (
            <div
              key={loc.name}
              className="card-premium reveal flex flex-col justify-between p-7"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-forest/8 px-3 py-1 text-[11px] font-semibold text-forest">
                    <LuMapPin size={13} className="text-gold-deep" />
                    {loc.role}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl font-normal text-forest-ink">
                  {loc.name}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-forest-ink/60">
                  {loc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Local travel convenience banner */}
        <div className="reveal mt-12 overflow-hidden rounded-2xl border border-forest/10 bg-forest-ink p-8 text-cream sm:p-10">
          <div className="grid items-center gap-6 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <div className="flex items-center gap-2 text-gold">
                <LuCompass size={20} />
                <span className="text-xs font-semibold uppercase tracking-wider">Convenient Coastal Access</span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-normal text-cream">
                Exploring Southern Sri Lanka with Your Dog?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">
                Whether you need daytime pet sitting while surfing in Weligama, temporary boarding while touring Galle Fort, or extended stays while exploring the island, we coordinate smooth drop-offs and pickups.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 sm:flex-row lg:justify-end">
              <a
                href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
                  "Hello Lio's Paw Paradise! I'd like to ask about dog boarding availability for my location in Southern Sri Lanka."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full text-center sm:w-auto"
              >
                Ask About Availability
              </a>
              <Link href="/contact" className="btn-outline-light w-full text-center sm:w-auto">
                View Location Map
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
