import { Card, CardContent } from "@/components/ui/card";
import { Clock, Play, Coffee, Trophy } from "lucide-react";

export const Schedule = () => {
  const schedule = [
    {
      time: "7:00 PM",
      title: "Doors Open & Team Check-in",
      description: "Registration, team photos, and settle in",
      icon: Clock,
    },
    {
      time: "7:30 PM",
      title: "Round 1-4",
      description: "First four rounds of trivia (10 questions each)",
      icon: Play,
    },
    {
      time: "8:15 PM",
      title: "First Intermission",
      description: "Stretch, refresh drinks, and strategize",
      icon: Coffee,
    },
    {
      time: "8:30 PM",
      title: "Round 5-8",
      description: "Multimedia rounds including audio, video, and images",
      icon: Play,
    },
    {
      time: "9:15 PM",
      title: "Second Intermission",
      description: "Final break and side game results",
      icon: Coffee,
    },
    {
      time: "9:30 PM",
      title: "Final Rounds",
      description: "Last challenge rounds with bonus questions",
      icon: Play,
    },
    {
      time: "10:00 PM",
      title: "Awards Ceremony",
      description: "Winners announced and prizes awarded",
      icon: Trophy,
    },
  ];

  const structure = [
    { label: "Total Rounds", value: "12" },
    { label: "Questions per Round", value: "10" },
    { label: "Intermissions", value: "2" },
    { label: "Multimedia Rounds", value: "Audio, Video, Images" },
  ];

  return (
    <section id="schedule" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6">
            Event Schedule & Structure
          </h2>
          <p className="text-xl text-card-foreground/80">
            A well-paced evening of trivia excellence
          </p>
        </div>

        {/* Structure Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          {structure.map((item) => (
            <Card key={item.label} className="border-border bg-background">
              <CardContent className="p-6 text-center">
                <p className="text-3xl font-bold text-primary mb-2">{item.value}</p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto space-y-4">
          {schedule.map((item, index) => (
            <Card
              key={index}
              className="border-border bg-background hover:shadow-elevated transition-all"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-primary/10 p-3 flex-shrink-0">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground">
                        {item.title}
                      </h3>
                      <span className="text-accent font-semibold">{item.time}</span>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          <Card className="border-accent border-2 bg-background">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Scoring System
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>1 point per correct answer (120 points possible)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Bonus/meta questions for extra points</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Winners determined by highest total score</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Tiebreaker questions if needed</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
