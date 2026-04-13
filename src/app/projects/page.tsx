import type { Metadata } from "next";
import { ProjectCard } from "@/components/project/project-card";
import { getAllProjects } from "@/lib/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "All projects from MDX content",
};

export default function ProjectsIndexPage() {
  const projects = getAllProjects();

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Projects
      </h1>
      <p className="mt-3 max-w-2xl text-muted">
        Each card is backed by a single MDX file with YAML frontmatter for metadata and
        markdown/MDX for the story.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} slug={p.slug} frontmatter={p.frontmatter} />
        ))}
      </div>
    </div>
  );
}
