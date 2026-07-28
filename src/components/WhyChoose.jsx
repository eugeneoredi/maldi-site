import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import Reveal from "./Reveal";
import { Eyebrow, Heading } from "./Bits";
import { whyChoose } from "../data/content";

function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start;
    const duration = 1200;
    function step(ts) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(progress * to));
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

const stats = [
  { to: 7, suffix: "+", label: "Verified local partners" },
  { to: 100, suffix: "%", label: "Malindi-resident guides & drivers" },
  { to: 24, suffix: "hr", label: "Inquiry response time" },
];

export default function WhyChoose() {
  return (
    <section className="bg-sand py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <Reveal>
              <Eyebrow>The case for MALDI</Eyebrow>
              <Heading>Why choose MALDI?</Heading>
            </Reveal>

            <div className="grid sm:grid-cols-3 gap-6 mt-10 mb-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-4xl md:text-5xl text-rust">
                    <Counter to={s.to} suffix={s.suffix} />
                  </p>
                  <p className="text-ink/82 text-xs mt-2 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-0 divide-y divide-ink/10">
            {whyChoose.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.08}>
                <div className="py-6 flex gap-5">
                  <span className="font-mono text-xs text-rust pt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="font-display text-xl text-ink mb-1.5">{w.title}</h4>
                    <p className="text-ink/82 text-lg leading-relaxed">{w.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
