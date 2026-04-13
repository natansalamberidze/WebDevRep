import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Layout/Header";
import Container from "@/app/Container";
import SkillSection from "@/components/SkillsSection/SkillsSection";
import ProjectCardSection from "@/components/ProjectCard/ProjectCardSection";

export const metadata: Metadata = {
  title: "Nathan Shalamberidze — Frontend Developer",
  description:
    "Frontend developer specializing in modern React, Next.js, and scalable web interfaces.",
};

export default function Home() {
  return (
    <Container>
      <Header />
      <section className="justify-items-center">
        <h1 className="pointed">Hello, I'm Nathan Shalamberidze 👋</h1>
        <p className="pointed">Frontend developer</p>
        <div className="p-2">
          <Link href="/projects" className="px-2 py-1 pointed">
            Projects
          </Link>
          <Link href="/contact" className="px-2 py-1 pointed">
            Contact
          </Link>
        </div>
      </section>

      <section className="relative">
        <div className="tear absolute">
          <div className="bg-text-primary rounded-full w-9 h-9 rounded-bl-4xl"></div>
        </div>
        <div className="relative">
          <Image
            src="/shared/images/alien.svg"
            alt="alien"
            className="absolute pt-3"
            width={100}
            height={100}
          />
          <h2 className="relative left-1 pt-6 text-4xl font-bold text-cyan-500">
            <span className="text-cyan-300 [-webkit-text-stroke-color:rgb(12,1,1)] [-webkit-text-stroke-width:2px]">
              PERSONAL
            </span>
            PROJECTS
          </h2>
        </div>
      </section>

      <ProjectCardSection />
      <SkillSection />
    </Container>
  );
}
