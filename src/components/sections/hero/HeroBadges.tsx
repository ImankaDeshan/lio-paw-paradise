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
    <div className="mt-10 grid max-w-3xl grid-cols-2 gap-2.5 sm:mt-14 sm:grid-cols-4 sm:gap-3">
      {badges.map(([title, desc], i) => (
        <div key={i} className="glass-card min-w-0 px-3 py-3 sm:px-4 sm:py-3.5">
          <p className="text-[13px] font-semibold text-cream">{title}</p>
          <p className="mt-0.5 text-[11px] leading-snug text-cream/60 sm:text-[11.5px]">{desc}</p>
        </div>
      ))}
    </div>
  );
}
