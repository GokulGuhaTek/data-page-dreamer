import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Careers = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 animate-gradient" />
        <div className="absolute top-0 -left-4 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            Join the Future of Reliability Engineering at <span className="text-primary">GuhaTek</span>
          </h1>
          <div className="text-lg md:text-xl text-foreground/90 leading-relaxed space-y-4 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150">
            <p>At GuhaTek, reliability is not just a practice — it's a philosophy. We design, build, and manage systems that scale effortlessly, perform flawlessly, and inspire trust. Our mission is to redefine how enterprises approach Site Reliability Engineering (SRE), DevOps automation, and cloud infrastructure.</p>
            <p>We are looking for innovative thinkers, problem solvers, and visionaries who want to contribute to high-impact engineering and technology solutions. At GuhaTek, you will work alongside a global team of experts dedicated to driving operational excellence and delivering measurable outcomes.</p>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Departments & Career <span className="text-primary">Opportunities</span>
          </h2>

          {/* Engineering */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Engineering</h3>
            <p className="text-lg text-foreground/90 leading-relaxed mb-4">
              Our Engineering teams are at the core of digital reliability. We focus on automation-first solutions, advanced observability, and performance optimization. Engineers at GuhaTek design resilient systems, manage complex infrastructures, and implement scalable frameworks that empower enterprises to operate without interruption.
            </p>
            <div className="ml-6">
              <p className="font-semibold text-foreground mb-2">Key Focus Areas:</p>
              <ul className="space-y-2 text-foreground/80">
                <li>• SRE Operations & Engineering Management</li>
                <li>• DevOps & Automation</li>
                <li>• Observability & Monitoring</li>
                <li>• Reliability & Performance Engineering</li>
              </ul>
            </div>
          </div>

          {/* Product */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Product</h3>
            <p className="text-lg text-foreground/90 leading-relaxed mb-4">
              The Product team translates strategy into execution. They ensure that our SRE services deliver tangible business value and align with client objectives. From governance to project delivery and client engagement, the team drives initiatives that elevate performance and operational excellence across all industries.
            </p>
            <div className="ml-6">
              <p className="font-semibold text-foreground mb-2">Key Focus Areas:</p>
              <ul className="space-y-2 text-foreground/80">
                <li>• SRE Strategy & Governance</li>
                <li>• Client Success & Engagement</li>
                <li>• Project Management & Delivery Excellence</li>
              </ul>
            </div>
          </div>

          {/* Infrastructure */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Infrastructure</h3>
            <p className="text-lg text-foreground/90 leading-relaxed mb-4">
              Infrastructure at GuhaTek is about building robust, scalable, and secure cloud ecosystems. Our specialists design systems that handle large-scale operations while maintaining reliability and efficiency. Every solution is crafted to maximize uptime, optimize resources, and future-proof enterprise infrastructure.
            </p>
            <div className="ml-6">
              <p className="font-semibold text-foreground mb-2">Key Focus Areas:</p>
              <ul className="space-y-2 text-foreground/80">
                <li>• Cloud Architecture & Engineering</li>
              </ul>
            </div>
          </div>

          {/* Sales & Marketing */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Sales & Marketing</h3>
            <p className="text-lg text-foreground/90 leading-relaxed mb-4">
              Our Sales and Marketing teams communicate the value of GuhaTek's SRE expertise. They craft clear, compelling narratives for our services, build client relationships, and support growth strategies that amplify our global presence. Their work ensures that technical excellence translates into measurable business impact.
            </p>
            <div className="ml-6">
              <p className="font-semibold text-foreground mb-2">Key Focus Areas:</p>
              <ul className="space-y-2 text-foreground/80">
                <li>• Sales & Marketing for SRE Services</li>
              </ul>
            </div>
          </div>

          {/* People & HR */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">People & HR</h3>
            <p className="text-lg text-foreground/90 leading-relaxed mb-4">
              People are at the heart of everything we do. The People and HR team drives culture, engagement, and talent acquisition to ensure we attract and retain top performers. They enable collaboration, professional growth, and a workplace environment where innovation thrives.
            </p>
            <div className="ml-6">
              <p className="font-semibold text-foreground mb-2">Key Focus Areas:</p>
              <ul className="space-y-2 text-foreground/80">
                <li>• HR & Talent Acquisition</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Our Global <span className="text-primary">Presence</span>
          </h2>
          <p className="text-lg text-foreground/90 leading-relaxed text-center">
            GuhaTek operates globally, with teams in India and remote locations. We provide flexible working models that empower employees to innovate, collaborate, and achieve their full potential no matter where they are based.
          </p>
        </div>
      </section>

      {/* Why GuhaTek Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Why <span className="text-primary">GuhaTek</span>
          </h2>
          <div className="space-y-3 text-lg text-foreground/90 leading-relaxed mb-6">
            <p>• Collaborate with a global team of SRE, DevOps, and cloud experts.</p>
            <p>• Work on high-impact, mission-critical projects across industries.</p>
            <p>• Thrive in a culture of innovation, inclusivity, and operational excellence.</p>
            <p>• Grow your career with opportunities for mentorship, learning, and global exposure.</p>
          </div>
          <p className="text-xl font-semibold text-center mt-8">
            At GuhaTek, we don't just hire for roles — we build teams of reliability visionaries, ready to shape the future of digital infrastructure.
          </p>
        </div>
      </section>

      {/* Apply Now Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Apply <span className="text-primary">Now</span>
          </h2>
          <p className="text-lg text-foreground/90 leading-relaxed mb-8 max-w-2xl mx-auto">
            Take the next step in your career and join GuhaTek to build the future of digital reliability.
          </p>
          <Button 
            size="lg"
            onClick={() => navigate("/careers/apply")}
            className="text-lg px-8 py-6"
          >
            Apply Now <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Careers;
