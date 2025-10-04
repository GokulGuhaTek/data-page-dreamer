import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, Star } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { featuredOpenings } from "@/data/featuredOpenings";

// You can easily update this array to add/remove positions or mark them as featured
const positions = [
  // Engineering positions
  {
    title: "SRE Operations & Incident Management",
    department: "Engineering",
    location: "Coimbatore",
    description: "Engineering team responsible for system reliability and incident handling.",
    featured: true,
  },
  {
    title: "DevOps & Automation",
    department: "Engineering",
    location: "Chennai",
    description: "Engineering team focused on automation, CI/CD pipelines, and infrastructure as code.",
    featured: true,
  },
  {
    title: "Observability & Monitoring",
    department: "Engineering",
    location: "Bangalore",
    description: "Engineering team implementing monitoring, logging, and alerting frameworks.",
    featured: true,
  },
  {
    title: "Reliability & Performance Engineering",
    department: "Engineering",
    location: "Coimbatore/Hybrid",
    description: "Engineering team handling load testing, chaos engineering, and system resilience.",
    featured: true,
  },
  // Product positions
  {
    title: "SRE Strategy & Governance",
    department: "Product",
    location: "Chennai/Hybrid",
    description: "Product/Strategy team defining roadmaps, SLAs, error budgets, and operational policies.",
    featured: true,
  },
  {
    title: "Project Management & Delivery Excellence",
    department: "Product",
    location: "Bangalore/Hybrid",
    description: "Product/Delivery team ensuring projects are executed efficiently and meet objectives.",
    featured: true,
  },
  {
    title: "Client Success & Engagement",
    department: "Product",
    location: "Coimbatore",
    description: "Product/Customer Success team managing adoption, satisfaction, and client value delivery.",
    featured: true,
  },
  // Infrastructure positions
  {
    title: "Cloud Architecture & Engineering",
    department: "Infrastructure",
    location: "Chennai",
    description: "Infrastructure team designing scalable, secure, and cost-effective cloud solutions.",
    featured: true,
  },
  // Sales & Marketing positions
  {
    title: "Sales & Business Development",
    department: "Sales & Marketing",
    location: "Bangalore",
    description: "Marketing/Sales team driving revenue, acquiring clients, and managing proposals.",
    featured: true,
  },
  // People/HR positions
  {
    title: "HR & Talent Acquisition",
    department: "People/HR",
    location: "Coimbatore/Hybrid",
    description: "People/HR team handling recruitment, employee engagement, and culture development.",
    featured: true,
  },
];

const OpenPositions = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");

  // Get unique values for filters
  const departments = ["all", ...Array.from(new Set(positions.map(p => p.department)))];
  const locations = ["all", "Coimbatore", "Chennai", "Bangalore", "Coimbatore/Hybrid", "Chennai/Hybrid", "Bangalore/Hybrid"];

  // Filter positions based on selections
  const filteredPositions = positions.filter(position => {
    const departmentMatch = selectedDepartment === "all" || position.department === selectedDepartment;
    const locationMatch = selectedLocation === "all" || position.location === selectedLocation;
    return departmentMatch && locationMatch;
  });

  const regularPositions = filteredPositions.filter(p => !p.featured);
  
  // Only show featured openings when "All Departments" is selected
  const showFeaturedOpenings = selectedDepartment === "all";
  const activeFeaturedOpenings = featuredOpenings.filter(opening => opening.isActive);
  
  // Group featured openings by category
  const groupedFeaturedOpenings = activeFeaturedOpenings.reduce((acc, opening) => {
    if (!acc[opening.category]) {
      acc[opening.category] = [];
    }
    acc[opening.category].push(opening);
    return acc;
  }, {} as Record<string, typeof activeFeaturedOpenings>);

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Open <span className="text-primary">Positions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore opportunities to grow your career with GuhaTek
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
            <SelectTrigger className="w-[200px] bg-background">
              <SelectValue placeholder="Department" />
            </SelectTrigger>
            <SelectContent className="bg-background z-50">
              {departments.map(dept => (
                <SelectItem key={dept} value={dept}>
                  {dept === "all" ? "All Departments" : dept}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger className="w-[200px] bg-background">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent className="bg-background z-50">
              {locations.map(loc => (
                <SelectItem key={loc} value={loc}>
                  {loc === "all" ? "All Locations" : loc}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Featured Openings - Only shown when All Departments selected */}
        {showFeaturedOpenings && activeFeaturedOpenings.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Openings</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeFeaturedOpenings.map((opening) => (
                <Card key={opening.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Badge className="w-fit mb-2">{opening.category}</Badge>
                    <CardTitle className="text-xl">{opening.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{opening.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Positions */}
        {regularPositions.length > 0 && (
          <div>
            {showFeaturedOpenings && activeFeaturedOpenings.length > 0 && (
              <h3 className="text-2xl font-bold mb-6 text-center">All Positions</h3>
            )}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPositions.map((position, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 border-primary/10"
                >
                  <CardHeader>
                    <Badge variant="secondary" className="mb-2">
                      {position.department}
                    </Badge>
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
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {filteredPositions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No positions found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default OpenPositions;
