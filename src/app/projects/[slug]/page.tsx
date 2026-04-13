import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug, getProjectSlugs } from "@/lib/content/projects";
import { renderMdxBody } from "@/lib/mdx/compile";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.frontmatter.title,
    description: project.frontmatter.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { content: projectContent } = await renderMdxBody(project.body);
  const siblings = getAllProjects().filter((p) => p.slug !== slug);

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/projects"
        className="text-sm font-medium text-sky-600 hover:text-sky-500 dark:text-sky-400"
      >
        ← All projects
      </Link>
      <header className="mt-6 border-b border-neutral-200 pb-8 dark:border-neutral-800">
        <p className="text-sm text-muted">
          <time dateTime={project.frontmatter.date}>{project.frontmatter.date}</time>
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {project.frontmatter.title}
        </h1>
        <p className="mt-3 text-lg text-muted">{project.frontmatter.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.frontmatter.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
          {project.frontmatter.demo ? (
            <a
              className="text-sky-600 hover:text-sky-500 dark:text-sky-400"
              href={project.frontmatter.demo}
              target="_blank"
              rel="noreferrer"
            >
              Live demo
            </a>
          ) : null}
          {project.frontmatter.repo ? (
            <a
              className="text-sky-600 hover:text-sky-500 dark:text-sky-400"
              href={project.frontmatter.repo}
              target="_blank"
              rel="noreferrer"
            >
              Repository
            </a>
          ) : null}
        </div>
      </header>
      <article className="prose prose-neutral mt-10 max-w-none dark:prose-invert prose-headings:scroll-mt-24">
        {projectContent}
      </article>
      {siblings.length > 0 ? (
        <aside className="mt-16 border-t border-neutral-200 pt-10 dark:border-neutral-800">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
            More projects
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {siblings.slice(0, 5).map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/projects/${p.slug}`}
                  className="font-medium text-foreground hover:text-sky-600 dark:hover:text-sky-400"
                >
                  {p.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      ) : null}
    </div>
  );
}
