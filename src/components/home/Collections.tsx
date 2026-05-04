import bridal from "@/assets/collection-bridal.jpg";
import daily from "@/assets/collection-daily.jpg";
import premium from "@/assets/collection-premium.jpg";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Link } from "@tanstack/react-router";

const items = [
  { title: "Bridal Collection", subtitle: "For your most sacred day", img: bridal },
  { title: "Daily Wear", subtitle: "Effortless elegance, everyday", img: daily },
  { title: "Premium Gold", subtitle: "Timeless 22K masterpieces", img: premium },
];

export function Collections() {
  return (
    <section className="bg-cream py-24">
      <Container>
        <SectionTitle
          eyebrow="Curated Collections"
          title="Crafted for Every Moment"
          subtitle="Each piece tells a story — of heritage, of love, of legacy passed gently from one hand to the next."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {items.map((c) => (
            <Link
              to="/collections"
              key={c.title}
              className="group relative block overflow-hidden rounded-sm bg-ivory shadow-soft transition-all duration-500 hover:shadow-glow"
            >
              <div className="absolute inset-0 rounded-sm border border-transparent transition-colors duration-500 group-hover:border-gold pointer-events-none z-10" />
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 text-cream">
                <p className="text-[10px] uppercase tracking-[0.35em] text-champagne">
                  {c.subtitle}
                </p>
                <h3 className="mt-2 font-serif text-2xl">{c.title}</h3>
                <span className="mt-3 inline-block text-xs uppercase tracking-[0.25em] text-champagne opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  Discover →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
