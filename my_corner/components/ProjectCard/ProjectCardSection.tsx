import ProjectCard from "./ProjectCard"
import { projects } from "@/data/projects";


export default function ProjectCardSection() {
  return (
    <section 
      id="projects" 
      className="py-2 grid gap-4"
    >
      {projects.map((project) => (
        <ProjectCard 
          key={project.id} 
          project={project} />
      ))}
    </section>
  )
}