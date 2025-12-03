import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  Users, 
  BookOpen, 
  Zap, 
  Instagram, 
  Linkedin,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const stats = [
  { label: "Active Members", value: "5,000+", icon: Users },
  { label: "Resources Shared", value: "500+", icon: BookOpen },
  { label: "Active Domains", value: "10+", icon: Zap },
];

const benefits = [
  "Access to exclusive study materials and resources",
  "Direct interaction with seniors and mentors",
  "Early notifications for opportunities and internships",
  "Weekly knowledge sharing sessions",
  "Networking with students across colleges",
  "Collaborative learning and doubt solving",
];

const socialPlatforms = [
  {
    name: "WhatsApp Community",
    description: "Join our main community hub for real-time discussions and updates.",
    icon: MessageCircle,
    color: "bg-green-500",
    link: "https://chat.whatsapp.com/your-link",
    cta: "Join WhatsApp",
    active: true,
  },
  {
    name: "Instagram",
    description: "Follow us for daily tips, motivation, and resource highlights.",
    icon: Instagram,
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
    link: "https://instagram.com/enact",
    cta: "Follow Us",
    active: true,
  },
  {
    name: "LinkedIn",
    description: "Connect with us for professional updates and opportunities.",
    icon: Linkedin,
    color: "bg-blue-600",
    link: "https://linkedin.com/company/enact",
    cta: "Connect",
    active: true,
  },
  {
    name: "Discord Server",
    description: "Coming soon! A dedicated space for voice chats and study groups.",
    icon: MessageCircle,
    color: "bg-indigo-500",
    link: "#",
    cta: "Coming Soon",
    active: false,
  },
];

export default function Community() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Community
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Join the ENACT
              <span className="gradient-text"> Community</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Connect with thousands of engineering students, share knowledge, and grow together.
            </p>

            <Button variant="hero" size="xl" asChild>
              <a href="https://chat.whatsapp.com/your-link" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} />
                Join WhatsApp Community
                <ArrowRight size={20} />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card rounded-2xl p-8 text-center hover-lift">
                <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-primary-foreground" size={28} />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Why Join Our Community?
              </h2>
              <p className="text-muted-foreground mb-8">
                Being part of ENACT means more than just accessing resources. It's about being part of a supportive ecosystem that helps you grow.
              </p>

              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                What Our Members Say
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-accent/50 rounded-xl">
                  <p className="text-sm text-foreground mb-2">
                    "ENACT community helped me land my first internship. The guidance from seniors was invaluable!"
                  </p>
                  <p className="text-xs text-muted-foreground">— Ankit, CSE 3rd Year</p>
                </div>
                <div className="p-4 bg-accent/50 rounded-xl">
                  <p className="text-sm text-foreground mb-2">
                    "The best part is the 24/7 doubt solving. Someone is always there to help."
                  </p>
                  <p className="text-xs text-muted-foreground">— Sneha, ECE 2nd Year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Platforms */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Connect With Us
            </h2>
            <p className="text-muted-foreground">
              Join us on your preferred platform and stay connected.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {socialPlatforms.map((platform) => (
              <div
                key={platform.name}
                className="glass-card rounded-2xl p-6 hover-lift text-center"
              >
                <div className={`w-14 h-14 ${platform.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <platform.icon className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{platform.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{platform.description}</p>
                <Button
                  variant={platform.active ? "default" : "secondary"}
                  size="sm"
                  className="w-full"
                  disabled={!platform.active}
                  asChild={platform.active}
                >
                  {platform.active ? (
                    <a href={platform.link} target="_blank" rel="noopener noreferrer">
                      {platform.cta}
                    </a>
                  ) : (
                    <span>{platform.cta}</span>
                  )}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
