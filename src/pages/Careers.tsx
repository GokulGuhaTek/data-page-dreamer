import CareersHero from "@/components/CareersHero";
import OpenPositions from "@/components/OpenPositions";
import JobApplicationForm from "@/components/JobApplicationForm";

const Careers = () => {
  return (
    <div className="min-h-screen">
      <CareersHero />
      <OpenPositions />
      <JobApplicationForm />
    </div>
  );
};

export default Careers;
