"use client";

import { signOutAction } from "@/app/actions/authActions";

export function SignOutButton() {
  const handleSignOut = async () => {
    try {
      await signOutAction();
    } catch (error) {
      console.error("SignOut failed", error);
    }
  };

  return (
    <button onClick={handleSignOut} type="submit">
      Выйти
    </button>
  );
}
