import { useState } from "react";
import { ShoppingCart, Star, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCart from "@/components/FloatingCart";
import productImg from "@/assets/product-detail.jpg";
import heroImg from "@/assets/hero-parallettes.jpg";
import athleteImg from "@/assets/athlete-training.jpg";
import useReveal from "@/hooks/useReveal";

const products = [
  {
    id: "prod-1",
    name: "Karv Pro Parallettes",
    subtitle: "Teak Wood — Standard",
    price: 4999,
    originalPrice: 6500,
    rating: 4.9,
    reviews: 128,
    image: heroImg,
    tag: "Best Seller",
    specs: ["45cm Length", "28cm Height", "Teak Wood", "Anti-slip Base"],
    description: "Our flagship parallettes — precision-crafted from sustainably sourced teak. Perfect for intermediate to advanced athletes.",
  },
  {
    id: "prod-2",
    name: "Karv Elite Parallettes",
    subtitle: "Rosewood — Extended",
    price: 7499,
    originalPrice: 9000,
    rating: 5.0,
    reviews: 64,
    image: productImg,
    tag: "Premium",
    specs: ["55cm Length", "32cm Height", "Rosewood", "Engraved Finish"],
    description: "The pinnacle of wooden parallette craftsmanship. Extended length for planche and advanced skills training.",
  },
  {
    id: "prod-3",
    name: "Karv Foundation",
    subtitle: "Palm Wood — Compact",
    price: 2999,
    originalPrice: 4000,
    rating: 4.8,
    reviews: 89,
    image: athleteImg,
    tag: "Beginner",
    specs: ["38cm Length", "22cm Height", "Palm Wood", "Natural Finish"],
    description: "The perfect entry point into calisthenics. Compact, durable, and built to last your entire journey.",
  },
];

export default function Products() {
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState<string | null>(null);
  const { ref, visible } = useReveal();

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      subtitle: product.subtitle,
      price: product.price,
      image: product.image,
      type: "preset",
    });
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 2000);
  };

  return (
    <>
      <title>Products — Karv</title>
      <Navigation />

      <main className="pt-24">
        <section className="py-16 bg-background">
          <div className="section-container">
            {/* Back Link */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>

            <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
                <div>
                  <span className="section-label block mb-4">The Collection</span>
                  <h1 className="font-display text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                    Built Different.<br />
                    <span className="text-wood-gradient">Built to Last.</span>
                  </h1>
                </div>
                <p className="font-body text-muted-foreground max-w-sm leading-relaxed">
                  Every pair is hand-shaped, sanded to glass smoothness, and finished with oils that protect and beautify the wood for years.
                </p>
              </div>

              <div className="divider-wood mb-16" />

              {/* Product Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, i) => (
                  <article
                    key={product.id}
                    className="group relative bg-card border border-border rounded-sm overflow-hidden card-hover"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {/* Tag */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="font-body text-xs font-semibold tracking-widest uppercase px-3 py-1 bg-primary text-primary-foreground rounded-sm">
                        {product.tag}
                      </span>
                    </div>

                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h2 className="font-display text-xl font-bold text-foreground">{product.name}</h2>
                          <p className="font-body text-xs text-muted-foreground tracking-wide mt-0.5">{product.subtitle}</p>
                        </div>
                        <div className="text-right">
                          <div className="font-display text-xl font-bold text-primary">₹{product.price.toLocaleString()}</div>
                          <div className="font-body text-xs text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</div>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex">
                          {[...Array(5)].map((_, j) => (
                            <Star key={j} size={12} className="fill-primary text-primary" />
                          ))}
                        </div>
                        <span className="font-body text-xs text-muted-foreground">{product.rating} ({product.reviews})</span>
                      </div>

                      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{product.description}</p>

                      {/* Specs */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {product.specs.map((spec) => (
                          <span key={spec} className="font-body text-xs px-2.5 py-1 border border-border text-muted-foreground rounded-sm">
                            {spec}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => handleAddToCart(product)}
                        className={`w-full flex items-center justify-center gap-2 font-body text-sm font-semibold py-3 rounded-sm transition-all duration-300 ${
                          addedId === product.id
                            ? "bg-green-600/20 text-green-400 border border-green-600/30"
                            : "bg-primary text-primary-foreground hover:bg-wood-dark"
                        }`}
                      >
                        <ShoppingCart size={16} />
                        {addedId === product.id ? "Added to Cart!" : "Add to Cart"}
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              {/* Custom Option CTA */}
              <div className="mt-16 bg-card border border-border rounded-sm p-8 lg:p-12 text-center">
                <h3 className="font-display text-3xl font-bold text-foreground mb-4">
                  Want Something Unique?
                </h3>
                <p className="font-body text-muted-foreground mb-6 max-w-xl mx-auto">
                  Build your perfect parallettes. Choose your wood, size, and finish.
                </p>
                <Link
                  to="/customize"
                  className="inline-block font-body font-semibold text-sm tracking-widest uppercase px-10 py-4 bg-primary text-primary-foreground hover:bg-wood-dark transition-all duration-300 rounded-sm glow-wood"
                >
                  Customize Your Karv
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FloatingCart />
      <Footer />
    </>
  );
}
