"use client";
import { usePathname } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

interface LayoutWrapperProps {
  children: React.ReactNode;
  defaultOpen: boolean;
}

export function LayoutWrapper({ children, defaultOpen }: LayoutWrapperProps) {
  const pathname = usePathname();
  
  // Don't show sidebar on auth page
  const isAuthPage = pathname === "/auth";
  
  if (isAuthPage) {
    return <>{children}</>;
  }
  
  // Show sidebar for all other pages
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <main className="flex flex-col flex-1 min-h-screen bg-supply-background text-supply-text dark:bg-gray-900 dark:text-gray-200">
        <div className="p-4 md:p-6 lg:hidden">
          <SidebarTrigger />
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}