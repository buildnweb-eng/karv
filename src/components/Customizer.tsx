import { useState } from "react";
import { Check, ShoppingCart } from "lucide-react";
import useReveal from "@/hooks/useReveal";
import woodTeakImg from "@/assets/wood-teak.jpg";
import woodRosewoodImg from "@/assets/wood-rosewood.jpg";
import woodPalmImg from "@/assets/wood-palm.jpg";

const woodOptions = [
  { id: "teak", name: "Teak Wood", tagline: "Timeless strength", img: woodTeakImg, price: "+₹0", desc: "Durable, weather-resistant, golden-brown tone. The gold standard of parallettes." },
  { id: "rosewood", name: "Rosewood", tagline: "Rare & regal", img: woodRosewoodImg, price: "+₹2,500", desc: "Deep reddish-brown, fine grain, exceptionally dense. A statement piece." },
  { id: "palm", name: "Palm Wood", tagline: "Bold grain", img: woodPalmImg, price: "+₹500", desc: "Distinctive dark streaks, tropical hardwood. Unique look, proven strength." },
];

const sizeOptions = [
  { id: "compact", label: "Compact", dims: "38cm × 22cm", desc: "Ideal for beginners & travel" },
  { id: "standard", label: "Standard", dims: "45cm × 28cm", desc: "The all-rounder for most athletes" },
  { id: "pro", label: "Pro Extended", dims: "55cm × 32cm", desc: "Advanced skills & planche training" },
];

const finishOptions = [
  { id: "natural", label: "Natural Oil", desc: "Raw wood feel, enhanced protection" },
  { id: "matte", label: "Matte Lacquer", desc: "Smooth, consistent finish" },
  { id: "engraved", label: "Custom Engraved", desc: "Your name or logo (+₹800)" },
];

export default function Customizer() {
  const [wood, setWood] = useState("teak");
  const [size, setSize] = useState("standard");
  const [finish, setFinish] = useState("natural");
  const [added, setAdded] = useState(false);
  const { ref, visible } = useReveal();

  const selectedWood = woodOptions.find((w) => w.id === wood)!;
  const basePrice = 4999;
  const woodExtra = woodOptions.find((w) => w.id === wood)?.price === "+₹0" ? 0 : parseInt(woodOptions.find((w) => w.id === wood)?.price.replace("+₹", "") || "0");
  const sizeExtra = size === "compact" ? -1000 : size === "pro" ? 2500 : 0;
  const finishExtra = finish === "engraved" ? 800 : 0;
  const total = basePrice + woodExtra + sizeExtra + finishExtra;

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <section id="customize" className="py-28" style={{ background: "hsl(var(--charcoal))" }}>
      <div className="section-container">
        <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
          <div className="text-center mb-16">
            <span className="section-label block mb-4">Build Your Own</span>
            <h2 className="font-display text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Customize Your<br /><span className="text-wood-gradient">Karv</span>
            </h2>
            <p className="font-body text-muted-foreground mt-4 max-w-lg mx-auto">
Every athlete is different. Configure your ideal parallettes, wood, size, and finish, exactly to your vision.            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Configuration Panel */}
            <div className="lg:col-span-3 space-y-10">
              {/* Wood Type */}
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-5 flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-body text-xs font-bold">1</span>
                  Choose Your Wood
                </h3>
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
                        <div className="font-body text-xs text-primary font-semibold mt-1">{option.price}</div>
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
                <h3 className="font-display text-xl font-bold text-foreground mb-5 flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-body text-xs font-bold">2</span>
                  Select Size
                </h3>
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
                <h3 className="font-display text-xl font-bold text-foreground mb-5 flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-body text-xs font-bold">3</span>
                  Choose Finish
                </h3>
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
                        {sizeOptions.find((s) => s.id === size)?.label} · {selectedWood.name}
                      </div>
                    </div>
                  </div>
                </div>

                <h4 className="font-display text-2xl font-bold text-foreground mb-6">Your Configuration</h4>

                <div className="space-y-3 mb-8">
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-muted-foreground">Wood</span>
                    <span className="text-foreground font-medium">{selectedWood.name}</span>
                  </div>
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-muted-foreground">Size</span>
                    <span className="text-foreground font-medium">{sizeOptions.find((s) => s.id === size)?.label}</span>
                  </div>
                  <div className="flex justify-between font-body text-sm">
                    <span className="text-muted-foreground">Finish</span>
                    <span className="text-foreground font-medium">{finishOptions.find((f) => f.id === finish)?.label}</span>
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
  );
}
