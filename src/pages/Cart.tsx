import { ArrowLeft, Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <>
        <title>Cart — Karv</title>
        <Navigation />

        <main className="pt-24 min-h-screen">
          <section className="py-16 bg-background">
            <div className="section-container">
              <Link
                to="/"
                className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft size={16} />
                Back to Home
              </Link>

              <div className="max-w-2xl mx-auto text-center py-20">
                <ShoppingBag size={64} className="text-muted-foreground mx-auto mb-6 opacity-30" />
                <h1 className="font-display text-4xl font-bold text-foreground mb-4">
                  Your Cart is Empty
                </h1>
                <p className="font-body text-muted-foreground mb-8">
                  Start building your strength journey with our handcrafted parallettes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/products"
                    className="font-body font-semibold text-sm tracking-widest uppercase px-10 py-4 bg-primary text-primary-foreground hover:bg-wood-dark transition-all duration-300 rounded-sm"
                  >
                    Browse Products
                  </Link>
                  <Link
                    to="/customize"
                    className="font-body font-semibold text-sm tracking-widest uppercase px-10 py-4 border border-foreground/20 text-foreground hover:border-primary hover:text-primary transition-all duration-300 rounded-sm"
                  >
                    Customize Your Own
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <title>Cart ({totalItems}) — Karv</title>
      <Navigation />

      <main className="pt-24 min-h-screen">
        <section className="py-16 bg-background">
          <div className="section-container">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Continue Shopping
            </Link>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-8">
                  <h1 className="font-display text-4xl font-bold text-foreground">
                    Your Cart
                  </h1>
                  <button
                    onClick={clearCart}
                    className="font-body text-sm text-muted-foreground hover:text-destructive transition-colors"
                  >
                    Clear All
                  </button>
                </div>

                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="bg-card border border-border rounded-sm p-6 flex flex-col sm:flex-row gap-6"
                    >
                      {/* Image */}
                      <div className="w-full sm:w-32 h-32 rounded-sm overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-display text-xl font-bold text-foreground">
                              {item.name}
                            </h3>
                            <p className="font-body text-sm text-muted-foreground">
                              {item.subtitle}
                            </p>
                            {item.type === "custom" && item.customConfig && (
                              <div className="mt-2 space-y-1">
                                <p className="font-body text-xs text-muted-foreground">
                                  <span className="text-foreground">Wood:</span> {item.customConfig.wood}
                                </p>
                                <p className="font-body text-xs text-muted-foreground">
                                  <span className="text-foreground">Size:</span> {item.customConfig.size}
                                </p>
                                <p className="font-body text-xs text-muted-foreground">
                                  <span className="text-foreground">Finish:</span> {item.customConfig.finish}
                                </p>
                              </div>
                            )}
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>

                        {/* Quantity & Price */}
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => updateQuantity(item.id, item.qty - 1)}
                              className="w-8 h-8 rounded-sm border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="font-body text-sm font-medium text-foreground min-w-[2ch] text-center">
                              {item.qty}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.qty + 1)}
                              className="w-8 h-8 rounded-sm border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <div className="text-right">
                            <div className="font-display text-xl font-bold text-primary">
                              ₹{(item.price * item.qty).toLocaleString()}
                            </div>
                            {item.qty > 1 && (
                              <div className="font-body text-xs text-muted-foreground">
                                ₹{item.price.toLocaleString()} each
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card border border-border rounded-sm p-8 sticky top-24">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    Order Summary
                  </h2>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between font-body text-sm">
                      <span className="text-muted-foreground">Subtotal ({totalItems} items)</span>
                      <span className="text-foreground">₹{totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between font-body text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="text-foreground">Free</span>
                    </div>
                    <div className="flex justify-between font-body text-sm">
                      <span className="text-muted-foreground">Tax (GST 18%)</span>
                      <span className="text-foreground">₹{Math.round(totalPrice * 0.18).toLocaleString()}</span>
                    </div>
                    <div className="divider-wood my-4" />
                    <div className="flex justify-between font-body">
                      <span className="text-foreground font-semibold text-lg">Total</span>
                      <span className="font-display text-2xl font-bold text-primary">
                        ₹{Math.round(totalPrice * 1.18).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="w-full flex items-center justify-center gap-2 font-body text-sm font-bold py-4 rounded-sm transition-all duration-300 bg-primary text-primary-foreground hover:bg-wood-dark glow-wood"
                  >
                    Proceed to Checkout
                  </Link>

                  <p className="font-body text-xs text-muted-foreground text-center mt-4">
                    Ships in 2-5 business days
                  </p>

                  <div className="divider-wood my-6" />

                  <div className="space-y-3">
                    <h3 className="font-body text-sm font-semibold text-foreground">
                      Need Help?
                    </h3>
                    <Link
                      to="/contact"
                      className="font-body text-xs text-primary hover:underline block"
                    >
                      Contact Support →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
