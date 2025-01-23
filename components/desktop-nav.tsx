"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { siteNavItems } from "./mobile-nav";

export function DesktopNav() {
  const pathname = usePathname();
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-4 items-center justify-between">
        {siteNavItems.explore.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className={cn(
                "hover:text-sky-600",
                pathname === item.href ? "text-sky-600" : ""
              )}
            >
              <p className="font-bold">{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
