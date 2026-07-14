// Content sourced & curated from the "Malindi Curated / MALDI" client deck.
// Numeric pricing was never provided in the deck (marked "rates on request"),
// so package sections surface inclusions + a quote CTA instead of invented figures.

export const experiences = [
  {
    id: "golden-dunes",
    name: "Golden Dunes & Marafa",
    coords: "03\u00B009'S 40\u00B008'E",
    duration: "Full day \u2014 6:30am to 7:30pm",
    blurb:
      "Sunrise on the sand, quad bikes across the Mambrui dunes, camels along the shoreline, and a sunset hike into the red canyons of Hell's Kitchen.",
    highlights: [
      "Sunrise at Golden Beach",
      "Quad biking across Mambrui dunes",
      "Camel rides along the coast",
      "Marafa Hell's Kitchen sunset hike",
      "Traditional Giriama dance performance",
    ],
    inclusions: "Transport, professional guide, all entry fees, lunch",
  },
  {
    id: "marine-creek",
    name: "Marine & Creek Adventure",
    coords: "03\u00B013'S 40\u00B007'E",
    duration: "Full day \u2014 8:30am to 7:30pm",
    blurb:
      "Glass-bottom boats over the reef, snorkeling with dolphins for company, then a slow paddle through Mida Creek's mangroves into a sunset aperitif.",
    highlights: [
      "Glass boat tour of Malindi Marine Park",
      "Snorkeling & dolphin watching",
      "Mida Creek canoe through the mangroves",
      "Sunset aperitif at the Crab Shack",
    ],
    inclusions: "Transport, guide, entry fees, gear, lunch, aperitif",
  },
  {
    id: "heritage-nature",
    name: "Heritage & Nature Tour",
    coords: "03\u00B013'S 40\u00B007'E",
    duration: "Full day \u2014 9:00am to 7:30pm",
    blurb:
      "From the Vasco da Gama Pillar to hippos on the Sabaki, falcons on the glove, and artisan stalls in the old town \u2014 five centuries of coast in one day.",
    highlights: [
      "NMK sites \u2014 Vasco da Gama Pillar, Malindi Museum & Portuguese Chapel",
      "Falconry of Kenya \u2014 live bird-of-prey demonstrations",
      "Sabaki Estuary \u2014 hippo viewing, birding & nature walks",
      "Curio Market \u2014 local crafts & artisan souvenirs",
      "Municipal Market \u2014 authentic local market experience",
    ],
    inclusions: "Transport, professional guide, all entry fees, lunch",
  },
  {
    id: "resort-day-pass",
    name: "Resort Day Pass",
    coords: "03\u00B013'S 40\u00B007'E",
    duration: "Full day \u2014 10:00am to 7:00pm",
    blurb:
      "For the days that need nothing but a pool, a lounger and the tide going out. Standard and premium resort access, no itinerary required.",
    highlights: [
      "Resort day pass with pool access",
      "Beach loungers & umbrellas",
      "Lunch credit included",
      "Optional sunset drink",
    ],
    inclusions: "Transport, day pass, sunset drink \u2014 Standard or Premium Resort",
  },
];

export const packages = [
  {
    id: "4-day-ultimate",
    name: "4-Day Ultimate",
    tag: "Comprehensive coastal immersion",
    days: [
      {
        day: "Day 1",
        title: "Marine Adventure",
        text: "Sunrise at Golden Beach, glass boat tour & snorkeling, fresh seafood lunch by the ocean.",
      },
      {
        day: "Day 2",
        title: "Golden Dunes",
        text: "Mambrui quad biking, traditional camel rides, Marafa sunset hike & dance.",
      },
      {
        day: "Day 3",
        title: "Nature & Culture",
        text: "Sabaki Estuary with SARICODO community, falconry demonstrations, Mida Creek sunset canoe & aperitif.",
      },
      {
        day: "Day 4",
        title: "Heritage & Farewell",
        text: "NMK Malindi heritage sites, local markets, farewell toast & departure.",
      },
    ],
  },
  {
    id: "4-day-highlights",
    name: "4-Day Highlights",
    tag: "Best experiences, condensed",
    overview: [
      "Duration: 4 days / 3 nights",
      "Best for travelers with limited time seeking authentic highlights",
      "Focus: marine, culture & nature essentials",
    ],
    days: [
      { day: "Day 1", title: "Marine Park & snorkeling", text: "" },
      { day: "Day 2", title: "Mambrui dunes & Marafa sunset", text: "" },
      { day: "Day 3", title: "Heritage sites & Mida Creek", text: "" },
      { day: "Day 4", title: "Markets & departure", text: "" },
    ],
    notes: "Accommodation not included \u00B7 flexible start times \u00B7 custom add-ons available",
  },
  {
    id: "7-day-immersion",
    name: "7-Day Complete Immersion",
    tag: "The definitive Malindi experience",
    days: [
      { day: "Day 1", title: "Marine Adventure", text: "Glass boat, snorkeling, dolphin watching" },
      { day: "Day 2", title: "Golden Dunes", text: "Mambrui quad biking, camel rides" },
      { day: "Day 3", title: "Marafa Sunset", text: "Hell's Kitchen hike, traditional dance" },
      { day: "Day 4", title: "Nature Discovery", text: "Sabaki hippos, falconry show" },
      { day: "Day 5", title: "Creek Experience", text: "Mida Creek canoe, sunset aperitif" },
      { day: "Day 6", title: "Heritage Tour", text: "NMK sites, markets, Gede Ruins" },
      { day: "Day 7", title: "Resort Farewell", text: "Beach day, farewell dinner" },
    ],
    notes:
      "Includes transport, professional guide, entry fees & daily meals. Accommodation coordination available at a convenient fee.",
  },
];

export const partners = [
  {
    name: "Mambrui \u2014 Waves & Dunes",
    coords: "03\u00B009'S 40\u00B008'E",
    text: "Quad biking across golden sand dunes, camel rides along pristine beaches, and coastal adventures where the desert meets the sea.",
  },
  {
    name: "Marafa Hell's Kitchen",
    coords: "03\u00B008'S 40\u00B004'E",
    text: "Sunset hikes through ancient sandstone gorges, traditional Giriama dance performances, and geological wonders millions of years in the making.",
  },
  {
    name: "NMK Malindi \u2014 National Museums of Kenya",
    coords: "03\u00B013'S 40\u00B007'E",
    text: "The historic Vasco da Gama Pillar, artifacts at the Malindi Museum, and the Portuguese Chapel \u2014 centuries of coastal heritage preserved.",
  },
  {
    name: "Falconry of Kenya",
    coords: "03\u00B013'S 40\u00B007'E",
    text: "Bird-of-prey demonstrations with expert falconers \u2014 eagles, hawks and owls in action, educational for all ages.",
  },
  {
    name: "Sabaki Estuary \u2014 SARICODO",
    coords: "03\u00B010'S 40\u00B007'E",
    text: "Hippo watching, birding across 200+ species, and quad biking along the estuary \u2014 community-led conservation tourism.",
  },
  {
    name: "Mida Creek \u2014 Crab Shack",
    coords: "03\u00B021'S 39\u00B059'E",
    text: "Canoe excursions through mangroves, sunset aperitifs, and fresh seafood dining on Kenya's coast.",
  },
];

export const officialPartners = [
  {
    name: "Kenya Wildlife Service (KWS)",
    text: "Manages Malindi Marine Park entry and conservation efforts. All marine experiences are coordinated through KWS-approved operators.",
  },
  {
    name: "National Museums of Kenya (NMK)",
    text: "Custodians of Malindi's heritage sites, including the Vasco da Gama Pillar, Malindi Museum, and the historic Portuguese Chapel.",
  },
  {
    name: "Local community organizations",
    text: "Marafa Hell's Kitchen, SARICODO (Sabaki), Mida Creek conservancies, Gede Ruins and community boat operators \u2014 sustaining tourism that stays local.",
  },
];

export const valueProps = [
  {
    title: "Curated local partnerships",
    text: "We connect travelers with authentic Malindi experiences through trusted local operators, ensuring seamless coordination from the first message to the last sunset.",
    list: ["Mambrui Dunes", "Marafa Hell's Kitchen", "National Museums of Kenya", "Falconry of Kenya"],
  },
  {
    title: "Verified partner pricing",
    text: "Every experience is picked and every price verified directly with partners \u2014 no hidden fees, no surprises. Just genuine Kenyan hospitality.",
    list: ["Sabaki Estuary", "Mida Creek Crab Shack", "Malindi Marine Park"],
  },
];

export const whyChoose = [
  {
    title: "Verified local partnerships",
    text: "All rates confirmed directly with 7+ trusted partners including Mambrui, Marafa, NMK, Falconry, Sabaki and Mida Creek. No middlemen, no surprises.",
  },
  {
    title: "Transparent pricing",
    text: "Every cost itemized upfront \u2014 entry fees, transport, meals and experiences clearly stated before you book.",
  },
  {
    title: "Authentic experiences",
    text: "Curated by locals who know Malindi's hidden gems beyond the tourist trail.",
  },
  {
    title: "Expert local guides",
    text: "Knowledgeable guides with deep community connections across every partner site.",
  },
];

export const seasons = [
  {
    name: "Peak Season",
    range: "Dec \u2014 Mar",
    text: "Ideal for beach activities, marine adventures and whale shark sightings. Book 2\u20133 weeks ahead for premium experiences.",
  },
  {
    name: "Green Season",
    range: "Apr \u2014 Jun",
    text: "Lower rates, lush landscapes, excellent birding at Sabaki. Perfect for nature enthusiasts seeking quieter experiences.",
  },
  {
    name: "Shoulder Season",
    range: "Jul \u2014 Nov",
    text: "Great weather, fewer crowds. Optimal for cultural tours, Marafa sunsets and falconry visits. Book a week ahead.",
  },
];

export const bookingSteps = [
  {
    title: "Inquire",
    text: "Reach out via WhatsApp, email or Instagram with your travel dates, group size and interests. Our team responds within 24 hours.",
  },
  {
    title: "Customize",
    text: "Work directly with the MALDI team to tailor your itinerary \u2014 choose experiences, adjust timings, personalize every detail.",
  },
  {
    title: "Confirm",
    text: "Receive your detailed itinerary and transparent pricing. Secure your booking with a 50% deposit \u2014 we handle the rest.",
  },
];

export const dining = [
  {
    title: "Crab Shack at Mida Creek",
    text: "Fresh seafood, sunset aperitifs, and canoe dining experiences with locally caught crab and fish.",
  },
  {
    title: "Traditional Swahili cuisine",
    text: "Authentic coastal flavors \u2014 pilau, biryani, coconut fish curry, and freshly grilled lobster.",
  },
  {
    title: "Beachfront dining partners",
    text: "Curated restaurant experiences at premium Malindi resorts with ocean views and local specialties.",
  },
];

export const heritage = [
  "Rich Swahili trading history dating back to the 9th century",
  "UNESCO-recognized Gede Ruins showcase ancient Swahili civilization",
  "Traditional crafts \u2014 intricate wood carving, basket weaving and dhow building",
  "Vibrant markets featuring local artisans and handmade goods",
  "Community-led cultural experiences and traditional dance performances",
  "Portuguese colonial heritage at the Vasco da Gama Pillar & Chapel",
  "Local fishing traditions preserved through generations",
];

export const photoSpots = [
  {
    title: "Dhows at Sunset",
    time: "6:00\u20136:45pm",
    location: "Old Town jetty & Coco Beach",
    text: "Golden-hour magic \u2014 traditional dhows silhouetted against orange skies.",
  },
  {
    title: "Hell's Kitchen Formations",
    time: "Sunset, for the light",
    location: "Marafa Depression",
    text: "Dramatic sandstone pillars and canyons in impossible reds and oranges.",
  },
  {
    title: "Marine Life & Coral Gardens",
    time: "Mid-morning, calm water",
    location: "Malindi Marine Park",
    text: "Colorful reef fish and sea turtles \u2014 an underwater photography paradise.",
  },
  {
    title: "Gede Ruins",
    time: "Early morning light",
    location: "Gede National Monument",
    text: "Ancient Swahili architecture with a mystical forest backdrop.",
  },
];

export const responsibleTourism = [
  {
    title: "Community partnerships",
    text: "Direct collaboration with Mambrui, SARICODO, Crab Shack & local guides ensures tourism benefits their families.",
  },
  {
    title: "Local employment",
    text: "100% of our guides, drivers & operators are Malindi residents, creating sustainable livelihoods.",
  },
  {
    title: "Environmental stewardship",
    text: "We support Marine Park conservation, mangrove protection at Mida Creek & sustainable practices at Sabaki Estuary.",
  },
  {
    title: "Cultural preservation",
    text: "Partnering with NMK Malindi & Marafa communities to honor heritage through authentic storytelling & traditional experiences.",
  },
];

export const guests = [
  {
    title: "Couples",
    text: "Romantic escapes \u2014 sunset dhow cruises, beachfront dining, and secluded coastal retreats.",
  },
  {
    title: "Families",
    text: "Safe beach activities, wildlife encounters at Sabaki, and educational heritage tours.",
  },
  {
    title: "Corporate groups",
    text: "Team building at resorts, curated excursions, and exclusive venue access.",
  },
  {
    title: "Adventure seekers",
    text: "Quad biking at Mambrui, snorkeling at Marine Park, and Marafa canyon hikes.",
  },
  {
    title: "Cultural enthusiasts",
    text: "Gede Ruins exploration, NMK heritage sites, traditional dance, and local market tours.",
  },
];

export const safety = [
  {
    title: "24/7 support hotline",
    text: "Reach us anytime for immediate assistance during your Malindi experience.",
  },
  {
    title: "Local expertise",
    text: "Deep roots in Malindi with established relationships across every partner site and local authority.",
  },
  {
    title: "Emergency protocols",
    text: "Comprehensive emergency response plans with direct links to medical facilities, coast guard and KWS rangers.",
  },
  {
    title: "Travel insurance",
    text: "We strongly recommend comprehensive travel insurance covering medical emergencies, cancellation and adventure activities.",
  },
];

export const transport = [
  {
    title: "Airport transfers",
    text: "Malindi Airport pickup/drop-off included in all packages. Private air-conditioned vehicles with experienced local drivers. Mombasa transfers available on request (+2.5 hrs).",
  },
  {
    title: "Inter-attraction transport",
    text: "Every tour includes dedicated transport between sites \u2014 comfortable 4x4 vehicles for dune and estuary excursions, licensed and insured with first-aid kits onboard.",
  },
  {
    title: "Vehicle options",
    text: "Minivans (up to 7), Safari Land Cruisers (up to 6), premium SUVs for smaller groups. Wheelchair-accessible vehicles available with 48-hour notice.",
  },
];

export const accommodation = [
  "Beachfront luxury resorts",
  "Mid-range coastal hotels",
  "Budget-friendly villas & guesthouses",
  "Airbnbs & serviced apartments",
];

export const corporate = {
  offerings: [
    {
      title: "Corporate retreat \u2014 full day",
      text: "A customizable itinerary combining adventure, culture and team activities, including facilitated team challenges at Mambrui Dunes.",
    },
    {
      title: "Incentive travel programs",
      text: "Reward top performers with curated Malindi experiences \u2014 VIP transport, premium resort access, exclusive sunset dinners.",
    },
    {
      title: "Conference & events support",
      text: "Venue coordination, group logistics, and post-conference excursions for delegates.",
    },
  ],
  reasons: [
    "Groups of 10\u2013100+ accommodated",
    "Fully customizable itineraries",
    "Single point of contact coordination",
    "Verified partner network",
    "Transparent, all-inclusive pricing",
    "CSR integration options available",
  ],
};

export const faqs = [
  {
    q: "How do I book a tour or package?",
    a: "Contact us via WhatsApp, email, or Instagram. We'll confirm availability and send a detailed itinerary within 24 hours.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept M-Pesa, bank transfer, and cash. A 50% deposit secures your booking, with the balance due 48 hours before your experience.",
  },
  {
    q: "Can I customize my itinerary?",
    a: "Absolutely. All packages can be tailored to your interests, group size and schedule \u2014 just let us know your preferences.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Full refund for cancellations 72 hours in advance. 50% refund for 24\u201372 hours' notice. No refund within 24 hours, but rebooking options are available.",
  },
  {
    q: "Are prices confirmed with partners?",
    a: "Yes \u2014 all rates are verified directly with our partners. No hidden fees, no surprises.",
  },
];

export const contact = {
  phone: "+254 741 157 181",
  email: "hellomaldi003@gmail.com",
  location: "Malindi, Kenya",
  instagram: "@maldi.ke",
};
