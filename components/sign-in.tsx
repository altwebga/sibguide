import { signIn } from "@/auth";
import { Button } from "./ui/button";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("yandex");
      }}
    >
      <Button type="submit">Signin with Yandex</Button>
    </form>
  );
}
