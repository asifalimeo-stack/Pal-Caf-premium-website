// Central, non-code editable site configuration.
// Update contact info, hours, links, and homepage copy here — no component
// code needs to change when these values change.

export const site = {
  name: "Pal Café",
  legalName: "Pal Coffee Sole Proprietorship LLC",
  tagline: "Brewed with Passion, Served with Soul",
  description:
    "Pal Café is a specialty coffee and dessert destination in Etihad Plaza, Khalifa City, Abu Dhabi — hand-brewed coffee, signature drinks, and premium desserts.",
  foundedYear: 2023,
  url: "https://palcafe.ae",
  phoneDisplay: "+971 50 704 4473",
  phoneE164: "+971507044473",
  whatsappE164: "971507044473",
  email: "info@palcafe.net", // from PAL Brand Profile
  address: {
    line1: "Etihad Plaza",
    line2: "Khalifa City",
    city: "Abu Dhabi",
    country: "United Arab Emirates",
    full: "Pal Café, Etihad Plaza, Khalifa City, Abu Dhabi, United Arab Emirates",
    mapsQuery: "Pal Cafe, Etihad Plaza, Khalifa City, Abu Dhabi",
    // Verified Google Maps listing (PAL Cafe بال كافيه)
    lat: 24.4435428,
    lng: 54.6115958,
    googleMapsUrl:
      "https://www.google.com/maps/place/PAL+Cafe+%D8%A8%D8%A7%D9%84+%D9%83%D8%A7%D9%81%D9%8A%D9%87%E2%80%AD/@24.4435428,54.6090209,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5e4fcd945b3953:0xd8840b1560e80b3!8m2!3d24.4435428!4d54.6115958!16s%2Fg%2F11rxpk0crf",
  },
  hours: [
    { days: "Sunday – Thursday", time: "6:30 AM – 11:00 PM" },
    { days: "Friday – Saturday", time: "7:00 AM – 12:00 AM" },
  ],
  social: {
    instagram: "https://www.instagram.com/palcafe.ae",
    instagramHandle: "@palcafe.ae",
  },
  order: {
    qlub:
      "https://app.qlub.io/qr/ae/pal-cafe-khalifa/27/_/_/0843e68460/qsr/pX8Ge?lang=en&qsr=true",
  },
} as const;

export const whatsappHref = (message = "Hi Pal Café, I'd like to ask about...") =>
  `https://wa.me/${site.whatsappE164}?text=${encodeURIComponent(message)}`;

export const telHref = `tel:${site.phoneE164.replace(/\s+/g, "")}`;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

export const faqs = [
  {
    question: "Do you take walk-ins, or should I book ahead?",
    answer:
      "Walk-ins are always welcome at Pal Café. For larger groups, feel free to call or WhatsApp us ahead of time so we can prepare your table.",
  },
  {
    question: "Can I order online for pickup?",
    answer:
      "Yes — use the Order Now button to open our digital menu and place a pickup order in a few taps.",
  },
  {
    question: "Do you offer dairy-free or plant-based milk?",
    answer:
      "Our baristas can prepare most espresso drinks with alternative milk on request — just ask your barista when ordering.",
  },
  {
    question: "Is Pal Café suitable for working or meetings?",
    answer:
      "Yes, we have complimentary Wi-Fi and a relaxed, comfortable space that works well for laptops, casual meetings, and catching up with friends.",
  },
  {
    question: "Where exactly are you located?",
    answer:
      "We're in Etihad Plaza, Khalifa City, Abu Dhabi. Use the map on our Contact page for directions.",
  },
] as const;
