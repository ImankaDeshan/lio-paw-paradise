export interface HeroBadgesProps {
  badges?: [string, string][];
}

const defaultBadges: [string, string][] = [
  ["Safe Environment", "Fully enclosed garden grounds"],
  ["Healthy Food", "Fresh meals, daily routine"],
  ["Daily Monitoring", "Wellbeing checked every day"],
  ["Loving Care", "One-on-one attention"],
];

export default function HeroBadges({ badges = defaultBadges }: HeroBadgesProps) {
  return (
    <div className="mt-14 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
      {badges.map(([title, desc], i) => (
        <div key={i} className="glass-card px-4 py-3.5">
          <p className="text-[13px] font-semibold text-cream">{title}</p>
          <p className="mt-0.5 text-[11.5px] leading-snug text-cream/60">{desc}</p>
        </div>
      ))}
    </div>
  );
}
