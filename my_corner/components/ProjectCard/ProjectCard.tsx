import Image from "next/image";
import { Project } from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="grid grid-cols-(--my-grid-cols) gap-1 hover:shadow-(--my-shadowform) rounded-2xl">
      <div className="col-start-1 col-end-2 row-start-1 row-end-3 content-center justify-items-center rounded-2xl">
        <Image
          className=""
          src={project.image}
          alt={project.title}
          width={300}
          height={200}
        />
      </div>
      <div className="place-content-center justify-items-center">
        <h2 className="">{project.title}</h2>
      </div>
      <div className="content-center justify-items-center">
        <p className="">{project.description}</p>
      </div>
      <div className="col-start-2 col-end-4 row-start-2">
        <ul className="flex justify-start rounded-4xl border-purple-400 p-0.5">
          {project.stack.map((tech) => (
            <li
              className="h-3 w-3 overflow-hidden rounded-full border-purple-900"
              key={tech.id}
              title={tech.name}
            >
              <Image
                className="w-full"
                src={tech.icon}
                alt={tech.name}
                width={50}
                height={50}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
