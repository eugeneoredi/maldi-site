import Reveal from "./Reveal";
import { Eyebrow, Heading } from "./Bits";
import { dining, heritage, photoSpots } from "../data/content";

export default function Culture() {
  return (
    <section className="bg-sand py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <Eyebrow>Beyond the itinerary</Eyebrow>
          <Heading>Taste, heritage & the light</Heading>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-10 mt-14">
          <Reveal delay={0.05}>
            <h3 className="font-display text-2xl text-ink mb-6">Dining experiences</h3>
            <div className="space-y-6">
              {dining.map((d) => (
                <div key={d.title} className="border-l-2 border-rust pl-5">
                  <h4 className="font-medium text-ink mb-1">{d.title}</h4>
                  <p className="text-ink/82 text-sm leading-relaxed">{d.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="font-display text-2xl text-ink mb-6">Swahili heritage & culture</h3>
            <ul className="space-y-3">
              {heritage.map((h) => (
                <li key={h} className="flex gap-3 text-ink/85 text-sm leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-lagoon mt-1.5 shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <h3 className="font-display text-2xl text-ink mb-6">Photography spots</h3>
            <div className="space-y-5">
              {photoSpots.map((p) => (
                <div key={p.title} className="group">
                  <div className="flex items-baseline justify-between gap-3">
                    <h4 className="font-medium text-ink group-hover:text-rust transition-colors">
                      {p.title}
                    </h4>
                    <span className="font-mono text-[10px] text-ink/45 shrink-0">{p.time}</span>
                  </div>
                  <p className="text-ink/82 text-sm leading-relaxed mt-1">{p.text}</p>
                  <p className="font-mono text-[10px] text-ink/40 mt-1 uppercase tracking-wide">
                    {p.location}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
