import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";
import p5 from "@/assets/product-5.jpg";
import p6 from "@/assets/product-6.jpg";
import p7 from "@/assets/product-7.jpg";
import p8 from "@/assets/product-8.jpg";

export type Product = {
  id: string;
  name: string;
  category: "Bridal" | "Daily Wear" | "Premium Gold" | "Diamond";
  price?: string;
  image: string;
};

export const products: Product[] = [
  { id: "1", name: "Lakshmi Temple Necklace", category: "Bridal", image: p1 },
  { id: "2", name: "Pearl Jhumka Earrings", category: "Bridal", image: p2 },
  { id: "3", name: "Antique Bangle Stack", category: "Premium Gold", image: p3 },
  { id: "4", name: "Solitaire Drop Pendant", category: "Diamond", image: p4 },
  { id: "5", name: "Halo Solitaire Ring", category: "Diamond", image: p5 },
  { id: "6", name: "Floral Bridal Haram", category: "Bridal", image: p6 },
  { id: "7", name: "Minimal Gold Chain", category: "Daily Wear", image: p7 },
  { id: "8", name: "Classic Gold Hoops", category: "Daily Wear", image: p8 },
];

export const categories = ["All", "Bridal", "Daily Wear", "Premium Gold", "Diamond"] as const;
