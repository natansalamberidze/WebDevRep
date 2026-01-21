import { notFound } from "next/navigation";
import Container from "@/components/Container";
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
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

      <p className="text-gray-400 mb-8">{project.description}</p>

      <section>
        <h2 className="text-xl font-semibold mb-3">
          Stack of technologies used.
        </h2>

        <ul className="list-disc list-inside text-gray-300">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
