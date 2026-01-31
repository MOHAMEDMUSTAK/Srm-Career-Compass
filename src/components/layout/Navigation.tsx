import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Building2, 
  Lightbulb, 
  BarChart3, 
  Sparkles,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/", label: "Dashboard", icon: LayoutDashboard, enabled: true },
  { path: "/companies", label: "Companies", icon: Building2, enabled: true },
  { path: "/skills", label: "Skills", icon: Sparkles, enabled: false, comingSoon: true },
  { path: "/analytics", label: "Analytics", icon: BarChart3, enabled: true },
  { path: "/innovation", label: "Innovation", icon: Lightbulb, enabled: false, comingSoon: true },
];

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="page-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">DCC</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-semibold text-foreground">SRM DCC</span>
              <span className="text-xs text-muted-foreground ml-2">Digital Career Compass</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;

              if (!item.enabled) {
                return (
                  <div
                    key={item.path}
                    className="nav-item-disabled flex items-center gap-2"
                    title={`Coming Soon — requires additional datasets`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                    <span className="coming-soon-badge">Soon</span>
                  </div>
                );
              }

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-2",
                    isActive ? "nav-item-active" : "nav-item"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-secondary rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;

                if (!item.enabled) {
                  return (
                    <div
                      key={item.path}
                      className="nav-item-disabled flex items-center gap-2 py-3"
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                      <span className="coming-soon-badge">Soon</span>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-2 py-3",
                      isActive ? "nav-item-active" : "nav-item"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
