import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, User, LogOut } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import bullSymbol from "@/assets/bull-symbol.png";

const navLinks = [
  { label: "Products", href: "/products", isRoute: true },
  { label: "Customize", href: "/customize", isRoute: true },
  { label: "Craft", href: "/#why-karv", isRoute: false },
  { label: "Training", href: "/training", isRoute: true },
  { label: "Story", href: "/story", isRoute: true },
  { label: "Contact", href: "/contact", isRoute: true },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { totalItems } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, isRoute: boolean) => {
    setMenuOpen(false);
    if (!isRoute && href.startsWith("/#")) {
      const id = href.substring(2);
      const el = document.querySelector(`#${id}`);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group"
        >
          <img
            src={bullSymbol}
            alt="Karv bull logo"
            className="w-8 h-8 invert opacity-90 group-hover:opacity-100 transition-opacity"
          />
          <span className="font-display text-2xl font-bold tracking-tight text-foreground">
            KARV
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.isRoute ? (
                <Link
                  to={link.href}
                  className="font-body text-sm font-medium text-muted-foreground hover:text-foreground tracking-wide transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={link.href}
                  onClick={(e) => {
                    if (location.pathname === "/") {
                      e.preventDefault();
                      handleNavClick(link.href, false);
                    }
                  }}
                  className="font-body text-sm font-medium text-muted-foreground hover:text-foreground tracking-wide transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/cart"
            className="relative p-2 text-foreground hover:text-primary transition-colors"
          >
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                {totalItems}
              </span>
            )}
          </Link>

          {isAuthenticated && user ? (
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 p-2 text-foreground hover:text-primary transition-colors"
              >
                {user.picture ? (
                  <img
                    src={user.picture}
                    alt={user.name}
                    className="w-8 h-8 rounded-full border-2 border-primary/20"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                    <User size={16} className="text-primary" />
                  </div>
                )}
              </button>

              {profileOpen && (
                <div className="absolute right-0 top-12 w-64 bg-card border border-border rounded-sm shadow-card-dark z-50">
                  <div className="p-4 border-b border-border">
                    <p className="font-body text-sm font-semibold text-foreground">{user.name}</p>
                    <p className="font-body text-xs text-muted-foreground">{user.email}</p>
                  </div>
                  <div className="p-2">
                    <Link
                      to="/profile"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 font-body text-sm text-foreground hover:bg-primary/10 rounded-sm transition-colors"
                    >
                      <User size={16} />
                      My Profile
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setProfileOpen(false);
                      }}
                      className="w-full flex items-center gap-2 px-3 py-2 font-body text-sm text-destructive hover:bg-destructive/10 rounded-sm transition-colors"
                    >
                      <LogOut size={16} />
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="font-body text-sm font-semibold px-6 py-2.5 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 rounded-sm tracking-wide"
            >
              Sign In
            </Link>
          )}

          <Link
            to="/products"
            className="font-body text-sm font-semibold px-6 py-2.5 bg-primary text-primary-foreground hover:bg-wood-dark transition-all duration-200 rounded-sm tracking-wide"
          >
            Shop Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-foreground transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-foreground transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-foreground transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-background/98 backdrop-blur-md border-b border-border`}
      >
        <div className="section-container py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-lg font-medium text-foreground text-left hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  if (location.pathname === "/") {
                    e.preventDefault();
                    handleNavClick(link.href, false);
                  }
                  setMenuOpen(false);
                }}
                className="font-body text-lg font-medium text-foreground text-left hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            )
          ))}
          <Link
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className="font-body text-lg font-medium text-foreground text-left hover:text-primary transition-colors flex items-center gap-2"
          >
            Cart {totalItems > 0 && <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">{totalItems}</span>}
          </Link>

          {isAuthenticated && user ? (
            <>
              <Link
                to="/profile"
                onClick={() => setMenuOpen(false)}
                className="font-body text-lg font-medium text-foreground text-left hover:text-primary transition-colors flex items-center gap-2"
              >
                <User size={18} />
                My Profile
              </Link>
              <button
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                }}
                className="font-body text-lg font-medium text-destructive text-left hover:opacity-80 transition-opacity flex items-center gap-2"
              >
                <LogOut size={18} />
                Sign Out
              </button>
            </>
          ) : (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="font-body text-sm font-semibold px-6 py-3 border border-primary/30 text-primary rounded-sm tracking-wide w-full text-center"
            >
              Sign In
            </Link>
          )}

          <Link
            to="/products"
            onClick={() => setMenuOpen(false)}
            className="font-body text-sm font-semibold px-6 py-3 bg-primary text-primary-foreground rounded-sm tracking-wide w-full text-center"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
