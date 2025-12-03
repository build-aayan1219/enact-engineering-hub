import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle, Users, Palette, Code, FileText, Video, Search, Globe, BarChart } from "lucide-react";

// Team positions - easily editable
const teamPositions = [
  {
    id: "management",
    name: "Management",
    description: "Lead initiatives and coordinate team activities",
    icon: BarChart,
  },
  {
    id: "technical",
    name: "Technical Team",
    description: "Build and maintain our digital platforms",
    icon: Code,
  },
  {
    id: "content",
    name: "Content Writing",
    description: "Create educational content and resources",
    icon: FileText,
  },
  {
    id: "design",
    name: "Poster Designing",
    description: "Design graphics and visual materials",
    icon: Palette,
  },
  {
    id: "video",
    name: "Video Editing",
    description: "Create and edit video content",
    icon: Video,
  },
  {
    id: "research",
    name: "Research Team",
    description: "Research and curate quality resources",
    icon: Search,
  },
  {
    id: "webdev",
    name: "Web Development",
    description: "Develop and improve our website",
    icon: Globe,
  },
  {
    id: "socialmedia",
    name: "Social Media Team",
    description: "Manage our social media presence",
    icon: Users,
  },
];

export default function JoinUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    year: "",
    why: "",
    positions: [] as string[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePositionToggle = (positionId: string) => {
    setFormData((prev) => ({
      ...prev,
      positions: prev.positions.includes(positionId)
        ? prev.positions.filter((p) => p !== positionId)
        : [...prev.positions, positionId],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.positions.length === 0) {
      toast({
        title: "Please select at least one position",
        description: "Choose the team(s) you'd like to join.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Application submitted!",
      description: "We'll review your application and get back to you soon.",
    });

    // Reset form after delay
    setTimeout(() => {
      setFormData({ name: "", email: "", college: "", year: "", why: "", positions: [] });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Join Our Team
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Be Part of
              <span className="gradient-text"> Something Amazing</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Join ENACT and help us make quality education accessible to engineering students everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Personal Info */}
              <div className="glass-card rounded-2xl p-8">
                <h2 className="text-xl font-semibold text-foreground mb-6">
                  Personal Information
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="college" className="block text-sm font-medium text-foreground mb-2">
                      College/University *
                    </label>
                    <Input
                      id="college"
                      name="college"
                      value={formData.college}
                      onChange={handleChange}
                      placeholder="IIT Delhi"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="year" className="block text-sm font-medium text-foreground mb-2">
                      Year of Study *
                    </label>
                    <Input
                      id="year"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      placeholder="2nd Year"
                      required
                      className="h-12"
                    />
                  </div>
                </div>
              </div>

              {/* Team Selection */}
              <div className="glass-card rounded-2xl p-8">
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  Select Team(s) to Join *
                </h2>
                <p className="text-muted-foreground mb-6">
                  You can select multiple teams based on your interests and skills.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {teamPositions.map((position) => (
                    <div
                      key={position.id}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                        formData.positions.includes(position.id)
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => handlePositionToggle(position.id)}
                    >
                      <div className="flex items-start gap-3">
                        <Checkbox
                          checked={formData.positions.includes(position.id)}
                          onCheckedChange={() => handlePositionToggle(position.id)}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <position.icon size={18} className="text-primary" />
                            <span className="font-medium text-foreground">{position.name}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{position.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Join */}
              <div className="glass-card rounded-2xl p-8">
                <h2 className="text-xl font-semibold text-foreground mb-6">
                  Why do you want to join ENACT? *
                </h2>
                <Textarea
                  id="why"
                  name="why"
                  value={formData.why}
                  onChange={handleChange}
                  placeholder="Tell us about your motivation, relevant skills, and what you hope to contribute..."
                  required
                  rows={6}
                />
              </div>

              {/* Submit */}
              <div className="text-center">
                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  disabled={isSubmitting || isSubmitted}
                  className="min-w-[200px]"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle size={20} />
                      Application Submitted!
                    </>
                  ) : isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit Application
                      <Send size={20} />
                    </>
                  )}
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  We'll review your application and get back to you within 3-5 business days.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
