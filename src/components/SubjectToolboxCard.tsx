import { Microscope, FlaskConical, Calculator, Ruler } from "lucide-react";
import { subjectToolbox } from "@/lib/constants";

const icons: Record<string, any> = {
  biology: Microscope,
  chemistry: FlaskConical,
  math: Calculator,
  physics: Ruler,
};

const SubjectToolboxCard = ({ subject }: { subject: string }) => {
  const tools = subjectToolbox[subject];
  const Icon = icons[subject] || Ruler;

  return (
    <div className="rounded-xl border border-border bg-gradient-to-br from-muted/50 to-muted p-4">
      <h4 className="mb-3 flex items-center gap-2 text-sm font-bold text-foreground">
        <Icon className="h-4 w-4 text-primary" />
        {subject.charAt(0).toUpperCase() + subject.slice(1)} Toolbox — Essential Equipment
      </h4>
      <div className="grid gap-2 sm:grid-cols-2">
        {tools.map((tool, i) => (
          <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            {tool}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectToolboxCard;
