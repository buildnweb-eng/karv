import { useState } from "react";
import { Check, ShoppingCart, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCart from "@/components/FloatingCart";
import useReveal from "@/hooks/useReveal";
import woodTeakImg from "@/assets/wood-teak.jpg";
import woodRosewoodImg from "@/assets/wood-rosewood.jpg";
import woodPalmImg from "@/assets/wood-palm.jpg";

const woodOptions = [
  { id: "teak", name: "Teak Wood", tagline: "Timeless strength", img: woodTeakImg, price: 0, desc: "Durable, weather-resistant, golden-brown tone. The gold standard of parallettes." },
  { id: "rosewood", name: "Rosewood", tagline: "Rare & regal", img: woodRosewoodImg, price: 2500, desc: "Deep reddish-brown, fine grain, exceptionally dense. A statement piece." },
  { id: "palm", name: "Palm Wood", tagline: "Bold grain", img: woodPalmImg, price: 500, desc: "Distinctive dark streaks, tropical hardwood. Unique look, proven strength." },
];

const sizeOptions = [
  { id: "compact", label: "Compact", dims: "38cm × 22cm", desc: "Ideal for beginners & travel", price: -1000 },
  { id: "standard", label: "Standard", dims: "45cm × 28cm", desc: "The all-rounder for most athletes", price: 0 },
  { id: "pro", label: "Pro Extended", dims: "55cm × 32cm", desc: "Advanced skills & planche training", price: 2500 },
];

const finishOptions = [
  { id: "natural", label: "Natural Oil", desc: "Raw wood feel, enhanced protection", price: 0 },
  { id: "matte", label: "Matte Lacquer", desc: "Smooth, consistent finish", price: 0 },
  { id: "engraved", label: "Custom Engraved", desc: "Your name or logo", price: 800 },
];

export default function Customize() {
  const { addToCart } = useCart();
  const [wood, setWood] = useState("teak");
  const [size, setSize] = useState("standard");
  const [finish, setFinish] = useState("natural");
  const [added, setAdded] = useState(false);
  const { ref, visible } = useReveal();

  const selectedWood = woodOptions.find((w) => w.id === wood)!;
  const selectedSize = sizeOptions.find((s) => s.id === size)!;
  const selectedFinish = finishOptions.find((f) => f.id === finish)!;
  
  const basePrice = 4999;
  const woodExtra = selectedWood.price;
  const sizeExtra = selectedSize.price;
  const finishExtra = selectedFinish.price;
  const total = basePrice + woodExtra + sizeExtra + finishExtra;

  const handleAddToCart = () => {
    addToCart({
      id: `custom-${Date.now()}`,
      name: "Custom Karv Parallettes",
      subtitle: `${selectedWood.name} — ${selectedSize.label}`,
      price: total,
      image: selectedWood.img,
      type: "custom",
      customConfig: {
        wood: selectedWood.name,
        size: selectedSize.label,
        finish: selectedFinish.label,
      },
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <>
      <title>Customize — Karv</title>
      <Navigation />

      <main className="pt-24">
        <section className="py-16" style={{ background: "hsl(var(--charcoal))" }}>
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
              <div className="text-center mb-16">
                <span className="section-label block mb-4">Build Your Own</span>
                <h1 className="font-display text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Customize Your<br /><span className="text-wood-gradient">Karv</span>
                </h1>
                <p className="font-body text-muted-foreground mt-4 max-w-lg mx-auto">
                  Every athlete is different. Configure your ideal parallettes, wood, size, and finish, exactly to your vision.
                </p>
              </div>

              <div className="grid lg:grid-cols-5 gap-8 items-start">
                {/* Configuration Panel */}
                <div className="lg:col-span-3 space-y-10">
                  {/* Wood Type */}
                  <div>
                    <h2 className="font-display text-xl font-bold text-foreground mb-5 flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-body text-xs font-bold">1</span>
                      Choose Your Wood
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {woodOptions.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => setWood(option.id)}
                          className={`relative group rounded-sm overflow-hidden border-2 transition-all duration-300 ${
                            wood === option.id ? "border-primary" : "border-border hover:border-primary/50"
                          }`}
                        >
                          <div className="h-24 overflow-hidden">
                            <img src={option.img} alt={option.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          </div>
                          <div className="p-3 bg-card text-left">
                            <div className="font-body text-sm font-semibold text-foreground">{option.name}</div>
                            <div className="font-body text-xs text-muted-foreground">{option.tagline}</div>
                            <div className="font-body text-xs text-primary font-semibold mt-1">
                              {option.price === 0 ? "Included" : `+₹${option.price}`}
                            </div>
                          </div>
                          {wood === option.id && (
                            <div className="absolute top-2 right-2 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                              <Check size={12} className="text-primary-foreground" />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                    <p className="font-body text-sm text-muted-foreground mt-3 pl-1">{selectedWood.desc}</p>
                  </div>

                  {/* Size */}
                  <div>
                    <h2 className="font-display text-xl font-bold text-foreground mb-5 flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-body text-xs font-bold">2</span>
                      Select Size
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {sizeOptions.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => setSize(option.id)}
                          className={`p-4 rounded-sm border-2 text-left transition-all duration-300 ${
                            size === option.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 bg-card"
                          }`}
                        >
                          <div className="font-body text-sm font-bold text-foreground">{option.label}</div>
                          <div className="font-body text-xs text-primary mt-0.5">{option.dims}</div>
                          <div className="font-body text-xs text-muted-foreground mt-1">{option.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Finish */}
                  <div>
                    <h2 className="font-display text-xl font-bold text-foreground mb-5 flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-body text-xs font-bold">3</span>
                      Choose Finish
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {finishOptions.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => setFinish(option.id)}
                          className={`p-4 rounded-sm border-2 text-left transition-all duration-300 ${
                            finish === option.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 bg-card"
                          }`}
                        >
                          <div className="font-body text-sm font-bold text-foreground">{option.label}</div>
                          <div className="font-body text-xs text-muted-foreground mt-1">{option.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Summary Card */}
                <div className="lg:col-span-2">
                  <div className="bg-card border border-border rounded-sm p-8 sticky top-24">
                    {/* Visual preview */}
                    <div className="relative h-48 rounded-sm overflow-hidden mb-6">
                      <img
                        src={selectedWood.img}
                        alt={selectedWood.name}
                        className="w-full h-full object-cover transition-all duration-500"
                        style={{ filter: "brightness(0.6) saturate(1.2)" }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="font-display text-2xl font-bold text-foreground">KARV</div>
                          <div className="font-body text-xs text-foreground/70 tracking-widest mt-1">
                            {selectedSize.label} · {selectedWood.name}
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-foreground mb-6">Your Configuration</h3>

                    <div className="space-y-3 mb-8">
                      <div className="flex justify-between font-body text-sm">
                        <span className="text-muted-foreground">Wood</span>
                        <span className="text-foreground font-medium">{selectedWood.name}</span>
                      </div>
                      <div className="flex justify-between font-body text-sm">
                        <span className="text-muted-foreground">Size</span>
                        <span className="text-foreground font-medium">{selectedSize.label}</span>
                      </div>
                      <div className="flex justify-between font-body text-sm">
                        <span className="text-muted-foreground">Finish</span>
                        <span className="text-foreground font-medium">{selectedFinish.label}</span>
                      </div>
                      <div className="divider-wood my-4" />
                      <div className="flex justify-between font-body">
                        <span className="text-foreground font-semibold text-lg">Total</span>
                        <span className="font-display text-2xl font-bold text-primary">₹{total.toLocaleString()}</span>
                      </div>
                    </div>

                    <button
                      onClick={handleAddToCart}
                      className={`w-full flex items-center justify-center gap-2 font-body text-sm font-bold py-4 rounded-sm transition-all duration-300 ${
                        added
                          ? "bg-green-600/20 text-green-400 border border-green-600/30"
                          : "bg-primary text-primary-foreground hover:bg-wood-dark glow-wood"
                      }`}
                    >
                      <ShoppingCart size={16} />
                      {added ? "Added to Cart!" : "Add Custom Order to Cart"}
                    </button>

                    <p className="font-body text-xs text-muted-foreground text-center mt-4">
                      Custom orders ship in 3-5 business days
                    </p>
                  </div>
                </div>
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
