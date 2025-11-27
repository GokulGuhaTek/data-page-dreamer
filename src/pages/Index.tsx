import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Briefcase, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="mb-4 text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Welcome to GuhaTek
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Building innovative technology solutions for tomorrow
        </p>
        <div className="flex justify-center">
          <Link to="/careers">
            <Button variant="hero" size="lg">
              <Briefcase className="mr-2" />
              View Career Opportunities
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
