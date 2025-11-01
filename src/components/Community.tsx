import { Button } from "@/components/ui/button";
import { MessageCircle, Twitter, Youtube } from "lucide-react";

const Community = () => {
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
      </div>
    </section>
  );
};

export default Community;
