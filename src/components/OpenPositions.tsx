import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, Star } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// You can easily update this array to add/remove positions or mark them as featured
const positions = [
  {
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Bangalore / Remote",
    type: "Full-time",
    experience: "5+ years",
    description: "Build scalable applications and lead technical initiatives in our growing engineering team.",
    featured: true, // Set to true to highlight this position
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Mumbai / Hybrid",
    type: "Full-time",
    experience: "3+ years",
    description: "Drive product strategy and work with cross-functional teams to deliver exceptional user experiences.",
    featured: false,
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    experience: "2+ years",
    description: "Create beautiful, intuitive interfaces and help shape our product's visual identity.",
    featured: true, // Set to true to highlight this position
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Bangalore",
    type: "Full-time",
    experience: "4+ years",
    description: "Build and maintain our cloud infrastructure, ensuring reliability and scalability.",
    featured: false,
  },
  {
    title: "Marketing Manager",
    department: "Marketing",
    location: "Delhi / Hybrid",
    type: "Full-time",
    experience: "3+ years",
    description: "Lead marketing campaigns and grow our brand presence across multiple channels.",
    featured: false,
  },
  {
    title: "Sales Executive",
    department: "Sales",
    location: "Coimbatore",
    type: "Full-time",
    experience: "2+ years",
    description: "Drive revenue growth by building relationships with clients and closing deals.",
    featured: false,
  },
];

const OpenPositions = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");

  // Get unique values for filters
  const departments = ["all", ...Array.from(new Set(positions.map(p => p.department)))];
  const locations = ["all", ...Array.from(new Set(positions.map(p => p.location)))];
  const types = ["all", ...Array.from(new Set(positions.map(p => p.type)))];

  // Filter positions based on selections
  const filteredPositions = positions.filter(position => {
    const departmentMatch = selectedDepartment === "all" || position.department === selectedDepartment;
    const locationMatch = selectedLocation === "all" || position.location === selectedLocation;
    const typeMatch = selectedType === "all" || position.type === selectedType;
    return departmentMatch && locationMatch && typeMatch;
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
            <SelectTrigger className="w-[180px] bg-background">
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
            <SelectTrigger className="w-[180px] bg-background">
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

          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger className="w-[180px] bg-background">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent className="bg-background z-50">
              {types.map(type => (
                <SelectItem key={type} value={type}>
                  {type === "all" ? "All Types" : type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Featured Positions */}
        {featuredPositions.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2">
              <Star className="w-6 h-6 text-primary fill-primary" />
              Featured Openings
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {featuredPositions.map((position, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 border-2 border-primary bg-gradient-to-br from-background to-[hsl(var(--featured-bg))]"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge className="mb-2 bg-primary text-primary-foreground">
                        {position.department}
                      </Badge>
                      <Badge variant="outline" className="border-primary">{position.type}</Badge>
                    </div>
                    <CardTitle className="text-xl flex items-center gap-2">
                      {position.title}
                      <Star className="w-5 h-5 text-primary fill-primary" />
                    </CardTitle>
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
