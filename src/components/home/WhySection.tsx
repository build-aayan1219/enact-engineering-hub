import { CheckCircle, Zap, Shield, Heart } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Fast & Accessible",
    description: "All resources are instantly accessible and organized for quick learning.",
  },
  {
    icon: Shield,
    title: "Verified Content",
    description: "Every resource is reviewed and verified by domain experts and seniors.",
  },
  {
    icon: Heart,
    title: "Community Driven",
    description: "Built by students, for students. We understand your needs.",
  },
  {
    icon: CheckCircle,
    title: "Completely Free",
    description: "All resources and community access are 100% free forever.",
  },
];

export function WhySection() {
  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Why Choose ENACT?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              We're Different Because We Care
            </h2>
            <p className="text-muted-foreground mb-8">
              ENACT isn't just another resource platform. We're a community of passionate students who've been through the struggles and want to make your journey smoother.
            </p>

            <div className="space-y-4">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                    <reason.icon className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{reason.title}</h4>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="glass-card rounded-3xl p-8 lg:p-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-green-500/10 rounded-xl">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">100% Free Access</div>
                    <div className="text-sm text-muted-foreground">No hidden charges ever</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-xl">
                  <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center">
                    <Users className="text-primary-foreground" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Active Community</div>
                    <div className="text-sm text-muted-foreground">24/7 peer support</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-purple-500/10 rounded-xl">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <BookOpen className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">500+ Resources</div>
                    <div className="text-sm text-muted-foreground">And growing daily</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

import { Users, BookOpen } from "lucide-react";
