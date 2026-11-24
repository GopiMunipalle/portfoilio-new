import { Chip } from "@/components/ui/Chip";
import { Section } from "@/components/ui/Section";
import { skillGroups } from "@/data/skills";
import { skillIcons } from "./skillIcons";

export function Skills() {
  return (
    <Section id="skills" title="Skills" alt>
      <div className="grid gap-8">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="grid items-center gap-x-8 gap-y-3 sm:grid-cols-[130px_1fr]"
          >
            <h3 className="text-lg text-muted">{group.title}</h3>
            <ul className="flex flex-wrap gap-3">
              {group.items.map((name) => {
                const Icon = skillIcons[name];
                return (
                  <li key={name}>
                    <Chip size="lg">
                      {Icon && <Icon aria-hidden="true" className="text-lg text-accent" />}
                      {name}
                    </Chip>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
