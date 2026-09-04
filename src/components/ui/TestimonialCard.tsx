import { FaStar } from "react-icons/fa";

export interface TestimonialCardProps {
  name: string;
  origin: string;
  quote: string;
  rating: number;
  index?: number;
}

export default function TestimonialCard({
  name,
  origin,
  quote,
  rating,
  index = 0,
}: TestimonialCardProps) {
  return (
    <figure
      className="reveal card-premium flex h-full flex-col justify-between p-8"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div>
        <div className="flex gap-1 text-gold">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              size={15}
              className={i < rating ? "text-gold" : "text-gold/25"}
            />
          ))}
        </div>
        <blockquote className="mt-5 text-[15px] leading-relaxed text-forest-ink/75">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </div>
      <figcaption className="mt-7 flex items-center gap-3 border-t border-forest/8 pt-5">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-forest/8 font-display text-sm text-forest">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-forest-ink">{name}</p>
          <p className="text-xs text-forest-ink/50">{origin}</p>
        </div>
      </figcaption>
    </figure>
  );
}
