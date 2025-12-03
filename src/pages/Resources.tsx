import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  FileText, 
  Code, 
  Brain, 
  Wrench, 
  Map, 
  ExternalLink,
  Search,
  Filter
} from "lucide-react";
import { Input } from "@/components/ui/input";

const categories = [
  { id: "all", name: "All Resources", icon: Filter },
  { id: "notes", name: "Notes", icon: BookOpen },
  { id: "pyqs", name: "PYQs", icon: FileText },
  { id: "coding", name: "Coding", icon: Code },
  { id: "ml-ai", name: "ML & AI", icon: Brain },
  { id: "tools", name: "Tools", icon: Wrench },
  { id: "roadmaps", name: "Roadmaps", icon: Map },
];

const resources = [
  {
    id: 1,
    title: "Complete Engineering Notes",
    description: "Comprehensive notes for CS, EC, ME, EE, and Civil engineering branches.",
    category: "notes",
    icon: BookOpen,
    link: "#",
    tags: ["All Branches", "Semester-wise"],
  },
  {
    id: 2,
    title: "Past Year Question Papers",
    description: "Collection of PYQs from top universities with detailed solutions.",
    category: "pyqs",
    icon: FileText,
    link: "#",
    tags: ["2020-2024", "With Solutions"],
  },
  {
    id: 3,
    title: "DSA Complete Guide",
    description: "Data Structures & Algorithms roadmap with practice problems.",
    category: "coding",
    icon: Code,
    link: "#",
    tags: ["Interview Prep", "LeetCode"],
  },
  {
    id: 4,
    title: "Competitive Programming",
    description: "CP resources, templates, and contest strategies.",
    category: "coding",
    icon: Code,
    link: "#",
    tags: ["Codeforces", "CodeChef"],
  },
  {
    id: 5,
    title: "Machine Learning Path",
    description: "Complete ML learning path from basics to advanced topics.",
    category: "ml-ai",
    icon: Brain,
    link: "#",
    tags: ["Python", "TensorFlow"],
  },
  {
    id: 6,
    title: "Deep Learning Resources",
    description: "Neural networks, CNNs, RNNs, and transformer architectures.",
    category: "ml-ai",
    icon: Brain,
    link: "#",
    tags: ["PyTorch", "Advanced"],
  },
  {
    id: 7,
    title: "Kiro AI - Free AI Tool",
    description: "AI-powered coding assistant for students.",
    category: "tools",
    icon: Wrench,
    link: "#",
    tags: ["Free", "AI Assistant"],
  },
  {
    id: 8,
    title: "Kaggle Datasets & Notebooks",
    description: "Curated Kaggle resources for ML projects.",
    category: "tools",
    icon: Wrench,
    link: "#",
    tags: ["Datasets", "Projects"],
  },
  {
    id: 9,
    title: "Free Developer Tools",
    description: "Collection of free tools, IDEs, and platforms for students.",
    category: "tools",
    icon: Wrench,
    link: "#",
    tags: ["GitHub Student", "JetBrains"],
  },
  {
    id: 10,
    title: "Web Development Roadmap",
    description: "Frontend to backend - complete web dev learning path.",
    category: "roadmaps",
    icon: Map,
    link: "#",
    tags: ["React", "Node.js"],
  },
  {
    id: 11,
    title: "Data Science Roadmap",
    description: "Become a data scientist - skills, projects, and resources.",
    category: "roadmaps",
    icon: Map,
    link: "#",
    tags: ["Python", "Statistics"],
  },
  {
    id: 12,
    title: "DevOps Roadmap",
    description: "CI/CD, Docker, Kubernetes, and cloud platforms.",
    category: "roadmaps",
    icon: Map,
    link: "#",
    tags: ["AWS", "Docker"],
  },
];

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = resources.filter((resource) => {
    const matchesCategory = activeCategory === "all" || resource.category === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Resources
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Your Engineering
              <span className="gradient-text"> Resource Hub</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Curated collection of notes, papers, roadmaps, and tools to supercharge your learning.
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="gap-2"
              >
                <category.icon size={16} />
                {category.name}
              </Button>
            ))}
          </div>

          {/* Resources */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="glass-card rounded-2xl p-6 hover-lift group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:gradient-bg transition-all duration-300">
                  <resource.icon
                    className="text-accent-foreground group-hover:text-primary-foreground transition-colors"
                    size={24}
                  />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {resource.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {resource.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-md bg-accent text-accent-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button variant="outline" size="sm" className="w-full gap-2" asChild>
                  <a href={resource.link} target="_blank" rel="noopener noreferrer">
                    View Resource
                    <ExternalLink size={14} />
                  </a>
                </Button>
              </div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No resources found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
