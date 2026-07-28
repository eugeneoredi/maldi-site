import Reveal from "./Reveal";
import { Eyebrow, Heading } from "./Bits";
import { seasons } from "../data/content";

export default function Seasons() {
  return (
    <section className="bg-ink text-sand-3 py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <Eyebrow dark>Timing it right</Eyebrow>
          <Heading dark>Best time to visit</Heading>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-px bg-sand-2/15 mt-14 rounded-2xl overflow-hidden">
          {seasons.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.1} className="bg-ink">
              <div className="h-full p-8 md:p-10 hover:bg-ink-soft transition-colors duration-500">
                <p className="font-mono text-xs tracking-widest text-rust uppercase mb-3">
                  {s.range}
                </p>
                <h3 className="font-display text-2xl md:text-3xl mb-4">{s.name}</h3>
                <p className="text-sand-2/90 text-lg leading-relaxed">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="font-mono text-xs text-sand-2/50 mt-8 tracking-wide">
            Special events — Malindi Sea Turtle Festival (Feb) · Cultural Heritage Week (Aug)
          </p>
        </Reveal>
      </div>
    </section>
  );
}
