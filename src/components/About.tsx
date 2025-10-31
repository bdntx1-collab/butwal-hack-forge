import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What is Hack Day Butwal 1.0?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Hack Day — Butwal 1.0 is a student-focused hackathon inspired by the
            Major League Hacking community. It unites creators, developers, and
            innovators from across Nepal to build impactful projects, gain
            experience, and have fun.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <ExternalLink className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">What is MLH?</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Major League Hacking (MLH) is a global organization that supports
                  student hackathons. This event follows MLH's code of conduct,
                  values, and innovation spirit.
                </p>
                <Button variant="outline" className="mt-2" asChild>
                  <a
                    href="https://mlh.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More About MLH
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-all">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-xl font-bold mb-2">Learn</h4>
              <p className="text-sm text-muted-foreground">
                Workshops, mentorship, and hands-on experience with cutting-edge tech
              </p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-all">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">💻</div>
              <h4 className="text-xl font-bold mb-2">Build</h4>
              <p className="text-sm text-muted-foreground">
                Turn your ideas into reality with 48 hours of non-stop coding
              </p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-all">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">🏆</div>
              <h4 className="text-xl font-bold mb-2">Launch</h4>
              <p className="text-sm text-muted-foreground">
                Present your projects, win prizes, and make lasting connections
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
