import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
}

const variants: Record<Variant, string> = {
  primary: "bg-accent text-accent-ink",
  ghost: "border-line text-fg hover:border-accent",
};

export function Button({ variant = "primary", className, children, ...rest }: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-[10px] border-[1.5px] border-transparent px-5 py-3 font-semibold no-underline transition duration-150 hover:-translate-y-0.5",
        variants[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
}
