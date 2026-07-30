import Reveal from "./Reveal";
import { Eyebrow, Heading } from "./Bits";
import { responsibleTourism, safety, transport, accommodation } from "../data/content";

function Block({ title, items }) {
  return (
    <Reveal>
      <h3 className="font-display text-2xl text-ink mb-6">{title}</h3>
      <div className="space-y-5">
        {items.map((it) => (
          <div key={it.title}>
            <h4 className="font-medium text-ink text-[15px] mb-1">{it.title}</h4>
            <p className="text-ink/82 text-lg leading-relaxed">{it.text}</p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

export default function Practical() {
  return (
    <section className="bg-sand-3 py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <Eyebrow>The fine print, made plain</Eyebrow>
          <Heading>Getting there, and staying safe</Heading>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-14 mt-14">
          <Block title="Responsible tourism" items={responsibleTourism} />
          <Block title="Your safety, our priority" items={safety} />
          <Block title="Transportation & logistics" items={transport} />
        </div>

        <Reveal>
          <div className="mt-20 md:mt-24">
            <h3 className="font-display text-2xl md:text-3xl text-ink mb-3">
              Accommodation partners
            </h3>
            <p className="text-ink/82 text-lg leading-relaxed max-w-2xl mb-10">
              From boutique guesthouses to premium beach resorts, choose the
              stay that fits your trip — every tier is booked through
              verified local partners.
            </p>

            <div className="grid sm:grid-cols-3 gap-5">
              {accommodation.map((tier, i) => {
                const accent = [
                  { border: "border-ink/12", badge: "bg-lagoon-deep text-sand-3" },
                  { border: "border-rust/30", badge: "bg-rust text-sand-3" },
                  { border: "border-ink/12", badge: "bg-ink text-sand-3" },
                ][i];
                return (
                  <div
                    key={tier.tier}
                    className={`rounded-2xl bg-sand border ${accent.border} p-7 flex flex-col`}
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
                    <ul className="space-y-2 mt-auto pt-4 border-t border-ink/8">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-ink/75 text-sm">
                          <span className="text-rust mt-0.5">&#10003;</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
