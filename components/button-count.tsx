"use client";

import useStore from "@/lib/store";
import { Button } from "@/components/ui/button";

export function ButtonCount() {
  const { count, increment } = useStore();
  return <Button onClick={increment}>Increment {count}</Button>;
}
