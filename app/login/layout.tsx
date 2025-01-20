import { auth } from "@/auth";
import { redirect } from "next/navigation";
export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (session) {
    redirect("/dashboard");
    return null;
  }
  return <>{children}</>;
}
