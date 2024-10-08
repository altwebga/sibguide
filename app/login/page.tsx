import { redirect } from "next/navigation";
import { signIn, auth } from "@/auth";
import { Button } from "@/components/ui/button";
export default async function LoginPage() {
  const session = await auth();
  if (session) {
    redirect("/dashboard");
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Войти на сайт</h1>
      <form
        action={async () => {
          "use server";
          await signIn("yandex");
        }}
      >
        <Button type="submit" className="w-48 bg-yellow-600">
          Войти через Яндекс
        </Button>
      </form>
    </div>
  );
}
