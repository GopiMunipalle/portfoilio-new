import { useState } from "react";
import { FiDownload, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navLinks } from "@/data/navigation";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/cn";
import type { Theme } from "@/types";

const sectionIds = navLinks.map((l) => l.id);

const iconBtn =
  "grid size-10.5 cursor-pointer place-items-center rounded-[10px] border border-line bg-surface text-lg text-fg transition-colors hover:border-accent";

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);
  const scrolled = useScrolled();
  const close = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent transition",
        (scrolled || open) && "border-line bg-bg/85 backdrop-blur-md",
      )}
    >
      <Container className="flex h-17 items-center justify-between gap-4">
        <a href="#home" onClick={close} className="flex items-center gap-2.5 font-display text-lg font-bold">
          <span className="grid size-8.5 place-items-center rounded-[9px] bg-accent text-accent-ink">
            {profile.name[0]}
          </span>
          {profile.name}
        </a>

        <nav
          id="site-menu"
          aria-label="Primary"
          className={cn(
            "absolute inset-x-0 top-17 flex-col gap-0 border-b border-line bg-bg px-5 pt-3 pb-5 md:static md:ml-auto md:flex md:flex-row md:gap-1 md:border-0 md:bg-transparent md:p-0",
            open ? "flex" : "hidden",
          )}
        >
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={close}
              aria-current={active === l.id ? "true" : undefined}
              className={cn(
                "rounded-lg px-2 py-3.5 text-[1.05rem] font-medium transition-colors md:px-3 md:py-2 md:text-[0.95rem]",
                active === l.id ? "bg-accent-soft text-fg" : "text-muted hover:text-fg",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            href={profile.resume}
            download={profile.resumeFileName}
            className="hidden px-4 py-2 text-[0.95rem] sm:inline-flex"
          >
            <FiDownload aria-hidden="true" /> Resume
          </Button>
          <button
            type="button"
            className={iconBtn}
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <button
            type="button"
            className={cn(iconBtn, "md:hidden")}
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </Container>
    </header>
  );
}
