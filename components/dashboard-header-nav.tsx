"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { dashboardNav } from "@/config/dashboard-nav";

export function DashboardHeaderNav() {
  const pathname = usePathname();
  return (
    <ul className="flex flex-col md:flex-row gap-4 list-none">
      {dashboardNav.map((nav) => (
        <li key={nav.id} className="text-lg">
          <Link
            href={nav.href}
            className={cn(
              "text-muted-foreground hover:text-foreground no-underline",
              pathname === nav.href && "font-bold"
            )}
          >
            {nav.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
