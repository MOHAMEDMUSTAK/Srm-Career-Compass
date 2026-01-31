import { ReactNode } from "react";
import { Navigation } from "./Navigation";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="page-container animate-fade-in">
        {children}
      </main>
      <footer className="border-t border-border mt-auto">
        <div className="page-container py-6">
          <p className="text-xs text-muted-foreground text-center">
            This platform is built by students under structured training programs at{" "}
            <a 
              href="https://talenciaglobal.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Talenciaglobal
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
