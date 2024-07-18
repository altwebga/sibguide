import { SignIn } from "@/components/sign-in";
import { title } from "@/components/primitives";
export default function LoginPage() {
  return (
    <div>
      <h1 className={title()}>Login</h1>
      <SignIn />
    </div>
  );
}
