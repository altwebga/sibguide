import { UserNav } from "./user-nav";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div>logo</div>
      <div>nav</div>
      <UserNav />
    </header>
  );
}
