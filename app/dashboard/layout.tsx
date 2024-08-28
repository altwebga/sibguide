import { DashboardHeader } from "@/components/dashboard-header";
import { TooltipProvider } from "@/components/ui/tooltip";
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TooltipProvider>
        <DashboardHeader />
        {children}
      </TooltipProvider>
    </>
  );
}
