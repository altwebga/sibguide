import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header>
      <div className="h-12 flex flex-row justify-between">
        <ThemeToggle />
      </div>
    </header>
  );
}
