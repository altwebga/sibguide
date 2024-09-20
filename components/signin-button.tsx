import { signIn, providerMap } from "@/auth";
import { Button } from "@/components/ui/button";
export async function SignInButton() {
  return (
    <>
      {Object.values(providerMap).map((provider) => (
        <form
          key={provider.id}
          action={async () => {
            "use server";
            try {
              await signIn(provider.id);
            } catch (error) {
              console.error(error);
              throw error;
            }
          }}
        >
          <Button className="min-w-52 mt-4" type="submit">
            Войти через {provider.name}
          </Button>
        </form>
      ))}
    </>
  );
}
