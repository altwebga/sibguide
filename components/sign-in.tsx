import { Button } from "@nextui-org/button";

import { signIn } from "@/config/auth";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("yandex");
      }}
    >
      <Button color="primary" type="submit">
        Signin with Yandex
      </Button>
    </form>
  );
}
