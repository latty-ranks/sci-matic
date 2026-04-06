import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface SubjectCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  colorClass: string;
  to: string;
  delay?: number;
}

const SubjectCard = ({ title, description, icon: Icon, colorClass, to, delay = 0 }: SubjectCardProps) => {
  return (
    <Link
      to={to}
      className="group animate-fade-in-up rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "both" }}
    >
      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${colorClass}`}>
        <Icon className="h-6 w-6 text-primary-foreground" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </Link>
  );
};

export default SubjectCard;
