import bullSymbol from "@/assets/bull-symbol.png";

const footerLinks = {
  Products: ["Karv Pro", "Karv Elite", "Karv Foundation", "Custom Order"],
  Training: ["Online Coaching", "Offline Sessions", "Book a Session"],
  Company: ["Our Story", "Founders", "Made in India", "FAQ"],
  Legal: ["Privacy Policy", "Terms of Service", "Shipping Policy", "Return Policy"],
};

export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="section-container py-20">
        {/* Top row */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={bullSymbol} alt="Karv bull" className="w-7 h-7 invert opacity-80" />
              <span className="font-display text-2xl font-bold tracking-tight text-foreground">KARV</span>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs">
              Premium handcrafted wooden parallettes. Built for the relentless. Made in India.
            </p>
            <div className="mt-6">
              <p className="font-body text-xs text-muted-foreground mb-3 tracking-widest uppercase">Subscribe for updates</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-card border border-border rounded-sm px-3 py-2.5 font-body text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <button className="px-4 py-2.5 bg-primary text-primary-foreground font-body text-xs font-semibold rounded-sm hover:bg-wood-dark transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-body text-xs font-bold text-foreground tracking-widest uppercase mb-5">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => {
                        if (link === "Custom Order") scrollTo("#customize");
                        else if (link === "Our Story" || link === "Founders") scrollTo("#founders");
                        else if (link === "FAQ") scrollTo("#faq");
                        else if (link.includes("Session") || link.includes("Coaching")) scrollTo("#training");
                      }}
                      className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="divider-wood mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-foreground">
            © 2026 Karv. All rights reserved. Handcrafted in India 🇮🇳
          </p>
          <div className="flex items-center gap-2">
            <img src={bullSymbol} alt="" className="w-4 h-4 invert opacity-40" />
            <p className="font-body text-xs text-muted-foreground">
             Forged in wood. Refined by discipline.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
