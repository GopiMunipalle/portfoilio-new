import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("mx-auto w-[min(1120px,calc(100%-2.5rem))]", className)}>
      {children}
    </div>
  );
}
