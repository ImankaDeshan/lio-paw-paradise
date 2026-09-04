import {
  LuShieldCheck,
  LuUtensils,
  LuPill,
  LuHeartPulse,
  LuHeartHandshake,
} from "react-icons/lu";

export interface FeatureItem {
  title: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  number: string;
}

const defaultFeatureItems: FeatureItem[] = [
  { title: "Safe Environment", icon: LuShieldCheck, number: "01" },
  { title: "Healthy Food", icon: LuUtensils, number: "02" },
  { title: "Medicine Support", icon: LuPill, number: "03" },
  { title: "Daily Monitoring", icon: LuHeartPulse, number: "04" },
  { title: "Loving Care", icon: LuHeartHandshake, number: "05" },
];

export interface TrustFeaturesProps {
  title?: string;
  features?: string[];
}

export default function TrustFeatures({
  title = "Your Dog Is Family. We Treat Them Like Family.",
  features,
}: TrustFeaturesProps) {
  // Support both custom string arrays and rich default items with icons
  const items = features
    ? features.map((f, i) => ({
        title: f,
        icon: defaultFeatureItems[i % defaultFeatureItems.length].icon,
        number: String(i + 1).padStart(2, "0"),
      }))
    : defaultFeatureItems;

  return (
    <section className="relative overflow-hidden bg-[var(--color-forest)] py-20 text-cream">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: "url('/images/pattern-leaf.svg')", backgroundSize: "240px" }}
      />
      <div className="container-page relative">
        <div className="reveal max-w-xl">
          <p className="eyebrow text-gold">Why Families Trust Us</p>
          <h2 className="mt-4 font-display text-3xl font-normal leading-tight sm:text-4xl">{title}</h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-[28px] border border-cream/10 bg-cream/10 sm:grid-cols-3 lg:grid-cols-5">
          {items.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <div
                key={i}
                className="group reveal bg-forest-ink/40 px-6 py-10 text-center transition-colors duration-500 hover:bg-forest-ink/70"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="relative mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full border border-gold/40 bg-forest/40 text-gold transition-transform duration-300 group-hover:scale-110">
                  <IconComponent size={22} className="text-gold" />
                  <span className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-gold text-[9px] font-bold text-forest-ink">
                    {item.number}
                  </span>
                </div>
                <p className="text-[14px] font-medium leading-snug">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
