import { BookOpen, FileText, Map, Briefcase, Users, Code, Brain, Wrench } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Engineering Notes",
    description: "Comprehensive notes covering all major engineering branches and subjects.",
  },
  {
    icon: FileText,
    title: "Past Year Papers",
    description: "Extensive collection of previous year question papers with solutions.",
  },
  {
    icon: Map,
    title: "Technical Roadmaps",
    description: "Step-by-step learning paths for various tech domains and career tracks.",
  },
  {
    icon: Briefcase,
    title: "Internship Guidance",
    description: "Tips, resources, and opportunities for landing your dream internship.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with peers, mentors, and industry professionals.",
  },
  {
    icon: Code,
    title: "Coding Resources",
    description: "DSA, competitive programming, and interview preparation materials.",
  },
  {
    icon: Brain,
    title: "ML & AI Paths",
    description: "Curated learning paths for machine learning and artificial intelligence.",
  },
  {
    icon: Wrench,
    title: "Developer Tools",
    description: "Free tools, software, and platforms for building projects.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Excel
          </h2>
          <p className="text-muted-foreground">
            Access a comprehensive suite of resources designed to support your engineering journey from day one.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group glass-card rounded-2xl p-6 hover-lift cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:gradient-bg transition-all duration-300">
                <feature.icon
                  className="text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300"
                  size={28}
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
