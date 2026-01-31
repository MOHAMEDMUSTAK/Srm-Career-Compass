import { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: string;
    positive: boolean;
  };
}

export function StatCard({ label, value, icon: Icon, trend }: StatCardProps) {
  return (
    <div className="stat-card">
      <div className="flex items-start justify-between">
        <div>
          <p className="data-label mb-1">{label}</p>
          <p className="text-2xl font-semibold text-foreground">{value}</p>
          {trend && (
            <p className={`text-xs mt-1 ${trend.positive ? 'text-success' : 'text-destructive'}`}>
              {trend.value}
            </p>
          )}
        </div>
        <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
          <Icon className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>
    </div>
  );
}
