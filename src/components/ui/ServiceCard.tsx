import Link from "next/link";
import {
  LuHouse,
  LuUtensils,
  LuPill,
  LuHeartPulse,
  LuShieldCheck,
  LuHeartHandshake,
  LuArrowRight,
} from "react-icons/lu";

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
  href?: string;
}

const iconComponents: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  home: LuHouse,
  utensils: LuUtensils,
  pill: LuPill,
  "heart-pulse": LuHeartPulse,
  "shield-check": LuShieldCheck,
  "hand-heart": LuHeartHandshake,
};

export default function ServiceCard({
  title,
  description,
  icon,
  index,
  href,
}: ServiceCardProps) {
  const IconComponent = iconComponents[icon] ?? LuHouse;

  return (
    <article
      className="card-premium reveal group relative overflow-hidden p-8"
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold/10 transition-transform duration-500 group-hover:scale-125"></div>
      <div className="relative">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-forest text-gold shadow-sm transition-transform duration-300 group-hover:scale-105">
          <IconComponent size={26} className="text-gold" />
        </div>
        <h3 className="mt-6 text-xl font-medium text-forest-ink">{title}</h3>
        <p className="mt-3 text-[14.5px] leading-relaxed text-forest-ink/60">{description}</p>
        {href && (
          <Link
            href={href}
            className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-forest transition-colors group-hover:text-gold-deep"
          >
            Learn more
            <LuArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    </article>
  );
}
