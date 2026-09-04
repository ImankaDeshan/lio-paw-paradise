import Link from "next/link";
import { LuCheck } from "react-icons/lu";
import { business } from "@/config/business";

const highlights = [
  "Fed proper, familiar meals",
  "Comfortably housed",
  "Health monitored daily",
  "Given medicine support",
  "Given personal attention",
];

export default function StorySection() {
  return (
    <section className="container-page py-24 sm:py-28">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div className="reveal relative mx-auto w-full max-w-md lg:max-w-[420px]">
          <div className="overflow-hidden rounded-[28px] border border-forest/10 shadow-card">
            <img
              src="/images/Hero/Image6.jpg"
              alt="A dog resting comfortably in a shaded garden area"
              className="aspect-[4/5] max-h-[480px] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="glass-card absolute -bottom-6 -right-4 hidden w-48 border-forest/10 bg-cream/90 p-4 shadow-soft sm:block">
            <p className="font-display text-2xl text-forest">5★</p>
            <p className="mt-1 text-[11px] leading-snug text-forest-ink/60">
              Trusted by travelling dog owners across Sri Lanka
            </p>
          </div>
        </div>

        <div className="reveal" style={{ transitionDelay: "120ms" }}>
          <p className="eyebrow text-gold-deep">Our Story</p>
          <h2 className="mt-4 font-display text-3xl font-normal leading-tight text-forest-ink sm:text-4xl">
            More Than Dog Boarding.<br />A Comfortable Home Away From Home.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-forest-ink/65">
            Travelling through Sri Lanka shouldn&apos;t mean leaving your dog somewhere uncertain. At {business.shortName}, every
            stay is treated as a real routine, not a cage and a checklist — so you can explore freely, knowing your dog is:
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {highlights.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[14px] text-forest-ink/75">
                <LuCheck className="mt-0.5 shrink-0 text-gold-deep" size={17} strokeWidth={2.8} />
                {item}
              </li>
            ))}
          </ul>
          <Link href="/about" className="btn-outline mt-9">
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
