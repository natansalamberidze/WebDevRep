import Link from "next/link";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <Container>
      {/* HERO */}
      <section className="py-20">
        <h1 className="text-4xl font-bold mb-4">
          Hello, I'm Natan Shalamberidze 👋
        </h1>

        <p className="text-gray-400 max-w-xl">
          Frontend developer. I create fast, intuitive, and scalable interfaces.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/projects"
            className="px-6 py-3 bg-white text-black rounded-lg font-medium"
          >
            Projects
          </Link>

          <Link
            href="/contact"
            className="px-6 py-3 border border-gray-700 rounded-lg"
          >
            Contacts
          </Link>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="py-16 border-t border-gray-800">
        <h2 className="text-2xl font-semibold mb-8">Selected projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </Container>
  );
}
