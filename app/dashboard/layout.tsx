import DashboardPanel from "@/components/dashboard-panel";
import { ToastProvider } from "@radix-ui/react-toast";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DashboardPanel />
      <ToastProvider>{children}</ToastProvider>
    </>
  );
}
