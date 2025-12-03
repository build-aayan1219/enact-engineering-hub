import { Layout } from "@/components/layout/Layout";
import { Target, Eye, Heart, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To democratize access to quality engineering education resources and create a supportive community where every student can thrive regardless of their background or institution.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To become the go-to platform for engineering students worldwide, fostering a culture of knowledge sharing, peer support, and continuous learning.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "We believe in accessibility, community, integrity, and excellence. Every resource we share and every initiative we launch is guided by these core principles.",
  },
  {
    icon: Lightbulb,
    title: "Our Approach",
    description: "Student-first always. We listen to our community, understand their pain points, and build solutions that actually make a difference in their academic journey.",
  },
];

const offerings = [
  "Comprehensive engineering notes for all branches",
  "Previous year question papers with solutions",
  "Technical and non-technical roadmaps",
  "Internship and placement preparation resources",
  "Coding and DSA practice materials",
  "ML/AI and emerging tech learning paths",
  "Free developer tools and software access",
  "Mentorship and guidance from seniors",
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Building the Future of
              <span className="gradient-text"> Engineering Education</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              ENACT started as a simple idea: what if we could make quality engineering resources accessible to everyone?
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                ENACT was born out of frustration. As engineering students, we struggled to find quality study materials, had no clear roadmaps for technical skills, and felt lost navigating the vast world of opportunities.
              </p>
              <p>
                We realized that thousands of students across the country faced the same challenges. Information was scattered, mentorship was scarce, and the gap between college curriculum and industry requirements was widening.
              </p>
              <p>
                So we decided to do something about it. We started collecting resources, creating roadmaps, and building a community of like-minded students. What began as a small WhatsApp group has now grown into a thriving community of over 5,000 engineering students.
              </p>
              <p>
                Today, ENACT is more than just a resource platform. It's a movement to democratize engineering education and ensure that no student is left behind due to lack of access to quality materials or guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What Drives Us
            </h2>
            <p className="text-muted-foreground">
              Our mission, vision, and values shape everything we do at ENACT.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="glass-card rounded-2xl p-8 hover-lift">
                <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="text-primary-foreground" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                What ENACT Provides
              </h2>
              <p className="text-muted-foreground mb-8">
                We offer a comprehensive ecosystem of resources and support systems designed specifically for engineering students at every stage of their journey.
              </p>
              <ul className="space-y-3">
                {offerings.map((offering, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-foreground">{offering}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card rounded-3xl p-8 lg:p-12">
              <div className="text-center">
                <div className="text-6xl font-bold gradient-text mb-2">5,000+</div>
                <div className="text-muted-foreground mb-8">Students in our community</div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 bg-accent/50 rounded-xl">
                    <div className="text-3xl font-bold text-foreground">500+</div>
                    <div className="text-sm text-muted-foreground">Resources</div>
                  </div>
                  <div className="p-4 bg-accent/50 rounded-xl">
                    <div className="text-3xl font-bold text-foreground">10+</div>
                    <div className="text-sm text-muted-foreground">Domains</div>
                  </div>
                  <div className="p-4 bg-accent/50 rounded-xl">
                    <div className="text-3xl font-bold text-foreground">50+</div>
                    <div className="text-sm text-muted-foreground">Colleges</div>
                  </div>
                  <div className="p-4 bg-accent/50 rounded-xl">
                    <div className="text-3xl font-bold text-foreground">100%</div>
                    <div className="text-sm text-muted-foreground">Free</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
