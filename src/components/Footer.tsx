import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Meeting of the Minds</h3>
            <p className="text-primary-foreground/80 mb-4">
              St. John's premier trivia championship supporting NL Eats.
            </p>
            <p className="text-sm text-primary-foreground/60">
              All net proceeds benefit families facing food insecurity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About the Event
                </a>
              </li>
              <li>
                <a
                  href="#register"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Register Your Team
                </a>
              </li>
              <li>
                <a
                  href="#prizes"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Prizes
                </a>
              </li>
              <li>
                <a
                  href="#sponsors"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Sponsors
                </a>
              </li>
              <li>
                <a
                  href="https://www.nleatscommunity.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  NL Eats
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Stay Updated</h4>
            <p className="text-primary-foreground/80 mb-4 text-sm">
              Get the latest news and updates about Meeting of the Minds
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © 2025 Meeting of the Minds. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-primary-foreground/80">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-accent fill-accent" />
              <span>in St. John's, NL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
