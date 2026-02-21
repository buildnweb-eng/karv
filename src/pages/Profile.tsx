import { ArrowLeft, User, Mail, LogOut, Package, Settings } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Profile() {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated || !user) {
    navigate("/login");
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <title>Profile — Karv</title>
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

            <div className="max-w-4xl mx-auto">
              <h1 className="font-display text-4xl font-bold text-foreground mb-8">
                My Account
              </h1>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Profile Card */}
                <div className="md:col-span-1">
                  <div className="bg-card border border-border rounded-sm p-6 text-center">
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden bg-primary/10 border-2 border-primary/20">
                      {user.picture ? (
                        <img
                          src={user.picture}
                          alt={user.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <User size={40} className="text-primary" />
                        </div>
                      )}
                    </div>
                    <h2 className="font-display text-xl font-bold text-foreground mb-1">
                      {user.name}
                    </h2>
                    <p className="font-body text-sm text-muted-foreground mb-6">
                      {user.email}
                    </p>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center justify-center gap-2 font-body text-sm font-semibold py-3 rounded-sm border border-destructive/30 text-destructive hover:bg-destructive/10 transition-all duration-300"
                    >
                      <LogOut size={16} />
                      Sign Out
                    </button>
                  </div>
                </div>

                {/* Account Details */}
                <div className="md:col-span-2 space-y-6">
                  {/* Personal Information */}
                  <div className="bg-card border border-border rounded-sm p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-display text-xl font-bold text-foreground">
                        Personal Information
                      </h3>
                      <button className="font-body text-sm text-primary hover:underline">
                        Edit
                      </button>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <User size={18} className="text-muted-foreground mt-0.5" />
                        <div>
                          <div className="font-body text-xs text-muted-foreground">Full Name</div>
                          <div className="font-body text-sm text-foreground">{user.name}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail size={18} className="text-muted-foreground mt-0.5" />
                        <div>
                          <div className="font-body text-xs text-muted-foreground">Email Address</div>
                          <div className="font-body text-sm text-foreground">{user.email}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="bg-card border border-border rounded-sm p-6">
                    <h3 className="font-display text-xl font-bold text-foreground mb-6">
                      Quick Actions
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Link
                        to="/cart"
                        className="flex items-center gap-3 p-4 border border-border rounded-sm hover:border-primary hover:bg-primary/5 transition-all"
                      >
                        <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center">
                          <Package size={18} className="text-primary" />
                        </div>
                        <div>
                          <div className="font-body text-sm font-semibold text-foreground">My Orders</div>
                          <div className="font-body text-xs text-muted-foreground">View order history</div>
                        </div>
                      </Link>

                      <button className="flex items-center gap-3 p-4 border border-border rounded-sm hover:border-primary hover:bg-primary/5 transition-all text-left">
                        <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center">
                          <Settings size={18} className="text-primary" />
                        </div>
                        <div>
                          <div className="font-body text-sm font-semibold text-foreground">Settings</div>
                          <div className="font-body text-xs text-muted-foreground">Manage preferences</div>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Saved Designs */}
                  <div className="bg-card border border-border rounded-sm p-6">
                    <h3 className="font-display text-xl font-bold text-foreground mb-4">
                      Saved Designs
                    </h3>
                    <div className="text-center py-8">
                      <p className="font-body text-sm text-muted-foreground mb-4">
                        You haven't saved any custom designs yet.
                      </p>
                      <Link
                        to="/customize"
                        className="inline-block font-body text-sm font-semibold px-6 py-2.5 bg-primary text-primary-foreground hover:bg-wood-dark transition-all duration-200 rounded-sm"
                      >
                        Create Your First Design
                      </Link>
                    </div>
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
