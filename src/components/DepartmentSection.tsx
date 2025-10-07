import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface DepartmentSectionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  roles: string[];
  visualCue: string;
}

const DepartmentSection = ({ icon: Icon, title, description, roles, visualCue }: DepartmentSectionProps) => {
  const navigate = useNavigate();

  return (
    <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-[var(--shadow-elegant)]">
      <CardHeader>
        <div className="flex items-start justify-between mb-4">
          <Icon className="w-12 h-12 text-primary" />
        </div>
        <CardTitle className="text-2xl mb-3">{title}</CardTitle>
        <p className="text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold mb-2">Key Roles:</h4>
          <ul className="space-y-1">
            {roles.map((role, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start">
                <span className="text-primary mr-2">•</span>
                {role}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-xs text-muted-foreground italic">{visualCue}</p>
        <Button 
          onClick={() => navigate("/careers/apply")}
          className="w-full"
        >
          Apply Now <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default DepartmentSection;
