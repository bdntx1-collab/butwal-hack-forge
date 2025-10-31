import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Download } from "lucide-react";

const Schedule = () => {
  const schedule = [
    {
      day: "Day 1",
      title: "Registration + Idea Pitch",
      date: "Friday, June 20, 2025",
      color: "primary",
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
    <section id="schedule" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Event Schedule</h2>
          <p className="text-lg text-muted-foreground">
            Three days of innovation, learning, and building
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {schedule.map((day, index) => (
            <Card
              key={index}
              className={`border-2 hover:shadow-lg transition-all ${
                day.color === "primary"
                  ? "border-primary/30"
                  : day.color === "accent"
                  ? "border-accent/30"
                  : "border-border"
              }`}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2">{day.day}</h3>
                  <p className="text-sm font-medium text-primary mb-1">{day.title}</p>
                  <p className="text-xs text-muted-foreground">{day.date}</p>
                </div>
                <div className="space-y-3">
                  {day.events.map((event, idx) => (
                    <div key={idx} className="flex gap-3">
                      <span className="text-xs font-bold text-primary min-w-[70px]">
                        {event.time}
                      </span>
                      <span className="text-sm text-foreground">{event.event}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="outline" size="lg">
            <Download className="mr-2 w-4 h-4" />
            Download Full Schedule (PDF)
          </Button>
          <Button variant="outline" size="lg">
            <Calendar className="mr-2 w-4 h-4" />
            Add to Google Calendar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
