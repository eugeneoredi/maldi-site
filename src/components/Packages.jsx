import { useState } from "react";
import Reveal from "./Reveal";
import { Eyebrow, Heading } from "./Bits";
import { packages } from "../data/content";

export default function Packages() {
  const [active, setActive] = useState(packages[0].id);
  const pkg = packages.find((p) => p.id === active);

  return (
    <section id="packages" className="bg-ink text-sand-3 py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <Eyebrow dark>Multi-day packages</Eyebrow>
          <Heading dark>Journeys, not just excursions</Heading>
          <p className="text-sand-2/90 max-w-xl mt-5 leading-relaxed">
            Every package bundles transport, a professional guide, entry fees
            and local meals. Rates depend on group size and season — send us
            your dates and we'll quote within 24 hours.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mt-12 mb-10">
            {packages.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`font-mono text-[11px] tracking-wide uppercase px-5 py-3 rounded-full border transition-colors ${
                  active === p.id
                    ? "bg-rust border-rust text-sand-3"
                    : "border-sand-2/25 text-sand-2/90 hover:border-sand-2/60"
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal key={active} delay={0}>
          <div className="grid md:grid-cols-[1fr_1.6fr] gap-10">
            <div>
              <h3 className="font-display text-3xl md:text-4xl mb-3">{pkg.name}</h3>
              <p className="text-lagoon font-mono text-xs tracking-widest uppercase mb-5">
                {pkg.tag}
              </p>
              {pkg.overview && (
                <ul className="space-y-2 mb-6">
                  {pkg.overview.map((o) => (
                    <li key={o} className="text-sand-2/90 text-lg leading-relaxed">
                      {o}
                    </li>
                  ))}
                </ul>
              )}
              {pkg.notes && (
                <p className="text-sand-2/85 text-lg leading-relaxed border-t border-sand-2/15 pt-5">
                  {pkg.notes}
                </p>
              )}
              <a
                href="#plan"
                className="inline-block mt-7 text-[12.5px] font-semibold tracking-[0.06em] uppercase bg-sand-3 text-ink px-5 py-3 rounded-full hover:bg-rust hover:text-sand-3 transition-colors"
              >
                Request pricing
              </a>
            </div>

            <div className="relative pl-8 border-l border-sand-2/15">
              {pkg.days.map((d, i) => (
                <div key={d.day} className="relative pb-9 last:pb-0">
                  <span className="absolute -left-[35px] top-1 w-2.5 h-2.5 rounded-full bg-rust ring-4 ring-ink" />
                  <p className="font-mono text-[11px] tracking-widest text-rust uppercase mb-1">
                    {d.day}
                  </p>
                  <p className="font-display text-xl md:text-2xl mb-1">{d.title}</p>
                  {d.text && <p className="text-sand-2/90 text-lg leading-relaxed max-w-lg">{d.text}</p>}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
