import { auth } from "@/auth";
import { redirect } from "next/navigation";
export default async function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();
  if (!session) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        {children}
      </div>
    );
  } else {
    redirect("/dashboard");
  }
}
