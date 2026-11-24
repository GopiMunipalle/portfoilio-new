import type { Project } from "@/types";

export const projects: Project[] = [
  {
    featured: true,
    title: "Procure-to-Pay (P2P) Application",
    subtitle: "Enterprise procurement system with SAP integration",
    badge: "SAP integration",
    description:
      "An enterprise procurement system that automates the complete purchasing lifecycle, improving operational efficiency and reducing manual intervention.",
    features: [
      "Requisition creation and purchase order management",
      "Invoice processing and payments",
      "Vendor management and approval workflows",
      "Real-time tracking of procurement activities",
      "SAP integration through IDocs and OData APIs",
    ],
    tech: [
      "Node.js",
      "TypeScript",
      "React",
      "PostgreSQL",
      "SAP APIs (IDocs, OData)",
      "REST APIs",
      "Docker",
    ],
  },
  {
    featured: true,
    title: "Teja Organics",
    subtitle: "Multi-role e-commerce platform for organic products",
    badge: "Admin, Seller and Customer roles",
    description:
      "An e-commerce application for organic products with three user roles. The architecture is built for scalability and maintainability, and supports complex relationships between users, products and orders.",
    features: [
      "Admins manage sellers and oversee product listings",
      "Sellers list and manage their own products",
      "Customers browse and purchase products",
      "Order management and user profile management",
    ],
    tech: ["Node.js", "Express.js", "TypeScript", "PostgreSQL", "Docker", "Jest", "AWS S3"],
  },
  {
    featured: true,
    title: "XpressGate",
    subtitle: "Community management app for apartment societies",
    badge: "Microservices architecture",
    description:
      "A community management app for apartment societies with multiple blocks. It improves security, streamlines operations and enhances communication within the community.",
    features: [
      "Resident information management",
      "Visitor and delivery entry tracking",
      "Amenity booking with a time-slot system, such as swimming pools and function halls",
    ],
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React",
      "TypeScript",
      "Docker",
      "Jest",
      "AWS S3",
      "REST APIs",
    ],
  },
  {
    title: "Nxt Trendz",
    subtitle: "E-commerce clone inspired by Amazon and Flipkart",
    description:
      "Login, products and product details pages built with React Router and reusable components. Users stay secure with JWT tokens, REST API calls and local storage.",
    tech: ["React", "JavaScript", "CSS", "Bootstrap", "JWT", "REST API"],
    link: "https://main.d1tv8o2b3t7zip.amplifyapp.com/",
    demo: { username: "rahul", password: "rahul@2021" },
  },
  {
    title: "Movies App",
    subtitle: "OTT platform inspired by Netflix and Prime Video",
    description:
      "A movie browsing app with React Router navigation, horizontal carousels using React Slick, a UI designed in Figma, and TMDb APIs for movie data. Login state persists in client storage.",
    tech: ["React", "JavaScript", "Bootstrap", "React Slick", "Figma"],
    link: "https://master.d30euk7c6w32bz.amplifyapp.com/",
    demo: { username: "rahul", password: "rahul@2021" },
  },
  {
    title: "Wikipedia Search",
    subtitle: "Search Wikipedia from a clean, responsive page",
    description:
      "Results are fetched asynchronously from the Wikipedia API, shown as a styled list, and open in a new tab for further reading. The layout adapts to any screen size.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "REST API"],
    link: "https://munipallewiki.ccbp.tech/",
  },
  {
    title: "Todos Application",
    subtitle: "Task manager with full CRUD",
    description:
      "Add, edit and delete tasks through JavaScript event listeners with instant UI updates. Tasks are saved in local storage, so they're still there when you come back.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "https://munipalletodo.ccbp.tech/",
  },
];
