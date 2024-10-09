import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  // Проверка на наличие пользователя и его роли
  if (!session || !session.user || session.user.role !== "admin") {
    redirect("/");
    return null; // Возвращаем null, чтобы предотвратить рендеринг компонента
  }

  return <>{children}</>;
}
