import NextAuth from "next-auth";
import Yandex from "next-auth/providers/yandex";
import GitHub from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(new PrismaClient()),
  providers: [Yandex, GitHub],
});
