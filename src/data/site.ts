// Static site content. Will be replaced by the backend / admin panel later.

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Packages", href: "/packages" },
  { label: "About Us", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;

export const contact = {
  phones: ["8122205744", "9787592240"],
  whatsapp: "918122205744",
  email: "purpleworldtours@gmail.com",
  address: [
    "S K Lawrence",
    "No.9, CS Appart: Koonamthai",
    "Edappally, Cochin,",
    "Kerala, India",
    "682024",
  ],
};

export const pillars = [
  {
    icon: "/icons/curated.svg",
    title: "Expertly Curated",
    text: "Every itinerary is vetted by travel specialists with over a decade of on-the-ground experience.",
  },
  {
    icon: "/icons/logistics.svg",
    title: "Seamless Logistics",
    text: "From private transfers to boutique accommodations, we handle the friction so you can enjoy the moment.",
  },
  {
    icon: "/icons/support.svg",
    title: "24/7 Global Support",
    text: "Travel with the confidence of knowing our team is always a call away, no matter the time zone.",
  },
];

export const customizationOptions = [
  "Private guided tours",
  "Culinary & Wine Focused Itineraries",
  "Eco-Luxury & Sustainable Stays",
  "Multi Generational Family Expeditions",
];

export const processSteps = [
  {
    image: "/images/process-consultation.jpg",
    title: "Consultation",
    text: "Share your vision with one of our regional experts.",
  },
  {
    image: "/images/process-curation.jpg",
    title: "Curation",
    text: "Receive a draft itinerary featuring hand-picked hidden gems and preferred pricing.",
  },
  {
    image: "/images/process-confirmation.jpg",
    title: "Confirmation",
    text: "We finalize all bookings, providing you with a digital and physical travel vault containing all necessary documents.",
  },
];

export const destinations: { image?: string; title: string; text: string; href?: string }[] = [
  {
    image: "/images/destination-asia.jpg",
    title: "Asian Immersion",
    text: "From the neon streets of Tokyo to the serene temples of Bali, we offer cultural deep-dives that go beyond the typical tourist corridors.",
  },
  {
    image: "/images/destination-india.jpg",
    title: "The Indian Greatness",
    text: "Explore the rugged beauty or the versatile vibrant culture with itineraries that balance adventure with comfort.",
  },
  {
    image: "/images/destination-kerala.jpg",
    title: "Captivating Kerala",
    text: "Tea hills in Munnar, houseboat nights in Alleppey, Wayanad's forests and Kovalam's beaches, all in one enchanting state.",
    href: "/kerala",
  },
];

export const testimonials = [
  {
    avatar: "/images/avatar-rachel.jpg",
    name: "Rachel",
    quote:
      "Purpleworldtours has been our go-to for family vacations since 2015. Their attention to detail in Japan last year was simply unmatched.",
  },
  {
    avatar: "/images/avatar-alex.jpg",
    name: "Alex",
    quote:
      "The customized honeymoon package to the Amalfi Coast exceeded every expectation. The private boat tour was the highlight of our lives!",
  },
  {
    avatar: "/images/avatar-bella.jpg",
    name: "Bella",
    quote:
      "Rarely do you find a company that stays true to its values for so many years. Purpleworldtours is the gold standard of travel.",
  },
];

export const contactImages = [
  { src: "/images/contact-1.jpg", alt: "Rowing boat on a clear turquoise mountain lake" },
  { src: "/images/contact-2.jpg", alt: "Red five-storey pagoda framed by cherry blossoms" },
  // NOTE: Unsplash+ watermarked preview — replace or license before launch
  { src: "/images/contact-3.jpg", alt: "Two hikers on a ridge trail above green mountain valleys" },
  { src: "/images/contact-4.jpg", alt: "Whitewashed Greek island house with a blue gate and bougainvillea" },
];

// Placeholder options until the backend provides them
export const destinationOptions = ["Asia", "India", "Kerala", "Not sure yet"];

export const budgetOptions = [
  "Under ₹1 lakh",
  "₹1 – 3 lakh",
  "₹3 – 5 lakh",
  "Above ₹5 lakh",
];
