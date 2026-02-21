import { Hammer, Shield, Droplets, MapPin, Layers, Zap } from "lucide-react";
import craftImg from "@/assets/craftsmanship.jpg";
import useReveal from "@/hooks/useReveal";

const pillars = [
  {
    icon: Hammer,
    title: "Handmade Craftsmanship",
    desc: "Every pair is shaped, sanded, and finished by skilled artisans. No machines. No shortcuts.",
  },
  {
    icon: Shield,
    title: "Extreme Durability",
    desc: "Structural hardwoods rated to support 200kg+ load. Built to outlast your entire fitness career.",
  },
  {
    icon: Droplets,
    title: "Waterproof & Damage-Resistant",
    desc: "Our finishing process seals the grain completely. Train outdoors, sweat freely. These won't break down.",
  },
  {
    icon: MapPin,
    title: "Made in India",
    desc: "Proudly crafted in India, using local artisan skills passed down through generations.",
  },
  {
    icon: Layers,
    title: "Premium Wood Selection",
    desc: "Only the top 5% of timber makes it into a Karv product. We source teak, rosewood, and palm from verified sustainable suppliers.",
  },
  {
    icon: Zap,
    title: "Built for Strength",
    desc: "Designed by athletes, tested by athletes. The geometry and proportions are optimized for maximum performance.",
  },
];

export default function WhyKarv() {
  const { ref, visible } = useReveal();
  const { ref: imgRef, visible: imgVisible } = useReveal();

  return (
    <section id="why-karv" className="py-28 bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div ref={imgRef} className={`reveal ${imgVisible ? "visible" : ""}`}>
            <div className="relative">
              <img
                src={craftImg}
                alt="Karv craftsmanship"
                className="w-full h-[600px] object-cover rounded-sm"
              />
              {/* Overlay label */}
              <div className="absolute bottom-6 left-6 right-6 bg-background/90 backdrop-blur-sm border border-border rounded-sm p-5">
                <div className="font-body text-xs text-primary tracking-widest uppercase mb-1">The Karv Promise</div>
                <div className="font-display text-lg font-bold text-foreground">
                  "Every piece is a work of art that's built to be used."
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute -top-4 -right-4 w-32 h-32 border border-primary/20 rounded-sm -z-10" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-primary/10 rounded-sm -z-10" />
            </div>
          </div>

          {/* Text side */}
          <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
            <span className="section-label block mb-5">Why Karv</span>
            <h2 className="font-display text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Equipment as<br />
              <span className="text-wood-gradient">Uncompromising</span><br />
              as You Are.
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-12">
              We didn't build Karv to be another fitness brand. We built it because we couldn't find parallettes worthy of serious athletes. So we made them ourselves.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="group">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <pillar.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-body text-sm font-bold text-foreground mb-1">{pillar.title}</h3>
                      <p className="font-body text-xs text-muted-foreground leading-relaxed">{pillar.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
