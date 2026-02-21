import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyKarv from "@/components/WhyKarv";
import WoodSelection from "@/components/WoodSelection";
import FloatingCart from "@/components/FloatingCart";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <>
      {/* SEO */}
      <title>Karv — Premium Handcrafted Wooden Parallettes | Made in India</title>
      
      <Navigation />

      <main>
        <Hero />
        <WhyKarv />
        <WoodSelection />
      </main>

      <FloatingCart />
      <Footer />
    </>
  );
}
