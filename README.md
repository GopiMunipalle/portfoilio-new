# Portfolio

React + TypeScript + Vite + Tailwind CSS v4.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
```

## Add your resume

Put your PDF at `public/resume.pdf`. All "Resume" buttons use it.

## Update content

Everything you see is data, so you rarely touch components:

| What | File |
| --- | --- |
| Name, contact, intro, about text, highlight cards, resume path | `src/data/profile.ts` |
| Skill groups | `src/data/skills.ts` (icons: `src/features/skills/skillIcons.ts`) |
| Projects | `src/data/projects.ts` |
| Education | `src/data/education.ts` |
| Navbar links | `src/data/navigation.ts` |
| Colors and fonts | `src/styles/index.css` (theme tokens) |

## Structure

```
src/
  components/
    layout/        Navbar, Footer
    ui/            Button, Chip, Container, Section
  features/        one folder per page section
    hero/ about/ skills/ projects/ education/ contact/
  data/            typed content
  hooks/           useTheme, useScrolled, useActiveSection
  lib/             small helpers (cn)
  types/           shared TypeScript types
  styles/          Tailwind entry and theme tokens
```

Imports use the `@/` alias for `src/`.

## Deploy (AWS Amplify, Netlify, Vercel)

Build command `npm run build`, output directory `dist`.
