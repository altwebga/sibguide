"use server";
import { signIn, signOut, auth } from "@/auth";

export async function signInYandex() {
  try {
    await signIn("yandex");
  } catch (error) {
    console.error(error);
  }
}

export async function signOutAction() {
  try {
    await signOut();
  } catch (error) {
    console.error(error);
  }
}

export async function getUserInfo() {
  const session = await auth();
  try {
    return session?.user;
  } catch (error) {
    console.error(error);
  }
}
