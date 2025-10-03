import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, Clock } from "lucide-react";

const positions = [
  {
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Bangalore / Remote",
    type: "Full-time",
    experience: "5+ years",
    description: "Build scalable applications and lead technical initiatives in our growing engineering team.",
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Mumbai / Hybrid",
    type: "Full-time",
    experience: "3+ years",
    description: "Drive product strategy and work with cross-functional teams to deliver exceptional user experiences.",
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    experience: "2+ years",
    description: "Create beautiful, intuitive interfaces and help shape our product's visual identity.",
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Bangalore",
    type: "Full-time",
    experience: "4+ years",
    description: "Build and maintain our cloud infrastructure, ensuring reliability and scalability.",
  },
  {
    title: "Marketing Manager",
    department: "Marketing",
    location: "Delhi / Hybrid",
    type: "Full-time",
    experience: "3+ years",
    description: "Lead marketing campaigns and grow our brand presence across multiple channels.",
  },
  {
    title: "Sales Executive",
    department: "Sales",
    location: "Coimbatore",
    type: "Full-time",
    experience: "2+ years",
    description: "Drive revenue growth by building relationships with clients and closing deals.",
  },
];

const OpenPositions = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Open Positions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore opportunities to grow your career with GuhaTek
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {positions.map((position, index) => (
            <Card 
              key={index} 
              className="hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 border-primary/10"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="mb-2">
                    {position.department}
                  </Badge>
                  <Badge variant="outline">{position.type}</Badge>
                </div>
                <CardTitle className="text-xl">{position.title}</CardTitle>
                <CardDescription className="text-sm mt-2">
                  {position.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {position.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Briefcase className="w-4 h-4" />
                  {position.experience}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenPositions;
