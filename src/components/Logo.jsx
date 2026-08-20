export default function Logo({ className = "h-12 w-12", showGlow = false }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="לוגו חשמלאי"
    >
      {showGlow && (
        <defs>
          <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      )}

      {/* Outer ring */}
      <circle
        cx="60"
        cy="60"
        r="54"
        stroke="currentColor"
        strokeWidth="2"
        className="text-amber/40"
      />

      {/* Shield body */}
      <path
        d="M60 18 L88 32 V58 C88 76 76 90 60 98 C44 90 32 76 32 58 V32 Z"
        fill="currentColor"
        className="text-white/10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        filter={showGlow ? "url(#logoGlow)" : undefined}
      />

      {/* Circuit traces */}
      <path
        d="M44 44 H52 M68 44 H76 M44 76 H52 M68 76 H76"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="text-amber/50"
      />
      <circle cx="44" cy="44" r="2.5" fill="currentColor" className="text-amber/60" />
      <circle cx="76" cy="44" r="2.5" fill="currentColor" className="text-amber/60" />
      <circle cx="44" cy="76" r="2.5" fill="currentColor" className="text-amber/60" />
      <circle cx="76" cy="76" r="2.5" fill="currentColor" className="text-amber/60" />

      {/* Lightning bolt */}
      <path
        d="M64 38 L52 62 H60 L56 82 L72 54 H64 L64 38 Z"
        fill="currentColor"
        className="text-amber"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />

      {/* Bottom accent line */}
      <path
        d="M48 92 H72"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="text-amber/70"
      />
    </svg>
  );
}
