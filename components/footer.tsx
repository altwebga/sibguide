import { ModeToggle } from "./mode-toggle";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex flex-col items-center justify-between p-6 lg:flex-row">
        <ModeToggle />
      </div>
    </footer>
  );
}
