import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/login");
    return null; // Чтобы остановить рендеринг
  }

  if (session?.user.role !== "ADMIN") {
    redirect("/dashboard");
    return null; // Чтобы остановить рендеринг
  }

  return <div>{children}</div>;
}