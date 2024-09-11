import { auth } from "@/auth";
import { DashboardHeader } from "@/components/dashboard-header";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();
  if (!session) {
    redirect("/auth/login");
  }
  return (
    <>
      <DashboardHeader />
      {children}
    </>
  );
}
