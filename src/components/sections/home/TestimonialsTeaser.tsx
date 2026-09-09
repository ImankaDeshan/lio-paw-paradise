import Script from "next/script";

export default function TestimonialsTeaser() {
  return (
    <section className="bg-forest/[0.04] py-24 sm:py-28">
      <div className="container-page">
        <div className="reveal mx-auto max-w-xl text-center">
          <p className="eyebrow text-gold-deep">Trusted By Travellers & Dog Owners</p>
          <h2 className="mt-4 font-display text-3xl font-normal leading-tight text-forest-ink sm:text-4xl">
            Customer Reviews & Experiences
          </h2>
        </div>
        <div className="mt-12 min-h-[140px]">
          <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
          <div className="elfsight-app-f2ccb257-4287-464a-a2fe-2bc1828cd248" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  );
}
