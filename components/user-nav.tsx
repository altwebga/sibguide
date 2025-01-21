"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { UserAvatar } from "./user-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const userMenu = [
  {
    label: "Статистика",
    href: "/dashboard",
  },
  {
    label: "Мои объявления",
    href: "/dashboard/listings",
  },
  {
    label: "Избранное",
    href: "/dashboard/favorites",
  },
  {
    label: "Профиль",
    href: "/dashboard/profile",
  },
];

export function UserNav() {
  const { data: session } = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          src={session?.user?.image || "/images/profile.min.svg"}
          alt={session?.user?.name || "avatar"}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{session?.user?.email || ""}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {userMenu.map((item) => (
            <DropdownMenuItem key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-red-600"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Выйти
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
