import { useState } from "react";
import { ChevronDown } from "lucide-react";
import useReveal from "@/hooks/useReveal";

const faqs = [
  {
    q: "How long does it take to receive my order?",
    a: "Standard orders ship within 3-5 business days. Custom orders (specific wood, engraving, or non-standard sizes) ship within 7–14 business days. We ship pan-India via insured courier.",
  },
  {
    q: "What wood should I choose as a beginner?",
    a: "Teak is our recommendation for most users — it's the perfect balance of durability, aesthetics, and price. Palm wood is a great choice if you want something unique. Rosewood is for those who want the absolute premium experience.",
  },
  {
    q: "Are the parallettes waterproof?",
    a: "Yes. All Karv parallettes are finished with a penetrating oil or lacquer that seals the wood grain. They're designed to withstand sweat, outdoor humidity, and occasional water exposure. We recommend wiping dry after use to maintain the finish.",
  },
  {
    q: "What weight can they support?",
    a: "Our standard parallettes are load-tested to 200kg. The Pro and Elite models have been tested to 250kg+. They're built for the most demanding calisthenics movements including planche, handstands, and L-sits.",
  },
  {
    q: "Can I get a custom size or engraving?",
    a: "Absolutely. Use our Customize tool to select your preferred size, finish, and add custom engraving (your name, initials, or a design). For very specific requests, contact us directly and we'll work with you.",
  },
  {
    q: "Do you ship internationally?",
    a: "Currently we ship within India only. International shipping is coming soon — join our mailing list to be notified when we expand.",
  },
  {
    q: "What is your return policy?",
    a: "We accept returns on standard (non-customized) orders within 14 days of delivery, provided the product is unused and in original condition. Custom orders are non-refundable but we stand behind our craftsmanship — if there's a defect, we'll replace it.",
  },
  {
    q: "Do you offer bulk or gym pricing?",
    a: "Yes! We offer special pricing for gyms, training studios, and orders of 5+ pairs. Contact us via the form below or email us at karv@karv.in for a custom quote.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const { ref, visible } = useReveal();

  return (
    <section id="faq" className="py-28" style={{ background: "hsl(var(--charcoal))" }}>
      <div className="section-container">
        <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <span className="section-label block mb-4">FAQ</span>
              <h2 className="font-display text-5xl font-bold text-foreground leading-tight mb-6">
                Common<br />
                <span className="text-wood-gradient">Questions</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Everything you need to know about Karv products, ordering, and shipping. Can't find your answer?{" "}
                <button
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-primary hover:underline"
                >
                  Contact us
                </button>
                .
              </p>
            </div>

            <div className="lg:col-span-3 space-y-2">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-border rounded-sm overflow-hidden">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-card/50 transition-colors"
                  >
                    <span className="font-body text-sm font-semibold text-foreground pr-4">{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-primary flex-shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-64" : "max-h-0"}`}
                  >
                    <div className="px-6 pb-6">
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
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
