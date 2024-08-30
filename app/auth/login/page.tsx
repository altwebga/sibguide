import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn, providerMap } from "@/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export default function LoginPage() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <form
          action={async (formData) => {
            "use server";
            try {
              const email = formData.get("email");
              const password = formData.get("password");

              const result = await signIn("credentials", {
                redirect: false,
                email,
                password,
              });

              if (!result?.ok) {
                throw new AuthError(result.error);
              }

              return redirect("/dashboard"); // Переадресация на успешную страницу
            } catch (error) {
              if (error instanceof AuthError) {
                return redirect(`/auth/error?error=${error.type}`);
              }
              throw error;
            }
          }}
        >
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Войти
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        {Object.values(providerMap).map((provider) => (
          <form
            key={provider.id}
            action={async () => {
              "use server";
              try {
                await signIn(provider.id);
              } catch (error) {
                if (error instanceof AuthError) {
                  return redirect(`/auth/error?error=${error.type}`);
                }

                throw error;
              }
            }}
          >
            <Button type="submit">
              <span>Sign in with {provider.name}</span>
            </Button>
          </form>
        ))}
      </CardFooter>
    </Card>
  );
}
