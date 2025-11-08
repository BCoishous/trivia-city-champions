import { Card, CardContent } from "@/components/ui/card";
import { Mic } from "lucide-react";

export const Hosts = () => {
  const hosts = [
    {
      name: "Michael Pickard",
      role: "Main Host",
      bio: "St. John's premier trivia host with over a decade of experience",
    },
    {
      name: "Rus Cochrane",
      role: "Guest Host",
      bio: "Known for witty commentary and challenging questions",
    },
    {
      name: "Lynsey Hamen",
      role: "Guest Host",
      bio: "Multimedia specialist bringing audio-visual excellence",
    },
    {
      name: "Geoff Inder",
      role: "Guest Host",
      bio: "Pop culture expert and entertainment enthusiast",
    },
    {
      name: "Tony Moores",
      role: "Guest Host",
      bio: "Local history buff with a passion for St. John's trivia",
    },
    {
      name: "Christopher Pickard",
      role: "Guest Host",
      bio: "Sports and current events specialist",
    },
  ];

  return (
    <section id="hosts" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet the Hosts
          </h2>
          <p className="text-xl text-muted-foreground">
            Hosted by the city's top trivia experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {hosts.map((host, index) => (
            <Card
              key={host.name}
              className={`border-border bg-card hover:shadow-elevated transition-all duration-300 ${
                index === 0 ? "md:col-span-2 lg:col-span-3" : ""
              }`}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div
                    className={`rounded-full bg-primary/10 p-4 ${
                      index === 0 ? "scale-125" : ""
                    }`}
                  >
                    <Mic className={`${index === 0 ? "h-8 w-8" : "h-6 w-6"} text-primary`} />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`${
                        index === 0 ? "text-3xl" : "text-xl"
                      } font-bold text-card-foreground mb-1`}
                    >
                      {host.name}
                    </h3>
                    <p className="text-accent font-semibold mb-3">{host.role}</p>
                    <p className="text-muted-foreground">{host.bio}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="p-8 text-center">
              <p className="text-lg">
                These veteran hosts bring years of combined experience in crafting and
                presenting engaging trivia events throughout St. John's. Expect
                professionally curated questions, smooth pacing, and an entertaining
                atmosphere.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
