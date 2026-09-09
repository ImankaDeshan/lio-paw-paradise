"use client";

import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import { business } from "@/config/business";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: business.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="container-page py-24 sm:py-28" id="faqs">
      {/* Schema.org FAQPage structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="reveal mx-auto max-w-2xl text-center">
        <p className="eyebrow text-gold-deep">Got Questions?</p>
        <h2 className="mt-4 font-display text-3xl font-normal leading-tight text-forest-ink sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-forest-ink/65">
          Everything you need to know about our dog boarding environment, feeding routines, safety, and booking in Southern Sri Lanka.
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-3xl space-y-4">
        {business.faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className="reveal card-premium overflow-hidden rounded-2xl transition-all duration-300"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-forest/5"
              >
                <span className="font-display text-lg font-normal text-forest-ink">
                  {faq.question}
                </span>
                <span
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-forest/10 text-forest transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-forest text-gold" : "bg-cream"
                  }`}
                >
                  <LuChevronDown size={18} />
                </span>
              </button>
              {isOpen && (
                <div className="border-t border-forest/8 px-6 pb-6 pt-4">
                  <p className="text-[14.5px] leading-relaxed text-forest-ink/70">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="reveal mt-12 text-center">
        <p className="text-sm text-forest-ink/60">
          Have a specific question about your dog&apos;s routine?
        </p>
        <a
          href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
            "Hello Lio's Paw Paradise! I have a question about boarding my dog."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold mt-4 inline-flex"
        >
          Ask on WhatsApp
        </a>
      </div>
    </section>
  );
}
