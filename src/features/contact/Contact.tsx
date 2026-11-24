import type { ReactNode } from "react";
import { FiDownload, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { profile } from "@/data/profile";

interface Row {
  icon: ReactNode;
  label: string;
  href?: string;
  external?: boolean;
}

const rows: Row[] = [
  { icon: <FiMail />, label: profile.email, href: `mailto:${profile.email}` },
  { icon: <FiPhone />, label: profile.phone, href: `tel:+91${profile.phone}` },
  { icon: <FiMapPin />, label: profile.location },
  { icon: <FaLinkedin />, label: "LinkedIn", href: profile.linkedin, external: true },
  { icon: <FaGithub />, label: "GitHub", href: profile.github, external: true },
];

export function Contact() {
  return (
    <Section id="contact" title="Get in touch">
      <div className="grid items-start gap-8 md:grid-cols-2 md:gap-12">
        <div className="grid max-w-md justify-items-start gap-6 text-muted">
          <p>
            I'm open to full stack and backend developer roles. Send me an email and I'll get back to
            you.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href={`mailto:${profile.email}`}>Email me</Button>
            <Button variant="ghost" href={profile.resume} download={profile.resumeFileName}>
              <FiDownload aria-hidden="true" /> Download resume
            </Button>
          </div>
        </div>

        <ul className="grid rounded-2xl border border-line bg-surface px-5 py-3">
          {rows.map((r) => (
            <li
              key={r.label}
              className="flex items-center gap-3.5 border-b border-line py-3.5 wrap-anywhere last:border-b-0"
            >
              <span aria-hidden="true" className="shrink-0 text-xl text-accent">
                {r.icon}
              </span>
              {r.href ? (
                <a
                  href={r.href}
                  className="hover:text-accent"
                  {...(r.external && { target: "_blank", rel: "noopener noreferrer" })}
                >
                  {r.label}
                </a>
              ) : (
                <span>{r.label}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
