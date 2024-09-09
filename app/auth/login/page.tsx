import { SignInButton } from "@/components/signin-button";
import { signIn } from "@/auth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Login() {
  return (
    <div>
      <h3>Войти</h3>
      <form
        className="flex flex-col gap-2"
        action={async (formData) => {
          "use server";
          await signIn("nodemailer", formData);
        }}
      >
        <Input type="text" name="email" placeholder="Email" />
        <Button type="submit">Войти по ссылке</Button>
      </form>
      <SignInButton />
    </div>
  );
}
