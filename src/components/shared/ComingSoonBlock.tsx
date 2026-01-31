import { Clock, Lock } from "lucide-react";

interface ComingSoonBlockProps {
  title: string;
  description: string;
  requiredData?: string[];
}

export function ComingSoonBlock({ title, description, requiredData }: ComingSoonBlockProps) {
  return (
    <div className="card-elevated p-6 opacity-60">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
          <Lock className="w-5 h-5 text-muted-foreground" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-sm font-medium text-foreground">{title}</h3>
            <span className="coming-soon-badge">
              <Clock className="w-3 h-3 mr-1" />
              Coming Soon
            </span>
          </div>
          <p className="text-sm text-muted-foreground mb-3">{description}</p>
          {requiredData && requiredData.length > 0 && (
            <div className="text-xs text-muted-foreground">
              <span className="font-medium">Requires:</span>{" "}
              {requiredData.join(", ")}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
