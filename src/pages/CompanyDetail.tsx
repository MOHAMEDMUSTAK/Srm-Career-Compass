import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { DataField } from "@/components/shared/DataField";
import { EmptyState } from "@/components/shared/EmptyState";
import { 
  Building2, 
  ArrowLeft, 
  Globe, 
  Briefcase, 
  Code, 
  Users, 
  Heart, 
  TrendingUp, 
  DollarSign, 
  Award 
} from "lucide-react";
import { cn } from "@/lib/utils";

// Tab definitions matching schema tables
const tabs = [
  { id: "overview", label: "Overview", icon: Building2 },
  { id: "business", label: "Business & Strategy", icon: Briefcase },
  { id: "technology", label: "Technology", icon: Code },
  { id: "people", label: "People & Leadership", icon: Users },
  { id: "culture", label: "Culture", icon: Heart },
  { id: "talent", label: "Talent & Growth", icon: TrendingUp },
  { id: "compensation", label: "Compensation & Logistics", icon: DollarSign },
  { id: "financials", label: "Financials & Brand", icon: Award },
];

export default function CompanyDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");

  // In production, fetch from Supabase using company_id
  const company = null; // No data - schema compliant

  if (!company) {
    return (
      <AppLayout>
        <Link
          to="/companies"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Companies
        </Link>
        <div className="card-elevated">
          <EmptyState
            icon={Building2}
            title="Company not found"
            description="The requested company profile is not available in the database."
          />
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <Link
        to="/companies"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Companies
      </Link>

      {/* Company Header */}
      <div className="card-elevated p-6 mb-6">
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
            <Building2 className="w-8 h-8 text-muted-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-foreground">Company Name</h1>
            <p className="text-muted-foreground mt-1">Company Type • Category</p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="card-elevated mb-6 overflow-hidden">
        <div className="border-b border-border overflow-x-auto">
          <nav className="flex min-w-max">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors",
                    activeTab === tab.id ? "tab-active" : "tab-inactive"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          <TabContent tabId={activeTab} companyId={id} />
        </div>
      </div>
    </AppLayout>
  );
}

interface TabContentProps {
  tabId: string;
  companyId?: string;
}

function TabContent({ tabId, companyId }: TabContentProps) {
  // All tabs show empty state - schema compliant, no fabricated data
  const emptyStates: Record<string, { title: string; description: string }> = {
    overview: {
      title: "Overview data not available",
      description: "Company overview from 'companies' table will be displayed here.",
    },
    business: {
      title: "Business data not available",
      description: "Data from 'company_business' table will be displayed here.",
    },
    technology: {
      title: "Technology data not available",
      description: "Data from 'company_technologies' table will be displayed here.",
    },
    people: {
      title: "People data not available",
      description: "Data from 'company_people' table will be displayed here.",
    },
    culture: {
      title: "Culture data not available",
      description: "Data from 'company_culture' table will be displayed here.",
    },
    talent: {
      title: "Talent data not available",
      description: "Data from 'company_talent_growth' table will be displayed here.",
    },
    compensation: {
      title: "Compensation data not available",
      description: "Data from 'company_compensation' and 'company_logistics' tables will be displayed here.",
    },
    financials: {
      title: "Financial data not available",
      description: "Data from 'company_financials' and 'company_brand_reputation' tables will be displayed here.",
    },
  };

  const state = emptyStates[tabId] || emptyStates.overview;

  return (
    <EmptyState
      icon={Building2}
      title={state.title}
      description={state.description}
    />
  );
}
