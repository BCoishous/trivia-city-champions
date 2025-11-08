import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import heroImage from "@/assets/trivia-hero.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Meeting of the Minds Trivia Championship"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/70 to-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-block px-4 py-2 bg-accent/90 rounded-full mb-4">
            <p className="text-accent-foreground font-semibold">
              St. John's Annual Trivia Championships
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-background leading-tight">
            Meeting of the Minds
          </h1>

          <p className="text-2xl md:text-3xl text-background/90 font-medium">
            100 of St. John's sharpest minds. One evening. One victor.
          </p>

          {/* Event Details */}
          <div className="flex flex-wrap justify-center gap-6 text-background/90 text-lg">
            <div className="flex items-center space-x-2">
              <Calendar className="h-6 w-6" />
              <span className="font-medium">January 31, 2025 • 7:00-10:00 PM</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-6 w-6" />
              <span className="font-medium">Signal Hill Campus, St. John's, NL</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6" />
              <span className="font-medium">Max 20 Teams (100 Players)</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-elevated"
              onClick={() => scrollToSection("register")}
            >
              Sign Up Your Team
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-background/10 backdrop-blur-sm border-background text-background hover:bg-background hover:text-foreground text-lg px-8 py-6"
              onClick={() => scrollToSection("about")}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/60 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-background/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};
