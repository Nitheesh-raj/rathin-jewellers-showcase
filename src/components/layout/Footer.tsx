import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { Container } from "./Container";
import { whatsappLink } from "@/utils/helpers";

export function Footer() {
  return (
    <footer className="bg-cream border-t border-border">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <h3 className="font-serif text-2xl text-foreground">Rathin Jewellers</h3>
            <p className="mt-1 text-[10px] uppercase tracking-[0.35em] text-gold">
              Crafted with Heritage
            </p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              A legacy of fine craftsmanship, purity, and timeless design. Adorning
              generations with stories of gold.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-gold-deep">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/shop" className="hover:text-gold-deep">Shop</Link></li>
              <li><Link to="/collections" className="hover:text-gold-deep">Collections</Link></li>
              <li><Link to="/about" className="hover:text-gold-deep">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-gold-deep">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-gold-deep">Visit Us</h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" /> 24, Ranganathan Street,<br />T. Nagar, Chennai – 600017</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 text-gold shrink-0" /> +91 8870853812</li>
              <li className="flex gap-2"><Mail className="h-4 w-4 text-gold shrink-0" /> care@rathinjewellers.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-gold-deep">Connect</h4>
            <div className="mt-5 flex gap-3">
              <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-gold-deep hover:bg-gold hover:text-primary-foreground transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-gold-deep hover:bg-gold hover:text-primary-foreground transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-gold-deep hover:bg-gold hover:text-primary-foreground transition-colors">
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="gold-divider mt-14" />
        <p className="mt-6 text-center text-xs tracking-wide text-muted-foreground">
          © {new Date().getFullYear()} Rathin Jewellers · All rights reserved
        </p>
      </Container>
    </footer>
  );
}
