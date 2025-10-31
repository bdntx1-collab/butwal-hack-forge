import { Card } from "@/components/ui/card";
import { Brain, Code, Cpu, Heart } from "lucide-react";

const Challenges = () => {
  const challenges = [
    {
      icon: Brain,
      title: "AI / ML Innovation",
      description: "Build intelligent solutions using machine learning and AI technologies",
      rotate: "-rotate-2"
    },
    {
      icon: Code,
      title: "Best Beginner Hack",
      description: "Perfect for first-time hackers building their debut project",
      rotate: "rotate-1"
    },
    {
      icon: Cpu,
      title: "Hardware Hero",
      description: "Create innovative solutions combining hardware and software",
      rotate: "-rotate-1"
    },
    {
      icon: Heart,
      title: "Social Impact Award",
      description: "Develop projects that make a positive difference in society",
      rotate: "rotate-2"
    }
  ];

  return (
    <section id="challenges" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border-4 border-primary/10 rotate-45 hidden lg:block" />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent/10 -rotate-12 hidden lg:block" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <h2 className="text-4xl md:text-6xl font-black text-foreground font-heading transform -rotate-1">
              Challenges & Prizes
            </h2>
            <svg className="absolute -bottom-3 left-0 w-full h-4" viewBox="0 0 200 12" preserveAspectRatio="none">
              <path d="M0,7 Q50,4 100,7 T200,7" stroke="hsl(var(--accent))" strokeWidth="4" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Compete in multiple tracks and win amazing prizes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <Card
                key={index}
                className={`p-8 text-center hover:rotate-0 transition-all border-4 border-foreground bg-card shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 ${challenge.rotate}`}
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-primary border-4 border-foreground flex items-center justify-center transform -rotate-6">
                  <Icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-black text-foreground mb-3 font-heading">
                  {challenge.title}
                </h3>
                <p className="text-muted-foreground text-base font-medium">
                  {challenge.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="text-center bg-primary/10 p-10 border-4 border-foreground max-w-4xl mx-auto transform rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <p className="text-xl text-foreground font-bold leading-relaxed">
            🏆 Winners receive certificates, exclusive Hack Day swag, and recognition from MLH partners! 🎉
          </p>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
