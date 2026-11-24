import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

interface SectionProps {
  id: string;
  title: string;
  alt?: boolean;
  children: ReactNode;
}

export function Section({ id, title, alt = false, children }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-22", alt && "bg-alt")}>
      <Container>
        <h2 className="mb-10 text-[clamp(1.9rem,4vw,2.6rem)] font-extrabold">{title}</h2>
        {children}
      </Container>
    </section>
  );
}
