import { Button } from "@/components/ui/button";
import { MessageCircle, Twitter, Youtube } from "lucide-react";

const Community = () => {
  const testimonials = [
    {
      name: "Anita Thapa",
      role: "CS Student",
      text: "Best hackathon experience ever! Made amazing friends and learned so much.",
    },
    {
      name: "Rohan Sharma",
      role: "Engineering Student",
      text: "The mentorship was incredible. Helped us turn our idea into a real product.",
    },
    {
      name: "Kritika Singh",
      role: "First-time Hacker",
      text: "I had zero experience but everyone was so supportive. Can't wait for next year!",
    },
  ];

  return (
    <section id="community" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join the Community
          </h2>
          <p className="text-lg text-muted-foreground">
            Connect with hackers, mentors, and tech enthusiasts
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <Button size="lg" className="gap-2">
            <MessageCircle className="w-5 h-5" />
            Join Discord
          </Button>
          <Button size="lg" variant="outline" className="gap-2">
            <Twitter className="w-5 h-5" />
            Follow on Twitter
          </Button>
          <Button size="lg" variant="outline" className="gap-2">
            <Youtube className="w-5 h-5" />
            Watch on YouTube
          </Button>
        </div>

        {/* Testimonials */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            What Hackers Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">
                      {testimonial.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
