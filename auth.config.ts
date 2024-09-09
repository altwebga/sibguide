import Yandex from "next-auth/providers/yandex";
import type { NextAuthConfig } from "next-auth";
import type { Provider } from "next-auth/providers";
import Resend from "next-auth/providers/resend";

const providers: Provider[] = [Yandex, Resend];

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
