import { FiCheck, FiExternalLink } from "react-icons/fi";
import { Chip } from "@/components/ui/Chip";
import { Section } from "@/components/ui/Section";
import { projects } from "@/data/projects";
import type { Project } from "@/types";

function TechList({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <li key={t}>
          <Chip>{t}</Chip>
        </li>
      ))}
    </ul>
  );
}

function FeaturedProject({ p }: { p: Project }) {
  return (
    <article className="grid gap-6 rounded-2xl border border-line bg-surface p-6 transition duration-200 hover:border-accent hover:shadow-card sm:p-8 md:grid-cols-[1.15fr_0.85fr] md:gap-10">
      <div className="flex flex-col gap-4">
        {p.badge && (
          <p className="w-fit rounded-full border border-line px-3 py-0.5 font-mono text-xs text-accent">
            {p.badge}
          </p>
        )}
        <header>
          <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-bold">{p.title}</h3>
          <p className="mt-1 font-medium text-accent">{p.subtitle}</p>
        </header>
        <p className="text-muted">{p.description}</p>
        <div className="mt-auto pt-2">
          <TechList tech={p.tech} />
        </div>
      </div>

      {p.features && (
        <div className="rounded-xl bg-bg p-5">
          <h4 className="mb-3 font-display text-sm font-semibold tracking-wide text-muted uppercase">
            What it does
          </h4>
          <ul className="grid gap-3">
            {p.features.map((f) => (
              <li key={f} className="flex gap-3 text-[0.97rem]">
                <FiCheck aria-hidden="true" className="mt-1 shrink-0 text-accent" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

function SmallProject({ p }: { p: Project }) {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-6 transition duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-card sm:p-7">
      <header>
        <h3 className="text-2xl font-bold">{p.title}</h3>
        <p className="mt-1 text-[0.95rem] font-medium text-accent">{p.subtitle}</p>
      </header>
      <p className="text-muted">{p.description}</p>
      <TechList tech={p.tech} />
      {p.demo && (
        <p className="rounded-lg border border-dashed border-line bg-bg px-3 py-2 font-mono text-xs wrap-anywhere text-muted">
          Demo login: {p.demo.username} / {p.demo.password}
        </p>
      )}
      {p.link && (
        <a
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex w-fit items-center gap-2 pt-1 font-semibold text-accent hover:underline hover:underline-offset-4"
        >
          Open live site <FiExternalLink aria-hidden="true" />
        </a>
      )}
    </article>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6">
        {featured.map((p) => (
          <FeaturedProject key={p.title} p={p} />
        ))}
      </div>

      {others.length > 0 && (
        <>
          <h3 className="mt-16 mb-6 text-2xl font-bold">Frontend practice projects</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {others.map((p) => (
              <SmallProject key={p.title} p={p} />
            ))}
          </div>
        </>
      )}
    </Section>
  );
}
