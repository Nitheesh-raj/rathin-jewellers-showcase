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
          eyebrow="Est. 1962"
          title="A Legacy in Gold"
          subtitle="Four generations. Six decades. One unwavering devotion to craftsmanship."
        />

        <div className="mx-auto max-w-3xl space-y-8 text-base leading-loose text-muted-foreground">
          <p className="font-tamil text-2xl text-gold-deep text-center" lang="ta">
            பொன் அல்ல… ஒரு உணர்வு.
          </p>
          <p>
            Rathin Jewellers began in 1962 as a small workshop in the heart of Chennai —
            a single artisan, a flame, and a quiet promise to never compromise on purity
            or craft. Today, that same flame still burns in our atelier, kept alive by
            the great-grandchildren of our founder.
          </p>
          <p>
            Every piece that leaves our doors carries the weight of that promise. From
            the elaborate temple necklaces worn by brides on their most sacred day, to
            the delicate gold chains worn quietly under everyday silks — we believe
            jewellery is not metal. It is memory, made eternal.
          </p>
          <p>
            We are honoured to have adorned over 50,000 families across South India, and
            to have been entrusted with their most precious moments. Thank you for letting
            us be a small part of your story.
          </p>
        </div>

        <div className="mt-20 grid gap-10 border-y border-border py-14 md:grid-cols-4 text-center">
          {[
            ["1962", "Founded"],
            ["50K+", "Families Served"],
            ["22K", "Hallmark Gold"],
            ["4", "Generations"],
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
