import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Twitter, Facebook, Instagram, Users } from "lucide-react";

export const Media = () => {
  const socialLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      handle: "@MeetingOfMindsNL",
    },
    {
      name: "Facebook",
      icon: Facebook,
      handle: "/MeetingOfMindsNL",
    },
    {
      name: "Instagram",
      icon: Instagram,
      handle: "@meetingofmindsnl",
    },
  ];

  return (
    <section id="media" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6">
            Media & Community
          </h2>
          <p className="text-xl text-card-foreground/80">
            Stay connected and join the conversation
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Social Media */}
          <Card className="border-accent border-2 bg-background">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Follow Us for Updates
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {socialLinks.map((social) => (
                  <div
                    key={social.name}
                    className="flex flex-col items-center space-y-3 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <social.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-foreground">{social.name}</p>
                      <p className="text-sm text-muted-foreground">{social.handle}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-lg text-muted-foreground mb-2">
                  Use our official hashtag:
                </p>
                <p className="text-2xl font-bold text-accent">#MeetingOfTheMindsNL</p>
              </div>
            </CardContent>
          </Card>

          {/* Volunteer CTA */}
          <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-0">
            <CardContent className="p-8 text-center">
              <Users className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                Join Our Event Team
              </h3>
              <p className="text-lg text-primary-foreground/90 mb-6">
                Interested in volunteering? We'd love to have you help make this
                event a success!
              </p>
              <Button
                size="lg"
                className="bg-background text-primary hover:bg-background/90"
              >
                Volunteer Sign-up
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
