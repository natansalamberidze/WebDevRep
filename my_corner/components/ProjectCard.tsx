import Link from "next/link";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block p-6 rounded-xl bg-gray-900 hover:bg-gray-800 transition"
    >
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

      <p className="text-gray-400 mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-sm px-3 py-1 bg-gray-800 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
}
