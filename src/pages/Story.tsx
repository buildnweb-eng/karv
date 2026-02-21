import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Founders from "@/components/Founders";
import Testimonials from "@/components/Testimonials";

export default function Story() {
  return (
    <>
      <title>Our Story — Karv</title>
      <Navigation />

      <main className="pt-24">
        <section className="py-16 bg-background">
          <div className="section-container">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </div>
        </section>
        <Founders />
        <Testimonials />
      </main>

      <Footer />
    </>
  );
}
