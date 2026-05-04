import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProductGrid } from "@/components/product/ProductGrid";
import { GoldButton } from "@/components/ui/GoldButton";
import { products } from "@/data/products";

export function FeaturedProducts() {
  return (
    <section className="bg-ivory py-24">
      <Container>
        <SectionTitle
          eyebrow="Signature Pieces"
          title="The Featured Edit"
          subtitle="A handpicked selection of our finest creations — where artistry meets enduring beauty."
        />
        <ProductGrid products={products.slice(0, 4)} />
        <div className="mt-14 text-center">
          <GoldButton as="a" href="/shop" variant="outline">
            View All Pieces
          </GoldButton>
        </div>
      </Container>
    </section>
  );
}
