import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Car, Utensils, Accessibility } from "lucide-react";

export const Venue = () => {
  const features = [
    {
      icon: Accessibility,
      title: "Accessible Venue",
      description: "Fully accessible facilities for all participants",
    },
    {
      icon: Utensils,
      title: "Cash Bar",
      description: "Refreshments and drinks available throughout the evening",
    },
    {
      icon: Car,
      title: "Parking Available",
      description: "Ample parking and close to public transit",
    },
  ];

  return (
    <section id="venue" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Venue & Logistics
          </h2>
          <p className="text-xl text-muted-foreground">
            Easy to reach, easy to enjoy
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Location Card */}
          <Card className="border-primary border-2 bg-card">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-primary/10 p-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">
                    Signal Hill Campus
                  </h3>
                  <p className="text-lg text-card-foreground/80 mb-4">
                    St. John's, Newfoundland and Labrador
                  </p>
                  <p className="text-muted-foreground">
                    A premier venue in the heart of St. John's with state-of-the-art
                    audio-visual equipment perfect for our multimedia trivia rounds.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Google Maps Embed */}
          <Card className="border-border bg-card overflow-hidden">
            <CardContent className="p-0">
              <div className="w-full h-96 bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">
                  [Google Maps will be embedded here]
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Venue Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="border-border bg-card hover:shadow-elevated transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-card-foreground mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Getting There */}
          <Card className="border-accent border bg-background">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Getting There
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-foreground mb-2">By Car</h4>
                  <p className="text-muted-foreground">
                    Parking available on-site. Additional street parking nearby.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Public Transit</h4>
                  <p className="text-muted-foreground">
                    Multiple bus routes service the Signal Hill area.
                    Check Metrobus schedules for details.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
