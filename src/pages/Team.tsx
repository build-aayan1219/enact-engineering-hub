import { Layout } from "@/components/layout/Layout";
import { Instagram, Github, Mail } from "lucide-react";

// Team member data - easily editable
const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Founder & Lead",
    image: "", // Add image URL here
    initials: "JD",
    bio: "Computer Science student passionate about education technology.",
    socials: {
      instagram: "https://www.instagram.com/enact.official?igsh=MTV6a21hd3dyNjBkaw==",
      github: "https://github.com",
      email: "mailto:john@enact.com",
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Technical Head",
    image: "",
    initials: "JS",
    bio: "Full-stack developer with expertise in React and Node.js.",
    socials: {
      instagram: "https://www.instagram.com/enact.official?igsh=MTV6a21hd3dyNjBkaw==",
      github: "https://github.com",
      email: "mailto:jane@enact.com",
    },
  },
  {
    id: 3,
    name: "Alex Johnson",
    role: "Content Head",
    image: "",
    initials: "AJ",
    bio: "Creating quality educational content for engineering students.",
    socials: {
      instagram: "https://www.instagram.com/enact.official?igsh=MTV6a21hd3dyNjBkaw==",
      github: "https://github.com",
      email: "mailto:alex@enact.com",
    },
  },
  {
    id: 4,
    name: "Sarah Wilson",
    role: "Design Lead",
    image: "",
    initials: "SW",
    bio: "UI/UX designer crafting beautiful and intuitive experiences.",
    socials: {
      instagram: "https://www.instagram.com/enact.official?igsh=MTV6a21hd3dyNjBkaw==",
      github: "https://github.com",
      email: "mailto:sarah@enact.com",
    },
  },
  {
    id: 5,
    name: "Mike Brown",
    role: "Community Manager",
    image: "",
    initials: "MB",
    bio: "Building and nurturing the ENACT community across platforms.",
    socials: {
      instagram: "https://www.instagram.com/enact.official?igsh=MTV6a21hd3dyNjBkaw==",
      github: "https://github.com",
      email: "mailto:mike@enact.com",
    },
  },
  {
    id: 6,
    name: "Emily Davis",
    role: "Social Media Lead",
    image: "",
    initials: "ED",
    bio: "Managing social presence and driving engagement.",
    socials: {
      instagram: "https://www.instagram.com/enact.official?igsh=MTV6a21hd3dyNjBkaw==",
      github: "https://github.com",
      email: "mailto:emily@enact.com",
    },
  },
  {
    id: 7,
    name: "Chris Lee",
    role: "Research Lead",
    image: "",
    initials: "CL",
    bio: "Researching and curating the best resources for students.",
    socials: {
      instagram: "https://www.instagram.com/enact.official?igsh=MTV6a21hd3dyNjBkaw==",
      github: "https://github.com",
      email: "mailto:chris@enact.com",
    },
  },
  {
    id: 8,
    name: "Lisa Wang",
    role: "Video Editor",
    image: "",
    initials: "LW",
    bio: "Creating engaging video content for our YouTube channel.",
    socials: {
      instagram: "https://www.instagram.com/enact.official?igsh=MTV6a21hd3dyNjBkaw==",
      github: "https://github.com",
      email: "mailto:lisa@enact.com",
    },
  },
];

const socialIcons = [
  { key: "instagram", icon: Instagram },
  { key: "github", icon: Github },
  { key: "email", icon: Mail },
];

export default function Team() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Our Team
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Meet the
              <span className="gradient-text"> ENACT Team</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Passionate students working together to make engineering education accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="glass-card rounded-2xl p-6 hover-lift text-center group"
              >
                {/* Avatar */}
                <div className="relative w-24 h-24 mx-auto mb-4">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full rounded-full gradient-bg flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary-foreground">
                        {member.initials}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 rounded-full bg-primary/10 scale-110 -z-10 group-hover:scale-125 transition-transform duration-300" />
                </div>

                {/* Info */}
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>

                {/* Social Links */}
                <div className="flex justify-center gap-2">
                  {socialIcons.map(({ key, icon: Icon }) => {
                    const link = member.socials[key as keyof typeof member.socials];
                    if (!link) return null;
                    return (
                      <a
                        key={key}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center hover:gradient-bg transition-all duration-300 group/icon"
                      >
                        <Icon
                          size={16}
                          className="text-accent-foreground group-hover/icon:text-primary-foreground transition-colors"
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Want to Join Our Team?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We're always looking for passionate individuals to join our mission. Check out our open positions and apply today!
          </p>
          <a
            href="/join"
            className="inline-flex items-center gap-2 px-8 py-4 gradient-bg text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            View Open Positions
          </a>
        </div>
      </section>
    </Layout>
  );
}
