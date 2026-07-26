export function Eyebrow({ children, dark = false }) {
  return (
    <div
      className={`text-[11px] font-medium tracking-[0.22em] uppercase flex items-center gap-2 ${
        dark ? "text-sand-2/92" : "text-lagoon-deep"
      }`}
    >
      <span className={`inline-block w-4 h-px ${dark ? "bg-sand-2/60" : "bg-rust"}`} />
      {children}
    </div>
  );
}

export function Heading({ children, dark = false, size = "lg" }) {
  const sizes = {
    lg: "text-4xl md:text-6xl",
    md: "text-3xl md:text-5xl",
    sm: "text-2xl md:text-4xl",
  };
  return (
    <h2
      className={`font-display font-medium leading-[0.98] ${sizes[size]} ${
        dark ? "text-sand-3" : "text-ink"
      }`}
    >
      {children}
    </h2>
  );
}

export function Coords({ children, className = "" }) {
  return (
    <span className={`font-mono text-[11px] tracking-wide opacity-60 ${className}`}>
      {children}
    </span>
  );
}
