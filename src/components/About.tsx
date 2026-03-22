import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Heart, Sparkles } from "lucide-react";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop", alt: "Trivia night crowd" },
  { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop", alt: "Event venue atmosphere" },
  { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop", alt: "Team competition" },
  { src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop", alt: "Community gathering" },
  { src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop", alt: "Celebration moment" },
  { src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop", alt: "Event highlights" },
];

export const About = () => {
  const features = [
    {
      icon: Trophy,
      title: "Elite Competition",
      description: "St. John's first-ever citywide trivia championship",
    },
    {
      icon: Users,
      title: "Inclusive Community",
      description: "Teams from workplaces, friend groups, and trivia enthusiasts",
    },
    {
      icon: Sparkles,
      title: "Multimedia Rounds",
      description: "Curated audio, video, and puzzle challenges",
    },
    {
      icon: Heart,
      title: "For a Cause",
      description: "All net profits support NL Eats",
    },
  ];

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6">
            About the Event
          </h2>
          <p className="text-xl text-card-foreground/80 leading-relaxed">
            Meeting of the Minds brings together professionals, trivia enthusiasts, and locals
            for an incredible evening of charity, community, and competition. This is
            St. John's first-ever citywide trivia championship, featuring expertly hosted
            rounds that blend pop culture, intellectual challenges, and local knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-border bg-background hover:shadow-elevated transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Photo Gallery */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-card-foreground text-center mb-8">
            Event Gallery
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg aspect-[3/2] group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Presented by St. John's Best Trivia Hosts
              </h3>
              <p className="text-lg text-primary-foreground/90">
                Featuring expertly crafted multimedia trivia rounds with a perfect blend of
                pop culture, intellectual challenges, and local St. John's knowledge
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
