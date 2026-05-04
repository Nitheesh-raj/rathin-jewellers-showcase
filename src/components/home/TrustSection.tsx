import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ShieldCheck, Gem, Award } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Purity Guaranteed",
    desc: "BIS hallmarked 22K & 18K gold with certified authenticity on every piece.",
  },
  {
    icon: Gem,
    title: "Fine Craftsmanship",
    desc: "Hand-finished by master artisans with techniques refined over four generations.",
  },
  {
    icon: Award,
    title: "Trusted Legacy",
    desc: "Six decades of serving families with integrity, transparency, and care.",
  },
];

export function TrustSection() {
  return (
    <section className="bg-cream py-24">
      <Container>
        <SectionTitle
          eyebrow="Our Promise"
          title="Why Rathin Jewellers"
          subtitle="More than jewellery — a covenant of trust passed down through generations."
        />
        <div className="grid gap-10 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 bg-ivory shadow-soft">
                <item.icon className="h-8 w-8 text-gold-deep" strokeWidth={1.2} />
              </div>
              <h3 className="mt-6 font-serif text-2xl text-foreground">{item.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
