import productBlueBouquet from "@/assets/products/product-blue-bouquet.png";
import productCandyBouquet from "@/assets/products/product-candy-bouquet.png";
import productGiftBox from "@/assets/products/product-gift-box.png";
import productPinkBouquet from "@/assets/products/product-pink-bouquet.png";
import productRedWhite from "@/assets/products/product-red-white.png";
import productRoseHeart from "@/assets/products/product-rose-heart.png";

export const products = [
  {
    image: productRoseHeart,
    label: "Coração de rosas",
    category: "Buquês florais",
    tone: "bg-[#b8dec6]",
  },
  {
    image: productRedWhite,
    label: "Vermelho & branco",
    category: "Buquês florais",
    tone: "bg-[#c7dfc9]",
  },
  {
    image: productPinkBouquet,
    label: "Arranjo cor-de-rosa",
    category: "Arranjos",
    tone: "bg-[#acd9bf]",
  },
  {
    image: productBlueBouquet,
    label: "Azul intenso",
    category: "Buquês florais",
    tone: "bg-[#a7c9bb]",
  },
  {
    image: productCandyBouquet,
    label: "Buquê de oferta",
    category: "Peças para oferta",
    tone: "bg-[#d0dfb8]",
  },
  {
    image: productGiftBox,
    label: "Caixa presente",
    category: "Presentes",
    tone: "bg-[#b7d2c3]",
  },
] as const;