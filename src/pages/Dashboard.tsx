import { AppLayout } from "@/components/layout/AppLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { StatCard } from "@/components/shared/StatCard";
import { ComingSoonBlock } from "@/components/shared/ComingSoonBlock";
import { EmptyState } from "@/components/shared/EmptyState";
import { Building2, Briefcase, Globe, Users, Clock } from "lucide-react";

// Mock data - in production, this would come from Supabase
const dashboardStats = {
  totalCompanies: 0,
  byType: [],
  byCategory: [],
  recentlyAdded: [],
};

export default function Dashboard() {
  const hasData = dashboardStats.totalCompanies > 0;

  return (
    <AppLayout>
      <PageHeader
        title="Dashboard"
        description="System overview and key metrics"
      />

      {/* Stats Grid */}
      <div className="grid-analytics mb-8">
        <StatCard
          label="Total Companies"
          value={dashboardStats.totalCompanies}
          icon={Building2}
        />
        <StatCard
          label="Company Types"
          value={dashboardStats.byType.length}
          icon={Briefcase}
        />
        <StatCard
          label="Categories"
          value={dashboardStats.byCategory.length}
          icon={Globe}
        />
        <StatCard
          label="Recently Added"
          value={dashboardStats.recentlyAdded.length}
          icon={Clock}
        />
      </div>

      {/* Company Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="card-elevated p-6">
          <h2 className="section-header">Companies by Type</h2>
          {hasData ? (
            <div className="space-y-3">
              {/* Data would be rendered here */}
            </div>
          ) : (
            <EmptyState
              icon={Building2}
              title="No data available"
              description="Company type distribution will appear when companies are added to the database."
            />
          )}
        </div>

        <div className="card-elevated p-6">
          <h2 className="section-header">Companies by Category</h2>
          {hasData ? (
            <div className="space-y-3">
              {/* Data would be rendered here */}
            </div>
          ) : (
            <EmptyState
              icon={Briefcase}
              title="No data available"
              description="Category distribution will appear when companies are added to the database."
            />
          )}
        </div>
      </div>

      {/* Recently Added */}
      <div className="card-elevated p-6 mb-8">
        <h2 className="section-header">Recently Added Companies</h2>
        {hasData ? (
          <div className="divide-y divide-border">
            {/* Data would be rendered here */}
          </div>
        ) : (
          <EmptyState
            icon={Clock}
            title="No recent additions"
            description="Recently added companies will appear here."
          />
        )}
      </div>

      {/* Coming Soon Section */}
      <div className="space-y-4">
        <h2 className="section-header text-muted-foreground">Coming Soon</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ComingSoonBlock
            title="Employability Snapshot"
            description="Personal employability metrics and readiness indicators"
            requiredData={["student_profiles", "skill_assessments"]}
          />
          <ComingSoonBlock
            title="Skill Readiness"
            description="Gap analysis between current skills and market demand"
            requiredData={["skills", "role_requirements"]}
          />
          <ComingSoonBlock
            title="Focus Areas"
            description="Personalized recommendations for skill development"
            requiredData={["student_profiles", "career_paths"]}
          />
        </div>
      </div>
    </AppLayout>
  );
}
