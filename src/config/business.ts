/**
 * ============================================================
 *  LIO'S PAW PARADISE — BUSINESS CONFIGURATION
 * ============================================================
 *  This is the single source of truth for business details:
 *  phone numbers, address, hours, service areas, and SEO.
 * ============================================================
 */

export const business = {
  name: "Lio's Paw Paradise",
  shortName: "Lio's Paw Paradise",
  tagline: "A Safe Second Home For Your Beloved Dog",
  descriptionShort:
    "Safe, caring, and comfortable dog boarding, housing, and pet care in Ahangama, Southern Sri Lanka — serving dog owners across Galle, Matara, Weligama, and the Southern Province.",

  // ---- Contact -------------------------------------------------
  phoneDisplay: "+94 71 636 8726",
  phoneDial: "+94716368726", // digits only, used in tel: links
  whatsappNumber: "94716368726", // no + or spaces, used in wa.me links
  email: "liospawparadise@gmail.com",
  emergencyPhoneDisplay: "+94 71 636 8726",
  emergencyPhoneDial: "+94716368726",

  // ---- Location --------------------------------------------------
  address: {
    line1: "No. 75, Piyamis,",
    line2: "Dikkumbura, Ahangama",
    city: "Ahangama",
    district: "Galle",
    province: "Southern Province",
    country: "Sri Lanka",
    formatted: "No. 75, Piyamis, Dikkumbura, Ahangama, Sri Lanka",
    mapsUrl: "https://share.google/F3yoRLOSnUu0eecOm",
  },

  // ---- Primary Service Areas -------------------------------------
  serviceAreas: [
    { name: "Ahangama", description: "Our home facility location in Southern Sri Lanka" },
    { name: "Galle", description: "Primary service target for local dog owners and expats" },
    { name: "Matara", description: "Primary service target for dog owners and travellers" },
    { name: "Weligama", description: "Popular surf and travel destination minutes from our facility" },
    { name: "Unawatuna", description: "Coastal resort hub with easy access to our care" },
    { name: "Mirissa", description: "Southern travel hotspot welcoming pet owners" },
    { name: "Southern Province", description: "Comprehensive dog boarding and care across the region" },
  ],

  // ---- Hours -------------------------------------------------------
  hours: [
    { day: "Monday – Saturday", time: "7:00 AM – 7:00 PM" },
    { day: "Sunday", time: "8:00 AM – 5:00 PM" },
    { day: "Emergency Care", time: "Available 24 Hours" },
  ],

  // ---- Social ----------------------------------------------------
  social: {
    instagram: "",
    facebook: "",
    tiktok: "",
  },

  // ---- Pricing text (guidance text, personal confirmation) ---
  pricingText:
    "Daily, weekly, and custom extended stay packages available. Every stay is tailored to your dog's routine — message us with your travel dates for a personal quote.",

  // ---- WhatsApp default inquiry message ---------------------------
  whatsappDefaultMessage:
    "Hello Lio's Paw Paradise! I'd like to enquire about dog care and boarding in Southern Sri Lanka.",

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

  // ---- FAQs (Used on Home, Services & FAQ Schema) -------------------
  faqs: [
    {
      question: "Is my dog safe and supervised at Lio's Paw Paradise?",
      answer:
        "Yes, absolutely. Our facility in Ahangama is fully enclosed with secure, gated garden grounds and shaded resting zones. Every dog receives dedicated, hands-on attention and quiet supervision in a calm, low-stress environment.",
    },
    {
      question: "Can I leave my dog while travelling through Southern Sri Lanka?",
      answer:
        "Yes! Many of our guests are tourists, expats, and foreign travelers exploring Sri Lanka. Whether you are taking day excursions to Galle Fort, surfing in Weligama, visiting Mirissa, or traveling around the island, we provide a trustworthy, loving home for your dog.",
    },
    {
      question: "Do you offer both short-term and long-term dog boarding?",
      answer:
        "Yes. We accommodate short-term stays (daycare, single overnights, weekend getaways) as well as multi-week and long-term boarding for owners on extended travel or work assignments.",
    },
    {
      question: "Which locations and service areas do you cover?",
      answer:
        "Our physical home facility is located in Ahangama. We proudly serve dog owners, tourists, and expats across Galle, Matara, Weligama, Unawatuna, Mirissa, and the broader Southern Province of Sri Lanka.",
    },
    {
      question: "How do I check availability and arrange a booking?",
      answer:
        "You can message us directly on WhatsApp at +94 71 636 8726 or send an email to liospawparadise@gmail.com. Because every stay is personal and spaces are limited to ensure individual attention, the owner personally confirms every booking.",
    },
    {
      question: "What information should I provide before my dog's stay?",
      answer:
        "Please let us know your dog's breed, age, personality, daily feeding routine, allergies, medication requirements, and your expected travel dates. This allows us to replicate their home routine smoothly.",
    },
    {
      question: "How are meals, feeding, and medications handled?",
      answer:
        "We strictly follow your dog's regular feeding schedule, portion sizes, and ingredient preferences. Fresh home-style meals are prepared daily, clean filtered water is always available, and veterinary medications are administered with strict adherence to timing and dosage.",
    },
    {
      question: "Will I receive updates while I am away from my dog?",
      answer:
        "Yes! We regularly send photo, video, and message updates via WhatsApp throughout your dog's stay, giving you complete peace of mind while you explore Sri Lanka.",
    },
  ],

  // ---- SEO defaults --------------------------------------------------
  seo: {
    siteUrl: "https://liospawparadise.com",
    defaultTitleSuffix: " | Lio's Paw Paradise — Dog Boarding Sri Lanka",
    defaultTitle: "Lio's Paw Paradise | Dog Boarding, Housing & Care in Ahangama, Galle & Matara",
    defaultDescription:
      "Safe, caring, and comfortable dog boarding, housing, and pet care in Ahangama, Southern Sri Lanka. Serving dog owners and tourists across Galle, Matara, Weligama, Unawatuna, and Mirissa.",
    keywords:
      "dog boarding Sri Lanka, dog boarding Galle, dog boarding Matara, dog boarding Southern Province Sri Lanka, dog boarding Ahangama, dog boarding Weligama, dog boarding Unawatuna, dog boarding Mirissa, dog care Galle, dog care Matara, dog care Southern Sri Lanka, pet boarding Galle, pet boarding Matara, pet care Galle, pet care Matara, dog housing Sri Lanka, dog accommodation Sri Lanka, dog hotel Sri Lanka, dog daycare Galle, dog daycare Matara, dog boarding in Sri Lanka for tourists",
  },
} as const;

export type Business = typeof business;

