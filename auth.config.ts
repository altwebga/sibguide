import Yandex from "next-auth/providers/yandex";
import type { NextAuthConfig } from "next-auth";
import type { Provider } from "next-auth/providers";

const providers: Provider[] = [Yandex];

export default {
  providers,
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET || "your-secret-key",
  useSecureCookies: false,
} satisfies NextAuthConfig;
