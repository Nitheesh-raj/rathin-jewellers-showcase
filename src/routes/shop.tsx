import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProductGrid } from "@/components/product/ProductGrid";
import { products, categories } from "@/data/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Rathin Jewellers" },
      { name: "description", content: "Browse our full collection of bridal, daily wear, gold and diamond jewellery." },
      { property: "og:title", content: "Shop — Rathin Jewellers" },
      { property: "og:description", content: "Browse our full collection of fine jewellery." },
    ],
  }),
  component: Shop,
});

function Shop() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <section className="py-20">
      <Container>
        <SectionTitle eyebrow="The Boutique" title="Shop the Collection" />

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 text-xs uppercase tracking-[0.25em] border transition-all ${
                active === c
                  ? "bg-gradient-gold text-primary-foreground border-transparent"
                  : "border-border text-foreground/70 hover:border-gold hover:text-gold-deep"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <ProductGrid products={filtered} />
      </Container>
    </section>
  );
}
