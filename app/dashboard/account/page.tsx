import { getSessionAction } from "@/actions/get-session";
export default async function AccountPage() {
  const session = await getSessionAction();
  if (!session) {
    return null;
  }
  return (
    <div className="container mx-auto mt-2">
      <h1>Аккаунт</h1>
      <div>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
    </div>
  );
}
