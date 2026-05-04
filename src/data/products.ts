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
  { id: "1", name: "Lakshmi Temple Necklace", category: "Bridal", price: "On request", image: p1 },
  { id: "2", name: "Pearl Jhumka Earrings", category: "Bridal", price: "₹ 48,500", image: p2 },
  { id: "3", name: "Antique Bangle Stack", category: "Premium Gold", price: "₹ 2,15,000", image: p3 },
  { id: "4", name: "Solitaire Drop Pendant", category: "Diamond", price: "₹ 86,000", image: p4 },
  { id: "5", name: "Halo Solitaire Ring", category: "Diamond", price: "₹ 1,24,000", image: p5 },
  { id: "6", name: "Floral Bridal Haram", category: "Bridal", price: "On request", image: p6 },
  { id: "7", name: "Minimal Gold Chain", category: "Daily Wear", price: "₹ 18,500", image: p7 },
  { id: "8", name: "Classic Gold Hoops", category: "Daily Wear", price: "₹ 22,000", image: p8 },
];

export const categories = ["All", "Bridal", "Daily Wear", "Premium Gold", "Diamond"] as const;
