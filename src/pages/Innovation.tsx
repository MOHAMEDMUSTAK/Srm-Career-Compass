import { AppLayout } from "@/components/layout/AppLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { Lock, Lightbulb, Beaker, Award, Globe, BookOpen } from "lucide-react";

const innovationTiers = [
  {
    tier: 1,
    name: "Foundation",
    description: "Core infrastructure and basic research capabilities",
    features: ["Research partnerships", "Basic R&D budget allocation", "Internal innovation programs"],
  },
  {
    tier: 2,
    name: "Development",
    description: "Structured innovation processes and patent filing",
    features: ["Patent portfolio building", "Innovation labs", "Cross-functional teams"],
  },
  {
    tier: 3,
    name: "Industry Engagement",
    description: "Active industry collaboration and knowledge sharing",
    features: ["Industry consortiums", "Joint ventures", "Technology licensing"],
  },
  {
    tier: 4,
    name: "Market Leadership",
    description: "Setting industry standards and pioneering new markets",
    features: ["Standards bodies participation", "Market-creating innovations", "Ecosystem building"],
  },
  {
    tier: 5,
    name: "Global Impact",
    description: "Transformative technologies with worldwide influence",
    features: ["Breakthrough research", "Global problem solving", "Next-generation platforms"],
  },
];

export default function Innovation() {
  return (
    <AppLayout>
      <PageHeader
        title="Innovation"
        description="Research, IP, and innovation framework"
      />

      {/* Coming Soon Banner */}
      <div className="card-elevated p-8 mb-8 text-center">
        <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
          <Lock className="w-8 h-8 text-muted-foreground" />
        </div>
        <h2 className="text-xl font-semibold text-foreground mb-2">
          Innovation Module — Coming Soon
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          This feature is disabled until innovation and research tables are integrated into the database schema.
        </p>
      </div>

      {/* Five-Tier Framework */}
      <h2 className="section-header mb-4">Five-Tier Innovation Framework</h2>
      <div className="space-y-4 mb-8">
        {innovationTiers.map((tier) => (
          <div key={tier.tier} className="card-elevated p-6 opacity-60">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="font-semibold text-muted-foreground">{tier.tier}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-medium text-foreground">{tier.name}</h3>
                  {tier.tier >= 3 && (
                    <span className="inline-flex items-center px-2 py-0.5 text-xs bg-primary/10 text-primary rounded">
                      Industry Engagement
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-3">{tier.description}</p>
                <div className="flex flex-wrap gap-2">
                  {tier.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center px-2 py-1 text-xs bg-secondary rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Roadmap Items */}
      <h2 className="section-header mb-4">IP & Research Roadmap</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <RoadmapCard
          icon={Award}
          title="Patent Tracking"
          description="Monitor patent filings and IP portfolios across companies"
        />
        <RoadmapCard
          icon={Beaker}
          title="Research Output"
          description="Track publications, citations, and research collaborations"
        />
        <RoadmapCard
          icon={Globe}
          title="Global Partnerships"
          description="Map international research and innovation partnerships"
        />
        <RoadmapCard
          icon={Lightbulb}
          title="Innovation Index"
          description="Company innovation scoring based on multiple factors"
        />
        <RoadmapCard
          icon={BookOpen}
          title="Knowledge Transfer"
          description="Track industry-academia collaboration outcomes"
        />
      </div>

      {/* Data Requirements */}
      <div className="card-elevated p-6 mt-8">
        <h3 className="font-medium text-foreground mb-4">Required Database Tables</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "company_innovations",
            "patents",
            "research_outputs",
            "innovation_partnerships",
            "ip_portfolio",
            "research_collaborations",
          ].map((table) => (
            <div
              key={table}
              className="flex items-center gap-2 px-3 py-2 bg-secondary rounded text-sm text-muted-foreground"
            >
              <Beaker className="w-4 h-4" />
              <code>{table}</code>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}

function RoadmapCard({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) {
  return (
    <div className="card-elevated p-4 opacity-60">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 bg-secondary rounded flex items-center justify-center flex-shrink-0">
          <Icon className="w-4 h-4 text-muted-foreground" />
        </div>
        <div>
          <h4 className="text-sm font-medium text-foreground mb-1">{title}</h4>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
}
