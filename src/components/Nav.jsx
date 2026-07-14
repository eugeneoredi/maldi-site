import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const LINKS = [
  { href: "#experiences", label: "Experiences" },
  { href: "#packages", label: "Packages" },
  { href: "#partners", label: "Partners" },
  { href: "#plan", label: "Plan your trip" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Header: NOTE no backdrop-filter here while the mobile menu is a fixed
          descendant \u2014 backdrop-filter creates a containing block that traps
          position:fixed children. The blurred pill is a separate absolutely
          positioned layer behind the content, not an ancestor of the menu. */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="relative">
          <div
            className={`absolute inset-0 transition-opacity duration-300 ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
            style={{
              background: "rgba(251,246,234,0.86)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              borderBottom: "1px solid rgba(11,46,54,0.08)",
            }}
          />
          <nav className="relative max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 py-4">
            <a href="#top" className="relative z-10">
              <Logo size={38} dark={!scrolled} />
            </a>
            <div className="hidden md:flex items-center gap-8">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={`font-mono text-[12px] tracking-wide uppercase transition-colors ${
                    scrolled ? "text-ink/70 hover:text-rust" : "text-sand-3/85 hover:text-sand-3"
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#plan"
                className={`font-mono text-[12px] tracking-wide uppercase px-4 py-2.5 rounded-full transition-colors ${
                  scrolled
                    ? "bg-ink text-sand-3 hover:bg-rust"
                    : "bg-sand-3 text-ink hover:bg-rust hover:text-sand-3"
                }`}
              >
                Book now
              </a>
            </div>
            <button
              onClick={() => setOpen(true)}
              className="md:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-label="Open menu"
            >
              <span className={`w-6 h-px ${scrolled ? "bg-ink" : "bg-sand-3"}`} />
              <span className={`w-6 h-px ${scrolled ? "bg-ink" : "bg-sand-3"}`} />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu: rendered as its own fixed overlay, sibling to the header
          above, so it is never nested inside a blurred/transformed ancestor. */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink md:hidden"
          >
            <div className="flex items-center justify-between px-5 py-4">
              <Logo dark size={38} />
              <button
                onClick={() => setOpen(false)}
                className="w-10 h-10 flex items-center justify-center text-sand-3 text-2xl"
                aria-label="Close menu"
              >
                &times;
              </button>
            </div>
            <div className="flex flex-col px-6 mt-10 gap-6">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="font-display text-3xl text-sand-3"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="#plan"
                onClick={() => setOpen(false)}
                className="mt-4 font-mono text-[12px] tracking-wide uppercase bg-rust text-sand-3 px-5 py-3.5 rounded-full text-center"
              >
                Book now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
