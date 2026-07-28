import Reveal from "./Reveal";
import { Eyebrow, Heading } from "./Bits";
import { partners, officialPartners } from "../data/content";

export default function Partners() {
  return (
    <section id="partners" className="bg-sand-3 py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <Eyebrow>Ground truth</Eyebrow>
          <Heading>Our partners on the coast</Heading>
          <p className="text-ink/85 max-w-xl mt-5 leading-relaxed">
            Every rate on this site is confirmed directly with the operators
            who run the experience. No middlemen, no markups you can't see.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {partners.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.08}>
              <div className="group h-full bg-sand rounded-2xl p-7 border border-ink/8 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-ink/5">
                <h3 className="font-display text-xl md:text-2xl text-ink mb-3 leading-tight">
                  {p.name}
                </h3>
                <p className="text-ink/85 text-lg leading-relaxed">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 pt-12 border-t border-ink/10">
            <p className="font-mono text-[11px] uppercase tracking-widest text-ink/50 mb-8">
              Working within the official framework
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {officialPartners.map((o) => (
                <div key={o.name}>
                  <h4 className="font-display text-lg text-ink mb-2">{o.name}</h4>
                  <p className="text-ink/82 text-lg leading-relaxed">{o.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
