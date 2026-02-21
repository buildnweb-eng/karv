import { useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { GoogleLogin, CredentialResponse, useGoogleLogin } from "@react-oauth/google";
import { useAuth } from "@/contexts/AuthContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ShieldCheck, Sparkles, TrendingUp, Package } from "lucide-react";
import heroImg from "@/assets/hero-parallettes.jpg";

export default function Login() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const googleButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleSuccess = async (credentialResponse: CredentialResponse) => {
    try {
      if (credentialResponse.credential) {
        await login(credentialResponse.credential);
        navigate("/");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleError = () => {
    console.error("Login Failed");
  };

  const triggerGoogleLogin = () => {
    // Find and click the hidden Google button
    const googleButton = googleButtonRef.current?.querySelector('div[role="button"]');
    if (googleButton) {
      (googleButton as HTMLElement).click();
    }
  };

  return (
    <>
      <title>Login — Karv</title>
      <Navigation />

      <main className="pt-24 min-h-screen relative overflow-hidden">
        {/* Background with image */}
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Background"
            className="w-full h-full object-cover opacity-5 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />

        <section className="py-16 w-full relative">
          <div className="section-container">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Side - Enhanced Branding */}
                <div className="space-y-8">
                  <div className="animate-fade-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
                      <Sparkles size={16} className="text-primary" />
                      <span className="font-body text-sm font-medium text-primary">Welcome Back to Karv</span>
                    </div>
                    
                    <h1 className="font-display text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
                      Join the<br />
                      <span className="text-wood-gradient">Karv</span><br />
                      Community
                    </h1>
                    
                    <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-md">
                      Sign in to unlock exclusive features, track your fitness journey, and access premium content designed for athletes like you.
                    </p>
                  </div>

                  {/* Benefits Grid */}
                  <div className="grid grid-cols-1 gap-4 animate-fade-up animation-delay-200">
                    <div className="group p-5 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg hover:border-primary/30 hover:bg-card transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <ShieldCheck size={20} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-body text-base font-bold text-foreground mb-1.5">Secure & Private</h3>
                          <p className="font-body text-sm text-muted-foreground leading-relaxed">
                            Your data is encrypted end-to-end and never shared with third parties.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="group p-5 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg hover:border-primary/30 hover:bg-card transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Package size={20} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-body text-base font-bold text-foreground mb-1.5">Order Tracking</h3>
                          <p className="font-body text-sm text-muted-foreground leading-relaxed">
                            Track your orders in real-time and save your favorite custom designs.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="group p-5 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg hover:border-primary/30 hover:bg-card transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <TrendingUp size={20} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-body text-base font-bold text-foreground mb-1.5">Personalized Journey</h3>
                          <p className="font-body text-sm text-muted-foreground leading-relaxed">
                            Get product recommendations tailored to your fitness goals and progress.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-8 pt-4 animate-fade-up animation-delay-400">
                    <div>
                      <div className="font-display text-3xl font-bold text-primary">5000+</div>
                      <div className="font-body text-sm text-muted-foreground">Athletes</div>
                    </div>
                    <div className="w-px h-12 bg-border" />
                    <div>
                      <div className="font-display text-3xl font-bold text-primary">4.9★</div>
                      <div className="font-body text-sm text-muted-foreground">Rating</div>
                    </div>
                    <div className="w-px h-12 bg-border" />
                    <div>
                      <div className="font-display text-3xl font-bold text-primary">100%</div>
                      <div className="font-body text-sm text-muted-foreground">Handcrafted</div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Enhanced Login Card */}
                <div className="animate-fade-up animation-delay-600">
                  <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-xl blur-xl" />
                    
                    <div className="relative bg-card border border-border rounded-xl p-10 lg:p-12 shadow-2xl">
                      {/* Header */}
                      <div className="text-center mb-10">
                        <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl mb-6 border border-primary/20">
                          <svg className="w-10 h-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                          </svg>
                        </div>
                        <h2 className="font-display text-4xl font-bold text-foreground mb-3">
                          Sign In
                        </h2>
                        <p className="font-body text-sm text-muted-foreground">
                          One click away from your Karv journey
                        </p>
                      </div>

                      {/* Premium Custom Google Button */}
                      <div className="mb-10">
                        <div className="relative group/btn cursor-pointer" onClick={triggerGoogleLogin}>
                          {/* Animated gradient glow */}
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-primary/50 to-primary rounded-xl opacity-30 group-hover/btn:opacity-100 blur transition duration-500" />
                          
                          {/* Main button */}
                          <div className="relative">
                            <button className="w-full bg-white hover:bg-gray-50 text-gray-900 font-semibold py-5 px-8 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border-2 border-gray-100 hover:border-primary/20 group/inner">
                              <div className="flex items-center justify-center gap-4">
                                {/* Google Icon */}
                                <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                                </svg>
                                
                                {/* Text */}
                                <span className="text-base font-semibold">
                                  Continue with Google
                                </span>
                                
                                {/* Arrow Icon */}
                                <svg className="w-5 h-5 opacity-0 -translate-x-2 group-hover/inner:opacity-100 group-hover/inner:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                              </div>
                            </button>
                          </div>
                        </div>

                        {/* Trust badges */}
                        <div className="mt-4 flex items-center justify-center gap-6 text-xs">
                          <div className="flex items-center gap-1.5 text-green-600">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="font-medium text-muted-foreground">Verified</span>
                          </div>
                          <div className="w-px h-3 bg-border" />
                          <div className="flex items-center gap-1.5 text-blue-600">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                            <span className="font-medium text-muted-foreground">Encrypted</span>
                          </div>
                          <div className="w-px h-3 bg-border" />
                          <div className="flex items-center gap-1.5 text-primary">
                            <Sparkles size={14} />
                            <span className="font-medium text-muted-foreground">Instant</span>
                          </div>
                        </div>

                        {/* Hidden Google Button */}
                        <div ref={googleButtonRef} className="absolute opacity-0 pointer-events-none">
                          <GoogleLogin
                            onSuccess={handleSuccess}
                            onError={handleError}
                            useOneTap
                            theme="filled_black"
                            size="large"
                            text="signin_with"
                            shape="rectangular"
                          />
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="relative mb-10">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-border" />
                        </div>
                        <div className="relative flex justify-center">
                          <span className="bg-card px-6 py-1.5 font-body text-xs text-muted-foreground font-medium tracking-widest uppercase border border-border/50 rounded-full">
                            Protected by OAuth 2.0
                          </span>
                        </div>
                      </div>

                      {/* Features list */}
                      <div className="space-y-3 mb-8">
                        {[
                          "One-click authentication",
                          "No password required",
                          "Your data stays private",
                          "Instant account creation"
                        ].map((feature, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-background/40 rounded-lg hover:bg-background/60 transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <p className="font-body text-sm text-muted-foreground">{feature}</p>
                          </div>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="text-center space-y-4 pt-4 border-t border-border/50">
                        <p className="font-body text-xs text-muted-foreground leading-relaxed">
                          By signing in, you agree to our{" "}
                          <a href="#" className="text-primary hover:underline font-medium">Terms</a>
                          {" "}and{" "}
                          <a href="#" className="text-primary hover:underline font-medium">Privacy Policy</a>
                        </p>
                        
                        <Link
                          to="/"
                          className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:text-primary/80 transition-colors group"
                        >
                          <span>Continue as Guest</span>
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                      </div>
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
