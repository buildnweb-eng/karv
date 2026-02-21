import { useState } from "react";
import { Video, Users, Calendar, MapPin, Check } from "lucide-react";
import useReveal from "@/hooks/useReveal";

const services = [
  {
    id: "online",
    type: "Online Coaching",
    icon: Video,
    price: "₹2,499 / month",
    sessions: "8 sessions/month",
    desc: "Personalized calisthenics programming, live video sessions, and progress tracking — from anywhere in the world.",
    features: [
      "Custom training plan",
      "2× weekly live video calls",
      "WhatsApp support",
      "Nutrition guidance",
      "Video form review",
    ],
    cta: "Book Online Session",
    accent: true,
  },
  {
    id: "offline",
    type: "Offline Training",
    icon: Users,
    price: "₹3,999 / month",
    sessions: "12 sessions/month",
    desc: "In-person sessions with our coaches in Hyderabad. Train with your Karv equipment in a premium setting.",
    features: [
      "3× weekly sessions",
      "Equipment provided",
      "Small group (max 5)",
      "Monthly assessments",
      "Community access",
    ],
    cta: "Book In-Person Session",
    accent: false,
  },
];

export default function Training() {
  const [form, setForm] = useState({ name: "", email: "", service: "online", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const { ref, visible } = useReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", service: "online", message: "" });
  };

  return (
    <section id="training" className="py-28 bg-background">
      <div className="section-container">
        <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
          {/* Header */}
          <div className="mb-16">
            <span className="section-label block mb-4">Training Services</span>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h2 className="font-display text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Train with the<br />
                <span className="text-wood-gradient">Creators.</span>
              </h2>
              <p className="font-body text-muted-foreground max-w-sm leading-relaxed">
Our coaches are working athletes. No theory-only trainers, just people who live the practice.</p>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid lg:grid-cols-2 gap-6 mb-16">
            {services.map((service) => (
              <div
                key={service.id}
                className={`relative rounded-sm border p-8 transition-all duration-300 ${
                  service.accent
                    ? "bg-primary/5 border-primary/30 hover:border-primary"
                    : "bg-card border-border hover:border-primary/30"
                }`}
              >
                {service.accent && (
                  <div className="absolute top-4 right-4">
                    <span className="font-body text-xs font-semibold tracking-widest uppercase px-3 py-1 bg-primary text-primary-foreground rounded-sm">
                      Popular
                    </span>
                  </div>
                )}

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <service.icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground">{service.type}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="font-body text-xs text-muted-foreground">
                        <Calendar size={11} className="inline mr-1" />{service.sessions}
                      </span>
                      {service.id === "offline" && (
                        <span className="font-body text-xs text-muted-foreground">
                          <MapPin size={11} className="inline mr-1" />Hyderabad
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">{service.desc}</p>

                <ul className="space-y-2.5 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 font-body text-sm text-foreground">
                      <Check size={14} className="text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-bold text-primary">{service.price}</span>
                  <button
                    onClick={() => {
                      setForm((f) => ({ ...f, service: service.id }));
                      document.querySelector("#training-form")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="font-body text-sm font-semibold px-6 py-2.5 bg-primary text-primary-foreground hover:bg-wood-dark transition-colors rounded-sm"
                  >
                    {service.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Booking Form */}
          <div id="training-form" className="max-w-2xl mx-auto bg-card border border-border rounded-sm p-8">
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">Book Your Session</h3>
            <p className="font-body text-sm text-muted-foreground mb-8">
              Fill out the form below and our team will reach out within 24 hours.
            </p>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check size={28} className="text-primary" />
                </div>
                <h4 className="font-display text-xl font-bold text-foreground mb-2">Inquiry Received!</h4>
                <p className="font-body text-sm text-muted-foreground">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-xs text-muted-foreground tracking-wide uppercase mb-2 block">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs text-muted-foreground tracking-wide uppercase mb-2 block">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-body text-xs text-muted-foreground tracking-wide uppercase mb-2 block">Service</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="online">Online Coaching</option>
                    <option value="offline">Offline Training (Hyderabad)</option>
                  </select>
                </div>

                <div>
                  <label className="font-body text-xs text-muted-foreground tracking-wide uppercase mb-2 block">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your fitness level and goals..."
                    rows={4}
                    className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wide rounded-sm hover:bg-wood-dark transition-colors"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
