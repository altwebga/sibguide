import Yandex from "next-auth/providers/yandex";
import type { NextAuthConfig } from "next-auth";
import type { Provider } from "next-auth/providers";
import Credentials from "next-auth/providers/credentials";

const providers: Provider[] = [
  Yandex,
  Credentials({
    credentials: { password: { label: "Password", type: "password" } },
    authorize(c) {
      if (c.password !== "password") return null;
      return {
        id: "test",
        name: "Test User",
        email: "test@example.com",
      };
    },
  }),
];

export default {
  providers,
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET || "your-secret-key",
  useSecureCookies: false,
  callbacks: {
    authorized: async ({ auth }) => {
      // Авторизованы ли пользователи
      return !!auth;
    },
  },
} satisfies NextAuthConfig;
