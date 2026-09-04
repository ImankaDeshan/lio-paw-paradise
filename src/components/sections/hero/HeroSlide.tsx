export interface HeroSlideProps {
  image: string;
  index: number;
  isActive?: boolean;
}

export default function HeroSlide({ image, index, isActive = false }: HeroSlideProps) {
  return (
    <div
      className={`hero-slide absolute inset-0 transition-opacity duration-[1400ms] ease-out ${
        isActive ? "opacity-100 is-active pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      data-index={index}
      aria-hidden={isActive ? "false" : "true"}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={image}
          alt=""
          className={`hero-img h-full w-full object-cover transition-transform duration-[7200ms] ease-linear ${
            isActive ? "scale-110" : "scale-100"
          }`}
          loading={index === 0 ? "eager" : "lazy"}
        />
      </div>
      <div className="hero-overlay-scrim absolute inset-0 bg-gradient-to-t from-forest-ink via-forest-ink/35 to-forest-ink/10"></div>
      <div className="hero-overlay-radial absolute inset-0 bg-gradient-to-r from-forest-ink/50 via-transparent to-transparent"></div>
    </div>
  );
}
