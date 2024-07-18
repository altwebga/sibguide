import NextAuth from "next-auth";
import Yandex from "next-auth/providers/yandex";
import Credentials from "next-auth/providers/credentials";
import { ZodError } from "zod";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient, User as PrismaUser } from "@prisma/client";
import bcrypt from "bcryptjs";

import { signInSchema } from "./zod";

const prisma = new PrismaClient();

// Define the User type to include password
interface User extends PrismaUser {
  password: string;
}

// Function to hash password
const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);

  return bcrypt.hash(password, salt);
};

// Function to compare password with hash
const verifyPassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  return bcrypt.compare(password, hash);
};

// Function to get user from DB
const getUserFromDb = async (
  email: string,
  password: string
): Promise<User | null> => {
  const user = (await prisma.user.findUnique({
    where: { email },
  })) as User | null;

  if (user && (await verifyPassword(password, user.password))) {
    return user;
  }

  return null;
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Yandex,
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const { email, password } =
            await signInSchema.parseAsync(credentials);

          // Verify user
          const user = await getUserFromDb(email, password);

          if (!user) {
            throw new Error("User not found.");
          }

          return user;
        } catch (error) {
          if (error instanceof ZodError) {
            return null;
          }

          // Handle unknown error type
          if (error instanceof Error) {
            throw new Error(error.message);
          }

          throw new Error("Unknown error occurred.");
        }
      },
    }),
  ],
});
