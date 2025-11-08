import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ExternalLink } from "lucide-react";

export const NLEats = () => {
  return (
    <section id="nleats" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <Heart className="h-10 w-10 text-accent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6">
              Supporting NL Eats
            </h2>
            <p className="text-xl text-card-foreground/80">
              All net profits from Meeting of the Minds go directly to NL Eats
            </p>
          </div>

          <Card className="border-accent border-2 bg-background">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    About NL Eats
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    NL Eats is a local nonprofit organization dedicated to providing meals
                    and support for families facing food insecurity across Newfoundland and
                    Labrador. Through community partnerships and innovative programs, NL Eats
                    ensures that no family goes hungry.
                  </p>
                </div>

                <div className="bg-primary/10 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-foreground mb-3">
                    How Your Participation Helps
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Provides nutritious meals to families in need</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Supports community food programs and initiatives</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Builds stronger, more resilient communities</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4">
                  <Button
                    size="lg"
                    className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground"
                    onClick={() => window.open("https://www.nleatscommunity.com/", "_blank")}
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Visit NL Eats Website
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
