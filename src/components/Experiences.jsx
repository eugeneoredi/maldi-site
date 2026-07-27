import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import { Eyebrow, Heading, Coords } from "./Bits";
import { experiences } from "../data/content";

export default function Experiences() {
  const [openId, setOpenId] = useState(experiences[0].id);

  return (
    <section id="experiences" className="bg-sand py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <Eyebrow>Day tours</Eyebrow>
          <Heading>Four ways into Malindi</Heading>
          <p className="text-ink/85 max-w-xl mt-5 leading-relaxed">
            Each day trip is a self-contained story — pick one, or string a
            few together into a longer package below.
          </p>
        </Reveal>

        <div className="mt-14 divide-y divide-ink/10 border-t border-b border-ink/10">
          {experiences.map((exp, i) => {
            const isOpen = openId === exp.id;
            return (
              <Reveal key={exp.id} delay={i * 0.05}>
                <div>
                  <button
                    onClick={() => setOpenId(isOpen ? null : exp.id)}
                    className="w-full flex items-center justify-between gap-6 py-7 text-left group"
                  >
                    <div className="flex items-baseline gap-5">
                      <span className="font-mono text-xs text-rust w-6">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-2xl md:text-4xl text-ink group-hover:text-rust transition-colors">
                        {exp.name}
                      </span>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="font-display text-3xl text-ink shrink-0"
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 pb-10 pl-0 md:pl-11">
                          <div>
                            <Coords>{exp.duration}</Coords>
                            <p className="text-ink/85 leading-relaxed mt-3 max-w-lg">
                              {exp.blurb}
                            </p>
                          </div>
                          <div className="bg-sand-3 rounded-xl p-6">
                            <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50 mb-3">
                              Highlights
                            </p>
                            <ul className="space-y-2 mb-4">
                              {exp.highlights.map((h) => (
                                <li key={h} className="flex gap-3 text-base text-ink/80">
                                  <span className="w-1 h-1 rounded-full bg-rust mt-2 shrink-0" />
                                  {h}
                                </li>
                              ))}
                            </ul>
                            <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50 mb-1">
                              Inclusions
                            </p>
                            <p className="text-base text-ink/85">{exp.inclusions}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
