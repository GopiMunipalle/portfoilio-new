import type { Highlight, Profile } from "@/types";

export const profile: Profile = {
  name: "Leela Gopi Krishna",
  fullName: "Leela Gopi Krishna Munipalle",
  role: "Full stack developer, backend focused",
  experience: "2 years 10 months",
  location: "Madhapur, Hyderabad, Telangana",
  email: "munipallegopikrishna@gmail.com",
  phone: "6304206589",
  // photo:
  //   "https://res.cloudinary.com/dpiaz73h0/image/upload/v1702294495/IMG20220514171623__1_-removebg-preview_hjgrz5.png",
  // Put your resume PDF at public/resume.pdf
  resume: "/GopiKrishnaResume.pdf",
  resumeFileName: "Leela-Gopi-Krishna-Resume.pdf",
  linkedin: "https://www.linkedin.com/in/leelagopikrishna/",
  github: "https://github.com/GopiMunipalle",
  intro:
    "I’m a Full Stack Developer with 2 years and 10 months of experience, specializing in backend development. I build scalable REST APIs, real-time applications, payment integrations, and cloud-deployed solutions using .NET, NestJS, Node.js, and AWS. I also develop responsive React interfaces to deliver complete end-to-end applications.",
  about: [
    "I'm a Full Stack Developer with 2 years and 10 months of professional experience, with a strong focus on backend engineering. I specialize in building RESTful APIs and backend services using .NET Web API, NestJS, Node.js, and TypeScript, with MongoDB and PostgreSQL as my primary databases.",
    "I have hands-on experience developing real-time features using Socket.IO and WebSockets, integrating payment gateways such as Razorpay, PhonePe, and Stripe, and implementing webhook-based transaction handling. I also work with AWS services, including EC2, S3, and Amplify, and use Docker for containerization.",
    "My project experience includes developing an enterprise Procure-to-Pay (P2P) system integrated with SAP, a multi-role e-commerce platform with payment integrations, and a microservices-based community management application.",
    "I also have experience building responsive frontend applications using React, JavaScript, HTML, and CSS. I started my development journey in 2022 after completing my B.Sc. and the MERN Full Stack program at NxtWave, and I continue to enjoy learning new technologies and building practical solutions.",
  ],
};

export const highlights: Highlight[] = [
  {
    title: "APIs and backend",
    text: "REST APIs with .NET Web API and NestJS, written in C# and TypeScript.",
  },
  {
    title: "Real-time",
    text: "Live updates and messaging using WebSockets with Socket.IO.",
  },
  {
    title: "Payments",
    text: "PhonePe, Razorpay and Stripe integrations, with webhooks to confirm payments.",
  },
  {
    title: "Cloud",
    text: "Deployments on AWS EC2, file storage on S3, and frontends on Amplify.",
  },
];
