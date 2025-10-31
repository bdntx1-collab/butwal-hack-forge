import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";

const Sponsors = () => {
  const sponsors = {
    platinum: ["Sponsor Logo 1", "Sponsor Logo 2"],
    gold: ["Sponsor Logo 3", "Sponsor Logo 4", "Sponsor Logo 5"],
    silver: ["Sponsor Logo 6", "Sponsor Logo 7", "Sponsor Logo 8", "Sponsor Logo 9"],
  };

  return (
    <section id="sponsors" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Sponsors & Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Partner with Hack Day Butwal 1.0 to support innovation and connect
            with Nepal's brightest student developers.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Platinum Sponsors */}
          <div>
            <h3 className="text-center text-xl font-bold text-primary mb-6">
              Platinum Sponsors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sponsors.platinum.map((sponsor, index) => (
                <Card
                  key={index}
                  className="p-8 flex items-center justify-center h-32 hover:shadow-lg transition-all"
                >
                  <span className="text-muted-foreground font-medium">
                    {sponsor}
                  </span>
                </Card>
              ))}
            </div>
          </div>

          {/* Gold Sponsors */}
          <div>
            <h3 className="text-center text-xl font-bold text-primary mb-6">
              Gold Sponsors
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {sponsors.gold.map((sponsor, index) => (
                <Card
                  key={index}
                  className="p-6 flex items-center justify-center h-24 hover:shadow-lg transition-all"
                >
                  <span className="text-muted-foreground text-sm">
                    {sponsor}
                  </span>
                </Card>
              ))}
            </div>
          </div>

          {/* Silver Sponsors */}
          <div>
            <h3 className="text-center text-xl font-bold text-primary mb-6">
              Silver Sponsors
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sponsors.silver.map((sponsor, index) => (
                <Card
                  key={index}
                  className="p-4 flex items-center justify-center h-20 hover:shadow-lg transition-all"
                >
                  <span className="text-muted-foreground text-xs">
                    {sponsor}
                  </span>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg">Become a Sponsor</Button>
            <Button size="lg" variant="outline">
              <Download className="mr-2 w-4 h-4" />
              Download Sponsorship Deck (PDF)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
