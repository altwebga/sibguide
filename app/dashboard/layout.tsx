import { auth } from "@/auth";
import { DashboardNav } from "@/components/dashboard-nav";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  return (
    <>
      <DashboardNav />
      {children}
    </>
  );
}
