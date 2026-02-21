import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import Customizer from "@/components/Customizer";
import WhyKarv from "@/components/WhyKarv";
import WoodSelection from "@/components/WoodSelection";
import Training from "@/components/Training";
import Founders from "@/components/Founders";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <>
      {/* SEO */}
      <title>Karv — Premium Handcrafted Wooden Parallettes | Made in India</title>
      
      <Navigation />

      <main>
        <Hero />
        <ProductShowcase />
        <WhyKarv />
        <Customizer />
        <WoodSelection />
        <Training />
        <Founders />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
