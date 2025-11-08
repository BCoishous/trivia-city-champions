import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Medal, Award, Zap, DollarSign } from "lucide-react";
import trophyImage from "@/assets/trophy.jpg";

export const Prizes = () => {
  const prizes = [
    {
      place: "1st Place",
      icon: Trophy,
      color: "event-gold",
      prize: "$1,000",
      extras: "+ Gift Cards + Championship Trophy",
    },
    {
      place: "2nd Place",
      icon: Medal,
      color: "event-silver",
      prize: "$500",
      extras: "+ Bonus Prize Package",
    },
    {
      place: "3rd Place",
      icon: Award,
      color: "event-bronze",
      prize: "Gift Cards",
      extras: "+ Exclusive Swag",
    },
  ];

  const sideGames = [
    {
      name: "Brainiac Challenge",
      description: "Individual mini-game competition",
      entry: "$5 entry",
      icon: Zap,
    },
    {
      name: "50/50 Draw",
      description: "Win half the pot!",
      entry: "Tickets available",
      icon: DollarSign,
    },
  ];

  return (
    <section id="prizes" className="py-24 bg-card relative overflow-hidden">
      {/* Background Trophy Image */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full opacity-5 pointer-events-none hidden lg:block">
        <img
          src={trophyImage}
          alt="Championship Trophy"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6">
            Prizes & Highlights
          </h2>
          <p className="text-xl text-card-foreground/80">
            Over $1,000 in total prizes plus exclusive rewards for top teams
          </p>
        </div>

        {/* Main Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {prizes.map((prize, index) => (
            <Card
              key={prize.place}
              className={`border-2 ${
                index === 0 ? "border-event-gold md:-translate-y-4" : `border-${prize.color}`
              } hover:shadow-elevated transition-all duration-300 bg-background`}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-${prize.color}/10 flex items-center justify-center`}>
                  <prize.icon className={`h-10 w-10 text-${prize.color}`} />
                </div>
                <CardTitle className="text-2xl">{prize.place}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className={`text-4xl font-bold text-${prize.color} mb-2`}>
                  {prize.prize}
                </p>
                <p className="text-muted-foreground text-lg">
                  {prize.extras}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Side Games */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-card-foreground mb-8">
            Side Games & Bonus Opportunities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sideGames.map((game) => (
              <Card key={game.name} className="border-accent/50 bg-background hover:shadow-elevated transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-full bg-accent/10 p-3">
                      <game.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-foreground mb-2">
                        {game.name}
                      </h4>
                      <p className="text-muted-foreground mb-2">
                        {game.description}
                      </p>
                      <p className="text-accent font-semibold">{game.entry}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
