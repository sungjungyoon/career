import Link from "next/link";
import { ProjectCard } from "@/components/project/project-card";
import { getCareerDocument } from "@/lib/content/career";
import { getFeaturedProjects } from "@/lib/content/projects";
import { renderMdxBody } from "@/lib/mdx/compile";

export default async function HomePage() {
  const career = getCareerDocument();
  const { content: careerContent } = await renderMdxBody(career.body);
  const featured = getFeaturedProjects(4);

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <section
        id="intro"
        className="border-b border-neutral-200 pb-12 dark:border-neutral-800"
      >
        <p className="text-sm font-medium text-sky-600 dark:text-sky-400">
          {career.frontmatter.role}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {career.frontmatter.name}
        </h1>
        {career.frontmatter.tagline ? (
          <p className="mt-4 max-w-2xl text-lg text-muted">
            {career.frontmatter.tagline}
          </p>
        ) : null}
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          {career.frontmatter.email ? (
            <a
              className="rounded-full border border-neutral-200 px-4 py-2 font-medium text-foreground transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
              href={`mailto:${career.frontmatter.email}`}
            >
              Email
            </a>
          ) : null}
          {career.frontmatter.github ? (
            <a
              className="rounded-full border border-neutral-200 px-4 py-2 font-medium text-foreground transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
              href={career.frontmatter.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          ) : null}
          {career.frontmatter.linkedin ? (
            <a
              className="rounded-full border border-neutral-200 px-4 py-2 font-medium text-foreground transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
              href={career.frontmatter.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          ) : null}
          <Link
            href="/projects"
            className="rounded-full bg-foreground px-4 py-2 font-medium text-background transition hover:opacity-90"
          >
            All projects
          </Link>
        </div>
      </section>

      <section id="career" className="border-b border-neutral-200 py-12 dark:border-neutral-800">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
          Career
        </h2>
        <article className="prose prose-neutral mt-6 max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-a:no-underline">
          {careerContent}
        </article>
      </section>

      <section id="projects" className="py-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
              Featured projects
            </h2>
            <p className="mt-2 text-foreground">
              Curated from MDX files in{" "}
              <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-900">
                src/content/projects
              </code>
              .
            </p>
          </div>
          <Link
            href="/projects"
            className="text-sm font-medium text-sky-600 hover:text-sky-500 dark:text-sky-400"
          >
            View all →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.slug} slug={p.slug} frontmatter={p.frontmatter} />
          ))}
        </div>
      </section>
    </div>
  );
}
