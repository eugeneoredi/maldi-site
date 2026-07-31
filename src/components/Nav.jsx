import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const PAGE_LINKS = [
  { to: "/experiences", label: "Experiences" },
  { to: "/packages", label: "Packages" },
  { to: "/accommodation", label: "Accommodation" },
  { to: "/partners", label: "Partners" },
];

const MORE_LINKS = [
  { to: "/why-choose-us", label: "Why choose us" },
  { to: "/guests", label: "Who it's for" },
  { to: "/seasons", label: "Best time to visit" },
  { to: "/culture", label: "Culture & heritage" },
  { to: "/practical", label: "Practical info" },
  { to: "/corporate", label: "Corporate & groups" },
];

const ANCHOR_LINKS = [
  { to: "/#plan", label: "Plan your trip" },
  { to: "/#faq", label: "FAQ" },
  { to: "/#contact", label: "Contact" },
];

export default function Nav() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef(null);

  // On subpages there's no dark hero image at top, so the nav should always
  // render in its solid "scrolled" style there, regardless of scroll position.
  const solid = scrolled || !isHome;

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

  useEffect(() => {
    setOpen(false);
    setMoreOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <>
      {/* Header: NOTE no backdrop-filter here while the mobile menu is a fixed
          descendant — backdrop-filter creates a containing block that traps
          position:fixed children. The blurred pill is a separate absolutely
          positioned layer behind the content, not an ancestor of the menu. */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="relative">
          <div
            className={`absolute inset-0 transition-opacity duration-300 ${
              solid ? "opacity-100" : "opacity-0"
            }`}
            style={{
              background: "rgba(251,246,234,0.86)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              borderBottom: "1px solid rgba(11,46,54,0.08)",
            }}
          />
          <nav className="relative max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 py-4">
            <Link to="/" className="relative z-10">
              <Logo size={38} dark={!solid} />
            </Link>
            <div className="hidden md:flex items-center gap-8">
              {PAGE_LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`text-[12.5px] font-medium tracking-[0.08em] uppercase transition-colors ${
                    solid ? "text-ink/85 hover:text-rust" : "text-sand-3/85 hover:text-sand-3"
                  }`}
                >
                  {l.label}
                </Link>
              ))}

              <div className="relative" ref={moreRef}>
                <button
                  onClick={() => setMoreOpen((v) => !v)}
                  className={`flex items-center gap-1.5 text-[12.5px] font-medium tracking-[0.08em] uppercase transition-colors ${
                    solid ? "text-ink/85 hover:text-rust" : "text-sand-3/85 hover:text-sand-3"
                  }`}
                  aria-expanded={moreOpen}
                >
                  More
                  <span
                    className={`inline-block transition-transform ${moreOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  >
                    &#9662;
                  </span>
                </button>
                <AnimatePresence>
                  {moreOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full right-0 mt-3 w-56 rounded-2xl bg-sand-3 shadow-xl shadow-ink/10 border border-ink/8 py-2 overflow-hidden"
                    >
                      {MORE_LINKS.map((l) => (
                        <Link
                          key={l.to}
                          to={l.to}
                          className="block px-5 py-2.5 text-[13px] text-ink/80 hover:bg-sand hover:text-rust transition-colors"
                        >
                          {l.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {ANCHOR_LINKS.slice(0, 2).map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`text-[12.5px] font-medium tracking-[0.08em] uppercase transition-colors ${
                    solid ? "text-ink/85 hover:text-rust" : "text-sand-3/85 hover:text-sand-3"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                key={ANCHOR_LINKS[2].to}
                to={ANCHOR_LINKS[2].to}
                className={`text-[12.5px] font-medium tracking-[0.08em] uppercase transition-colors ${
                  solid ? "text-ink/85 hover:text-rust" : "text-sand-3/85 hover:text-sand-3"
                }`}
              >
                {ANCHOR_LINKS[2].label}
              </Link>

              <Link
                to="/#plan"
                className={`text-[12.5px] font-medium tracking-[0.08em] uppercase px-4 py-2.5 rounded-full transition-colors ${
                  solid
                    ? "bg-ink text-sand-3 hover:bg-rust"
                    : "bg-sand-3 text-ink hover:bg-rust hover:text-sand-3"
                }`}
              >
                Book now
              </Link>
            </div>
            <button
              onClick={() => setOpen(true)}
              className="md:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-label="Open menu"
            >
              <span className={`w-6 h-px ${solid ? "bg-ink" : "bg-sand-3"}`} />
              <span className={`w-6 h-px ${solid ? "bg-ink" : "bg-sand-3"}`} />
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
            className="fixed inset-0 z-[60] bg-ink md:hidden overflow-y-auto"
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
            <div className="flex flex-col px-6 mt-6 mb-10 gap-5">
              {PAGE_LINKS.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl text-sand-3"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}

              <motion.p
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * PAGE_LINKS.length }}
                className="font-mono text-[11px] uppercase tracking-widest text-sand-2/50 mt-3"
              >
                More
              </motion.p>
              {MORE_LINKS.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i + 0.05 * (PAGE_LINKS.length + 1) }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="font-display text-2xl text-sand-2/90"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}

              <div className="h-px bg-sand-2/15 my-2" />

              {ANCHOR_LINKS.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i + 0.05 * (PAGE_LINKS.length + MORE_LINKS.length + 2) }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl text-sand-3"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}

              <Link
                to="/#plan"
                onClick={() => setOpen(false)}
                className="mt-4 text-[12.5px] font-medium tracking-[0.08em] uppercase bg-rust text-sand-3 px-5 py-3.5 rounded-full text-center"
              >
                Book now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
