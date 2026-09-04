import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Food & Health",
  description:
    "Veterinary-style nutrition and health care standards for every dog staying at Serendib Paws Retreat in Sri Lanka.",
};

const nutrition = [
  { title: "Fresh Food", desc: "Meals prepared daily, never pre-packed or reheated from days before." },
  { title: "Clean Water", desc: "Constant access to clean, filtered water throughout the day." },
  { title: "Owner Instructions", desc: "Portion sizes, timing and ingredients matched exactly to your routine." },
  { title: "Special Diet Support", desc: "Allergy-sensitive and prescription diets accommodated with care." },
];

const health = [
  { title: "Medicine Reminders", desc: "Every dose logged and timed precisely, following your vet's instructions." },
  { title: "Health Observation", desc: "Daily checks on appetite, energy, coat and general comfort." },
  { title: "Owner Communication", desc: "You're informed directly and promptly about anything worth knowing." },
  { title: "Emergency Awareness", desc: "A trusted local veterinary partner on call for anything urgent." },
];

export default function FoodAndHealthPage() {
  return (
    <>
      <section className="bg-forest-ink pb-12 pt-32 text-cream sm:pb-8 sm:pt-38">
        <div className="container-page">
          <p className="eyebrow text-gold">Nutrition & Wellbeing</p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-normal leading-tight sm:text-5xl">
            Fed Well. Watched Closely. Cared For Properly.
          </h1>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-cream/65">
            Good care starts with the basics done properly — real food, clean water, and close attention to how your dog
            is really doing, every single day.
          </p>
        </div>
      </section>

      {/* Nutrition */}
      <section className="container-page py-24 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="reveal overflow-hidden rounded-[32px] border border-forest/10 shadow-card">
            <img
              src="/images/Foods/Foods.jpg"
              alt="A dog enjoying a freshly prepared healthy meal"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="reveal" style={{ transitionDelay: "100ms" }}>
            <p className="eyebrow text-gold-deep">Nutrition Care</p>
            <h2 className="mt-4 font-display text-3xl font-normal leading-tight text-forest-ink">
              Meals That Feel Like Home
            </h2>
            <div className="mt-8 space-y-6">
              {nutrition.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold"></div>
                  <div>
                    <p className="font-medium text-forest-ink">{item.title}</p>
                    <p className="mt-1 text-[14px] leading-relaxed text-forest-ink/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Health */}
      <section className="bg-beige/40 py-24 sm:py-28">
        <div className="container-page">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div className="reveal order-2 lg:order-1" style={{ transitionDelay: "100ms" }}>
              <p className="eyebrow text-gold-deep">Health Care</p>
              <h2 className="mt-4 font-display text-3xl font-normal leading-tight text-forest-ink">
                Every Day, Quietly Monitored
              </h2>
              <div className="mt-8 space-y-6">
                {health.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-forest"></div>
                    <div>
                      <p className="font-medium text-forest-ink">{item.title}</p>
                      <p className="mt-1 text-[14px] leading-relaxed text-forest-ink/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal order-1 overflow-hidden rounded-[32px] border border-forest/10 shadow-card lg:order-2">
              <img
                src="/images/Foods/Care.jpg"
                alt="A dog resting comfortably while being monitored"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
