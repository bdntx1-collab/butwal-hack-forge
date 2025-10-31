import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Lightbulb, Presentation } from "lucide-react";

const Workshops = () => {
  const workshops = [
    {
      title: "Intro to Hackathons",
      icon: BookOpen,
      time: "Day 2, 9:00 AM",
      description: "First time at a hackathon? Learn the basics and how to make the most of your experience",
    },
    {
      title: "Rapid Prototyping with APIs",
      icon: Lightbulb,
      time: "Day 2, 1:00 PM",
      description: "Build faster by leveraging powerful APIs and modern development tools",
    },
    {
      title: "Pitch Like a Pro",
      icon: Presentation,
      time: "Day 3, 10:00 AM",
      description: "Learn how to present your project effectively and impress the judges",
    },
  ];

  const mentors = [
    { name: "Rajesh Kumar", role: "Full Stack Developer", skills: ["React", "Node.js"] },
    { name: "Priya Sharma", role: "ML Engineer", skills: ["Python", "TensorFlow"] },
    { name: "Amit Patel", role: "Hardware Specialist", skills: ["IoT", "Arduino"] },
    { name: "Sarah Singh", role: "UX Designer", skills: ["Figma", "Design"] },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Workshops & Mentorship
          </h2>
          <p className="text-lg text-muted-foreground">
            Learn from experts and get guidance throughout the event
          </p>
        </div>

        {/* Workshops */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {workshops.map((workshop, index) => (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <workshop.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{workshop.title}</h3>
                <p className="text-sm text-primary font-medium mb-3">
                  {workshop.time}
                </p>
                <p className="text-sm text-muted-foreground">
                  {workshop.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mentors */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">Meet Our Mentors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentors.map((mentor, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {mentor.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <h4 className="font-bold mb-1">{mentor.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {mentor.role}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {mentor.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshops;
