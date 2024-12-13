import { auth } from "@/auth";

export default async function AccountPage() {
  const session = await auth();
  return (
    <div>
      <h1>Account Page</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
