import Image from "next/image";
import { Project } from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="grid grid-cols-(--my-grid-cols) gap-1 hover:transform-(--my-transform)">
      <div className="col-start-1 col-end-2 row-start-1 row-end-3 content-center justify-items-center rounded-2xl border-4">
        <Image
          className=""
          src={project.image}
          alt={project.title}
          width={300}
          height={200}
        />
      </div>
      <div className="place-content-center justify-items-center border-4">
        <h2 className="">{project.title}</h2>
      </div>
      <div className="content-center justify-items-center border-4 bg-cyan-300">
        <p className="">{project.description}</p>
      </div>
      <div className="col-start-2 col-end-4 row-start-2">
        <ul className="flex justify-around rounded-4xl border-5 border-purple-400 p-0.5">
          {project.stack.map((tech) => (
            <li
              className="h-3 w-3 overflow-hidden rounded-full border-3 border-purple-900"
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
