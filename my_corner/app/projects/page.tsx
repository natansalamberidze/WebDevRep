import Container from "@/app/Container";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <Container>
      <h1 className="text-3xl font-bold">Projects</h1>

      <div className="py-3 grid gap-2">
        {projects.map((project) => (
          <ProjectCard 
            key={project.slug} 
            project={project} 
          />
        ))}
      </div>
    </Container>
  );
}
