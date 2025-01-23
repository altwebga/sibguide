import Link from "next/link";
import { CompassIcon } from "lucide-react";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <CompassIcon className="h-6 w-6" />
      <span>СИБГИД</span>
    </Link>
  );
}
