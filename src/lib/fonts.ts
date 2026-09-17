import {
  Cormorant_Garamond,
  Manrope,
} from "next/font/google";

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const cormorant =
  Cormorant_Garamond({
    subsets: ["latin"],
    weight: [
      "400",
      "500",
      "600",
      "700",
    ],
    style: [
      "normal",
      "italic",
    ],
    variable: "--font-cormorant",
    display: "swap",
  });