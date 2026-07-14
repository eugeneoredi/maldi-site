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
            <p className="text-ink/60 text-sm leading-relaxed">{it.text}</p>
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

          <Reveal>
            <h3 className="font-display text-2xl text-ink mb-6">Accommodation partners</h3>
            <p className="text-ink/60 text-sm leading-relaxed mb-5">
              From boutique guesthouses to premium beach resorts, our
              accommodation partners offer the perfect base for your Malindi
              adventure.
            </p>
            <div className="flex flex-wrap gap-2">
              {accommodation.map((a) => (
                <span
                  key={a}
                  className="font-mono text-[11px] uppercase tracking-wide bg-sand text-ink/70 px-3.5 py-2 rounded-full"
                >
                  {a}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
