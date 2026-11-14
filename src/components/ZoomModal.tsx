import { useEffect } from "react";
import { Button } from "@/components/ui/button";

interface ZoomModalProps {
  /** null = closed */
  src: string | null;
  alt?: string;
  onClose: () => void;
}

/**
 * Full-screen single-viewport image zoom modal.
 * The whole photograph fits inside one screen (no cropping, no scrolling box).
 * Closes via the Telugu close button, backdrop click, or the Escape key.
 */
export function ZoomModal({ src, alt = "చిత్రం", onClose }: ZoomModalProps) {
  useEffect(() => {
    if (!src) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="చిత్రం పెద్దగా"
    >
      <img
        src={src}
        alt={alt}
        className="max-h-[82vh] max-w-[90vw] w-auto h-auto object-contain rounded-md"
        onClick={(e) => e.stopPropagation()}
      />
      <Button
        variant="secondary"
        className="absolute top-4 right-4 shadow-lg"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        మూసివేయండి
      </Button>
    </div>
  );
}
