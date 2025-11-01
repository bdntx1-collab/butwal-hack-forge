import { Button } from "@/components/ui/button";
import { Plane, Code2, Zap, Trophy } from "lucide-react";
import logo from "@/assets/hack-day-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Chaotic Decorative Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 border-4 border-primary/20 rotate-12 animate-tilt hidden lg:block" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent/10 -rotate-45 animate-float hidden lg:block" />
      <div className="absolute bottom-20 left-1/4 w-20 h-20 border-4 border-accent/20 rotate-45 animate-wiggle hidden lg:block" />
      <div className="absolute top-1/3 right-10 w-12 h-12 bg-primary/10 rotate-12 animate-float-reverse hidden lg:block" />

      {/* Floating Icons */}
      <div className="absolute top-32 right-1/4 animate-float hidden lg:block">
        <Code2 className="w-12 h-12 text-primary/30 rotate-12" />
      </div>
      <div className="absolute bottom-32 left-1/4 animate-float-reverse hidden lg:block">
        <Zap className="w-10 h-10 text-accent/40 -rotate-12" />
      </div>
      <div className="absolute top-1/2 left-10 animate-wiggle hidden lg:block">
        <Trophy className="w-14 h-14 text-primary/25 rotate-6" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Flying Plane Animation */}
          <div className="absolute -top-10 right-5 md:right-20 animate-[fly_8s_ease-in-out_infinite]">
            <Plane className="w-20 h-20 md:w-24 md:h-24 text-primary opacity-60 -rotate-12" />
          </div>

          {/* Logo with Tilt */}
          <div className="mb-8 flex justify-center animate-slide-in-left">
            <img
              src={logo}
              alt="Hack Day Butwal 1.0"
              className="w-full max-w-md h-auto hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Subtitle with Underline */}
          <div className="relative inline-block mb-8 animate-fade-in">
            <p className="text-xl md:text-3xl font-bold text-foreground tracking-tight transform -rotate-1">
              Major Hacking League Season Event
            </p>
            <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
              <path d="M0,7 Q50,3 100,7 T200,7" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" strokeLinecap="round"/>
            </svg>
          </div>

          <p className="text-2xl md:text-4xl font-bold text-primary mb-4 transform rotate-1 animate-slide-in-right">
            Ready to make your plane fly?
          </p>

          <p className="text-base md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's do it in the hackathon! Join Nepal's brightest student innovators for 12 hours of hacking, learning, and building impactful projects.
          </p>

          {/* CTA Buttons - Non-uniform */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="text-lg px-10 py-6 font-bold transform -rotate-2 hover:rotate-0 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1"
            >
              Register Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-6 font-bold border-4 transform rotate-1 hover:rotate-0 transition-all border-foreground shadow-[6px_6px_0px_0px_hsl(var(--primary))] hover:shadow-[3px_3px_0px_0px_hsl(var(--primary))] hover:translate-x-1 hover:translate-y-1"
            >
              View Schedule
            </Button>
          </div>

          {/* Event Info - Tilted Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-card border-4 border-foreground p-6 transform -rotate-2 hover:rotate-0 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1">
              <p className="text-5xl font-black text-primary mb-3 font-heading">12</p>
              <p className="text-xl font-bold text-foreground">Hours</p>
              <p className="text-sm text-muted-foreground mt-1">Of Innovation</p>
            </div>
            <div className="bg-card border-4 border-foreground p-6 transform rotate-1 hover:rotate-0 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1">
              <p className="text-5xl font-black text-primary mb-3 font-heading">48+</p>
              <p className="text-xl font-bold text-foreground">Hackers</p>
              <p className="text-sm text-muted-foreground mt-1">Participants</p>
            </div>
            <div className="bg-card border-4 border-foreground p-6 transform -rotate-1 hover:rotate-0 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1">
              <p className="text-5xl font-black text-primary mb-3 font-heading">🎁</p>
              <p className="text-xl font-bold text-foreground">E-gadgets</p>
              <p className="text-sm text-muted-foreground mt-1">To be revealed soon</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Elements */}
      <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-primary/10 -rotate-12 hidden lg:block" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/5 rotate-45 hidden lg:block" />
    </section>
  );
};

export default Hero;
