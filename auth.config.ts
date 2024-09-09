import Yandex from "next-auth/providers/yandex";
import type { NextAuthConfig } from "next-auth";
import type { Provider } from "next-auth/providers";
import VK from "next-auth/providers/vk";
import MailRu from "next-auth/providers/mailru";

const providers: Provider[] = [Yandex, VK, MailRu];

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
