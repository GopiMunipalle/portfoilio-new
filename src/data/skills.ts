import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    items: ["NestJS", ".NET Web API", "Node.js", "Express.js", "TypeScript", "Socket.IO"],
  },
  { title: "Databases", items: ["PostgreSQL", "MongoDB", "SQLite"] },
  { title: "Integrations", items: ["SAP APIs", "IDocs", "OData", "REST APIs"] },
  { title: "Cloud", items: ["AWS EC2", "AWS S3", "AWS Amplify"] },
  { title: "DevOps and testing", items: ["Docker", "Jest"] },
  { title: "Payments", items: ["Razorpay", "PhonePe", "Stripe", "Webhooks"] },
  { title: "Frontend", items: ["React", "JavaScript", "HTML", "CSS", "Bootstrap"] },
];
