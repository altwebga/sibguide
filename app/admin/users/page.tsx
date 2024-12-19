import { getAllUsers } from "@/actions/get-all-users";
import { UsersTableAdmin } from "@/components/shared/users-table-admin";
export default async function AdminUsersPage() {
  const users = await getAllUsers();

  return (
    <div className="px-4">
      <h1>Все пользователи</h1>
      <UsersTableAdmin users={users} />
    </div>
  );
}
