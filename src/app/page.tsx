
import { ContactSection } from "@/components/home-page/contact-section";
import { HeroSection } from "@/components/home-page/hero-section";
import { OwnerSection } from "@/components/home-page/owner-section";
import { ProductsSection } from "@/components/home-page/products-section";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { cormorant, manrope } from "@/lib/fonts";
import ownerImage from "@/assets/products/product-blue-bouquet.png";
import { OccasionsSection } from "@/components/home-page/about-section";
export default function HomePage() {
  return (
    <main
      className={`${manrope.className} ${manrope.variable} ${cormorant.variable} page-grain overflow-x-clip bg-[#f5f7ef] text-[#193b31]`}
    >
      <Header />
      <HeroSection />
      <ProductsSection />
      <OccasionsSection />
      <OwnerSection image={ownerImage} name="Nelma Tavares" />
      <ContactSection />
      <Footer />
    </main>
  );
}
