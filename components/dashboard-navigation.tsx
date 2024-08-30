"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Package2 } from "lucide-react";
import { dashboardMenu } from "@/config/dashboard-menu";
import { cn } from "@/lib/utils";

type DashboardNavigationProps = {
  className?: string;
};

export default function DashboardNavigation({
  className,
}: DashboardNavigationProps) {
  const pathname = usePathname();
  return (
    <nav
      className={cn(
        "md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6",
        className
      )}
    >
      <Link
        href="/"
        className="flex 
        items-center gap-2 text-lg font-semibold md:text-base"
      >
        <Package2 className="h-6 w-6" />
        <span className="sr-only">СИБГИД</span>
      </Link>
      {dashboardMenu.map((item) => (
        <Link
          href={item.href}
          key={item.href}
          className={cn(
            "text-foreground transition-colors hover:text-foreground",
            pathname === item.href ? "text-foreground" : "text-muted-foreground"
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
