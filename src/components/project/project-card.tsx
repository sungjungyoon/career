import Link from "next/link";
import type { ProjectFrontmatter } from "@/types/content";

type Props = {
  slug: string;
  frontmatter: ProjectFrontmatter;
};

export function ProjectCard({ slug, frontmatter }: Props) {
  return (
    <article className="group flex flex-col rounded-2xl border border-neutral-200/90 bg-card p-5 shadow-sm transition hover:border-neutral-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950/40 dark:hover:border-neutral-600">
      <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
        <time dateTime={frontmatter.date}>{frontmatter.date}</time>
        {frontmatter.featured ? (
          <span className="rounded-full bg-sky-500/15 px-2 py-0.5 font-medium text-sky-700 dark:text-sky-300">
            Featured
          </span>
        ) : null}
      </div>
      <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground group-hover:text-sky-600 dark:group-hover:text-sky-400">
        <Link href={`/projects/${slug}`}>{frontmatter.title}</Link>
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {frontmatter.summary}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {frontmatter.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-neutral-100 px-2 py-0.5 text-[11px] font-medium text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-3 text-sm font-medium">
        <Link
          href={`/projects/${slug}`}
          className="text-sky-600 hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300"
        >
          자세히 →
        </Link>
        {frontmatter.demo ? (
          <a
            href={frontmatter.demo}
            target="_blank"
            rel="noreferrer"
            className="text-muted underline-offset-4 hover:text-foreground hover:underline"
          >
            Demo
          </a>
        ) : null}
        {frontmatter.repo ? (
          <a
            href={frontmatter.repo}
            target="_blank"
            rel="noreferrer"
            className="text-muted underline-offset-4 hover:text-foreground hover:underline"
          >
            Repo
          </a>
        ) : null}
      </div>
    </article>
  );
}
