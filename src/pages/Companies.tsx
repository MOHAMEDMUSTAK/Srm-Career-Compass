import { useState } from "react";
import { Link } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { PageHeader } from "@/components/shared/PageHeader";
import { EmptyState } from "@/components/shared/EmptyState";
import { Building2, MapPin, Users, Search, Filter, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

// Schema-strict: Only fields from 'companies' table
interface Company {
  id: string;
  name: string;
  logo_url: string | null;
  company_type: string | null;
  category: string | null;
  employee_size: string | null;
  headquarters_address: string | null;
}

// Mock data - empty state for schema compliance
const companies: Company[] = [];

// Filter options derived from schema columns
const filterOptions = {
  company_type: ["Product", "Service", "Consulting", "Startup"],
  category: ["Technology", "Finance", "Healthcare", "Manufacturing"],
  employee_size: ["1-50", "51-200", "201-1000", "1000+"],
};

export default function Companies() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilter = (category: string, value: string) => {
    setActiveFilters((prev) => {
      const current = prev[category] || [];
      if (current.includes(value)) {
        return { ...prev, [category]: current.filter((v) => v !== value) };
      }
      return { ...prev, [category]: [...current, value] };
    });
  };

  const clearFilters = () => {
    setActiveFilters({});
    setSearchQuery("");
  };

  const hasActiveFilters = Object.values(activeFilters).some((arr) => arr.length > 0) || searchQuery;

  return (
    <AppLayout>
      <PageHeader
        title="Companies"
        description="Browse and explore company profiles"
      />

      {/* Search and Filters */}
      <div className="card-elevated p-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search companies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 border rounded-md transition-colors",
              showFilters ? "bg-secondary border-primary/20" : "border-border hover:bg-secondary"
            )}
          >
            <Filter className="w-4 h-4" />
            <span className="text-sm">Filters</span>
          </button>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
              Clear
            </button>
          )}
        </div>

        {/* Filter Chips */}
        {showFilters && (
          <div className="mt-4 pt-4 border-t border-border space-y-4 animate-fade-in">
            {Object.entries(filterOptions).map(([category, values]) => (
              <div key={category}>
                <p className="data-label mb-2">
                  {category.replace("_", " ")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {values.map((value) => {
                    const isActive = activeFilters[category]?.includes(value);
                    return (
                      <button
                        key={value}
                        onClick={() => toggleFilter(category, value)}
                        className={isActive ? "filter-chip-active" : "filter-chip"}
                      >
                        {value}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Companies Grid */}
      {companies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      ) : (
        <div className="card-elevated">
          <EmptyState
            icon={Building2}
            title="No companies found"
            description="Companies will appear here when data is available in the database."
          />
        </div>
      )}
    </AppLayout>
  );
}

function CompanyCard({ company }: { company: Company }) {
  return (
    <Link
      to={`/companies/${company.id}`}
      className="card-elevated p-4 hover:shadow-md transition-shadow group"
    >
      <div className="flex items-start gap-4">
        {company.logo_url ? (
          <img
            src={company.logo_url}
            alt={`${company.name} logo`}
            className="w-12 h-12 rounded-lg object-cover bg-secondary"
          />
        ) : (
          <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
            <Building2 className="w-6 h-6 text-muted-foreground" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-foreground group-hover:text-primary transition-colors truncate">
            {company.name}
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {company.company_type && (
              <span className="inline-flex items-center px-2 py-0.5 text-xs bg-secondary rounded">
                {company.company_type}
              </span>
            )}
            {company.category && (
              <span className="inline-flex items-center px-2 py-0.5 text-xs bg-secondary rounded">
                {company.category}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-border space-y-2">
        {company.employee_size && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{company.employee_size} employees</span>
          </div>
        )}
        {company.headquarters_address && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span className="truncate">{company.headquarters_address}</span>
          </div>
        )}
      </div>
    </Link>
  );
}
