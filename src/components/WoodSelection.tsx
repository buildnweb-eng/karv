import woodTeakImg from "@/assets/wood-teak.jpg";
import woodRosewoodImg from "@/assets/wood-rosewood.jpg";
import woodPalmImg from "@/assets/wood-palm.jpg";
import useReveal from "@/hooks/useReveal";

const woods = [
  {
    name: "Teak Wood",
    origin: "South India / SE Asia",
    img: woodTeakImg,
    color: "Warm golden-brown",
    hardness: "Exceptional",
    finish: "Natural oil / lacquer",
    character: [
      "Naturally water-resistant",
      "Tight, even grain",
      "Exceptional load-bearing strength",
      "Ages beautifully over time",
    ],
    desc: "The gold standard of woodworking. Teak's natural oils make it inherently weather-resistant — perfect for athletes who train outdoors or in high-humidity environments.",
    badge: "Most Popular",
  },
  {
    name: "Rosewood",
    origin: "South India",
    img: woodRosewoodImg,
    color: "Deep reddish-brown",
    hardness: "Extremely high",
    finish: "Natural polish / engraved",
    character: [
      "One of the densest hardwoods",
      "Strikingly beautiful grain",
      "Natural luster without finishing",
      "Rare & prestigious material",
    ],
    desc: "An heirloom-grade material. Rosewood's density and visual complexity make it the premium choice — an instrument-grade timber used in high-end furniture worldwide.",
    badge: "Premium Choice",
  },
  {
    name: "Palm Wood",
    origin: "Coastal India",
    img: woodPalmImg,
    color: "Orange-amber with dark streaks",
    hardness: "High",
    finish: "Natural oil",
    character: [
      "Unique striated appearance",
      "Lightweight yet strong",
      "Sustainably harvested",
      "Distinct tropical character",
    ],
    desc: "For the athlete who wants to stand out. Palm wood's bold, high-contrast grain pattern makes every pair visually unique — no two are exactly alike.",
    badge: "Unique Grain",
  },
];

export default function WoodSelection() {
  const { ref, visible } = useReveal();

  return (
    <section id="woods" className="py-28" style={{ background: "hsl(var(--charcoal))" }}>
      <div className="section-container">
        <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
          <div className="text-center mb-16">
            <span className="section-label block mb-4">Material Selection</span>
            <h2 className="font-display text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Choose Your<br />
              <span className="text-wood-gradient">Wood</span>
            </h2>
            <p className="font-body text-muted-foreground mt-4 max-w-lg mx-auto">
              Each wood species brings a distinct character, aesthetic, and performance profile. The right choice depends on how and where you train.
            </p>
          </div>

          <div className="divider-wood mb-16" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {woods.map((wood, i) => (
              <div
                key={wood.name}
                className="group bg-card border border-border rounded-sm overflow-hidden card-hover"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Wood texture image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={wood.img}
                    alt={`${wood.name} texture`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="font-body text-xs font-semibold tracking-widest uppercase px-3 py-1 bg-primary text-primary-foreground rounded-sm">
                      {wood.badge}
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-1">{wood.name}</h3>
                  <p className="font-body text-xs text-muted-foreground tracking-wide mb-4">Origin: {wood.origin}</p>

                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">{wood.desc}</p>

                  {/* Properties */}
                  <div className="space-y-2 mb-6">
                    {[
                      ["Color", wood.color],
                      ["Hardness", wood.hardness],
                      ["Finish Options", wood.finish],
                    ].map(([label, value]) => (
                      <div key={label} className="flex justify-between text-xs font-body">
                        <span className="text-muted-foreground">{label}</span>
                        <span className="text-foreground font-medium">{value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="divider-wood mb-6" />

                  {/* Character traits */}
                  <ul className="space-y-2">
                    {wood.character.map((trait) => (
                      <li key={trait} className="flex items-center gap-2 font-body text-xs text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                        {trait}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
