import Reveal from "./Reveal";
import { Eyebrow, Heading } from "./Bits";
import { guests } from "../data/content";

export default function Guests() {
  return (
    <section className="bg-sand-3 py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <Eyebrow>Our guests</Eyebrow>
          <Heading>Built around who's traveling</Heading>
        </Reveal>

        <div className="flex flex-wrap gap-4 mt-14">
          {guests.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.06} className="flex-1 min-w-[240px]">
              <div className="group h-full bg-sand rounded-2xl p-7 transition-all duration-400 hover:bg-ink">
                <h3 className="font-display text-xl text-ink group-hover:text-sand-3 mb-2 transition-colors">
                  {g.title}
                </h3>
                <p className="text-ink/65 group-hover:text-sand-2/75 text-sm leading-relaxed transition-colors">
                  {g.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
