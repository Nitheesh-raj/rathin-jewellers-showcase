import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Rathin Jewellers" },
      { name: "description", content: "Six decades of heritage, craftsmanship, and trust — the story of Rathin Jewellers." },
      { property: "og:title", content: "Our Story — Rathin Jewellers" },
      { property: "og:description", content: "Six decades of heritage and craftsmanship." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          eyebrow="Est. 2026"
          title="Crafted for Excellence"
          subtitle="A new chapter in premium jewellery. Timeless design meets contemporary elegance."
        />

        <div className="mx-auto max-w-3xl space-y-8 text-base leading-loose text-muted-foreground">
          <p className="font-tamil text-2xl text-gold-deep text-center" lang="ta">
            பொன் அல்ல… ஒரு உணர்வு.
          </p>
          <p>
            Rathin Jewellers opened in 2026 with a singular vision — to craft jewellery that transcends trends.
            With expert artisans and a commitment to purity, we bring you pieces that celebrate life's most precious moments.
          </p>
          <p>
            Every piece that leaves our atelier is a testament to craftsmanship, passion, and an unwavering commitment to excellence.
            From elaborate bridal sets to everyday elegance — we believe jewellery is not simply metal. It is memory, made eternal.
          </p>
          <p>
            Thank you for choosing Rathin Jewellers. We are honored to be a part of your story.
          </p>
        </div>

        <div className="mt-20 grid gap-10 border-y border-border py-14 md:grid-cols-4 text-center">
          {[
            ["2026", "Founded"],
            ["100%", "Hallmark Gold"],
            ["22K", "Premium Purity"],
            ["∞", "Timeless Beauty"],
          ].map(([n, l]) => (
            <div key={l}>
              <p className="font-serif text-4xl text-gradient-gold">{n}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
