export default function Logo({ dark = false, showWordmark = true, size = 44 }) {
  const ink = dark ? "#f2e8d5" : "#0b2e36";
  const lagoon = "#1f8f88";
  const rust = "#c1662f";
  const id = "malditext";

  return (
    <div className="flex items-center gap-3 select-none">
      <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-label="MALDI \u2014 Malindi Curated">
        <defs>
          <path
            id={id}
            d="M 15 50 A 35 35 0 1 1 85 50"
            fill="none"
          />
        </defs>
        <circle cx="50" cy="50" r="48" fill="none" stroke={ink} strokeWidth="1" opacity="0.35" />
        <text fontSize="7.5" fontFamily="IBM Plex Mono, monospace" fill={ink} letterSpacing="2">
          <textPath href={`#${id}`} startOffset="50%" textAnchor="middle">
            MALINDI CURATED
          </textPath>
        </text>
        {/* wave */}
        <path
          d="M20 62 C 32 50, 38 74, 50 62 C 62 50, 68 74, 80 62"
          fill="none"
          stroke={lagoon}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M20 70 C 32 58, 38 82, 50 70 C 62 58, 68 82, 80 70"
          fill="none"
          stroke={lagoon}
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.5"
        />
        {/* palm + sun */}
        <circle cx="63" cy="40" r="9" fill={rust} opacity="0.9" />
        <path d="M63 33 Q58 24 50 26 Q57 30 60 36 Z" fill="#1f8f88" />
        <path d="M63 33 Q68 24 76 26 Q69 30 66 36 Z" fill="#1f8f88" />
        <path d="M63 33 L63 41" stroke="#12615c" strokeWidth="1.5" />
      </svg>
      {showWordmark && (
        <div className="leading-none">
          <div
            className="font-display text-xl md:text-2xl tracking-tight"
            style={{ color: ink }}
          >
            MALDI
          </div>
          <div
            className="font-mono text-[9px] tracking-[0.2em] uppercase mt-0.5"
            style={{ color: ink, opacity: 0.6 }}
          >
            Beyond the Beach
          </div>
        </div>
      )}
    </div>
  );
}
