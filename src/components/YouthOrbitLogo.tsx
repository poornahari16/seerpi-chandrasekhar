import { siteData } from "@/data/siteData";
import { cn } from "@/lib/utils";

/**
 * యూత్ ఆర్బిట్ (Youth Orbit) logo badge.
 * Uses `siteData.hero.youthOrbitLogo` once a URL is available; until then it
 * renders a crisp vector emblem — an orbiting satellite around a planet with
 * Telugu typography — that scales cleanly at any size (square, viewBox-based).
 */
export function YouthOrbitLogo({ className }: { className?: string }) {
  const url = siteData.hero.youthOrbitLogo;

  if (url) {
    return (
      <img
        src={url}
        alt="యూత్ ఆర్బిట్ లోగో"
        className={cn("object-contain", className)}
      />
    );
  }

  return (
    <svg
      viewBox="0 0 200 200"
      role="img"
      aria-label="యూత్ ఆర్బిట్ లోగో"
      className={cn("block", className)}
    >
      {/* Emblem base */}
      <circle
        cx="100"
        cy="100"
        r="94"
        fill="hsl(40 33% 96%)"
        stroke="hsl(30 15% 25%)"
        strokeWidth="5"
      />
      <circle
        cx="100"
        cy="100"
        r="84"
        fill="none"
        stroke="hsl(30 15% 25%)"
        strokeOpacity="0.35"
        strokeWidth="1.5"
        strokeDasharray="4 5"
      />

      {/* Planet + orbit */}
      <circle cx="100" cy="62" r="13" fill="hsl(18 45% 42%)" />
      <g transform="rotate(-25 100 62)">
        <ellipse
          cx="100"
          cy="62"
          rx="46"
          ry="15"
          fill="none"
          stroke="hsl(30 15% 25%)"
          strokeWidth="3"
        />
        <circle cx="146" cy="62" r="6" fill="hsl(30 15% 25%)" />
      </g>

      {/* Telugu typography */}
      <text
        x="100"
        y="136"
        textAnchor="middle"
        fontFamily="'Noto Serif Telugu', serif"
        fontWeight="700"
        fontSize="26"
        fill="hsl(30 12% 12%)"
      >
        యూత్ ఆర్బిట్
      </text>
      <text
        x="100"
        y="163"
        textAnchor="middle"
        fontFamily="'Noto Sans Telugu', sans-serif"
        fontWeight="600"
        fontSize="11"
        letterSpacing="4"
        fill="hsl(18 45% 42%)"
      >
        YOUTH ORBIT
      </text>
    </svg>
  );
}
