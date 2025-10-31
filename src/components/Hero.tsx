import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import logo from "@/assets/hack-day-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Floating Rocket */}
          <div className="absolute top-10 right-10 animate-float hidden lg:block">
            <Rocket className="w-16 h-16 text-primary opacity-20" />
          </div>

          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img
              src={logo}
              alt="Hack Day Butwal 1.0"
              className="w-full max-w-md h-auto"
            />
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
            Major Hacking League Season Event | Learn. Build. Launch.
          </p>

          <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join Nepal's brightest student innovators for 3 days of hacking, learning, and building impactful projects.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="text-base px-8 shadow-lg hover:shadow-xl transition-all animate-glow"
            >
              Register Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 border-2"
            >
              View Schedule
            </Button>
          </div>

          {/* Event Info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <p className="text-3xl font-bold text-primary mb-2">3 Days</p>
              <p className="text-sm text-muted-foreground">Of Innovation</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-primary mb-2">100+</p>
              <p className="text-sm text-muted-foreground">Participants</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-primary mb-2">₹50K+</p>
              <p className="text-sm text-muted-foreground">In Prizes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
