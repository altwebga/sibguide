import { auth } from "@/auth";
export async function getSession() {
  try {
    const session = await auth();
    return session;
  } catch (e) {
    console.error(e);
    return null;
  }
}
