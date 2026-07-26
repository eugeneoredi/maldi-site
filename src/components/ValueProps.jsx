import Reveal from "./Reveal";
import { Eyebrow, Heading } from "./Bits";
import { valueProps } from "../data/content";

export default function ValueProps() {
  return (
    <section className="bg-sand-3 py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <Eyebrow>Why work with us</Eyebrow>
          <Heading>Our value proposition</Heading>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {valueProps.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <div className="group h-full bg-ink text-sand-3 rounded-2xl p-8 md:p-10 transition-transform duration-500 hover:-translate-y-1.5">
                <span className="font-mono text-[11px] tracking-widest text-rust">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl md:text-3xl mt-3 mb-4">{v.title}</h3>
                <p className="text-sand-2/92 text-[15px] leading-relaxed mb-6">{v.text}</p>
                <ul className="space-y-2">
                  {v.list.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sand-3/90 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-lagoon shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
