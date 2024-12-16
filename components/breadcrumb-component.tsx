"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useSelectedLayoutSegments } from "next/navigation";

export function BreadcrumbComponent() {
  const segments = useSelectedLayoutSegments();

  return (
    <Breadcrumb>
      {segments.map((segment, index) => (
        <BreadcrumbList key={index}>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>{segment}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      ))}
    </Breadcrumb>
  );
}
