import { useState } from "react";
import Reveal from "./Reveal";
import { Eyebrow, Heading } from "./Bits";
import { contact } from "../data/content";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", dates: "", message: "" });

  const update = (id) => (e) => setForm((f) => ({ ...f, [id]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${form.name || "the website"}`);
    const bodyLines = [
      form.dates && `Travel dates: ${form.dates}`,
      "",
      form.message || "",
      "",
      `— ${form.name}`,
      form.email,
    ].filter(Boolean);
    const body = encodeURIComponent(bodyLines.join("\n"));
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  const details = [
    { label: "Email", value: contact.email, href: `mailto:${contact.email}`, accent: "bg-rust" },
    {
      label: "Phone / WhatsApp",
      value: contact.phone,
      href: `https://wa.me/${contact.phone.replace(/[^\d]/g, "")}`,
      external: true,
      accent: "bg-lagoon",
    },
    { label: "Based in", value: contact.location, accent: "bg-rust" },
    { label: "Instagram", value: contact.instagram, accent: "bg-lagoon" },
  ];

  return (
    <section id="contact" className="bg-sand-3 py-24 md:py-32 px-5 md:px-8 relative overflow-hidden">
      <div
        className="absolute -left-40 top-10 w-[30rem] h-[30rem] rounded-full opacity-[0.08] pointer-events-none"
        style={{ background: "radial-gradient(circle, #c1662f 0%, transparent 70%)" }}
      />
      <div
        className="absolute -right-32 bottom-0 w-[28rem] h-[28rem] rounded-full opacity-[0.10] pointer-events-none"
        style={{ background: "radial-gradient(circle, #1f8f88 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto relative">
        <Reveal>
          <Eyebrow>Say hello</Eyebrow>
          <Heading>Contact us</Heading>
        </Reveal>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-6 mt-14">
          <Reveal>
            <p className="text-ink/85 leading-relaxed max-w-sm mb-8">
              Questions before you book, a custom request, or just want to say
              hi — drop us a line. We reply within 24 hours.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-4">
              {details.map((d) => (
                <div
                  key={d.label}
                  className="relative overflow-hidden bg-ink text-sand-3 rounded-2xl p-5 pl-6"
                >
                  <span className={`absolute left-0 top-0 bottom-0 w-1.5 ${d.accent}`} />
                  <p className="font-mono text-[10px] uppercase tracking-widest text-sand-2/60 mb-1.5">
                    {d.label}
                  </p>
                  {d.href ? (
                    <a
                      href={d.href}
                      target={d.external ? "_blank" : undefined}
                      rel={d.external ? "noreferrer" : undefined}
                      className="text-sand-3 text-base md:text-lg hover:text-rust transition-colors break-words"
                    >
                      {d.value}
                    </a>
                  ) : (
                    <p className="text-sand-3 text-base md:text-lg">{d.value}</p>
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-3xl bg-white/70 border border-ink/10 p-8 md:p-10 space-y-5 shadow-xl shadow-ink/5"
            >
              <span
                className="absolute inset-x-0 top-0 h-1.5"
                style={{ background: "linear-gradient(90deg, #c1662f 0%, #1f8f88 100%)" }}
              />

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="font-mono text-[10px] uppercase tracking-widest text-rust mb-1.5 block"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={update("name")}
                    className="w-full bg-transparent border-b-2 border-ink/15 py-2 text-ink text-base focus:outline-none focus:border-lagoon-deep transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="font-mono text-[10px] uppercase tracking-widest text-rust mb-1.5 block"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    className="w-full bg-transparent border-b-2 border-ink/15 py-2 text-ink text-base focus:outline-none focus:border-lagoon-deep transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="dates"
                  className="font-mono text-[10px] uppercase tracking-widest text-rust mb-1.5 block"
                >
                  Travel dates (optional)
                </label>
                <input
                  id="dates"
                  type="text"
                  placeholder="e.g. 12–16 Sept"
                  value={form.dates}
                  onChange={update("dates")}
                  className="w-full bg-transparent border-b-2 border-ink/15 py-2 text-ink text-base placeholder:text-ink/40 focus:outline-none focus:border-lagoon-deep transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="font-mono text-[10px] uppercase tracking-widest text-rust mb-1.5 block"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell us your group size and what you're drawn to..."
                  className="w-full bg-transparent border-b-2 border-ink/15 py-2 text-ink text-base placeholder:text-ink/40 focus:outline-none focus:border-lagoon-deep transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto text-[12.5px] font-semibold tracking-[0.06em] uppercase bg-ink text-sand-3 px-8 py-4 rounded-full hover:bg-rust transition-colors"
              >
                Send message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
