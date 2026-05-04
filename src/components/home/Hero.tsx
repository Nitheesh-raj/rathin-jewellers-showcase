import heroImg from "@/assets/hero-bridal.jpg";
import { Container } from "@/components/layout/Container";
import { GoldButton } from "@/components/ui/GoldButton";
import { whatsappLink } from "@/utils/helpers";
import { useMemo } from "react";

export function Hero() {
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        left: Math.random() * 100,
        size: 2 + Math.random() * 4,
        duration: 12 + Math.random() * 16,
        delay: Math.random() * 12,
        opacity: 0.3 + Math.random() * 0.5,
      })),
    []
  );

  return (
    <section className="relative overflow-hidden bg-gradient-ivory">
      {/* Floating gold particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <span
            key={i}
            className="particle absolute rounded-full bg-gold"
            style={{
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              opacity: p.opacity,
              boxShadow: "0 0 8px var(--gold)",
            }}
          />
        ))}
      </div>

      <Container className="relative grid min-h-[88vh] gap-12 py-16 lg:grid-cols-2 lg:py-0 lg:items-center">
        {/* LEFT */}
        <div className="relative z-10" style={{ animation: "fade-up 1s ease-out" }}>
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-gold">
            Since 1962 · Heritage Jewellery
          </p>
          <h1 className="font-serif text-5xl leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
            Adornments of <span className="text-gradient-gold italic">Eternity</span>
          </h1>

          <p className="mt-8 font-tamil text-2xl text-gold-deep md:text-3xl" lang="ta">
            பொன் அல்ல… ஒரு உணர்வு.
          </p>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            Discover premium gold and silver collections designed for your
            most precious moments — crafted with devotion, worn with pride.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <GoldButton as="a" href="/collections" variant="outline">
              Explore Collection
            </GoldButton>
            <GoldButton
              as="a"
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Enquire on WhatsApp
            </GoldButton>
          </div>

          <div className="mt-14 flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <div>
              <p className="font-serif text-3xl text-gold-deep normal-case tracking-normal">62+</p>
              <p className="mt-1">Years of Trust</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="font-serif text-3xl text-gold-deep normal-case tracking-normal">22K</p>
              <p className="mt-1">Hallmark Gold</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="font-serif text-3xl text-gold-deep normal-case tracking-normal">5★</p>
              <p className="mt-1">Rated Service</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div
            className="absolute inset-0 -z-10 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle at center, oklch(0.85 0.12 80 / 0.55), transparent 65%)",
            }}
          />
          <div
            className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-sm shadow-card"
            style={{ animation: "float 7s ease-in-out infinite" }}
          >
            <img
              src={heroImg}
              alt="Bridal model wearing premium gold jewellery"
              className="h-full w-full object-cover"
              width={1024}
              height={1280}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ivory/40 via-transparent to-transparent" />
          </div>

          {/* decorative gold corner */}
          <div className="absolute -right-4 -top-4 hidden h-24 w-24 border-t-2 border-r-2 border-gold lg:block" />
          <div className="absolute -left-4 -bottom-4 hidden h-24 w-24 border-b-2 border-l-2 border-gold lg:block" />
        </div>
      </Container>
    </section>
  );
}
