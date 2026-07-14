import Logo from "./Logo";
import { contact } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-ink text-sand-3 pt-16 pb-8 px-5 md:px-8 border-t border-sand-2/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-10 pb-14">
          <div>
            <Logo dark size={40} />
            <p className="text-sand-2/60 text-sm leading-relaxed mt-5 max-w-xs">
              Curated Malindi experiences, booked through verified local
              partners, with transparent pricing at every step.
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-sand-2/50 mb-4">
              Explore
            </p>
            <ul className="space-y-2.5 text-sm text-sand-2/75">
              <li><a href="#experiences" className="hover:text-rust transition-colors">Experiences</a></li>
              <li><a href="#packages" className="hover:text-rust transition-colors">Packages</a></li>
              <li><a href="#partners" className="hover:text-rust transition-colors">Partners</a></li>
              <li><a href="#faq" className="hover:text-rust transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-sand-2/50 mb-4">
              Contact
            </p>
            <ul className="space-y-2.5 text-sm text-sand-2/75">
              <li>{contact.phone}</li>
              <li>{contact.email}</li>
              <li>{contact.location}</li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-sand-2/50 mb-4">
              Follow
            </p>
            <p className="text-sm text-sand-2/75">{contact.instagram}</p>
          </div>
        </div>
        <div className="pt-6 border-t border-sand-2/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-sand-2/40 font-mono">
          <span>MALDI — Malindi Curated · Beyond the Beach</span>
          <span>© {new Date().getFullYear()} Malindi Curated</span>
        </div>
      </div>
    </footer>
  );
}
