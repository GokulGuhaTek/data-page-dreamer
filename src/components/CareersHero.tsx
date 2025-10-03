import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/careers-hero.jpg";

const CareersHero = () => {
  const scrollToApplication = () => {
    document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="GuhaTek Careers" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-background/80" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          Join Our Team at <span className="text-primary">GuhaTek</span>
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150">
          Be part of an innovative company that's shaping the future of technology
        </p>
        <Button 
          size="lg" 
          onClick={scrollToApplication}
          className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 bg-primary hover:bg-primary/90"
        >
          Apply Now <ArrowRight className="ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default CareersHero;
