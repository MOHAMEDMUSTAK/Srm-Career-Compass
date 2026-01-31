import { AppLayout } from "@/components/layout/AppLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { ComingSoonBlock } from "@/components/shared/ComingSoonBlock";
import { Lock, BookOpen, Target, Layers, GitBranch, Sparkles } from "lucide-react";

export default function Skills() {
  return (
    <AppLayout>
      <PageHeader
        title="Skills"
        description="Skill mapping and development tracking"
      />

      {/* Coming Soon Banner */}
      <div className="card-elevated p-8 mb-8 text-center">
        <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
          <Lock className="w-8 h-8 text-muted-foreground" />
        </div>
        <h2 className="text-xl font-semibold text-foreground mb-2">
          Skills Module — Coming Soon
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          This feature is disabled until skill and role tables are integrated into the database schema.
        </p>
      </div>

      {/* Roadmap */}
      <h2 className="section-header mb-4">Planned Capabilities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ComingSoonBlock
          title="Company → Skill Mapping"
          description="Map skills required by each company with depth indicators (beginner, intermediate, advanced)"
          requiredData={["skills", "company_skills", "skill_levels"]}
        />
        <ComingSoonBlock
          title="Role Expectations"
          description="Understand skill requirements for specific roles across companies"
          requiredData={["roles", "role_skills", "company_roles"]}
        />
        <ComingSoonBlock
          title="Skill Overlap Analysis"
          description="Identify transferable skills across different companies and roles"
          requiredData={["skills", "skill_categories", "skill_relationships"]}
        />
        <ComingSoonBlock
          title="Learning Pathways"
          description="Recommended learning paths based on skill gaps and career goals"
          requiredData={["learning_resources", "skill_prerequisites", "career_paths"]}
        />
        <ComingSoonBlock
          title="Market Demand Trends"
          description="Track skill demand changes over time across industries"
          requiredData={["skill_demand_history", "industry_trends"]}
        />
        <ComingSoonBlock
          title="Personal Skill Assessment"
          description="Self-assessment tools and progress tracking"
          requiredData={["student_profiles", "skill_assessments", "assessment_history"]}
        />
      </div>

      {/* Data Requirements */}
      <div className="card-elevated p-6 mt-8">
        <h3 className="font-medium text-foreground mb-4">Required Database Tables</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "skills",
            "skill_categories",
            "skill_levels",
            "company_skills",
            "roles",
            "role_skills",
            "skill_assessments",
            "learning_resources",
            "career_paths",
          ].map((table) => (
            <div
              key={table}
              className="flex items-center gap-2 px-3 py-2 bg-secondary rounded text-sm text-muted-foreground"
            >
              <Layers className="w-4 h-4" />
              <code>{table}</code>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
