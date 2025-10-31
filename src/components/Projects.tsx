import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Trophy } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      rank: 1,
      name: "EduConnect AI",
      team: "Team Innovation",
      description: "AI-powered education platform connecting students with personalized learning resources",
      tags: ["AI/ML", "Education"],
    },
    {
      rank: 2,
      name: "FarmSense IoT",
      team: "AgriTech Heroes",
      description: "IoT solution for smart farming with real-time crop monitoring and analytics",
      tags: ["Hardware", "IoT"],
    },
    {
      rank: 3,
      name: "HealthTrack",
      team: "MediCode",
      description: "Mobile app for tracking health metrics and connecting with healthcare providers",
      tags: ["Social Impact", "Healthcare"],
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Top Projects</h2>
          <p className="text-lg text-muted-foreground">
            Showcase of innovative hacks from our community
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 mb-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`border-2 hover:shadow-xl transition-all ${
                project.rank === 1
                  ? "border-primary/50 bg-gradient-to-r from-primary/5 to-transparent"
                  : "border-border hover:border-primary/30"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {/* Rank Badge */}
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                      project.rank === 1
                        ? "bg-yellow-400 text-yellow-900"
                        : project.rank === 2
                        ? "bg-gray-300 text-gray-700"
                        : "bg-orange-400 text-orange-900"
                    }`}
                  >
                    {project.rank === 1 && <Trophy className="w-6 h-6" />}
                    {project.rank !== 1 && project.rank}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">
                          {project.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          by {project.team}
                        </p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-3">
                      {project.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                      <div className="flex gap-2 ml-auto">
                        <Button size="sm" variant="outline">
                          <Github className="w-4 h-4 mr-1" />
                          GitHub
                        </Button>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            View All Projects on Devpost
            <ExternalLink className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
