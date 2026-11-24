import { Section } from "@/components/ui/Section";
import { highlights, profile } from "@/data/profile";

const facts = [
  { label: "Experience", value: profile.experience },
  { label: "Main stack", value: "NestJS, .NET Web API, TypeScript" },
  { label: "Cloud", value: "AWS EC2, S3, Amplify" },
  { label: "Based in", value: "Hyderabad, Telangana" },
];

export function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:gap-12">
        <div className="grid max-w-160 gap-4 text-muted">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <dl className="m-0 grid content-start rounded-[14px] border border-line bg-surface px-5 py-2">
          {facts.map((f) => (
            <div key={f.label} className="border-b border-line py-3.5 last:border-b-0">
              <dt className="text-sm text-muted">{f.label}</dt>
              <dd className="m-0 font-semibold">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((h) => (
          <li key={h.title} className="rounded-[14px] border border-line bg-surface p-5.5">
            <h3 className="mb-2 text-lg">{h.title}</h3>
            <p className="text-[0.97rem] leading-normal text-muted">{h.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
