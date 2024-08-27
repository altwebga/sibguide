import { signIn } from "@/auth";

export default function SignInPage() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("yandex");
      }}
    >
      <button type="submit">Signin with Yandex</button>
    </form>
  );
}
