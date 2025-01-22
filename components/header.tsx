"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { UserNav } from "./user-nav";
import { useSession } from "next-auth/react";

export function Header() {
  const { data: session } = useSession();
  return (
    <header className="bg-background/50 backdrop-blur-md sticky top-0 z-40 w-full border-b">
      <div className="flex items-center justify-between h-16 md:h-20 px-4 container mx-auto">
        <div>logo</div>
        <div className="flex items-center gap-4">
          <div>nav</div>
          {!session ? (
            <Button asChild>
              <Link href="/login">Войти</Link>
            </Button>
          ) : (
            <UserNav />
          )}
        </div>
      </div>
    </header>
  );
}
