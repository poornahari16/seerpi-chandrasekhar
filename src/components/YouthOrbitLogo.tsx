import { siteData } from "@/data/siteData";
import { cn } from "@/lib/utils";

/**
 * యూత్ ఆర్బిట్ (Youth Orbit) logo badge.
 * Uses `siteData.hero.youthOrbitLogo` once a URL is available; until then it
 * renders a clean, properly proportioned Telugu emblem that scales with its
 * container.
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
    <div
      className={cn(
        "relative flex aspect-square items-center justify-center rounded-full",
        "border-4 border-primary/30 bg-primary/5 shadow-lg",
        "[container-type:inline-size]",
        className,
      )}
      role="img"
      aria-label="యూత్ ఆర్బిట్ లోగో"
    >
      <div className="absolute inset-[8%] rounded-full border border-dashed border-primary/40" />
      <div className="relative text-center px-[10%]">
        <span className="block font-serif-telugu font-bold text-headline leading-tight text-[15cqw]">
          యూత్ ఆర్బిట్
        </span>
        <span
          className="mt-[4%] block font-semibold tracking-[0.25em] text-primary text-[6cqw]"
          style={{ textIndent: "0.25em" }}
        >
          YOUTH ORBIT
        </span>
      </div>
    </div>
  );
}
