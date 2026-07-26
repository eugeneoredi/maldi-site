import logoImg from "../assets/logo.png";

export default function Logo({ dark = false, showWordmark = true, size = 46 }) {
  const inkText = dark ? "#f2e8d5" : "#0b2e36";

  return (
    <div className="flex items-center gap-3 select-none">
      <img
        src={logoImg}
        alt="MALDI — Malindi Curated, Beyond the Beach"
        width={size}
        height={size}
        style={{ width: size, height: size }}
        className="rounded-full shrink-0"
      />

      {showWordmark && (
        <div className="leading-none">
          <div className="font-display text-xl md:text-2xl tracking-tight" style={{ color: inkText }}>
            MALDI
          </div>
          <div
            className="font-mono text-[9px] tracking-[0.2em] uppercase mt-0.5"
            style={{ color: inkText, opacity: 0.6 }}
          >
            Beyond the Beach
          </div>
        </div>
      )}
    </div>
  );
}
