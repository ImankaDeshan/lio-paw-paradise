export interface HeroPaginationProps {
  count: number;
  currentIndex: number;
  onSelect: (index: number) => void;
}

export default function HeroPagination({ count, currentIndex, onSelect }: HeroPaginationProps) {
  return (
    <div className="hero-dots-container absolute bottom-8 right-6 z-10 flex items-center gap-2.5 sm:right-10">
      {Array.from({ length: count }).map((_, i) => {
        const isActive = i === currentIndex;
        return (
          <button
            key={i}
            type="button"
            onClick={() => onSelect(i)}
            className={`hero-dot h-1.5 rounded-full transition-all duration-500 ${
              isActive ? "w-8 bg-gold is-active" : "w-4 bg-cream/35"
            }`}
            data-index={i}
            aria-label={`Go to slide ${i + 1}`}
          />
        );
      })}
    </div>
  );
}
