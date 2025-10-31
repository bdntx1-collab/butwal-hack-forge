import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Download, Clock } from "lucide-react";

const Schedule = () => {
  const schedule = [
    {
      day: "Day 1",
      title: "Registration + Idea Pitch",
      date: "Friday, June 20, 2025",
      color: "primary",
      rotate: "rotate-2",
      events: [
        { time: "09:00 AM", event: "Registration & Check-in" },
        { time: "10:00 AM", event: "Opening Ceremony" },
        { time: "11:00 AM", event: "Team Formation" },
        { time: "02:00 PM", event: "Idea Pitching Sessions" },
        { time: "04:00 PM", event: "Hacking Begins!" },
      ],
    },
    {
      day: "Day 2",
      title: "Hacking + Mentorship Sessions",
      date: "Saturday, June 21, 2025",
      color: "accent",
      rotate: "-rotate-1",
      events: [
        { time: "09:00 AM", event: "Workshop: Intro to Hackathons" },
        { time: "11:00 AM", event: "Mentor Office Hours" },
        { time: "01:00 PM", event: "Workshop: Rapid Prototyping" },
        { time: "03:00 PM", event: "Continue Hacking" },
        { time: "07:00 PM", event: "Evening Mentorship" },
      ],
    },
    {
      day: "Day 3",
      title: "Demos + Judging + Closing",
      date: "Sunday, June 22, 2025",
      color: "secondary",
      rotate: "rotate-1",
      events: [
        { time: "09:00 AM", event: "Final Sprint" },
        { time: "12:00 PM", event: "Submission Deadline" },
        { time: "01:00 PM", event: "Project Demos" },
        { time: "03:00 PM", event: "Judging" },
        { time: "05:00 PM", event: "Awards & Closing Ceremony" },
      ],
    },
  ];

  return (
    <section id="schedule" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-32 right-10 w-24 h-24 border-4 border-primary/10 -rotate-45 hidden lg:block" />
      <Clock className="absolute bottom-20 left-10 w-16 h-16 text-accent/10 rotate-12 hidden lg:block" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <h2 className="text-4xl md:text-6xl font-black text-foreground font-heading transform rotate-1">
              Event Schedule
            </h2>
            <svg className="absolute -bottom-3 right-0 w-2/3 h-4" viewBox="0 0 200 12" preserveAspectRatio="none">
              <path d="M0,7 Q50,5 100,7 T200,7" stroke="hsl(var(--primary))" strokeWidth="4" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground font-medium">
            Three days of innovation, learning, and building 🚀
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {schedule.map((day, index) => (
            <Card
              key={index}
              className={`border-4 border-foreground hover:rotate-0 transition-all bg-card shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 ${day.rotate}`}
            >
              <div className="p-6">
                <div className="mb-6">
                  <div className="inline-block px-4 py-2 bg-primary border-2 border-foreground transform -rotate-2 mb-4">
                    <h3 className="text-3xl font-black text-primary-foreground font-heading">{day.day}</h3>
                  </div>
                  <p className="text-lg font-bold text-foreground mb-1">{day.title}</p>
                  <p className="text-sm text-muted-foreground font-medium">{day.date}</p>
                </div>
                <div className="space-y-4">
                  {day.events.map((event, idx) => (
                    <div key={idx} className="flex gap-3 p-2 hover:bg-secondary/50 rounded transition-colors">
                      <span className="text-xs font-black text-primary min-w-[80px] bg-primary/10 px-2 py-1 rounded border-2 border-primary/20">
                        {event.time}
                      </span>
                      <span className="text-sm text-foreground font-medium">{event.event}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            variant="outline" 
            size="lg"
            className="transform -rotate-1 hover:rotate-0"
          >
            <Download className="mr-2 w-5 h-5" />
            Download Full Schedule
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="transform rotate-1 hover:rotate-0"
          >
            <Calendar className="mr-2 w-5 h-5" />
            Add to Calendar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
