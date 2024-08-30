import DashboardPanel from "@/components/dashboard-panel";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DashboardPanel />
      {children}
    </>
  );
}
