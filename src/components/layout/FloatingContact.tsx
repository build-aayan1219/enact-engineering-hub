import { useState } from "react";
import { MessageCircle, X, Send, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Quick Links Panel */}
      <div
        className={cn(
          "absolute bottom-16 right-0 w-64 glass-card rounded-2xl p-4 transition-all duration-300 origin-bottom-right",
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        )}
      >
        <h4 className="font-semibold text-foreground mb-3">Quick Contact</h4>
        <div className="space-y-2">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-xl bg-green-500/10 text-green-600 hover:bg-green-500/20 transition-colors"
          >
            <MessageCircle size={20} />
            <span className="text-sm font-medium">WhatsApp</span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-xl bg-pink-500/10 text-pink-600 hover:bg-pink-500/20 transition-colors"
          >
            <Instagram size={20} />
            <span className="text-sm font-medium">Instagram</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-xl bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 transition-colors"
          >
            <Linkedin size={20} />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Toggle Button */}
      <Button
        size="icon"
        className={cn(
          "w-14 h-14 rounded-full shadow-lg transition-all duration-300",
          isOpen ? "rotate-0" : "animate-pulse-soft"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Send size={24} />}
      </Button>
    </div>
  );
}
