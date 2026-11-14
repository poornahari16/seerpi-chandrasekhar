import { NavLink } from "@/components/NavLink";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "హోమ్" },
  { to: "/about", label: "పరిచయం" },
  { to: "/books", label: "పుస్తకాలు" },
  { to: "/gallery", label: "గ్యాలరీ" },
  { to: "/contact", label: "సంప్రదించండి" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-divider">
      <div className="container max-w-5xl mx-auto flex items-center justify-between h-14 px-6">
        <NavLink
          to="/"
          className="font-serif-telugu text-lg font-bold tracking-tight text-headline no-underline"
          activeClassName=""
        >
          శీర్పి చంద్రశేఖర్
        </NavLink>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-sans-telugu no-underline"
                activeClassName="text-foreground font-semibold"
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground active:scale-95 transition-transform"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-divider bg-background animate-fade-in">
          <ul className="flex flex-col py-4 px-6 gap-4">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className="text-muted-foreground hover:text-foreground transition-colors text-base font-sans-telugu no-underline block"
                  activeClassName="text-foreground font-semibold"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
