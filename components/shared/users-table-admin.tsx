import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { User } from "@prisma/client";
import { Badge } from "../ui/badge";

export function UsersTableAdmin({ users }: { users: User[] }) {
  if (!users || !Array.isArray(users)) {
    return <div>Данные о пользователях недоступны</div>;
  }

  return (
    <Table>
      <TableCaption>Список всех пользователей</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Аватар</TableHead>
          <TableHead>Имя</TableHead>
          <TableHead>Роль</TableHead>
          <TableHead className="text-right">Дата регистрации</TableHead>
          <TableHead className="text-right">Дата обновления</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>
              <Image
                className="rounded-full w-auto h-auto"
                src={user.image || "/images/profile.png"}
                alt={user.name || "No Name"}
                width={48}
                height={48}
              />
            </TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>
              <Badge variant="secondary">{user.role}</Badge>
            </TableCell>
            <TableCell className="text-right">
              {new Date(user.createdAt).toLocaleDateString("ru-RU")}
            </TableCell>
            <TableCell className="text-right">
              {new Date(user.updatedAt).toLocaleDateString("ru-RU")}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
