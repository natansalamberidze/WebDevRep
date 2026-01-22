import Container from "@/components/Container";
import Link from "next/link";

export default function ContactPage() {
  return (
    <Container>
      <h1 className="text-3xl font-bold mb-6">
        Contact
      </h1>

      <p className="text-gray-400 max-w-xl mb-8">
        If you'd like to discuss a project, collaboration,
        or just say hello — feel free to reach out.
      </p>

      <ul className="space-y-4">
        <li>
          <span className="text-gray-500">Email:</span>{" "}
          <a
            href="mailto:natans.salamberidze@gmail.com"
            className="underline"
          >
            natans.salamberidze@gmail.com
          </a>
        </li>

        <li>
          <span className="text-gray-500">GitHub:</span>{" "}
          <Link
            href="https://github.com/natansalamberidze"
            className="underline"
            target="_blank"
          >
            natansalam
          </Link>
        </li>
      </ul>
    </Container>
  );
}
