import { auth } from "@/auth";
import { Header } from "@/components/header";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) {
    redirect("/login");
    return null;
  }
  return (
    <>
      <Header />
      {children}
    </>
  );
}
