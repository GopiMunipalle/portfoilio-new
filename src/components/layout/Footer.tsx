import { Container } from "@/components/ui/Container";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line py-7 text-[0.95rem] text-muted">
      <Container className="flex flex-wrap justify-between gap-4">
        <p>
          © {new Date().getFullYear()} {profile.fullName}
        </p>
        <a href="#home" className="hover:text-accent">
          Back to top
        </a>
      </Container>
    </footer>
  );
}
