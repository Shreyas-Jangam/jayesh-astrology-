// Religious SVG Icons for Hindu Pooja and Vidhi

export const ShivLinga = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    {/* Base/Yoni */}
    <ellipse cx="50" cy="75" rx="40" ry="15" className="fill-accent/60" />
    <ellipse cx="50" cy="72" rx="35" ry="12" className="fill-secondary/80" />
    {/* Linga */}
    <ellipse cx="50" cy="45" rx="18" ry="30" className="fill-accent/80" />
    <ellipse cx="50" cy="30" rx="15" ry="12" className="fill-accent" />
    {/* Decorative marks */}
    <ellipse cx="50" cy="50" rx="2" ry="3" className="fill-primary/50" />
    <ellipse cx="50" cy="60" rx="2" ry="3" className="fill-primary/50" />
  </svg>
);

export const Trishul = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    {/* Center prong */}
    <path d="M50 5 L50 35 L48 35 L50 10 L52 35 L50 35 Z" className="fill-accent" />
    <ellipse cx="50" cy="8" rx="4" ry="6" className="fill-accent" />
    {/* Left prong */}
    <path d="M30 20 Q35 25 38 35 L36 36 Q34 28 30 24 Z" className="fill-accent" />
    <ellipse cx="28" cy="18" rx="3" ry="5" className="fill-accent" transform="rotate(-30 28 18)" />
    {/* Right prong */}
    <path d="M70 20 Q65 25 62 35 L64 36 Q66 28 70 24 Z" className="fill-accent" />
    <ellipse cx="72" cy="18" rx="3" ry="5" className="fill-accent" transform="rotate(30 72 18)" />
    {/* Handle */}
    <rect x="48" y="35" width="4" height="60" className="fill-accent/80" rx="2" />
    {/* Cross bar */}
    <rect x="35" y="33" width="30" height="4" className="fill-accent" rx="2" />
  </svg>
);

export const Damru = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    {/* Left drum */}
    <ellipse cx="30" cy="50" rx="20" ry="25" className="fill-accent/70" />
    <ellipse cx="30" cy="50" rx="15" ry="20" className="fill-secondary/50" />
    {/* Right drum */}
    <ellipse cx="70" cy="50" rx="20" ry="25" className="fill-accent/70" />
    <ellipse cx="70" cy="50" rx="15" ry="20" className="fill-secondary/50" />
    {/* Center connection */}
    <rect x="40" y="45" width="20" height="10" className="fill-accent" rx="2" />
    {/* Strings */}
    <line x1="30" y1="30" x2="50" y2="45" stroke="currentColor" strokeWidth="1" className="stroke-primary/50" />
    <line x1="30" y1="70" x2="50" y2="55" stroke="currentColor" strokeWidth="1" className="stroke-primary/50" />
    <line x1="70" y1="30" x2="50" y2="45" stroke="currentColor" strokeWidth="1" className="stroke-primary/50" />
    <line x1="70" y1="70" x2="50" y2="55" stroke="currentColor" strokeWidth="1" className="stroke-primary/50" />
    {/* Beads */}
    <circle cx="25" cy="35" r="4" className="fill-primary" />
    <circle cx="75" cy="35" r="4" className="fill-primary" />
  </svg>
);

export const Kalash = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    {/* Coconut on top */}
    <ellipse cx="50" cy="18" rx="12" ry="10" className="fill-amber-600" />
    <path d="M45 12 Q50 8 55 12" stroke="currentColor" strokeWidth="2" fill="none" className="stroke-amber-800" />
    {/* Mango leaves */}
    <path d="M50 25 Q35 15 30 25 Q40 22 50 28" className="fill-emerald-500" />
    <path d="M50 25 Q65 15 70 25 Q60 22 50 28" className="fill-emerald-500" />
    <path d="M50 25 Q50 10 50 20" className="fill-emerald-600" />
    {/* Pot neck */}
    <rect x="42" y="28" width="16" height="8" className="fill-accent" rx="2" />
    {/* Main pot body */}
    <path d="M35 36 Q25 55 30 75 Q35 85 50 88 Q65 85 70 75 Q75 55 65 36 Z" className="fill-accent/80" />
    <ellipse cx="50" cy="36" rx="15" ry="4" className="fill-accent" />
    {/* Decorative band */}
    <ellipse cx="50" cy="55" rx="18" ry="5" className="fill-primary/40" />
    {/* Base */}
    <ellipse cx="50" cy="88" rx="12" ry="4" className="fill-accent/60" />
  </svg>
);

export const Diya = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    {/* Flame */}
    <path d="M50 15 Q55 25 52 35 Q50 30 48 35 Q45 25 50 15" className="fill-orange-400 animate-pulse" />
    <path d="M50 20 Q53 28 51 33 Q50 30 49 33 Q47 28 50 20" className="fill-yellow-300" />
    {/* Wick */}
    <rect x="49" y="35" width="2" height="8" className="fill-gray-600" />
    {/* Oil */}
    <ellipse cx="50" cy="50" rx="20" ry="8" className="fill-yellow-600/50" />
    {/* Diya body */}
    <path d="M25 50 Q20 60 25 70 Q30 78 50 80 Q70 78 75 70 Q80 60 75 50 Z" className="fill-accent/80" />
    <ellipse cx="50" cy="50" rx="25" ry="10" className="fill-accent" />
    {/* Base */}
    <ellipse cx="50" cy="80" rx="15" ry="5" className="fill-accent/60" />
  </svg>
);

export const Rudraksha = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    {/* Main bead */}
    <circle cx="50" cy="50" r="25" className="fill-amber-800" />
    {/* Grooves */}
    <path d="M50 25 Q45 50 50 75" stroke="currentColor" strokeWidth="2" fill="none" className="stroke-amber-900" />
    <path d="M30 35 Q50 50 70 35" stroke="currentColor" strokeWidth="2" fill="none" className="stroke-amber-900" />
    <path d="M30 65 Q50 50 70 65" stroke="currentColor" strokeWidth="2" fill="none" className="stroke-amber-900" />
    {/* Hole */}
    <circle cx="50" cy="28" r="3" className="fill-amber-950" />
    <circle cx="50" cy="72" r="3" className="fill-amber-950" />
    {/* Highlight */}
    <ellipse cx="42" cy="42" rx="5" ry="8" className="fill-amber-700/50" />
  </svg>
);

export const Bell = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    {/* Handle */}
    <circle cx="50" cy="12" r="8" className="fill-accent" />
    <rect x="47" y="18" width="6" height="10" className="fill-accent" />
    {/* Bell body */}
    <path d="M35 28 Q30 50 28 70 Q28 80 50 85 Q72 80 72 70 Q70 50 65 28 Z" className="fill-accent/80" />
    <ellipse cx="50" cy="28" rx="15" ry="5" className="fill-accent" />
    {/* Clapper */}
    <line x1="50" y1="45" x2="50" y2="78" stroke="currentColor" strokeWidth="2" className="stroke-secondary" />
    <circle cx="50" cy="80" r="5" className="fill-secondary" />
    {/* Decorative ring */}
    <ellipse cx="50" cy="55" rx="18" ry="4" className="fill-primary/30" />
  </svg>
);

export const Conch = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    {/* Main shell */}
    <path d="M70 30 Q85 45 80 65 Q75 85 50 90 Q25 85 20 65 Q18 50 30 40 Q45 30 70 30" className="fill-accent/70" />
    {/* Spiral */}
    <path d="M60 40 Q70 50 65 60 Q55 70 45 65 Q35 55 45 50 Q55 45 60 40" className="fill-accent/90" />
    <path d="M55 48 Q60 55 55 60 Q48 62 45 58" className="fill-secondary/40" />
    {/* Opening */}
    <ellipse cx="35" cy="55" rx="8" ry="15" className="fill-secondary/60" />
    {/* Tip */}
    <path d="M70 30 Q75 25 73 20 Q70 18 68 22 Q66 28 70 30" className="fill-accent" />
  </svg>
);

export const PoojaThali = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    {/* Main plate */}
    <ellipse cx="50" cy="60" rx="45" ry="20" className="fill-accent/60" />
    <ellipse cx="50" cy="55" rx="42" ry="18" className="fill-accent/80" />
    <ellipse cx="50" cy="52" rx="38" ry="15" className="fill-accent" />
    {/* Small bowls */}
    <ellipse cx="30" cy="50" rx="8" ry="4" className="fill-primary/50" />
    <ellipse cx="70" cy="50" rx="8" ry="4" className="fill-primary/50" />
    {/* Diya in center */}
    <ellipse cx="50" cy="48" rx="6" ry="3" className="fill-orange-400" />
    <path d="M50 40 Q52 44 50 46 Q48 44 50 40" className="fill-yellow-400" />
    {/* Kumkum */}
    <circle cx="40" cy="55" r="4" className="fill-red-500" />
    {/* Haldi */}
    <circle cx="60" cy="55" r="4" className="fill-yellow-500" />
    {/* Rice */}
    <ellipse cx="50" cy="58" rx="6" ry="3" className="fill-white/80" />
  </svg>
);

export const Swastik = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <g className="fill-accent">
      {/* Horizontal bar */}
      <rect x="20" y="45" width="60" height="10" rx="2" />
      {/* Vertical bar */}
      <rect x="45" y="20" width="10" height="60" rx="2" />
      {/* Top right hook */}
      <rect x="55" y="20" width="20" height="8" rx="2" />
      {/* Bottom left hook */}
      <rect x="25" y="72" width="20" height="8" rx="2" />
      {/* Left top hook */}
      <rect x="20" y="25" width="8" height="20" rx="2" />
      {/* Right bottom hook */}
      <rect x="72" y="55" width="8" height="20" rx="2" />
    </g>
    {/* Dots */}
    <circle cx="35" cy="35" r="3" className="fill-primary" />
    <circle cx="65" cy="35" r="3" className="fill-primary" />
    <circle cx="35" cy="65" r="3" className="fill-primary" />
    <circle cx="65" cy="65" r="3" className="fill-primary" />
  </svg>
);
