import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export const Sponsors = () => {
  const sponsors = {
    title: "Title Sponsor",
    items: ["Shopify"],
  };

  const supporting = {
    title: "Supporting Sponsors",
    items: ["Local Business 1", "Local Business 2", "Local Business 3"],
  };

  const media = {
    title: "Media Partners",
    items: ["CBC", "OZ-FM", "Cojones"],
  };

  return (
    <section id="sponsors" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sponsors & Partners
          </h2>
          <p className="text-xl text-muted-foreground">
            Proudly supported by our community partners
          </p>
        </div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {/* Title Sponsor */}
          <div>
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              {sponsors.title}
            </h3>
            <Card className="border-primary border-2 bg-card">
              <CardContent className="p-12">
                <div className="grid place-items-center">
                  <div className="text-4xl md:text-6xl font-bold text-primary">
                    {sponsors.items[0]}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Supporting Sponsors */}
          <div>
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              {supporting.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {supporting.items.map((sponsor) => (
                <Card key={sponsor} className="border-border bg-card">
                  <CardContent className="p-8 text-center">
                    <p className="text-xl font-semibold text-foreground">{sponsor}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Media Partners */}
          <div>
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              {media.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {media.items.map((partner) => (
                <Card key={partner} className="border-border bg-card">
                  <CardContent className="p-8 text-center">
                    <p className="text-xl font-semibold text-foreground">{partner}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Become a Sponsor CTA */}
        <div className="mt-16 max-w-2xl mx-auto">
          <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Want to Join Our Sponsor Team?
              </h3>
              <p className="text-lg text-primary-foreground/90 mb-6">
                Partner with us to support this incredible community event
              </p>
              <Button
                size="lg"
                className="bg-background text-primary hover:bg-background/90"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Sponsorship Package
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
