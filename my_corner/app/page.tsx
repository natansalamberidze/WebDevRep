import Link from "next/link";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nathan Shalamberidze — Frontend Developer",
  description:
    "Frontend developer specializing in modern React, Next.js, and scalable web interfaces.",
};

export default function Home() {
  return (
    <Container>
      <div className="py-80 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Hello, I'm Nathan Shalamberidze 👋
        </h1>

        <p className="text-red-500 max-w-xl">
          Frontend developer. I create fast, intuitive, and scalable interfaces.
        </p>

        <div className="mt-8 inline-flex gap-4">
          <Link
            href="/projects"
            className="px-6 py-3"
          >
            Projects
          </Link>

          <Link
            href="/contact"
            className="px-6 py-3"
          >
            Contact
          </Link>
        </div>
      </div>


      <section className="">
        <h2 className="">ALL PROJECTS</h2>

        <div className="">
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard 
              key={project.slug} 
              project={project}
              variant={index}
            />
          ))}
        </div>
      </section>
    </Container>
  );
}
