import { Link } from "react-router-dom";
import { ArrowRight, Users, BookOpen, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] hero-gradient overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Trusted by 1,000+ Active Members
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-up stagger-1">
            <span className="text-foreground">Your Gateway to</span>
            <br />
            <span className="gradient-text">Engineering Excellence</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up stagger-2">
            Access curated resources, connect with peers, and accelerate your engineering journey with ENACT's comprehensive learning ecosystem.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up stagger-3">
            <Button variant="hero" size="xl" asChild>
              <Link to="/community">
                Join Community
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/resources">
                Explore Resources
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-up stagger-4">
            <div className="glass-card rounded-2xl p-6 hover-lift">
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-3">
                <Users className="text-primary-foreground" size={24} />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">1,000+</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </div>
            <div className="glass-card rounded-2xl p-6 hover-lift">
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-3">
                <BookOpen className="text-primary-foreground" size={24} />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Resources</div>
            </div>
            <div className="glass-card rounded-2xl p-6 hover-lift">
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-3">
                <Rocket className="text-primary-foreground" size={24} />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">10+</div>
              <div className="text-sm text-muted-foreground">Active Domains</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}
