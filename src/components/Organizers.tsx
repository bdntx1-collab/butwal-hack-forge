import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, UserPlus, Rocket } from "lucide-react";

const Organizers = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background relative overflow-hidden">
      {/* Subtle Rocket Watermark */}
      <div className="absolute top-10 right-10 opacity-5 hidden lg:block">
        <Rocket size={200} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the Team
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Hack Day thrives on teamwork. Join as an organizer or volunteer and
            help make Butwal's biggest student hackathon happen.
          </p>

          <Card className="border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 text-left">
                  <div className="bg-primary/10 p-2 rounded-lg mt-1">
                    <UserPlus className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Organizers</h3>
                    <p className="text-sm text-muted-foreground">
                      Lead event planning, logistics, and execution. Shape the
                      experience for all participants.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-left">
                  <div className="bg-accent/10 p-2 rounded-lg mt-1">
                    <UserPlus className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Volunteers</h3>
                    <p className="text-sm text-muted-foreground">
                      Support participants, help with logistics, and ensure
                      everything runs smoothly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <UserPlus className="mr-2 w-4 h-4" />
                  Volunteer Signup
                </Button>
                <Button size="lg" variant="outline">
                  <Download className="mr-2 w-4 h-4" />
                  Organizer Guide (PDF)
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8">
            <Button variant="link" className="text-primary" asChild>
              <a
                href="https://mlh.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                View MLH Organizer Resources →
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organizers;
