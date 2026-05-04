import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Instagram } from "lucide-react";
import { products } from "@/data/products";

export function InstagramFeed() {
  const imgs = [...products, ...products].slice(0, 8);
  return (
    <section className="bg-ivory py-24">
      <Container>
        <SectionTitle
          eyebrow="@rathinjewellers"
          title="Follow Our Journey"
          subtitle="Behind-the-scenes craftsmanship, customer stories, and the latest from our atelier."
        />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {imgs.map((p, i) => (
            <a
              key={i}
              href="#"
              className="group relative block aspect-square overflow-hidden rounded-sm"
            >
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-500 group-hover:bg-ink/40">
                <Instagram className="h-7 w-7 text-cream opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
