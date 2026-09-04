/**
 * ============================================================
 *  SERENDIB PAWS RETREAT — BUSINESS CONFIGURATION
 * ============================================================
 *  This is the ONLY file you should need to edit for day-to-day
 *  changes: phone numbers, prices, address, hours, links, etc.
 *  Every page and component pulls its details from here.
 *
 *  After editing, save the file and rebuild the site
 *  (see README.md → "How to run").
 * ============================================================
 */

export const business = {
  name: "Lio's Paw Paradise",
  shortName: "Lio's Paw Paradise",
  tagline: "A Safe Second Home For Your Beloved Dog",
  descriptionShort:
    "Premium, personal dog care for travellers exploring Sri Lanka — safe, healthy, and loved while you're away.",

  // ---- Contact -------------------------------------------------
  phoneDisplay: "+94 75 636 8726",
  phoneDial: "+94756368726", // digits only, used in tel: links
  whatsappNumber: "94756368726", // no + or spaces, used in wa.me links
  email: "liospawparadise@gmail.com",
  emergencyPhoneDisplay: "+94 75 636 8726",
  emergencyPhoneDial: "+94756368726",

  // ---- Location --------------------------------------------------
  address: {
    line1: "No 75, Wisal Uyana, ",
    line2: "Dikkumbura, Ahangama",
    country: "Sri Lanka",
    mapsUrl: "https://share.google/F3yoRLOSnUu0eecOm",
  },

  // ---- Hours -------------------------------------------------------
  hours: [
    { day: "Monday – Saturday", time: "7:00 AM – 7:00 PM" },
    { day: "Sunday", time: "8:00 AM – 5:00 PM" },
    { day: "Emergency Care", time: "Available 24 Hours" },
  ],

  // ---- Social ----------------------------------------------------
  social: {
    instagram: "https://instagram.com/serendibpaws",
    facebook: "https://facebook.com/serendibpaws",
    tiktok: "https://tiktok.com/@serendibpaws",
  },

  // ---- Pricing text (kept as guidance text, not a booking price list) ---
  pricingText:
    "Daily and weekly care packages available. Every stay is tailored to your dog's routine — message us with your travel dates for a personal quote.",

  // ---- WhatsApp default inquiry message ---------------------------
  whatsappDefaultMessage:
    "Hello Serendib Paws! I'd like to enquire about dog care for my upcoming trip to Sri Lanka.",

  // ---- Services (used across Home + Services page) ----------------
  services: [
    {
      slug: "tourist-dog-care",
      title: "Tourist Dog Care",
      shortDescription:
        "Safe and comfortable care while owners travel around Sri Lanka.",
      description:
        "Built specifically for travellers, this is a full home-away-from-home stay for your dog — supervised around the clock in a calm, secure, garden setting so you can explore Sri Lanka without a single worry.",
      benefits: [
        "Private, secure resting areas",
        "Flexible stays for short trips or full itineraries",
        "Daily photo or voice updates on request",
        "Smooth handover and pickup coordination",
      ],
      icon: "home",
    },
    {
      slug: "food-and-nutrition",
      title: "Food & Nutrition",
      shortDescription:
        "Healthy meals according to each dog's routine and requirements.",
      description:
        "Every dog eats the way they eat at home. We follow your feeding schedule, portion sizes and ingredient preferences precisely, using fresh, home-style meals prepared daily.",
      benefits: [
        "Fresh meals prepared daily on site",
        "Special and allergy-sensitive diets accommodated",
        "Fixed feeding times matched to your routine",
        "Constant access to clean, filtered water",
      ],
      icon: "utensils",
    },
    {
      slug: "medicine-management",
      title: "Medicine Management",
      shortDescription:
        "Careful medication support following owner instructions.",
      description:
        "For dogs on medication, we follow your vet's instructions exactly — correct dosage, correct timing, logged every day, with photo confirmation available so you always know your dog's routine is on track.",
      benefits: [
        "Dosage and timing followed exactly as instructed",
        "Daily medication log kept for your records",
        "Direct communication with your veterinarian if needed",
        "Safe, labelled storage for all medications",
      ],
      icon: "pill",
    },
    {
      slug: "health-monitoring",
      title: "Health Monitoring",
      shortDescription:
        "Daily observation of eating habits, activity and wellbeing.",
      description:
        "Our caregivers quietly track appetite, energy, mood and comfort every single day, so the smallest change is noticed early and you're informed the moment it matters.",
      benefits: [
        "Daily wellbeing checks by trained caregivers",
        "Early notice of any change in appetite or behaviour",
        "Direct owner communication for any concern",
        "Trusted local veterinary partner on call",
      ],
      icon: "heart-pulse",
    },
    {
      slug: "safe-environment",
      title: "Safe Environment",
      shortDescription: "Clean, peaceful and secure surroundings.",
      description:
        "A fully enclosed, shaded garden home away from traffic and noise — cleaned daily, temperature-considerate, and designed so your dog can rest and roam without any risk.",
      benefits: [
        "Fully enclosed and gated grounds",
        "Shaded rest areas and cool indoor spaces",
        "Daily cleaning and hygiene routine",
        "Quiet, low-stress atmosphere",
      ],
      icon: "shield-check",
    },
    {
      slug: "daily-attention",
      title: "Daily Attention",
      shortDescription: "Love, interaction and companionship.",
      description:
        "Care here means company, not just supervision. Every dog gets one-on-one time each day — play, walks, and simple affection, from caregivers who genuinely enjoy their work.",
      benefits: [
        "Dedicated one-on-one time daily",
        "Gentle play and enrichment activities",
        "Consistent, familiar caregivers",
        "A calm, affectionate routine",
      ],
      icon: "hand-heart",
    },
  ],

  // ---- Dog Care Process timeline -----------------------------------
  process: [
    {
      step: 1,
      title: "Meet & Understand Your Dog",
      description:
        "We start with an in-person or video introduction — learning your dog's personality, habits, and what makes them comfortable before they ever stay with us.",
    },
    {
      step: 2,
      title: "Learn Food & Health Requirements",
      description:
        "You share feeding routine, allergies, medication and vet history so we can match your dog's exact care needs from day one.",
    },
    {
      step: 3,
      title: "Create a Personal Care Routine",
      description:
        "We build a simple daily plan around your dog — meal times, rest periods, play time and any medical schedule — so nothing feels unfamiliar.",
    },
    {
      step: 4,
      title: "Daily Care & Monitoring",
      description:
        "Every day includes meals, attention, gentle exercise and a wellbeing check, with updates sent to you while you're travelling.",
    },
    {
      step: 5,
      title: "Happy Return Home",
      description:
        "A calm, well-fed, well-loved dog handed back to you — with a full summary of their stay.",
    },
  ],

  // ---- Testimonials -------------------------------------------------
  testimonials: [
    {
      name: "Elena R.",
      origin: "Germany",
      quote:
        "We travelled the hill country for ten days without a single worry — our dog came back happier and healthier than when we left.",
      rating: 5,
    },
    {
      name: "James & Priya M.",
      origin: "United Kingdom",
      quote:
        "The daily updates meant everything. It genuinely felt like leaving our dog with family, not a boarding service.",
      rating: 5,
    },
    {
      name: "Sofia B.",
      origin: "Italy",
      quote:
        "Our dog has food allergies and they followed every instruction precisely. Professional, warm, and completely trustworthy.",
      rating: 5,
    },
  ],

  // ---- SEO defaults --------------------------------------------------
  seo: {
    defaultTitleSuffix: " | Serendib Paws Retreat — Sri Lanka",
    defaultDescription:
      "Premium dog care in Sri Lanka for travellers. A safe, loving, professionally supervised home for your dog while you explore — in Kandy, Central Province.",
    keywords:
      "dog care Sri Lanka, dog boarding Kandy, pet care for tourists Sri Lanka, dog sitting Sri Lanka, luxury dog boarding",
  },
} as const;

export type Business = typeof business;
