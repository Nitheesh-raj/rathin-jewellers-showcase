import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? "bg-ivory/95 backdrop-blur-md shadow-soft" : "bg-ivory"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link to="/" className="group flex flex-col leading-none">
          <span className="font-serif text-2xl tracking-wide text-foreground">
            Rathin
          </span>
          <span className="mt-0.5 text-[10px] uppercase tracking-[0.35em] text-gold">
            Jewellers
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "relative text-sm uppercase tracking-[0.2em] text-foreground/80 transition-colors hover:text-gold-deep"
              )}
              activeProps={{ className: cn("text-gold-deep font-medium") }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Menu"
          className="md:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div className="md:hidden bg-ivory border-t border-border">
          <Container className="flex flex-col py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm uppercase tracking-[0.2em] text-foreground/80"
              >
                {l.label}
              </Link>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
