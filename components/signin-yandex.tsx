import { signIn } from "@/auth";
import { Button } from "./ui/button";

export function SignInYandex() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("yandex");
      }}
    >
      <Button
        variant={"outline"}
        type="submit"
        className="w-full bg-yellow-500"
      >
        Войти через Яндекс
      </Button>
    </form>
  );
}
