export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "portfolio-site",
    title: "Portfolio Website",
    description:
      "Personal portfolio website using SSG, SEO, and modern front-end technologies.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "task-manager",
    title: "Task Manager",
    description:
      "A task management app with a focus on UX and clean architecture.",
    stack: ["React", "API", "CSS"],
  },
];
