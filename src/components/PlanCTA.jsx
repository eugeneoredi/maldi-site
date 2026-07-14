import Reveal from "./Reveal";
import { Eyebrow, Heading } from "./Bits";
import { bookingSteps, contact } from "../data/content";

export default function PlanCTA() {
  const waLink = `https://wa.me/${contact.phone.replace(/[^\d]/g, "")}`;

  return (
    <section id="plan" className="bg-ink text-sand-3 py-24 md:py-32 px-5 md:px-8 relative overflow-hidden">
      <div
        className="absolute -right-32 -top-32 w-[36rem] h-[36rem] rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(circle, #1f8f88 0%, transparent 70%)" }}
      />
      <div className="max-w-7xl mx-auto relative">
        <Reveal>
          <Eyebrow dark>Ready when you are</Eyebrow>
          <Heading dark>How to book</Heading>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-14 mb-20">
          {bookingSteps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <span className="font-display text-5xl text-rust/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl mt-3 mb-2">{s.title}</h3>
              <p className="text-sand-2/70 text-sm leading-relaxed">{s.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="rounded-3xl bg-sand-3 text-ink p-10 md:p-14 grid md:grid-cols-[1.3fr_1fr] gap-10 items-center">
            <div>
              <p className="font-display italic text-3xl md:text-4xl mb-3">
                Beyond the beach starts with one message.
              </p>
              <p className="text-ink/65 max-w-md leading-relaxed">
                Tell us your dates, group size and what you're drawn to — dunes,
                reef, ruins, or all of it. We reply within 24 hours with a
                itinerary and transparent pricing.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[12px] tracking-wide uppercase bg-rust text-sand-3 px-6 py-4 rounded-full text-center hover:bg-lagoon-deep transition-colors"
              >
                Message on WhatsApp
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="font-mono text-[12px] tracking-wide uppercase border border-ink/20 text-ink px-6 py-4 rounded-full text-center hover:border-ink transition-colors"
              >
                {contact.email}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
