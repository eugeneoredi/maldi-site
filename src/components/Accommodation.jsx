import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { Eyebrow, Heading } from "./Bits";
import { accommodation } from "../data/content";

const ACCENTS = [
  { border: "border-ink/12", badge: "bg-lagoon-deep text-sand-3" },
  { border: "border-rust/30", badge: "bg-rust text-sand-3" },
  { border: "border-ink/12", badge: "bg-ink text-sand-3" },
];

// Every JSON file added to src/content/accommodation/ (via the CMS at /admin,
// or by hand) is picked up here automatically at build time — no code
// changes needed to add, edit, or remove a listing.
const listingModules = import.meta.glob("../content/accommodation/*.json", {
  eager: true,
});
const allListings = Object.values(listingModules).map((m) => m.default ?? m);

function listingsForTier(tierName) {
  return allListings.filter((l) => l.tier === tierName);
}

export default function Accommodation() {
  return (
    <section className="bg-sand-3 py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <Eyebrow>Where to stay</Eyebrow>
          <Heading>Accommodation</Heading>
          <p className="text-ink/82 text-lg leading-relaxed max-w-2xl mt-5">
            From boutique guesthouses to premium beach resorts, choose the
            stay that fits your trip — every tier is booked through verified
            local partners, with more listings added regularly.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-5 mt-14">
          {accommodation.map((tier, i) => {
            const accent = ACCENTS[i];
            const listings = listingsForTier(tier.tier);
            return (
              <Reveal key={tier.tier} delay={i * 0.08}>
                <div
                  className={`rounded-2xl bg-sand border ${accent.border} p-7 flex flex-col h-full`}
                >
                  <span
                    className={`inline-block self-start font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 ${accent.badge}`}
                  >
                    {tier.tier}
                  </span>
                  <h4 className="font-display text-xl text-ink mb-1">{tier.tagline}</h4>
                  <p className="font-mono text-[12px] uppercase tracking-wide text-ink/45 mb-4">
                    {tier.price}
                  </p>
                  <p className="text-ink/80 text-base leading-relaxed mb-5">
                    {tier.text}
                  </p>
                  <ul className="space-y-2 pt-4 border-t border-ink/8">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-ink/75 text-sm">
                        <span className="text-rust mt-0.5">&#10003;</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {listings.length > 0 && (
                    <div className="mt-6 pt-5 border-t border-ink/8 space-y-5">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-ink/40">
                        Featured stays
                      </p>
                      {listings.map((l) => (
                        <div key={l.name}>
                          {l.image && (
                            <img
                              src={l.image}
                              alt={l.name}
                              className="w-full h-32 object-cover rounded-lg mb-2"
                            />
                          )}
                          <h5 className="font-display text-lg text-ink">{l.name}</h5>
                          {l.description && (
                            <p className="text-ink/70 text-sm leading-relaxed">
                              {l.description}
                            </p>
                          )}
                          {l.price && (
                            <p className="font-mono text-[11px] uppercase tracking-wide text-rust mt-1">
                              {l.price}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  <Link
                    to="/#contact"
                    className={`block mt-auto pt-6 text-[12px] font-semibold tracking-[0.06em] uppercase text-center ${accent.badge} px-5 py-3 rounded-full hover:opacity-90 transition-opacity`}
                  >
                    Enquire about this tier
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
