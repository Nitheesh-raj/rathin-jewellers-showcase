import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GoldButton } from "@/components/ui/GoldButton";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { whatsappLink } from "@/utils/helpers";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Rathin Jewellers" },
      { name: "description", content: "Visit our Chennai showroom or reach us by phone, WhatsApp, or email." },
      { property: "og:title", content: "Contact Us — Rathin Jewellers" },
      { property: "og:description", content: "Get in touch with Rathin Jewellers." },
    ],
  }),
  component: Contact,
});

const items = [
  { icon: MapPin, label: "Visit", value: "24, Ranganathan Street,\nT. Nagar, Chennai – 600017" },
  { icon: Phone, label: "Call", value: "+91 8870853812" },
  { icon: Mail, label: "Email", value: "care@rathinjewellers.com" },
  { icon: Clock, label: "Hours", value: "Mon – Sat · 10:30 AM – 8:30 PM" },
];

function Contact() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          eyebrow="We'd Love to Hear From You"
          title="Get in Touch"
          subtitle="Visit our showroom, send us a message, or simply ring us — we are always here to help you find the perfect piece."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            {items.map((it) => (
              <div key={it.label} className="flex gap-5 rounded-sm bg-cream p-6 shadow-soft">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-ivory">
                  <it.icon className="h-5 w-5 text-gold-deep" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{it.label}</p>
                  <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-foreground">{it.value}</p>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const msg = `Hi, I'm ${data.get("name")}. ${data.get("message")}`;
              window.open(whatsappLink(msg), "_blank");
            }}
            className="rounded-sm bg-cream p-8 shadow-soft"
          >
            <h3 className="font-serif text-2xl text-foreground">Send a Message</h3>
            <p className="mt-2 text-sm text-muted-foreground">We respond within a few hours, every day.</p>
            <div className="mt-6 space-y-4">
              <input
                name="name"
                required
                placeholder="Your name"
                className="w-full border border-border bg-ivory px-4 py-3 text-sm outline-none focus:border-gold"
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone (optional)"
                className="w-full border border-border bg-ivory px-4 py-3 text-sm outline-none focus:border-gold"
              />
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell us what you're looking for…"
                className="w-full border border-border bg-ivory px-4 py-3 text-sm outline-none focus:border-gold"
              />
              <GoldButton as="button" type="submit" className="w-full">
                Send via WhatsApp
              </GoldButton>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
