import { Chip } from "@/components/ui/Chip";
import { Section } from "@/components/ui/Section";
import { education } from "@/data/education";

export function Education() {
  return (
    <Section id="education" title="Education" alt>
      <ol className="relative grid max-w-176 gap-7 pl-7 before:absolute before:top-2 before:bottom-2 before:left-1.25 before:w-0.5 before:bg-line">
        {education.map((e) => (
          <li
            key={e.place}
            className="relative before:absolute before:top-2 before:-left-7 before:size-3 before:rounded-full before:bg-accent before:ring-4 before:ring-alt"
          >
            <p className="text-sm font-semibold text-accent">{e.period}</p>
            <h3 className="mt-0.5 text-xl">{e.place}</h3>
            <p className="mt-1 flex flex-wrap items-center gap-2.5 text-muted">
              {e.title}
              {e.score && <Chip>{e.score}</Chip>}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
