import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

export default function FloatingCart() {
  const { totalItems } = useCart();

  if (totalItems === 0) return null;

  return (
    <Link
      to="/cart"
      className="fixed bottom-8 right-8 z-40 flex items-center gap-3 px-6 py-3.5 bg-primary text-primary-foreground rounded-sm shadow-wood font-body font-semibold text-sm transition-all hover:bg-wood-dark hover:scale-105"
    >
      <ShoppingCart size={18} />
      <span className="hidden sm:inline">
        {totalItems} item{totalItems > 1 ? "s" : ""} in cart
      </span>
      <span className="sm:hidden">{totalItems}</span>
    </Link>
  );
}
