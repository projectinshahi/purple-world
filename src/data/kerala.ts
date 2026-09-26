// Kerala (Keralam) content for the /kerala page: one section per destination,
// plus the packages listed at the bottom.

export type Faq = { q: string; a: string };

export type KeralaDestination = {
  slug: string;
  name: string;
  eyebrow: string;
  title: string;
  tagline: string;
  intro: string[];
  highlightsTitle: string;
  highlights: { title: string; text: string }[];
  facts: { label: string; value: string }[];
  tips: string[];
  faqs: Faq[];
  packageSlugs: string[];
};

export type KeralaPackage = {
  slug: string;
  name: string;
  duration: string;
  route: { place: string; nights?: number }[];
  summary: string;
  days: { title: string; text: string }[];
};

export const keralaPackages: KeralaPackage[] = [
  {
    slug: "classic-circuit",
    name: "The Classic Circuit",
    duration: "5 Nights / 6 Days",
    route: [
      { place: "Kochi", nights: 1 },
      { place: "Munnar", nights: 2 },
      { place: "Thekkady", nights: 1 },
      { place: "Alleppey", nights: 1 },
    ],
    summary:
      "Kerala's most-loved route in under a week: colonial Fort Kochi, the tea hills of Munnar, the spice country of Thekkady and a night on the Alleppey backwaters.",
    days: [
      { title: "Arrive in Kochi", text: "Airport pickup and a walk through Fort Kochi: the Chinese fishing nets, St. Francis Church and Jew Town. Evening Kathakali performance." },
      { title: "Kochi to Munnar", text: "Drive into the Western Ghats past Cheeyappara and Valara waterfalls, arriving in Munnar's tea country by afternoon." },
      { title: "Munnar sightseeing", text: "Eravikulam National Park (home of the Nilgiri tahr), the Tea Museum, Mattupetty Dam and Echo Point." },
      { title: "Munnar to Thekkady", text: "Through cardamom hills to Thekkady. Spice plantation walk, with an optional Kalaripayattu show in the evening." },
      { title: "Thekkady to Alleppey", text: "Morning boat ride on Periyar Lake, then on to Alleppey to board your private houseboat for a night on the backwaters." },
      { title: "Departure", text: "Breakfast on board, disembark and transfer to Kochi airport or railway station." },
    ],
  },
  {
    slug: "grand-kerala-tour",
    name: "The Grand Kerala Tour",
    duration: "6 Nights / 7 Days",
    route: [
      { place: "Kochi", nights: 1 },
      { place: "Munnar", nights: 2 },
      { place: "Thekkady", nights: 1 },
      { place: "Alleppey", nights: 1 },
      { place: "Kovalam / Trivandrum", nights: 1 },
    ],
    summary:
      "The full length of Kerala, from Kochi's heritage quarter through the hills and backwaters down to the beaches of Kovalam near the state capital.",
    days: [
      { title: "Arrive in Kochi", text: "Airport pickup and an afternoon in Fort Kochi and Mattancherry, ending with the sunset at the Chinese fishing nets." },
      { title: "Kochi to Munnar", text: "A scenic drive up into the Western Ghats with waterfall stops along the way." },
      { title: "Munnar sightseeing", text: "Eravikulam National Park, tea estate and museum visit, Mattupetty Dam and Top Station viewpoint." },
      { title: "Munnar to Thekkady", text: "Cardamom and pepper plantations, a guided spice walk and an evening cultural show." },
      { title: "Thekkady to Alleppey", text: "Periyar Lake boat ride in the morning, then an overnight houseboat cruise through the Alleppey canals." },
      { title: "Alleppey to Kovalam", text: "Drive south to Kovalam. Afternoon on Lighthouse Beach, with an optional Ayurvedic massage." },
      { title: "Trivandrum and departure", text: "Optional visit to the Napier Museum or the Padmanabhaswamy Temple area, then transfer to Trivandrum airport." },
    ],
  },
  {
    slug: "north-kerala-wilderness-heritage",
    name: "North Kerala Wilderness & Heritage",
    duration: "4 Nights / 5 Days",
    route: [
      { place: "Calicut" },
      { place: "Wayanad", nights: 3 },
      { place: "Bekal", nights: 1 },
    ],
    summary:
      "The quieter north: Wayanad's forests, caves and plantations, then Bekal's seaside fort on the Malabar coast.",
    days: [
      { title: "Calicut to Wayanad", text: "Pickup at Calicut airport or station and a drive up the Thamarassery Ghat's hairpin bends to Wayanad." },
      { title: "Wayanad: caves and lakes", text: "Edakkal Caves with their Neolithic rock engravings, Pookode Lake and Banasura Sagar Dam." },
      { title: "Wayanad: wildlife and waterfalls", text: "Morning jeep safari in the Wayanad Wildlife Sanctuary, Soochipara Falls and a coffee plantation walk." },
      { title: "Wayanad to Bekal", text: "Drive to the Malabar coast. Sunset at Bekal Fort, Kerala's largest fort, overlooking the Arabian Sea." },
      { title: "Departure", text: "Morning at Bekal beach, then transfer to Mangalore or Kannur airport." },
    ],
  },
  {
    slug: "backwater-wellness-special",
    name: "Backwater & Wellness Special",
    duration: "3 Nights / 4 Days",
    route: [
      { place: "Kochi", nights: 1 },
      { place: "Kumarakom", nights: 1 },
      { place: "Marari / Varkala", nights: 1 },
    ],
    summary:
      "A slow, restorative short break: heritage Kochi, a lakeside resort on Vembanad Lake and a final night by the sea with Ayurveda.",
    days: [
      { title: "Arrive in Kochi", text: "Airport pickup and a relaxed afternoon in Fort Kochi's cafés and galleries." },
      { title: "Kochi to Kumarakom", text: "Check in to a lakeside resort on Vembanad Lake. Sunset shikara ride and the Kumarakom Bird Sanctuary." },
      { title: "Kumarakom to Marari or Varkala", text: "Head to the sea: the fishing-village calm of Marari Beach, or the red cliffs of Varkala. Afternoon Ayurvedic therapy." },
      { title: "Departure", text: "A final beach morning, then transfer to Kochi or Trivandrum airport." },
    ],
  },
];

export const keralaDestinations: KeralaDestination[] = [
  {
    slug: "kerala-backwaters",
    title: "Kerala Backwaters",
    name: "Kerala Backwaters",
    eyebrow: "Backwaters",
    tagline: "Glide through palm-lined lagoons, canals and paddy fields on the waterways that made Kerala famous.",
    intro: [
      "The Kerala backwaters are a network of lakes, lagoons, rivers and canals that runs parallel to the Arabian Sea coast. At their heart is Vembanad Lake, the largest lake in Kerala, linking Kochi, Kumarakom and Alleppey.",
      "Life here moves at the pace of the water. You'll pass coir-making villages, toddy tappers, duck farmers and the rice fields of Kuttanad, one of the few places in the world where crops are grown below sea level.",
    ],
    highlightsTitle: "Best Backwater Experiences",
    highlights: [
      { title: "Overnight houseboat cruise", text: "Sleep on a traditional kettuvallam with a private crew and chef cooking fresh Kerala meals on board." },
      { title: "Kumarakom lakeside stay", text: "Resorts on the shore of Vembanad Lake, and the Kumarakom Bird Sanctuary for herons, egrets and kingfishers." },
      { title: "Village canoe and shikara rides", text: "Narrow canals the big houseboats can't reach, in a small country boat or covered shikara." },
      { title: "Kuttanad paddy fields", text: "Kerala's 'rice bowl', farmed below sea level behind dykes, best seen by canoe." },
      { title: "Snake boat races", text: "In August, the Nehru Trophy Boat Race on Punnamada Lake brings giant chundan vallams and huge crowds." },
      { title: "Local cuisine", text: "Karimeen pollichathu (pearl spot fish in banana leaf), Kerala fish curry and appam fresh from the kitchen." },
    ],
    facts: [
      { label: "Main hubs", value: "Alleppey, Kumarakom, Kollam" },
      { label: "Best time", value: "September to March" },
      { label: "Ideal stay", value: "1–2 nights" },
      { label: "Nearest airport", value: "Kochi (COK)" },
    ],
    tips: [
      "Book houseboats early for December and January, the peak season.",
      "A day cruise works if you're short on time, but the overnight stay is the real experience.",
      "Monsoon (June to August) is lush and quiet, with lower rates.",
    ],
    faqs: [
      { q: "Which is better for the backwaters, Alleppey or Kumarakom?", a: "Alleppey has the most houseboats and the liveliest canals. Kumarakom is quieter and known for lakeside resorts. Many travellers stay at one and cruise from the other." },
      { q: "How many days do I need for the Kerala backwaters?", a: "One night on a houseboat plus a night at a lakeside resort gives a relaxed, complete experience." },
      { q: "Can you visit the backwaters during the monsoon?", a: "Yes. Cruises run through most of the monsoon and the scenery is at its greenest, though heavy rain can occasionally pause sailing." },
    ],
    packageSlugs: ["classic-circuit", "grand-kerala-tour", "backwater-wellness-special"],
  },
  {
    slug: "munnar",
    title: "Munnar Tea Hills",
    name: "Munnar",
    eyebrow: "Hill Station",
    tagline: "Rolling tea gardens, misty peaks and cool mountain air in Kerala's favourite hill station.",
    intro: [
      "Munnar sits high in the Western Ghats in Idukki district, where three mountain streams meet. The hills around town are carpeted in tea estates that date back to the British era, and the air stays cool all year.",
      "It is the classic Kerala hill-station escape, about four hours' drive from Kochi, and a natural first stop before the spice country of Thekkady and the Alleppey backwaters.",
    ],
    highlightsTitle: "Top Things to Do in Munnar",
    highlights: [
      { title: "Eravikulam National Park", text: "Rolling grasslands and the best place to see the endangered Nilgiri tahr up close." },
      { title: "Tea estates and Tea Museum", text: "Walk through the plantations and learn how tea is processed at the KDHP Tea Museum." },
      { title: "Anamudi", text: "At 2,695 metres, the highest peak in South India, rising above Eravikulam." },
      { title: "Top Station", text: "Viewpoint on the Kerala–Tamil Nadu border with sweeping views over the valleys and clouds." },
      { title: "Mattupetty Dam and Echo Point", text: "Boating on the reservoir and the famous echo across the lake." },
      { title: "Kolukkumalai sunrise", text: "A jeep ride to one of the highest tea estates in the world for sunrise above the clouds." },
    ],
    facts: [
      { label: "Location", value: "Idukki district, Western Ghats" },
      { label: "Best time", value: "September to May" },
      { label: "Ideal stay", value: "2 nights" },
      { label: "From Kochi", value: "About 130 km (4 hours)" },
    ],
    tips: [
      "Carry a light jacket; mornings and evenings are cool even in summer.",
      "Eravikulam usually closes for a few weeks in early spring for the Nilgiri tahr calving season.",
      "The Neelakurinji flower carpets the hills only once every 12 years; the next bloom is expected around 2030.",
    ],
    faqs: [
      { q: "How many days are enough for Munnar?", a: "Two nights lets you cover Eravikulam, the tea estates, Mattupetty and Top Station without rushing." },
      { q: "What is the best time to visit Munnar?", a: "September to May has the clearest weather. The monsoon months are misty and green but can bring road delays." },
      { q: "Can Munnar be combined with Thekkady and Alleppey?", a: "Yes, that is Kerala's classic circuit. See our Classic Circuit and Grand Kerala Tour packages." },
    ],
    packageSlugs: ["classic-circuit", "grand-kerala-tour"],
  },
  {
    slug: "wayanad",
    title: "Wayanad Highlands",
    name: "Wayanad",
    eyebrow: "Highlands",
    tagline: "Ancient caves, forest trails, waterfalls and coffee country in Kerala's green northern highlands.",
    intro: [
      "Wayanad is a plateau district in north Kerala, bordering Karnataka and Tamil Nadu. It is wilder and quieter than Munnar, with dense forest, wildlife sanctuaries and spice, coffee and tea plantations.",
      "It suits travellers who like the outdoors: trekking, caves, waterfalls and jungle stays, all a short drive up the hairpin bends of the Thamarassery Ghat from Calicut.",
    ],
    highlightsTitle: "Top Things to Do in Wayanad",
    highlights: [
      { title: "Edakkal Caves", text: "Rock shelters carved with Neolithic engravings, reached by a short climb up Ambukuthi Hill." },
      { title: "Chembra Peak", text: "A trek to the heart-shaped lake on the way to one of Wayanad's highest summits." },
      { title: "Banasura Sagar Dam", text: "India's largest earthen dam, with speedboats and islands scattered across the reservoir." },
      { title: "Wayanad Wildlife Sanctuary", text: "Jeep safaris at Muthanga and Tholpetty for elephants, deer and, with luck, big cats." },
      { title: "Soochipara Falls", text: "A three-tiered waterfall reached by a walk through forest and tea gardens." },
      { title: "Plantation stays", text: "Homestays and resorts set in coffee, pepper and cardamom estates." },
    ],
    facts: [
      { label: "Location", value: "North Kerala, Western Ghats" },
      { label: "Best time", value: "October to May" },
      { label: "Ideal stay", value: "2–3 nights" },
      { label: "From Calicut", value: "About 75 km (2.5 hours)" },
    ],
    tips: [
      "Chembra Peak and some trails need permits from the Forest Department and may close in the monsoon.",
      "Book wildlife safaris early; entries are limited and run at fixed times.",
      "Combine Wayanad with Bekal or Kannur for a coast-and-hills northern circuit.",
    ],
    faqs: [
      { q: "How many days are enough for Wayanad?", a: "Three nights covers the caves, dam, waterfalls and a safari at an easy pace." },
      { q: "What is the nearest airport to Wayanad?", a: "Calicut (Kozhikode) International Airport is the most convenient; Kannur is another option." },
      { q: "Is Wayanad good for families?", a: "Yes. Banasura Sagar, Pookode Lake and the plantation stays are easy and fun for all ages." },
    ],
    packageSlugs: ["north-kerala-wilderness-heritage"],
  },
  {
    slug: "alleppey-houseboats",
    title: "Alleppey Houseboats",
    name: "Alleppey Houseboats",
    eyebrow: "Alappuzha",
    tagline: "A private, floating home on the backwaters of the 'Venice of the East'.",
    intro: [
      "Alleppey (Alappuzha) is the houseboat capital of Kerala. Its houseboats, called kettuvallams, were once rice barges; today they are floating homes with bedrooms, a sun deck and a crew who cook for you on board.",
      "A typical cruise boards around noon, sails the canals and Vembanad Lake through the afternoon, then moors for the night by a quiet village before returning the next morning.",
    ],
    highlightsTitle: "Your Houseboat Experience",
    highlights: [
      { title: "Private houseboat", text: "The whole boat is yours: from one-bedroom boats for couples to large boats for families and groups." },
      { title: "Premium and luxury classes", text: "Choose deluxe, premium or luxury boats, with air-conditioned bedrooms and glass-walled upper decks." },
      { title: "Onboard Kerala meals", text: "Lunch, tea, dinner and breakfast cooked fresh by your crew, including fresh fish from the lake." },
      { title: "Sunset on Vembanad Lake", text: "Watch the sun go down over the widest stretch of the backwaters." },
      { title: "Village life", text: "Glide past churches, temples, toddy shops and paddy fields, and stop to meet local families." },
      { title: "Shikara and canoe add-ons", text: "Explore narrow canals too small for the houseboat on a short shikara or canoe ride." },
    ],
    facts: [
      { label: "Check-in / out", value: "Around 12 noon / 9 am" },
      { label: "Best time", value: "September to March" },
      { label: "Ideal stay", value: "1 night on board" },
      { label: "From Kochi", value: "About 55 km (1.5 hours)" },
    ],
    tips: [
      "Houseboats stop cruising and moor in the early evening by local regulation, so the sailing happens by day.",
      "Ask for a boat with an upper deck for the best views.",
      "Tell us about dietary needs in advance; vegetarian and Jain menus are easy to arrange.",
    ],
    faqs: [
      { q: "Is the houseboat private?", a: "Yes. Our houseboat bookings are private; you share the boat only with your own group and the crew." },
      { q: "What is included in a houseboat stay?", a: "Accommodation, the cruise and all meals from lunch to next morning's breakfast. Drinks and extra activities are usually additional." },
      { q: "Day cruise or overnight?", a: "A day cruise gives a taste, but staying overnight lets you enjoy the sunset, dinner on the water and a peaceful morning." },
    ],
    packageSlugs: ["classic-circuit", "grand-kerala-tour"],
  },
  {
    slug: "kovalam",
    title: "Kovalam Beaches",
    name: "Kovalam",
    eyebrow: "Coast",
    tagline: "Crescent beaches, a red-and-white lighthouse and Ayurveda by the Arabian Sea.",
    intro: [
      "Kovalam is Kerala's best-known beach destination, just outside the state capital, Thiruvananthapuram (Trivandrum). Three crescent-shaped beaches sit side by side, separated by rocky headlands.",
      "It is the perfect way to end a Kerala tour: sea-view resorts, fresh seafood, Ayurvedic treatments and easy trips to Trivandrum's temples and museums.",
    ],
    highlightsTitle: "Top Things to Do in Kovalam",
    highlights: [
      { title: "Lighthouse Beach", text: "The liveliest of the three beaches, with cafés, and views from the top of the Vizhinjam lighthouse." },
      { title: "Hawa and Samudra beaches", text: "Quieter stretches of sand for swimming, sunbathing and watching the fishing boats come in." },
      { title: "Ayurvedic treatments", text: "Kerala is the home of Ayurveda; many resorts offer massages and multi-day wellness programmes." },
      { title: "Poovar", text: "A short drive south, where the backwaters, a river and the sea meet at a golden-sand estuary." },
      { title: "Trivandrum city", text: "The Padmanabhaswamy Temple area, Napier Museum and Kuthiramalika Palace." },
      { title: "Varkala cliffs", text: "A day trip to red laterite cliffs above the sea and the pilgrim beach of Papanasam." },
    ],
    facts: [
      { label: "Location", value: "Near Thiruvananthapuram" },
      { label: "Best time", value: "September to March" },
      { label: "Ideal stay", value: "1–3 nights" },
      { label: "From Trivandrum airport", value: "About 15 km (30 minutes)" },
    ],
    tips: [
      "Swim only in marked zones near the lifeguards; the sea can be rough, especially in the monsoon.",
      "The Padmanabhaswamy Temple admits Hindus only and has a strict dress code.",
      "Ayurvedic programmes work best over several days; tell us early if you'd like one.",
    ],
    faqs: [
      { q: "Kovalam or Varkala: which is better?", a: "Kovalam has more resorts and gentle beaches close to Trivandrum. Varkala is known for dramatic cliffs and a laid-back café scene. They're about an hour apart, so you can see both." },
      { q: "How many days should I spend in Kovalam?", a: "One night works at the end of a tour; two or three if you want Ayurveda or a proper beach break." },
      { q: "Is Kovalam good for families?", a: "Yes. Hawa and Samudra beaches are calmer, and resorts offer pools and family rooms." },
    ],
    packageSlugs: ["grand-kerala-tour"],
  },
  {
    slug: "pilgrimage-tours",
    title: "Pilgrimage: Sabarimala & Guruvayur",
    name: "Pilgrimage Tours",
    eyebrow: "Pilgrimage",
    tagline: "Temple journeys planned with care, so you can focus on the darshan.",
    intro: [
      "Kerala is home to some of South India's most revered shrines. Sabarimala, the hilltop temple of Lord Ayyappa, draws millions of devotees each season, while the Guruvayur Sri Krishna Temple is one of the most important Krishna temples in India.",
      "We handle the logistics for pilgrims and families: comfortable transport, stays near the temples and practical guidance on customs and timings, so the journey stays peaceful.",
    ],
    highlightsTitle: "Kerala's Great Pilgrim Centres",
    highlights: [
      { title: "Sabarimala Sree Dharma Sastha Temple", text: "The hill shrine of Lord Ayyappa in the forests of Pathanamthitta, reached by a trek from Pamba." },
      { title: "Mandala–Makaravilakku season", text: "The main pilgrimage season runs from mid-November to mid-January, following the 41-day vratham." },
      { title: "Guruvayur Sri Krishna Temple", text: "Known as the 'Dwarka of the South', in Thrissur district, famous for its rituals and weddings." },
      { title: "Punnathur Kotta", text: "The elephant sanctuary near Guruvayur that houses the temple's elephants." },
      { title: "Other sacred sites", text: "Padmanabhaswamy (Trivandrum), Chottanikkara, Ettumanoor and Vaikom temples can be added to your route." },
      { title: "Interfaith heritage", text: "Kerala is also home to historic churches such as Malayattoor and the Cheraman Juma Masjid at Kodungallur." },
    ],
    facts: [
      { label: "Sabarimala season", value: "Mid-November to mid-January" },
      { label: "Sabarimala access", value: "Trek from Pamba" },
      { label: "Guruvayur", value: "Open year-round" },
      { label: "Nearest airport", value: "Kochi (COK)" },
    ],
    tips: [
      "Sabarimala darshan requires advance booking through the official virtual queue; book as soon as slots open.",
      "Guruvayur has a strict dress code and admits Hindus only inside the temple.",
      "Temple customs and entry rules can change; we confirm the current guidelines before you travel.",
    ],
    faqs: [
      { q: "When is the best time for a Sabarimala pilgrimage?", a: "The Mandala–Makaravilakku season from mid-November to mid-January. The temple also opens for the first few days of each Malayalam month." },
      { q: "What is the dress code at Guruvayur?", a: "Men wear a mundu (dhoti) without a shirt; women wear a saree, set-mundu or salwar. We'll brief you before your visit." },
      { q: "Can you combine Sabarimala and Guruvayur in one trip?", a: "Yes. We plan combined routes with stays in between, and can add other temples on request." },
    ],
    packageSlugs: [],
  },
];
