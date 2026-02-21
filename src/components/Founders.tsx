import founderAkshayImg from "@/assets/founder-akshay.jpg";
import founderVamshiImg from "@/assets/founder-vamshi.jpg";
import useReveal from "@/hooks/useReveal";

const founders = [
  {
    name: "Akshay",
    role: "Co-Founder & Head of Craft",
    img: founderAkshayImg,
    bio: "A competitive calisthenics athlete for 8 years, Akshay couldn't find wooden parallettes that could keep up with his training intensity. So he started carving them. What began as a personal project in a small workshop became the foundation for Karv.",
    quote: "I wanted equipment that felt like an extension of your body — not a compromise.",
    specialties: ["Competition Calisthenics", "Product Design", "Wood Craft"],
  },
  {
    name: "Vamshi",
    role: "Co-Founder & Business Lead",
    img: founderVamshiImg,
    bio: "Vamshi brings the business vision and training expertise that turned Akshay's craftsmanship into a brand. With a background in sports science and entrepreneurship, he shaped Karv's identity and the coaching programs.",
    quote: "Strength is built slowly. We build equipment that deserves that patience.",
    specialties: ["Sports Science", "Brand Strategy", "Athletic Training"],
  },
];

export default function Founders() {
  const { ref, visible } = useReveal();

  return (
    <section id="founders" className="py-28" style={{ background: "hsl(var(--charcoal))" }}>
      <div className="section-container">
        <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
          {/* Header */}
          <div className="text-center mb-20">
            <span className="section-label block mb-4">The Story</span>
            <h2 className="font-display text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Built by Athletes.<br />
              <span className="text-wood-gradient">For Athletes.</span>
            </h2>
            <p className="font-body text-muted-foreground mt-5 max-w-2xl mx-auto leading-relaxed">
              Karv was born in a workshop out of frustration with mediocre equipment and a belief that premium fitness gear 
              shouldn't require an import order. Everything we make, we test ourselves.
            </p>
          </div>

          {/* Founders Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {founders.map((founder, i) => (
              <div key={founder.name} className="group">
                <div className="grid sm:grid-cols-5 gap-6 items-start">
                  {/* Photo */}
                  <div className="sm:col-span-2">
                    <div className="relative">
                      <div className="aspect-[3/4] overflow-hidden rounded-sm">
                        <img
                          src={founder.img}
                          alt={`${founder.name}, Karv co-founder`}
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                      </div>
                      {/* Accent border */}
                      <div className={`absolute -z-10 w-full h-full rounded-sm border border-primary/20 ${i % 2 === 0 ? "-top-3 -right-3" : "-top-3 -left-3"}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="sm:col-span-3">
                    <div className="bar-divider mb-4" />
                    <h3 className="font-display text-3xl font-bold text-foreground">{founder.name}</h3>
                    <p className="font-body text-xs text-primary tracking-widest uppercase mt-1 mb-5">{founder.role}</p>

                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">{founder.bio}</p>

                    <blockquote className="border-l-2 border-primary pl-4 mb-6">
                      <p className="font-display text-base italic text-foreground">"{founder.quote}"</p>
                    </blockquote>

                    <div className="flex flex-wrap gap-2">
                      {founder.specialties.map((spec) => (
                        <span key={spec} className="font-body text-xs px-3 py-1 border border-border text-muted-foreground rounded-sm">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="mt-20 text-center max-w-3xl mx-auto">
            <div className="divider-wood mb-10" />
            <p className="font-display text-2xl md:text-3xl text-foreground leading-relaxed">
              "We believe strength is built with intention. Your equipment should be too."
            </p>
            <div className="divider-wood mt-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
