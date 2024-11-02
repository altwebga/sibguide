import { auth } from "@/auth";

export default async function AccountPage() {
  const session = await auth();
  if (!session?.user) return null;
  return (
    <div>
      <h1>Account</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
