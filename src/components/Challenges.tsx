import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Cpu, Heart } from "lucide-react";

const Challenges = () => {
  const challenges = [
    {
      title: "AI / ML Innovation",
      icon: Brain,
      description:
        "Build intelligent solutions using machine learning, computer vision, or natural language processing",
    },
    {
      title: "Best Beginner Hack",
      icon: Code,
      description:
        "First time hacking? This track celebrates creativity and learning for newcomers to hackathons",
    },
    {
      title: "Hardware Hero",
      icon: Cpu,
      description:
        "Create projects combining hardware and software - IoT, robotics, or embedded systems",
    },
    {
      title: "Social Impact Award",
      icon: Heart,
      description:
        "Develop solutions that address real-world problems and make a positive difference in communities",
    },
  ];

  return (
    <section id="challenges" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Challenges & Prizes
          </h2>
          <p className="text-lg text-muted-foreground">
            Compete in multiple tracks and win amazing prizes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {challenges.map((challenge, index) => (
            <Card
              key={index}
              className="border-2 border-primary/20 hover:border-primary/50 hover:shadow-lg transition-all group"
            >
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all">
                  <challenge.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{challenge.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {challenge.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">🏆 What Winners Get</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>✓ Exclusive Hack Day swag and merchandise</p>
                <p>✓ Certificates of achievement</p>
                <p>✓ Recognition from MLH partners</p>
                <p>✓ Mentorship opportunities</p>
                <p>✓ Priority access to future events</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
