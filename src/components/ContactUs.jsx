import { useState } from "react";
import Reveal from "./Reveal";
import { Eyebrow, Heading } from "./Bits";
import { contact } from "../data/content";

const FIELDS = [
  { id: "name", label: "Name", type: "text", required: true },
  { id: "email", label: "Email", type: "email", required: true },
  { id: "dates", label: "Travel dates", type: "text", required: false },
];

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

  return (
    <section id="contact" className="bg-sand-3 py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <Eyebrow>Say hello</Eyebrow>
          <Heading>Contact us</Heading>
        </Reveal>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-14 mt-14">
          <Reveal>
            <p className="text-ink/65 leading-relaxed max-w-sm mb-10">
              Questions before you book, a custom request, or just want to say
              hi — drop us a line. We reply within 24 hours.
            </p>

            <div className="space-y-6">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-ink/40 mb-1.5">
                  Email
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-ink text-lg hover:text-rust transition-colors"
                >
                  {contact.email}
                </a>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-ink/40 mb-1.5">
                  Phone / WhatsApp
                </p>
                <a
                  href={`https://wa.me/${contact.phone.replace(/[^\d]/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink text-lg hover:text-rust transition-colors"
                >
                  {contact.phone}
                </a>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-ink/40 mb-1.5">
                  Based in
                </p>
                <p className="text-ink text-lg">{contact.location}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-ink/40 mb-1.5">
                  Instagram
                </p>
                <p className="text-ink text-lg">{contact.instagram}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-white/60 border border-ink/10 p-8 md:p-10 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                {FIELDS.slice(0, 2).map((f) => (
                  <div key={f.id}>
                    <label
                      htmlFor={f.id}
                      className="font-mono text-[10px] uppercase tracking-widest text-ink/40 mb-1.5 block"
                    >
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      type={f.type}
                      required={f.required}
                      value={form[f.id]}
                      onChange={update(f.id)}
                      className="w-full bg-transparent border-b border-ink/20 py-2 text-ink text-base focus:outline-none focus:border-rust transition-colors"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label
                  htmlFor="dates"
                  className="font-mono text-[10px] uppercase tracking-widest text-ink/40 mb-1.5 block"
                >
                  Travel dates (optional)
                </label>
                <input
                  id="dates"
                  type="text"
                  placeholder="e.g. 12–16 Sept"
                  value={form.dates}
                  onChange={update("dates")}
                  className="w-full bg-transparent border-b border-ink/20 py-2 text-ink text-base placeholder:text-ink/30 focus:outline-none focus:border-rust transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="font-mono text-[10px] uppercase tracking-widest text-ink/40 mb-1.5 block"
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
                  className="w-full bg-transparent border-b border-ink/20 py-2 text-ink text-base placeholder:text-ink/30 focus:outline-none focus:border-rust transition-colors resize-none"
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
