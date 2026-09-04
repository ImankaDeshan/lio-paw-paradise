"use client";

import { useState } from "react";
import { business } from "@/config/business";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    dogName: "",
    dogBreed: "",
    dates: "",
    food: "",
    medical: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (method: "whatsapp" | "email") => (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      `Hello ${business.name}! I'd like to enquire about dog care.`,
      "",
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Dog's Name: ${formData.dogName}`,
      formData.dogBreed ? `Dog's Breed: ${formData.dogBreed}` : "",
      `Travel Dates: ${formData.dates}`,
      formData.food ? `Food Requirements: ${formData.food}` : "",
      formData.medical ? `Medical Requirements: ${formData.medical}` : "",
      formData.message ? `Message: ${formData.message}` : "",
    ].filter(Boolean);

    const body = lines.join("\n");

    if (method === "email") {
      const subject = encodeURIComponent(
        `Dog Care Enquiry — ${formData.dogName || "New Enquiry"}`
      );
      window.location.href = `mailto:${business.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
    } else {
      window.open(
        `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(body)}`,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  return (
    <form className="mt-8 grid gap-5 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-forest-ink/50">
          Your Name
        </label>
        <input
          required
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Jane Doe"
          className="mt-2 w-full rounded-xl border border-forest/15 bg-cream px-4 py-3 text-sm text-forest-ink placeholder:text-forest-ink/30 focus:border-gold focus:outline-none"
        />
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wide text-forest-ink/50">
          Phone Number
        </label>
        <input
          required
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+44 7000 000000"
          className="mt-2 w-full rounded-xl border border-forest/15 bg-cream px-4 py-3 text-sm text-forest-ink placeholder:text-forest-ink/30 focus:border-gold focus:outline-none"
        />
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="dogName" className="text-xs font-semibold uppercase tracking-wide text-forest-ink/50">
          Dog&apos;s Name
        </label>
        <input
          required
          id="dogName"
          name="dogName"
          type="text"
          value={formData.dogName}
          onChange={handleChange}
          placeholder="Max"
          className="mt-2 w-full rounded-xl border border-forest/15 bg-cream px-4 py-3 text-sm text-forest-ink placeholder:text-forest-ink/30 focus:border-gold focus:outline-none"
        />
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="dogBreed" className="text-xs font-semibold uppercase tracking-wide text-forest-ink/50">
          Dog&apos;s Breed
        </label>
        <input
          id="dogBreed"
          name="dogBreed"
          type="text"
          value={formData.dogBreed}
          onChange={handleChange}
          placeholder="Labrador mix"
          className="mt-2 w-full rounded-xl border border-forest/15 bg-cream px-4 py-3 text-sm text-forest-ink placeholder:text-forest-ink/30 focus:border-gold focus:outline-none"
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="dates" className="text-xs font-semibold uppercase tracking-wide text-forest-ink/50">
          Travel Dates
        </label>
        <input
          required
          id="dates"
          name="dates"
          type="text"
          value={formData.dates}
          onChange={handleChange}
          placeholder="e.g. 14 – 22 September"
          className="mt-2 w-full rounded-xl border border-forest/15 bg-cream px-4 py-3 text-sm text-forest-ink placeholder:text-forest-ink/30 focus:border-gold focus:outline-none"
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="food" className="text-xs font-semibold uppercase tracking-wide text-forest-ink/50">
          Food Requirements
        </label>
        <input
          id="food"
          name="food"
          type="text"
          value={formData.food}
          onChange={handleChange}
          placeholder="Feeding schedule, allergies, brand preferences"
          className="mt-2 w-full rounded-xl border border-forest/15 bg-cream px-4 py-3 text-sm text-forest-ink placeholder:text-forest-ink/30 focus:border-gold focus:outline-none"
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="medical" className="text-xs font-semibold uppercase tracking-wide text-forest-ink/50">
          Medical Requirements
        </label>
        <input
          id="medical"
          name="medical"
          type="text"
          value={formData.medical}
          onChange={handleChange}
          placeholder="Medication, conditions, vet contact"
          className="mt-2 w-full rounded-xl border border-forest/15 bg-cream px-4 py-3 text-sm text-forest-ink placeholder:text-forest-ink/30 focus:border-gold focus:outline-none"
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-forest-ink/50">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Anything else we should know?"
          className="mt-2 w-full rounded-xl border border-forest/15 bg-cream px-4 py-3 text-sm text-forest-ink placeholder:text-forest-ink/30 focus:border-gold focus:outline-none"
        />
      </div>

      <div className="sm:col-span-2 mt-2 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={handleSubmit("whatsapp")}
          className="btn-gold flex-1"
        >
          Send via WhatsApp
        </button>
        <button
          type="button"
          onClick={handleSubmit("email")}
          className="btn-outline flex-1"
        >
          Send via Email
        </button>
      </div>
    </form>
  );
}
