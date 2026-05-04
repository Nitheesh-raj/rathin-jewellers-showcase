import type { Product } from "@/data/products";
import { whatsappLink } from "@/utils/helpers";
import { MessageCircle } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-sm bg-cream shadow-soft transition-all duration-500 hover:shadow-card">
      <div className="aspect-square overflow-hidden bg-ivory">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{product.category}</p>
        <h3 className="mt-2 font-serif text-lg text-foreground">{product.name}</h3>
        {product.price && (
          <p className="mt-1 text-sm text-muted-foreground">{product.price}</p>
        )}
        <a
          href={whatsappLink(`Hi, I'd like to enquire about "${product.name}".`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-2 border border-gold px-4 py-2.5 text-xs uppercase tracking-[0.2em] text-gold-deep transition-colors hover:bg-gold hover:text-primary-foreground"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          Enquire
        </a>
      </div>
    </div>
  );
}
