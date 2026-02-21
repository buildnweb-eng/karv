import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-parallettes.jpg";
import bullSymbol from "@/assets/bull-symbol.png";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrolled = window.scrollY;
      heroRef.current.style.setProperty("--parallax-y", `${scrolled * 0.3}px`);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: "translateY(var(--parallax-y, 0))" }}
      >
        <img
          src={heroImg}
          alt="Karv handcrafted wooden parallettes"
          className="w-full h-full object-cover opacity-25 scale-110"
          loading="eager"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Decorative lines */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden xl:block ml-24" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden xl:block mr-24" />

      <div className="section-container relative z-10 py-32 pt-40">
        <div className="max-w-5xl">
          {/* Label */}
          <div className="flex items-center gap-4 mb-8 animate-fade-up">
            <img src={bullSymbol} alt="bull" className="w-5 h-5 invert opacity-60" />
            <span className="section-label">Handcrafted in India — Built for Strength</span>
          </div>

          {/* Headline */}
          <h4 className="font-display text-6xl md:text-7xl lg:text-[7rem] xl:text-[8rem] font-bold leading-[0.9] text-foreground mb-6 animate-fade-up animation-delay-200">
            Crafted for<span className="text-wood-gradient"> Strength.</span> <br></br> Built to Last.
          </h4>

          {/* Subheadline */}
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-12 animate-fade-up animation-delay-400">
            Premium handcrafted wooden parallettes, built from the finest woods. 
            Each piece is shaped by hand, finished to perfection — equipment that 
            grows with your strength.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-600">
            <Link
              to="/products"
              className="font-body font-semibold text-sm tracking-widest uppercase px-10 py-4 bg-primary text-primary-foreground hover:bg-wood-dark transition-all duration-300 rounded-sm glow-wood text-center"
            >
              Shop Now
            </Link>
            <Link
              to="/customize"
              className="font-body font-semibold text-sm tracking-widest uppercase px-10 py-4 border border-foreground/20 text-foreground hover:border-primary hover:text-primary transition-all duration-300 rounded-sm text-center"
            >
              Customize Yours
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-12 mt-20 animate-fade-up animation-delay-800">
            {[
              { value: "100%", label: "Handcrafted" },
              { value: "3+", label: "Premium Woods" },
              { value: "∞", label: "Durability" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-4xl font-bold text-primary">{stat.value}</div>
                <div className="font-body text-xs text-muted-foreground tracking-widest uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="font-body text-xs tracking-widest text-muted-foreground uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
      </div>
    </section>
  );
}
