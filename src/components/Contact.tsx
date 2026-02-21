import { useState } from "react";
import { MapPin, Mail, Phone, Instagram, Youtube, Check } from "lucide-react";
import useReveal from "@/hooks/useReveal";

export default function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", orderType: "standard", product: "", message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const { ref, visible } = useReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: "", email: "", phone: "", orderType: "standard", product: "", message: "" });
  };

  return (
    <section id="contact" className="py-28 bg-background">
      <div className="section-container">
        <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
          {/* Header */}
          <div className="text-center mb-20">
            <span className="section-label block mb-4">Get in Touch</span>
            <h2 className="font-display text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Order. Inquire.<br />
              <span className="text-wood-gradient">Connect.</span>
            </h2>
            <p className="font-body text-muted-foreground mt-5 max-w-lg mx-auto">
              Ready to order? Have a custom request? Want to visit us in person? We're here for all of it.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info Column */}
            <div className="lg:col-span-2 space-y-10">
              {/* Contact Details */}
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-6">Contact Details</h3>
                <div className="space-y-4">
                  {[
                    { icon: MapPin, label: "Location", value: "Hyderabad, Telangana, India 🇮🇳" },
                    { icon: Mail, label: "Email", value: "hello@karv.in" },
                    { icon: Phone, label: "WhatsApp", value: "+91 98765 43210" },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={15} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-body text-xs text-muted-foreground tracking-wide uppercase">{label}</div>
                        <div className="font-body text-sm text-foreground">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-5">Follow the Journey</h3>
                <div className="flex gap-3">
                  {[
                    { icon: Instagram, label: "@karv.in" },
                    { icon: Youtube, label: "KarvFitness" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2.5 bg-card border border-border rounded-sm px-4 py-3 hover:border-primary transition-colors cursor-pointer">
                      <Icon size={16} className="text-primary" />
                      <span className="font-body text-sm text-foreground">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Offline Order Info */}
              <div className="bg-primary/5 border border-primary/20 rounded-sm p-6">
                <h4 className="font-display text-lg font-bold text-foreground mb-2">Offline Orders</h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Prefer to order by call or visit in person? We welcome walk-in customers at our Hyderabad workshop. WhatsApp us to schedule a visit and see the craftsmanship firsthand.
                </p>
                <button className="mt-4 font-body text-sm font-semibold text-primary hover:text-wood-amber transition-colors flex items-center gap-1">
                  WhatsApp Us →
                </button>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 bg-card border border-border rounded-sm p-8">
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">Send a Message</h3>
              <p className="font-body text-sm text-muted-foreground mb-8">For orders, customization requests, or general inquiries.</p>

              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={28} className="text-primary" />
                  </div>
                  <h4 className="font-display text-2xl font-bold text-foreground mb-2">Message Sent!</h4>
                  <p className="font-body text-sm text-muted-foreground">
                    Thank you for reaching out. We'll respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-body text-xs text-muted-foreground tracking-wide uppercase mb-2 block">Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Full name"
                        className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs text-muted-foreground tracking-wide uppercase mb-2 block">Email *</label>
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

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-body text-xs text-muted-foreground tracking-wide uppercase mb-2 block">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs text-muted-foreground tracking-wide uppercase mb-2 block">Request Type</label>
                      <select
                        value={form.orderType}
                        onChange={(e) => setForm({ ...form, orderType: e.target.value })}
                        className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                      >
                        <option value="standard">Standard Order</option>
                        <option value="custom">Custom Order</option>
                        <option value="bulk">Bulk / Gym Order</option>
                        <option value="training">Training Inquiry</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-body text-xs text-muted-foreground tracking-wide uppercase mb-2 block">Product of Interest</label>
                    <input
                      type="text"
                      value={form.product}
                      onChange={(e) => setForm({ ...form, product: e.target.value })}
                      placeholder="e.g. Karv Pro Teak, Custom Rosewood 55cm..."
                      className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-body text-xs text-muted-foreground tracking-wide uppercase mb-2 block">Message *</label>
                    <textarea
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us what you need, any customization requests, questions..."
                      rows={4}
                      className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wide rounded-sm hover:bg-wood-dark transition-all duration-300 glow-wood"
                  >
                    Send Message →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
