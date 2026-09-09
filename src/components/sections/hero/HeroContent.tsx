import Link from "next/link";
import { business } from "@/config/business";

export interface HeroContentProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  cta?: boolean;
  index: number;
  isActive?: boolean;
}

export default function HeroContent({
  eyebrow,
  title,
  subtitle,
  cta = false,
  index,
  isActive = false,
}: HeroContentProps) {
  return (
    <div className={`hero-copy ${isActive ? "block" : "hidden"}`} data-index={index}>
      <p className="eyebrow text-gold">{eyebrow}</p>
      {index === 0 ? (
        <h1 className="mt-5 whitespace-pre-line font-display text-[42px] font-normal leading-[1.08] text-cream sm:text-[56px] lg:text-[66px]">
          {title}
        </h1>
      ) : (
        <h2 className="mt-5 whitespace-pre-line font-display text-[42px] font-normal leading-[1.08] text-cream sm:text-[56px] lg:text-[66px]">
          {title}
        </h2>
      )}
      <p className="mt-6 max-w-md text-[15px] leading-relaxed text-cream/75 sm:text-base">
        {subtitle}
      </p>
      {cta && (
        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(business.whatsappDefaultMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Request Dog Care
          </a>
          <Link href="/services" className="btn-outline-light">
            Explore Services
          </Link>
        </div>
      )}
    </div>
  );
}
