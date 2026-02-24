import Link from "next/link";
import { Project } from "@/data/projects";


export default function ProjectCard({ project, variant }: { project: Project, variant?: number }) {

  const style = variant === 0 ? "bg-red-600 text-yellow-300" : "bg-green-600 text-black";
  return (
      <Link
        href={`/projects/${project.slug}`}
        className={` ${style}`}
      >
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="mb-4">{project.description}</p>
        <div className="">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className=""
            >
              {tech}
            </span>
          ))}
        </div>
      </Link>
  );
}
