import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import { Eyebrow, Heading } from "./Bits";

const MORE_LINKS = [
  {
    to: "/why-choose-us",
    label: "Why choose us",
    text: "What sets MALDI apart from booking direct.",
  },
  {
    to: "/guests",
    label: "Who it's for",
    text: "Couples, families, groups, and corporate teams.",
  },
  {
    to: "/seasons",
    label: "Best time to visit",
    text: "Seasonal guide to Malindi's weather and wildlife.",
  },
  {
    to: "/culture",
    label: "Culture & heritage",
    text: "Dining, history and photo-worthy spots.",
  },
  {
    to: "/practical",
    label: "Practical info",
    text: "Transport, safety and accommodation partners.",
  },
  {
    to: "/corporate",
    label: "Corporate & groups",
    text: "Retreats, incentive travel and events support.",
  },
];

export default function ExploreMore() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-sand py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <Eyebrow>There's more</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-6 mt-2">
            <Heading size="md">Explore the full picture</Heading>
            <button
              onClick={() => setOpen((v) => !v)}
              className="text-[12.5px] font-semibold tracking-[0.06em] uppercase bg-ink text-sand-3 px-6 py-3.5 rounded-full hover:bg-rust transition-colors shrink-0"
              aria-expanded={open}
            >
              {open ? "Show less" : "Show more"}
            </button>
          </div>
        </Reveal>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                {MORE_LINKS.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="group block rounded-2xl bg-sand-3 border border-ink/8 p-6 hover:border-rust/40 hover:bg-white transition-colors"
                  >
                    <h3 className="font-display text-xl text-ink mb-2 group-hover:text-rust transition-colors">
                      {l.label}
                    </h3>
                    <p className="text-ink/70 text-sm leading-relaxed">{l.text}</p>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
