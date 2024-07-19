"use client";
import { ThemeToggle } from "./theme-toggle";
import { NavMenu } from "./nav-menu";
import { UserButton } from "./user-button";
import { signIn, useSession } from "next-auth/react";

export const Header = () => {
  const session = useSession();
  const user = session.data?.user;
  return (
    <header>
      <div className="container mx-auto h-16 flex flex-row justify-between items-center">
        <p>СИБГИД</p>
        <NavMenu />
        <ThemeToggle />
        {user && <UserButton user={user} />}
      </div>
    </header>
  );
};
