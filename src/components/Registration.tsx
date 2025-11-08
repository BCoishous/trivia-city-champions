import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, DollarSign, Gift, Heart, ShoppingCart } from "lucide-react";

export const Registration = () => {
  const benefits = [
    "Full championship admission",
    "Chance to win prizes worth over $1,000",
    "Support NL Eats local charity",
    "Complimentary team photo",
    "Access to side games and contests",
  ];

  const handleRegister = () => {
    // This will be connected to Shopify product
    alert("Registration coming soon! Team registration will be available through our Shopify store.");
  };

  return (
    <section id="register" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Team Registration
          </h2>
          <p className="text-xl text-muted-foreground">
            Secure your team's spot in St. John's most anticipated trivia championship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          <Card className="border-border hover:shadow-elevated transition-all">
            <CardHeader className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
              <CardTitle>Team Size</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-3xl font-bold text-foreground mb-2">5-6</p>
              <p className="text-muted-foreground">Players per team</p>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-elevated transition-all">
            <CardHeader className="text-center">
              <DollarSign className="h-12 w-12 mx-auto mb-4 text-primary" />
              <CardTitle>Entry Fee</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-3xl font-bold text-foreground mb-2">$150-$200</p>
              <p className="text-muted-foreground">Per team</p>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-elevated transition-all">
            <CardHeader className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
              <CardTitle>Limited Spots</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-3xl font-bold text-foreground mb-2">20</p>
              <p className="text-muted-foreground">Teams maximum</p>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-2xl mx-auto border-accent border-2 bg-gradient-to-br from-background to-accent/5">
          <CardHeader className="text-center">
            <Gift className="h-16 w-16 mx-auto mb-4 text-accent" />
            <CardTitle className="text-2xl">What's Included</CardTitle>
            <CardDescription className="text-lg">
              Your team registration includes:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start space-x-3">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <Heart className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground text-lg">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6 shadow-elevated"
              onClick={handleRegister}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Register Your Team Now
            </Button>

            <p className="text-center text-muted-foreground mt-4 text-sm">
              Limited to 20 teams • First come, first served
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
