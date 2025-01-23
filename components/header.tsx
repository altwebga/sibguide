"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { UserNav } from "./user-nav";
import { useSession } from "next-auth/react";
import { Input } from "./ui/input";
import { Logo } from "./logo";
import { Separator } from "./ui/separator";
import { DesktopNav } from "./desktop-nav";

export function Header() {
  const { data: session } = useSession();
  return (
    <header className="bg-background/50 backdrop-blur-md sticky top-0 z-40 w-full border-b">
      <div className="flex items-center justify-between h-16 md:h-20 px-4 container mx-auto">
        <div className="flex items-center gap-2">
          <Logo />
        </div>
        <Input placeholder="Search" className="w-full max-w-2xl" />
        <div className="flex items-center gap-2">
          {!session ? (
            <Button asChild>
              <Link href="/login">Войти</Link>
            </Button>
          ) : (
            <UserNav />
          )}
        </div>
      </div>
      <Separator />
      <div className="container mx-auto py-2">
        <DesktopNav />
      </div>
    </header>
  );
}
