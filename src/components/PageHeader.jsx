import { Link } from "react-router-dom";

export default function PageHeader({ dark = false }) {
  return (
    <div className={`pt-28 md:pt-32 pb-2 px-5 md:px-8 ${dark ? "bg-ink" : "bg-sand-3"}`}>
      <div className="max-w-7xl mx-auto">
        <Link
          to="/"
          className={`inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-widest transition-colors ${
            dark ? "text-sand-2/60 hover:text-rust" : "text-ink/50 hover:text-rust"
          }`}
        >
          <span aria-hidden="true">&larr;</span> Back to home
        </Link>
      </div>
    </div>
  );
}
