import { signIn, providerMap } from "@/auth";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-2">
      {providerMap.map((provider) => (
        <form
          key={provider.id}
          action={async () => {
            "use server";
            try {
              await signIn(provider.id);
            } catch (error) {
              // Обработка ошибок входа
              throw error;
            }
          }}
        >
          <Button type="submit">Войти через {provider.name}</Button>
        </form>
      ))}
    </div>
  );
}
