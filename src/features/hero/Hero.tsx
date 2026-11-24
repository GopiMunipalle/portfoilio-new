import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { profile } from "@/data/profile";
import { CodeCard } from "./CodeCard";

export function Hero() {
  return (
    <section
      id="home"
      className="bg-[radial-gradient(60%_50%_at_85%_10%,var(--accent-soft),transparent_70%)] pt-28 pb-20 lg:pt-34"
    >
      <Container className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <p className="mb-2 font-semibold text-accent">Hi, I'm</p>
          <h1 className="text-[clamp(2.6rem,6.2vw,4.6rem)] font-extrabold">{profile.name}</h1>
          <p className="mt-4 font-display text-[clamp(1.2rem,2.4vw,1.6rem)] font-semibold text-muted">
            {profile.role}
          </p>
          <p className="mt-1 text-accent">{profile.experience} of experience</p>
          <p className="mt-5 max-w-136 text-muted">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects">View my projects</Button>
            <Button variant="ghost" href={profile.resume} download={profile.resumeFileName}>
              <FiDownload aria-hidden="true" /> Download resume
            </Button>
            <Button variant="ghost" href="#contact">
              Contact me
            </Button>
          </div>
        </div>

        <div className="order-first grid justify-items-center gap-5 lg:order-none">
          <CodeCard />
        </div>
      </Container>
    </section>
  );
}
