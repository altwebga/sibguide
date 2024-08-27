"use client";
import { signIn } from "next-auth/react";
import { Button } from "@nextui-org/button";

export function SignIn() {
  return (
    <Button onClick={() => signIn("github", { redirectTo: "/dashboard" })}>
      Sign In
    </Button>
  );
}
