import { motion } from "framer-motion";
import { Coords } from "./Bits";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden bg-ink">
      <img
        src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=2400&auto=format&fit=crop"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-transparent to-transparent h-40" />

      <div className="relative max-w-7xl mx-auto w-full px-5 md:px-8 pb-16 md:pb-24 pt-40">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Coords className="text-sand-2">03°13'S 40°07'E — Malindi, Kenya</Coords>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[15vw] md:text-[9rem] leading-[0.82] text-sand-3 mt-4 -ml-1"
        >
          MALDI
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mt-6"
        >
          <p className="font-display italic text-2xl md:text-3xl text-sand-2 max-w-md">
            Beyond the beach.
          </p>
          <p className="text-sand-2/80 max-w-sm text-[15px] leading-relaxed">
            Curated dunes, mangroves, reef and ruins \u2014 booked through verified
            local partners, priced with no surprises. Malindi Curated is your
            single point of contact for the coast.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-wrap gap-3 mt-10"
        >
          <a
            href="#plan"
            className="font-mono text-[12px] tracking-wide uppercase bg-rust text-sand-3 px-6 py-3.5 rounded-full hover:bg-coral transition-colors"
          >
            Book your adventure
          </a>
          <a
            href="#experiences"
            className="font-mono text-[12px] tracking-wide uppercase border border-sand-2/40 text-sand-3 px-6 py-3.5 rounded-full hover:border-sand-2 transition-colors"
          >
            See experiences
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 right-6 md:right-10 hidden sm:flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-widest text-sand-2/70 uppercase [writing-mode:vertical-rl]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-8 bg-sand-2/60"
        />
      </motion.div>
    </section>
  );
}
