import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Who can participate?",
      answer:
        "Any student currently enrolled in high school, college, or university is welcome to participate. You don't need prior hackathon experience!",
    },
    {
      question: "Do I need prior experience?",
      answer:
        "Not at all! Hack Day is designed for hackers of all skill levels. We'll have workshops for beginners and mentors to help you throughout the event.",
    },
    {
      question: "Is it free?",
      answer:
        "Yes! Hack Day is completely free to attend. We'll provide meals, snacks, swag, and all the resources you need to build your project.",
    },
    {
      question: "How do I form a team?",
      answer:
        "Teams can be 1-4 people. You can come with a team or form one during the team formation session on Day 1. We'll help solo participants find teammates!",
    },
    {
      question: "What's the judging process?",
      answer:
        "Projects will be judged based on innovation, technical complexity, design, and impact. You'll present your project in a 3-minute demo to our panel of judges.",
    },
    {
      question: "What should I bring?",
      answer:
        "Bring your laptop, chargers, any hardware you want to use, and your student ID. Don't forget toiletries if you plan to stay overnight!",
    },
    {
      question: "Where can I sleep?",
      answer:
        "We'll have a designated rest area with sleeping bags and yoga mats. Feel free to take power naps, but the venue will be open 24/7 for hacking!",
    },
    {
      question: "What if I have more questions?",
      answer:
        "Feel free to reach out to us at team@butwalhacks.com or join our Discord community for quick answers!",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Hack Day Butwal 1.0
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            <Download className="mr-2 w-4 h-4" />
            Download Code of Conduct (PDF)
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
