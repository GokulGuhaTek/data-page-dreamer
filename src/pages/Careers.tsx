import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Settings, Blocks, Cloud, Megaphone, Users, ArrowRight } from "lucide-react";
import DepartmentSection from "@/components/DepartmentSection";
import NeuralBackground from "@/components/NeuralBackground";

const Careers = () => {
  const navigate = useNavigate();

  const departments = [
    {
      icon: Settings,
      title: "Engineering",
      description: "Where ideas become intelligent systems. Our Engineering division drives the backbone of digital reliability. Here, you'll work on automation-first infrastructure, next-gen observability tools, and high-availability architecture that powers global enterprises.",
      roles: [
        "SRE Operations & Incident Management",
        "DevOps & Automation",
        "Observability & Monitoring",
        "Reliability & Performance Engineering"
      ],
      visualCue: "Symbolizes precision, motion, and innovation."
    },
    {
      icon: Blocks,
      title: "Product",
      description: "Strategize, deliver, and lead the experience. Our Product team bridges innovation and execution — ensuring our SRE services create measurable business impact. You'll collaborate with engineers and clients to deliver transformation with purpose.",
      roles: [
        "SRE Strategy & Governance",
        "Client Success & Engagement",
        "Project Management & Delivery Excellence"
      ],
      visualCue: "Symbolizes structure and impact."
    },
    {
      icon: Cloud,
      title: "Infrastructure",
      description: "Powering resilience through the cloud. Our Infrastructure experts design, implement, and optimize scalable cloud ecosystems. We build secure and sustainable platforms that are the core of enterprise reliability.",
      roles: [
        "Cloud Architecture & Engineering"
      ],
      visualCue: "Symbolizes scalability and resilience."
    },
    {
      icon: Megaphone,
      title: "Sales & Marketing",
      description: "The voice of reliability innovation. Our Sales & Marketing team crafts the GuhaTek story — translating complex engineering into simple, powerful narratives that inspire our clients and the industry. You'll shape brand presence, partnerships, and market growth.",
      roles: [
        "Sales & Business Development"
      ],
      visualCue: "Symbolizes expansion and influence."
    },
    {
      icon: Users,
      title: "People/HR",
      description: "Building teams that shape technology's future. Our People & HR function defines our culture — fostering collaboration, growth, and belonging. We believe the best systems start with empowered people.",
      roles: [
        "HR & Talent Acquisition"
      ],
      visualCue: "Symbolizes trust and unity."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-primary/5 to-background">
          <NeuralBackground />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 md:py-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 leading-tight">
            Join the Future of Reliability Engineering at <span className="text-primary">GuhaTek</span>
          </h1>
          <div className="max-w-4xl mx-auto text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150 space-y-4 md:space-y-6">
            <p>
              At GuhaTek, we believe reliability isn't a luxury — it's the foundation of modern innovation. 
              We're transforming how organizations build, scale, and sustain digital systems through SRE, DevOps, and Cloud Intelligence.
            </p>
            <p>
              We're looking for thinkers, builders, and problem-solvers who want to shape the next chapter of operational excellence.
            </p>
            <p className="font-semibold">
              If your passion lies in designing systems that never fail, innovating through automation, and delivering value at scale — you belong here.
            </p>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4">
            Departments & Career <span className="text-primary">Opportunities</span>
          </h2>
          <p className="text-center text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
            Explore opportunities across our specialized teams
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {departments.map((dept, index) => (
              <DepartmentSection key={index} {...dept} />
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Our Global <span className="text-primary">Presence</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-3 md:mb-4">
            We're headquartered in India, with strategic operations in Singapore, the United States, and remote teams worldwide.
          </p>
          <p className="text-base md:text-lg text-muted-foreground">
            At GuhaTek, you can build a global career from wherever innovation takes you.
          </p>
        </div>
      </section>

      {/* Why GuhaTek Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8">
            Why <span className="text-primary">GuhaTek</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6 text-left">
            <div className="p-4 md:p-6 border border-primary/20 rounded-lg">
              <p className="text-sm md:text-base text-muted-foreground">Collaborate with world-class engineers and strategists across continents.</p>
            </div>
            <div className="p-4 md:p-6 border border-primary/20 rounded-lg">
              <p className="text-sm md:text-base text-muted-foreground">Work on mission-critical reliability and cloud transformation projects.</p>
            </div>
            <div className="p-4 md:p-6 border border-primary/20 rounded-lg">
              <p className="text-sm md:text-base text-muted-foreground">Thrive in a culture built on innovation, autonomy, and impact.</p>
            </div>
            <div className="p-4 md:p-6 border border-primary/20 rounded-lg">
              <p className="text-sm md:text-base text-muted-foreground">Access global career growth and mentorship opportunities.</p>
            </div>
          </div>
          <p className="text-lg md:text-xl font-semibold mt-6 md:mt-8">
            We're not hiring for roles — we're hiring for reliability visionaries.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            Apply <span className="text-primary">Now</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Your next big chapter starts here. Be part of a movement that's redefining reliability for the digital age.
          </p>
          <Button 
            size="lg"
            onClick={() => navigate("/careers/apply")}
            className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
          >
            Apply Now <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Careers;
