import { createFileRoute } from "@tanstack/react-router";
import bridal from "@/assets/collection-bridal.jpg";
import daily from "@/assets/collection-daily.jpg";
import premium from "@/assets/collection-premium.jpg";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GoldButton } from "@/components/ui/GoldButton";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — Rathin Jewellers" },
      { name: "description", content: "Explore our bridal, daily wear, and premium gold jewellery collections." },
      { property: "og:title", content: "Collections — Rathin Jewellers" },
      { property: "og:description", content: "Curated jewellery collections for every occasion." },
    ],
  }),
  component: CollectionsPage,
});

const collections = [
  {
    title: "Bridal Collection",
    img: bridal,
    desc: "Heirloom-worthy temple necklaces, harams, and elaborate sets crafted for the most sacred day of your life. Each piece is a story of tradition, elegance, and devotion.",
  },
  {
    title: "Daily Wear",
    img: daily,
    desc: "Lightweight, refined, and quietly luxurious — pieces designed to move with you through every ordinary moment, making each one a little more golden.",
  },
  {
    title: "Premium Gold",
    img: premium,
    desc: "22K masterpieces — bangles, rings, and chains shaped by hand, finished with patience, and meant to be passed down through generations.",
  },
];

function CollectionsPage() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          eyebrow="Curated by Our Atelier"
          title="Our Collections"
          subtitle="Three worlds of jewellery — each with its own soul, its own season, its own story."
        />

        <div className="space-y-24">
          {collections.map((c, i) => (
            <div
              key={c.title}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                i % 2 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-card">
                  <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="absolute -inset-4 -z-10 rounded-sm bg-gradient-gold opacity-10 blur-2xl" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-gold">0{i + 1} · Collection</p>
                <h3 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">{c.title}</h3>
                <div className="mt-6 h-px w-20 bg-gradient-gold" />
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">{c.desc}</p>
                <div className="mt-8">
                  <GoldButton as="a" href="/shop" variant="outline">
                    Shop the Edit
                  </GoldButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
