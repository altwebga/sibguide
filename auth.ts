import type { Provider } from "next-auth/providers";

import NextAuth from "next-auth";
import Yandex from "next-auth/providers/yandex";

const providers: Provider[] = [Yandex];

export const providerMap = providers
  .map((provider) => {
    if (typeof provider === "function") {
      const providerData = provider();

      return { id: providerData.id, name: providerData.name };
    } else {
      return { id: provider.id, name: provider.name };
    }
  })
  .filter((provider) => provider.id !== "credentials");

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers,
});
