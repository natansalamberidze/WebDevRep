import { notFound } from "next/navigation";
import Container from "@/app/Container";
import { projects } from "@/data/projects";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <Container>
      <h1 className="mb-4 text-3xl font-bold">{project.title}</h1>

      <p className="mb-8 text-gray-400">{project.description}</p>

      <section>
        <h2 className="mb-3 text-xl font-semibold">
          Stack of technologies used.
        </h2>

        <ul className="list-inside list-disc text-gray-300">
          {project.stack.map((project) => (
            <li key={project.id}></li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
