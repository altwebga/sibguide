import { signIn } from "@/auth";
import { Button } from "./ui/button";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("yandex");
      }}
    >
      <Button variant={"outline"} type="submit">
        Войти через Yandex
      </Button>
    </form>
  );
}
