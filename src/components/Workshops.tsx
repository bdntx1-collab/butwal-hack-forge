import { Card } from "@/components/ui/card";
import { BookOpen, Lightbulb, Presentation, Users } from "lucide-react";

const Workshops = () => {
  const workshops = [
    {
      title: "Intro to Hackathons",
      icon: BookOpen,
      time: "Day 2, 9:00 AM",
      description: "First time at a hackathon? Learn the basics and how to make the most of your experience",
      rotate: "-rotate-2"
    },
    {
      title: "Rapid Prototyping with APIs",
      icon: Lightbulb,
      time: "Day 2, 1:00 PM",
      description: "Build faster by leveraging powerful APIs and modern development tools",
      rotate: "rotate-1"
    },
    {
      title: "Pitch Like a Pro",
      icon: Presentation,
      time: "Day 3, 10:00 AM",
      description: "Learn how to present your project effectively and impress the judges",
      rotate: "-rotate-1"
    },
  ];

  const mentors = [
    { name: "Rajesh Kumar", role: "Full Stack Dev", skills: ["React", "Node.js"], color: "primary" },
    { name: "Priya Sharma", role: "ML Engineer", skills: ["Python", "TensorFlow"], color: "accent" },
    { name: "Amit Patel", role: "Hardware Pro", skills: ["IoT", "Arduino"], color: "primary" },
    { name: "Sarah Singh", role: "UX Designer", skills: ["Figma", "Design"], color: "accent" },
  ];

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-20 w-28 h-28 bg-primary/5 rotate-45 hidden lg:block" />
      <Users className="absolute bottom-10 left-20 w-16 h-16 text-accent/10 -rotate-12 hidden lg:block" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <h2 className="text-4xl md:text-6xl font-black text-foreground font-heading transform -rotate-1">
              Workshops & Mentorship
            </h2>
            <svg className="absolute -bottom-3 left-4 w-3/4 h-4" viewBox="0 0 200 12" preserveAspectRatio="none">
              <path d="M0,7 Q50,4 100,8 T200,6" stroke="hsl(var(--accent))" strokeWidth="4" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground font-medium">
            Learn from experts and get guidance throughout the event
          </p>
        </div>

        {/* Workshops */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {workshops.map((workshop, index) => (
            <Card 
              key={index} 
              className={`border-4 border-foreground hover:rotate-0 transition-all bg-card shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 ${workshop.rotate}`}
            >
              <div className="p-6">
                <div className="w-16 h-16 bg-accent border-4 border-foreground flex items-center justify-center mb-4 transform -rotate-6">
                  <workshop.icon className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-2xl font-black mb-2 font-heading">{workshop.title}</h3>
                <p className="text-sm font-bold text-primary mb-3 bg-primary/10 inline-block px-3 py-1 border-2 border-primary/20">
                  {workshop.time}
                </p>
                <p className="text-sm text-muted-foreground font-medium">
                  {workshop.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Mentors */}
        <div className="max-w-5xl mx-auto">
          <div className="relative inline-block mb-12">
            <h3 className="text-3xl md:text-5xl font-black text-foreground font-heading transform rotate-1">
              Meet Our Mentors 👋
            </h3>
            <div className="absolute -bottom-2 left-0 w-32 h-1 bg-primary" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentors.map((mentor, index) => (
              <Card 
                key={index} 
                className="text-center hover:rotate-0 transition-all border-4 border-foreground bg-card shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transform -rotate-1"
              >
                <div className="p-6">
                  <div className={`w-24 h-24 rounded-full border-4 border-foreground mx-auto mb-4 flex items-center justify-center transform rotate-6 ${
                    mentor.color === "primary" ? "bg-primary" : "bg-accent"
                  }`}>
                    <span className="text-3xl font-black text-foreground font-heading">
                      {mentor.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <h4 className="font-black text-lg mb-1 font-heading">{mentor.name}</h4>
                  <p className="text-sm text-muted-foreground font-medium mb-4">
                    {mentor.role}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {mentor.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-bold bg-primary text-primary-foreground px-3 py-1 border-2 border-foreground transform -rotate-2"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshops;
