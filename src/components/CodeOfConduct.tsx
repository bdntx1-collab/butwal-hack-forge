import { Shield, AlertTriangle, FileText, Mail, Download } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { generateCodeOfConductPDF } from "@/utils/generateCodeOfConductPDF";
import { useToast } from "@/hooks/use-toast";

const CodeOfConduct = () => {
  const { toast } = useToast();

  const handleDownloadPDF = () => {
    try {
      generateCodeOfConductPDF();
      toast({
        title: "PDF Downloaded",
        description: "The Code of Conduct PDF has been downloaded successfully.",
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "There was an error downloading the PDF. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="code-of-conduct" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-40 h-40 border-4 border-primary/10 rotate-12 hidden lg:block" />
      <Shield className="absolute bottom-10 left-10 w-24 h-24 text-accent/10 rotate-12 hidden lg:block" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <h2 className="text-4xl md:text-6xl font-black text-foreground font-heading transform -rotate-1">
              Code of Conduct
            </h2>
            <svg className="absolute -bottom-3 left-1/4 w-1/2 h-4" viewBox="0 0 200 12" preserveAspectRatio="none">
              <path d="M0,7 Q50,3 100,7 T200,7" stroke="hsl(var(--accent))" strokeWidth="4" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-3xl mx-auto">
            Creating a safe, respectful, and inclusive environment for all participants
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Organized by Butwal Hacks • Effective Date: November 13, 2025
          </p>
          <Button 
            onClick={handleDownloadPDF}
            className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
            size="lg"
          >
            <Download className="w-5 h-5 mr-2" />
            Download PDF
          </Button>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Summary */}
          <Card className="border-4 border-foreground bg-primary/5 p-8 transform rotate-1 shadow-brutal">
            <div className="flex items-start gap-4">
              <Shield className="w-12 h-12 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-black mb-4 font-heading">Summary</h3>
                <p className="text-base text-foreground leading-relaxed">
                  Be respectful towards other people and try to be good. Not even once in a lifetime, harassment and abusive behavior are allowed. If you witness or feel that someone is making you or others uncomfortable, or that you are in danger, whether it is physically or online, then report it. Everyone has the right to a supportive, inclusive, and respectful environment.
                </p>
              </div>
            </div>
          </Card>

          {/* Our Commitment */}
          <Card className="border-4 border-foreground bg-card p-8 transform -rotate-1 shadow-brutal">
            <h3 className="text-2xl font-black mb-4 font-heading flex items-center gap-3">
              <FileText className="w-8 h-8 text-accent" />
              Our Commitment
            </h3>
            <p className="text-base text-foreground leading-relaxed">
              Butwal Hacks aims to provide a safe and supportive environment for all teenage participants (under 18) at Hack Day Butwal. We promise that every young person, regardless of gender, age, sexual orientation, disability, physical appearance, race, religion, nationality, socio-economic background, or any other personal characteristic, should be able to discover, invent, and collaborate without discrimination or harassment. This Code of Conduct outlines the organization's values and the expected behaviors at the event as well as all the associated activities.
            </p>
          </Card>

          {/* Expected Behavior */}
          <Card className="border-4 border-foreground bg-card p-8 transform rotate-1 shadow-brutal">
            <h3 className="text-2xl font-black mb-6 font-heading text-primary">Expected Behavior</h3>
            <ul className="space-y-3">
              {[
                "In your conversations with others, be respectful, empathetic, and open-minded.",
                "Try to really understand what the other people are saying and also consider their perspective.",
                "Interact with others in a way that is courteous and respectful.",
                "Do not interfere with others' personal or private lives or try to control them.",
                "If you want to take someone's photo or share their work, then get their permission first.",
                "Encourage and support your co-learners in their efforts to acquire knowledge and create things.",
                "Choose to be a positive contributor in workshops, discussions, and collaborative spaces."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-base text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Unacceptable Behavior */}
          <Card className="border-4 border-foreground bg-destructive/5 p-8 transform -rotate-1 shadow-brutal">
            <h3 className="text-2xl font-black mb-4 font-heading text-destructive flex items-center gap-3">
              <AlertTriangle className="w-8 h-8" />
              Unacceptable Behavior
            </h3>
            <p className="text-base text-foreground mb-6 leading-relaxed">
              Some examples of possible behavior that may not be accepted at Hack Day Butwal are:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Harassment, e.g., insulting or discriminating comments related to gender, age, sexual orientation, disability, race, religion, appearance, or background.",
                "Making use of sexually charged words, pictures, or acts, e.g., the name of the projects, presentations, or team identifiers.",
                "Intimidation, unwanted touching, spying, or threatening behavior.",
                "Publishing or distributing sexually explicit, violent, or hateful material.",
                "Disrupting the events, presentations, or collaborative sessions that have been organized previously.",
                "Giving out or threatening to give out someone's private information (doxxing).",
                "Bullying, exclusionary behavior, or any action that makes another participant feel that they are not safe or that they are not welcome.",
                "Besides, staff, volunteers, mentors, and organizers ought not to wear sexually suggestive clothes or do anything that could be considered displeasing or immodest."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                    ✕
                  </span>
                  <span className="text-base text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-destructive/10 border-2 border-destructive p-4 rounded">
              <p className="text-base font-bold text-foreground">
                If someone tells you that your words or actions make them uncomfortable (even if you didn't mean to), please stop right away. Respect is not optional; it is a requirement.
              </p>
            </div>
          </Card>

          {/* Scope */}
          <Card className="border-4 border-foreground bg-card p-8 transform rotate-1 shadow-brutal">
            <h3 className="text-2xl font-black mb-4 font-heading">Scope</h3>
            <p className="text-base text-foreground leading-relaxed">
              The present Code of Conduct is mandatory for everyone who is in any way related to Hack Day Butwal. Participants, mentors, judges, volunteers, organizers, sponsors, and guests are all covered by these rules. These rules control the behavior of people at the event location, during the trip provided by the organizers, at the social events related to the event, and in all the online spaces connected with the event (e.g., communication platforms, shared workspaces, or social media groups).
            </p>
          </Card>

          {/* Reporting Concerns */}
          <Card className="border-4 border-foreground bg-accent/5 p-8 transform -rotate-1 shadow-brutal">
            <h3 className="text-2xl font-black mb-4 font-heading flex items-center gap-3">
              <Mail className="w-8 h-8 text-accent" />
              Reporting Concerns
            </h3>
            <p className="text-base text-foreground mb-6 leading-relaxed">
              In case you witness or get to know about a behavior that is against this Code of Conduct or if you feel uncomfortable or unsafe, you should definitely get in touch with someone immediately. You can inform about your situation by:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Directly addressing a Butwal Hacks organizer or volunteer (check for staff badges or team members who are designated).",
                "Locating the Safety & Support Desk at the event venue.",
                "Dispatching a note to support@butwalhacks.com."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-accent text-background rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-base text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-base text-foreground mb-4 leading-relaxed">
              Every single report is treated very seriously, handled confidentially, and with great care. We realize that it might be a hard thing to talk about, especially if you are a young participant, but we are here to listen without making any judgments.
            </p>
            <p className="text-base text-foreground font-semibold mb-3">Our team members are ready to help you by:</p>
            <ul className="space-y-2">
              {[
                "Giving you the support you need right away or if you want, taking you along.",
                "Getting in touch with the proper guardians, school authorities, or local law enforcement, when necessary.",
                "Making sure to take the steps necessary for your safety and comfort for the rest of the event."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-accent text-xl">•</span>
                  <span className="text-base text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Enforcement */}
          <Card className="border-4 border-foreground bg-card p-8 transform rotate-1 shadow-brutal">
            <h3 className="text-2xl font-black mb-4 font-heading">Enforcement</h3>
            <p className="text-base text-foreground mb-6 leading-relaxed">
              In a case where an individual violates the regulations outlined in this Code of Conduct, the subsequent handling of such a case will be conducted in a timely and fair manner very much in accordance with the facts of the case. Based on the severity and nature of the issue, Butwal Hacks may only choose to carry out some of the actions from the list below which is not exhaustive:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Officially warning.",
                "Temporarily limiting someone's access to certain parts of the event or some activities.",
                "Forcibly removing a person without their consent to a refund or participation in any other event.",
                "Informing the parents or legal guardians if the participant is a minor.",
                "Getting the police or other external authorities involved in case of serious situations."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary text-xl font-bold">→</span>
                  <span className="text-base text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-primary/10 border-2 border-primary p-4 rounded">
              <p className="text-base font-bold text-foreground">
                We are putting the safety of our participants first, especially those who are minors, above everything else.
              </p>
            </div>
          </Card>

          {/* Final Note */}
          <Card className="border-4 border-foreground bg-gradient-to-br from-primary/10 to-accent/10 p-8 transform -rotate-1 shadow-brutal">
            <h3 className="text-2xl font-black mb-4 font-heading">Final Note</h3>
            <p className="text-base text-foreground leading-relaxed mb-6">
              Hack Day Butwal is a place where young technologists are given the necessary environment to be curious, collaborate, and come up with creative ideas. By following this Code of Conduct, we create a community where every teenage participant can thrive and innovate safely.
            </p>
            <p className="text-base font-bold text-foreground">— The Butwal Hacks Team</p>
          </Card>

          {/* Contact Footer */}
          <div className="text-center pt-8">
            <p className="text-base text-muted-foreground mb-4">
              If you want to know more or need help, please get in touch with us at
            </p>
            <a 
              href="mailto:support@butwalhacks.com"
              className="inline-flex items-center gap-2 text-lg font-bold text-primary hover:text-primary/80 transition-colors"
            >
              <Mail className="w-5 h-5" />
              support@butwalhacks.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeOfConduct;
