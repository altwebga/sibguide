import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { signIn, providerMap } from "@/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4"></CardContent>
        <CardFooter className="flex flex-col gap-4">
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
              <Button type="submit" className="w-48">
                Войти через {provider.name}
              </Button>
            </form>
          ))}
        </CardFooter>
      </Card>
    </div>
  );
}
