import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive our latest updates and resources.",
      });
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg opacity-95" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Stay Updated with ENACT
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Subscribe to our newsletter and never miss new resources, opportunities, and community updates.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-white/40"
              required
            />
            <Button
              type="submit"
              variant="secondary"
              size="lg"
              className="bg-card text-primary hover:bg-card/90"
              disabled={isSubmitted}
            >
              {isSubmitted ? (
                <>
                  <CheckCircle size={18} />
                  Subscribed
                </>
              ) : (
                <>
                  Subscribe
                  <Send size={18} />
                </>
              )}
            </Button>
          </form>

          <p className="text-primary-foreground/60 text-sm mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
