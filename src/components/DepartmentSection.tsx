import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface DepartmentSectionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  roles: string[];
  visualCue: string;
}

const DepartmentSection = ({ icon: Icon, title, description, roles, visualCue }: DepartmentSectionProps) => {
  return (
    <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-[var(--shadow-elegant)] h-full">
      <CardHeader className="p-4 sm:p-6">
        <div className="flex items-start justify-between mb-3 md:mb-4">
          <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary flex-shrink-0" />
        </div>
        <CardTitle className="text-lg sm:text-xl md:text-2xl mb-2 md:mb-3">{title}</CardTitle>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{description}</p>
      </CardHeader>
      <CardContent className="space-y-3 md:space-y-4 p-4 sm:p-6 pt-0">
        <div>
          <h4 className="font-semibold mb-2 text-sm sm:text-base">Key Roles:</h4>
          <ul className="space-y-1">
            {roles.map((role, index) => (
              <li key={index} className="text-xs sm:text-sm text-muted-foreground flex items-start">
                <span className="text-primary mr-2 flex-shrink-0">•</span>
                <span>{role}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-xs text-muted-foreground italic">{visualCue}</p>
      </CardContent>
    </Card>
  );
};

export default DepartmentSection;
