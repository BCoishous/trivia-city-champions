import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold text-primary-foreground">
              Meeting of the Minds
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Button
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => scrollToSection("about")}
            >
              About
            </Button>
            <Button
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => scrollToSection("register")}
            >
              Register
            </Button>
            <Button
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => scrollToSection("prizes")}
            >
              Prizes
            </Button>
            <Button
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => scrollToSection("hosts")}
            >
              Hosts
            </Button>
            <Button
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => scrollToSection("venue")}
            >
              Venue
            </Button>
            <Button
              className="ml-4 bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => scrollToSection("register")}
            >
              Sign Up Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Button
              variant="ghost"
              className="w-full justify-start text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => scrollToSection("about")}
            >
              About
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => scrollToSection("register")}
            >
              Register
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => scrollToSection("prizes")}
            >
              Prizes
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => scrollToSection("hosts")}
            >
              Hosts
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => scrollToSection("venue")}
            >
              Venue
            </Button>
            <Button
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => scrollToSection("register")}
            >
              Sign Up Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};
