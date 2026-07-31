import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { Eyebrow, Heading } from "./Bits";
import { responsibleTourism, safety, transport } from "../data/content";

function Block({ title, items }) {
  return (
    <Reveal>
      <h3 className="font-display text-2xl text-ink mb-6">{title}</h3>
      <div className="space-y-5">
        {items.map((it) => (
          <div key={it.title}>
            <h4 className="font-medium text-ink text-[15px] mb-1">{it.title}</h4>
            <p className="text-ink/82 text-lg leading-relaxed">{it.text}</p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

export default function Practical() {
  return (
    <section className="bg-sand-3 py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <Eyebrow>The fine print, made plain</Eyebrow>
          <Heading>Getting there, and staying safe</Heading>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-14 mt-14">
          <Block title="Responsible tourism" items={responsibleTourism} />
          <Block title="Your safety, our priority" items={safety} />
          <Block title="Transportation & logistics" items={transport} />
        </div>

        <Reveal>
          <div className="mt-20 md:mt-24 rounded-2xl bg-sand border border-ink/10 p-8 md:p-10 flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl text-ink mb-2">
                Where to stay
              </h3>
              <p className="text-ink/80 text-lg leading-relaxed max-w-xl">
                Basic, Standard and Premium accommodation tiers, all booked
                through verified local partners.
              </p>
            </div>
            <Link
              to="/accommodation"
              className="shrink-0 text-[12.5px] font-semibold tracking-[0.06em] uppercase bg-ink text-sand-3 px-6 py-3.5 rounded-full hover:bg-rust transition-colors"
            >
              View accommodation
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
