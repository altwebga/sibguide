import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (session) {
    redirect("/dashboard"); // Редирект до рендера страницы
  }

  // Если сессии нет, продолжаем рендерить компонент
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {children}
    </div>
  );
}
