import { Star, Quote } from "lucide-react";
import useReveal from "@/hooks/useReveal";

const testimonials = [
  {
    name: "Rahul S.",
    location: "Mumbai",
    role: "Calisthenics Athlete",
    rating: 5,
    text: "I've used plastic and metal parallettes for years. The Karv teak set changed my training completely — the grip is natural, the height is perfect, and they haven't budged an inch despite daily use.",
    product: "Karv Pro — Teak",
  },
  {
    name: "Aditya M.",
    location: "Bengaluru",
    role: "Fitness Coach",
    rating: 5,
    text: "I recommend these to all my clients. The craftsmanship is visible the moment you hold them. My clients love how premium they feel compared to anything else on the market.",
    product: "Karv Elite — Rosewood",
  },
  {
    name: "Priya K.",
    location: "Chennai",
    role: "Yoga & Movement Coach",
    rating: 5,
    text: "I use Karv for my yoga and handstand practice. The stability is unmatched. Ordered the natural oil finish — it feels like holding a piece of sculpture.",
    product: "Karv Foundation — Palm",
  },
  {
    name: "Siddharth V.",
    location: "Hyderabad",
    role: "Professional Gymnast",
    rating: 5,
    text: "These parallettes are competition-grade quality without the competition price. The rosewood set looks incredible and the extended length gives me exactly the position I need for planche training.",
    product: "Karv Elite — Rosewood",
  },
  {
    name: "Karthik R.",
    location: "Pune",
    role: "Home Fitness Enthusiast",
    rating: 5,
    text: "Ordered the custom engraved version as a gift for myself. Karv delivered ahead of schedule and the quality blew me away. These are heirlooms masquerading as gym equipment.",
    product: "Karv Pro — Teak (Engraved)",
  },
  {
    name: "Deepa A.",
    location: "Delhi",
    role: "Physical Therapist",
    rating: 5,
    text: "I use these for rehabilitation exercises with clients. The stability and height options make them incredibly versatile. The wood feels gentle and warm — my clients appreciate the premium touch.",
    product: "Karv Foundation — Teak",
  },
];

export default function Testimonials() {
  const { ref, visible } = useReveal();

  return (
    <section id="testimonials" className="py-28 bg-background">
      <div className="section-container">
        <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
          <div className="text-center mb-16">
            <span className="section-label block mb-4">What Athletes Say</span>
            <h2 className="font-display text-5xl lg:text-6xl font-bold text-foreground">
              Real Results.<br />
              <span className="text-wood-gradient">Real Athletes.</span>
            </h2>
          </div>

          <div className="divider-wood mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="bg-card border border-border rounded-sm p-7 card-hover relative"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <Quote size={24} className="text-primary/30 mb-4" />

                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={14} className="fill-primary text-primary" />
                  ))}
                </div>

                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                  "{t.text}"
                </p>

                <div className="border-t border-border pt-5">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="font-body text-sm font-bold text-foreground">{t.name}</div>
                      <div className="font-body text-xs text-muted-foreground">{t.role} · {t.location}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-body text-xs text-primary">{t.product}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust bar */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-border pt-16">
            {[
              { num: "500+", label: "Happy Customers" },
              { num: "4.9★", label: "Average Rating" },
              { num: "100%", label: "Handmade" },
              { num: "2Y+", label: "In Business" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="font-display text-4xl font-bold text-primary">{item.num}</div>
                <div className="font-body text-xs text-muted-foreground tracking-widest uppercase mt-2">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
