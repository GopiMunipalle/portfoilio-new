import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ChipProps {
  children: ReactNode;
  size?: "sm" | "lg";
}

export function Chip({ children, size = "sm" }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full font-medium",
        size === "sm"
          ? "bg-accent-soft px-3 py-0.5 text-sm"
          : "border border-line bg-surface px-4 py-2 text-base",
      )}
    >
      {children}
    </span>
  );
}
