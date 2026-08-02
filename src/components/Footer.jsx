import { Link } from "react-router-dom";
import Logo from "./Logo";
import { contact } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-ink text-sand-3 pt-16 pb-8 px-5 md:px-8 border-t border-sand-2/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-10 pb-14">
          <div>
            <Logo dark size={40} />
            <p className="text-sand-2/85 text-lg leading-relaxed mt-5 max-w-xs">
              Curated Malindi experiences, booked through verified local
              partners, with transparent pricing at every step.
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-sand-2/50 mb-4">
              Explore
            </p>
            <ul className="space-y-2.5 text-sm text-sand-2/90">
              <li><Link to="/experiences" className="hover:text-rust transition-colors">Experiences</Link></li>
              <li><Link to="/packages" className="hover:text-rust transition-colors">Packages</Link></li>
              <li><Link to="/accommodation" className="hover:text-rust transition-colors">Accommodation</Link></li>
              <li><Link to="/partners" className="hover:text-rust transition-colors">Partners</Link></li>
              <li><Link to="/why-choose-us" className="hover:text-rust transition-colors">Why choose us</Link></li>
              <li><Link to="/guests" className="hover:text-rust transition-colors">Who it's for</Link></li>
              <li><Link to="/seasons" className="hover:text-rust transition-colors">Best time to visit</Link></li>
              <li><Link to="/culture" className="hover:text-rust transition-colors">Culture & heritage</Link></li>
              <li><Link to="/practical" className="hover:text-rust transition-colors">Practical info</Link></li>
              <li><Link to="/corporate" className="hover:text-rust transition-colors">Corporate & groups</Link></li>
              <li><Link to="/#faq" className="hover:text-rust transition-colors">FAQ</Link></li>
              <li><Link to="/#contact" className="hover:text-rust transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-sand-2/50 mb-4">
              Contact
            </p>
            <ul className="space-y-2.5 text-sm text-sand-2/90">
              <li>{contact.phone}</li>
              <li>{contact.email}</li>
              <li>{contact.location}</li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-sand-2/50 mb-4">
              Follow
            </p>
            <p className="text-lg text-sand-2/90">{contact.instagram}</p>
          </div>
        </div>
        <div className="pt-6 border-t border-sand-2/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-sand-2/40 font-mono">
          <span>MALDI — Malindi Curated · Beyond the Beach</span>
          <span>© {new Date().getFullYear()} Malindi Curated</span>
        </div>
        <div className="pt-4 text-center text-sm text-sand-2/60 font-mono">
          <span>
            Developed by{" "}
            <a
              href="https://oredi-eugene.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-sand-2/85 hover:text-rust transition-colors underline underline-offset-2"
            >
              Eugene Oredi
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
