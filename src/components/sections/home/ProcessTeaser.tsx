import Link from "next/link";
import { business } from "@/config/business";

export default function ProcessTeaser() {
  return (
    <section className="container-page py-24 sm:py-28">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div className="reveal order-2 lg:order-1">
          <p className="eyebrow text-gold-deep">How It Works</p>
          <h2 className="mt-4 font-display text-3xl font-normal leading-tight text-forest-ink sm:text-4xl">
            A Simple, Personal Care Process
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-forest-ink/65">
            From the first introduction to the happy day you&apos;re reunited, every stay follows a routine built specifically
            around your dog.
          </p>
          <div className="mt-8 space-y-5">
            {business.process.slice(0, 3).map((step) => (
              <div key={step.step} className="flex gap-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/40 font-display text-sm text-gold-deep">
                  {step.step}
                </span>
                <div>
                  <p className="text-sm font-semibold text-forest-ink">{step.title}</p>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-forest-ink/55">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/dog-care-process" className="btn-outline mt-9">
            See Full Process
          </Link>
        </div>

        <div
          className="reveal order-1 mx-auto w-full max-w-md overflow-hidden rounded-[28px] border border-forest/10 shadow-card lg:order-2 lg:max-w-[420px]"
          style={{ transitionDelay: "120ms" }}
        >
          <img
            src="/images/Hero/Image5.jpg"
            alt="A caregiver gently attending to a dog"
            className="aspect-[4/5] max-h-[480px] w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
