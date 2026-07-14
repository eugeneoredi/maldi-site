import Reveal from "./Reveal";
import { Eyebrow, Heading } from "./Bits";
import { corporate } from "../data/content";

export default function Corporate() {
  return (
    <section className="bg-lagoon-deep text-sand-3 py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14">
        <Reveal>
          <Eyebrow dark>For teams & organizations</Eyebrow>
          <Heading dark size="md">Corporate offerings</Heading>
          <div className="mt-8 space-y-6">
            {corporate.offerings.map((o) => (
              <div key={o.title}>
                <h4 className="font-medium mb-1">{o.title}</h4>
                <p className="text-sand-2/75 text-sm leading-relaxed">{o.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-mono text-[11px] uppercase tracking-widest text-sand-2/60 mb-5 mt-2 lg:mt-0">
            Why choose MALDI for corporate
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
            {corporate.reasons.map((r) => (
              <li key={r} className="flex gap-2.5 text-sm text-sand-2/85">
                <span className="text-rust">✓</span>
                {r}
              </li>
            ))}
          </ul>
          <a
            href="#plan"
            className="inline-block mt-8 font-mono text-[11px] tracking-wide uppercase bg-sand-3 text-ink px-5 py-3 rounded-full hover:bg-rust hover:text-sand-3 transition-colors"
          >
            Talk to us about your group
          </a>
        </Reveal>
      </div>
    </section>
  );
}
