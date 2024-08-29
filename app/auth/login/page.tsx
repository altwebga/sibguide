import { signIn, providerMap } from "@/auth";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Войти</CardTitle>
        <CardDescription>
          Введите свой адрес электронной почты, чтобы войти в свою учетную
          запись
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Пароль</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Забыли пароль?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
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
        <div className="mt-4 text-center text-sm">
          У вас нет аккаунта?{" "}
          <Link href="/sign-up" className="underline">
            Зарегистрироваться
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
