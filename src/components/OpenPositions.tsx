import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, Star } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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

  // Separate featured and regular positions
  const featuredPositions = filteredPositions.filter(p => p.featured);
  const regularPositions = filteredPositions.filter(p => !p.featured);

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

        {/* Featured Openings - Organized by Department */}
        {featuredPositions.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8 flex items-center justify-center gap-2">
              <Star className="w-6 h-6 text-primary fill-primary" />
              Featured Openings
            </h3>
            
            <div className="max-w-5xl mx-auto space-y-8">
              {/* Engineering */}
              <Card className="border-2 border-primary/20">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="text-2xl text-center">Engineering</CardTitle>
                  <CardDescription className="text-center">
                    Teams directly responsible for building, operating, and maintaining systems.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-primary fill-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">SRE Operations & Incident Management</span>
                        <span className="text-muted-foreground"> – Engineering team responsible for system reliability and incident handling.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-primary fill-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">DevOps & Automation</span>
                        <span className="text-muted-foreground"> – Engineering team focused on automation, CI/CD pipelines, and infrastructure as code.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-primary fill-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Observability & Monitoring</span>
                        <span className="text-muted-foreground"> – Engineering team implementing monitoring, logging, and alerting frameworks.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-primary fill-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Reliability & Performance Engineering</span>
                        <span className="text-muted-foreground"> – Engineering team handling load testing, chaos engineering, and system resilience.</span>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Product */}
              <Card className="border-2 border-primary/20">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="text-2xl text-center">Product</CardTitle>
                  <CardDescription className="text-center">
                    Teams focus on strategy, frameworks, and value delivery rather than hands-on coding.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-primary fill-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">SRE Strategy & Governance</span>
                        <span className="text-muted-foreground"> – Product/Strategy team defining roadmaps, SLAs, error budgets, and operational policies.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-primary fill-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Project Management & Delivery Excellence</span>
                        <span className="text-muted-foreground"> – Product/Delivery team ensuring projects are executed efficiently and meet objectives.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-primary fill-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Client Success & Engagement</span>
                        <span className="text-muted-foreground"> – Product/Customer Success team managing adoption, satisfaction, and client value delivery.</span>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Infrastructure */}
              <Card className="border-2 border-primary/20">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="text-2xl text-center">Infrastructure</CardTitle>
                  <CardDescription className="text-center">
                    Teams that focus on cloud, networking, and foundational tech environments.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-primary fill-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Cloud Architecture & Engineering</span>
                        <span className="text-muted-foreground"> – Infrastructure team designing scalable, secure, and cost-effective cloud solutions.</span>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Marketing & Sales */}
              <Card className="border-2 border-primary/20">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="text-2xl text-center">Marketing & Sales</CardTitle>
                  <CardDescription className="text-center">
                    Teams that bring in business, manage relationships, and drive growth.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-primary fill-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">Sales & Business Development</span>
                        <span className="text-muted-foreground"> – Marketing/Sales team driving revenue, acquiring clients, and managing proposals.</span>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* People & Culture (HR/Operations) */}
              <Card className="border-2 border-primary/20">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="text-2xl text-center">People & Culture (HR/Operations)</CardTitle>
                  <CardDescription className="text-center">
                    Critical support functions for talent and organizational health.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-primary fill-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">HR & Talent Acquisition</span>
                        <span className="text-muted-foreground"> – People/HR team handling recruitment, employee engagement, and culture development.</span>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Regular Positions */}
        {regularPositions.length > 0 && (
          <div>
            {featuredPositions.length > 0 && (
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
