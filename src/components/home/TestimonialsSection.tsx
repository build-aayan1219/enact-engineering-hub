import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Computer Science, 3rd Year",
    avatar: "RS",
    content: "ENACT's resources helped me crack my first internship at a top tech company. The roadmaps are incredibly detailed!",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Electronics Engineering, 4th Year",
    avatar: "PP",
    content: "The PYQs collection is a lifesaver during exams. I've recommended ENACT to all my juniors.",
    rating: 5,
  },
  {
    name: "Arjun Kumar",
    role: "Mechanical Engineering, 2nd Year",
    avatar: "AK",
    content: "Being part of the ENACT community opened doors to so many opportunities and connections.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Loved by Students Everywhere
          </h2>
          <p className="text-muted-foreground">
            Don't just take our word for it. Here's what our community members have to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass-card rounded-2xl p-8 hover-lift"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
