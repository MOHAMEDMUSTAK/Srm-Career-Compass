import { AppLayout } from "@/components/layout/AppLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { EmptyState } from "@/components/shared/EmptyState";
import { ComingSoonBlock } from "@/components/shared/ComingSoonBlock";
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Building2, 
  Code, 
  Heart, 
  MapPin 
} from "lucide-react";

export default function Analytics() {
  // Mock aggregation - no fabricated data
  const hasCompanyData = false;

  return (
    <AppLayout>
      <PageHeader
        title="Analytics"
        description="Aggregated insights from company data"
      />

      {/* Enabled Analytics */}
      <h2 className="section-header mb-4">Company Analytics</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Company Distribution */}
        <div className="card-elevated p-6">
          <div className="flex items-center gap-2 mb-4">
            <PieChart className="w-5 h-5 text-muted-foreground" />
            <h3 className="font-medium text-foreground">Company Distribution</h3>
          </div>
          {hasCompanyData ? (
            <div className="h-64">
              {/* Chart would render here */}
            </div>
          ) : (
            <EmptyState
              icon={Building2}
              title="No distribution data"
              description="Aggregated from companies table (company_type, category)"
            />
          )}
        </div>

        {/* Tech Stack Frequency */}
        <div className="card-elevated p-6">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-5 h-5 text-muted-foreground" />
            <h3 className="font-medium text-foreground">Tech Stack Frequency</h3>
          </div>
          {hasCompanyData ? (
            <div className="h-64">
              {/* Chart would render here */}
            </div>
          ) : (
            <EmptyState
              icon={Code}
              title="No technology data"
              description="Aggregated from company_technologies table"
            />
          )}
        </div>

        {/* Culture Indicators */}
        <div className="card-elevated p-6">
          <div className="flex items-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-muted-foreground" />
            <h3 className="font-medium text-foreground">Culture Indicators</h3>
          </div>
          {hasCompanyData ? (
            <div className="h-64">
              {/* Chart would render here */}
            </div>
          ) : (
            <EmptyState
              icon={Heart}
              title="No culture data"
              description="Aggregated from company_culture table"
            />
          )}
        </div>

        {/* Work Location Distribution */}
        <div className="card-elevated p-6">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-muted-foreground" />
            <h3 className="font-medium text-foreground">Remote vs Onsite</h3>
          </div>
          {hasCompanyData ? (
            <div className="h-64">
              {/* Chart would render here */}
            </div>
          ) : (
            <EmptyState
              icon={MapPin}
              title="No location data"
              description="Aggregated from company_logistics table"
            />
          )}
        </div>
      </div>

      {/* Coming Soon Analytics */}
      <h2 className="section-header mb-4 text-muted-foreground">Coming Soon</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ComingSoonBlock
          title="Skill Trend Shifts"
          description="Track how skill demands evolve over time"
          requiredData={["skills", "skill_demand_history"]}
        />
        <ComingSoonBlock
          title="Outcome Correlations"
          description="Analyze relationships between skills and placement outcomes"
          requiredData={["placements", "student_skills"]}
        />
        <ComingSoonBlock
          title="Innovation Impact"
          description="Measure research and IP metrics across companies"
          requiredData={["company_innovations", "research_outputs"]}
        />
      </div>
    </AppLayout>
  );
}
