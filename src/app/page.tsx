import Link from "next/link";
import { ContactBand } from "@/components/home/contact-band";
import { HeroIntro } from "@/components/home/hero-intro";
import { ProjectCard } from "@/components/project/project-card";
import { getCareerDocument } from "@/lib/content/career";
import { getIntroDocument } from "@/lib/content/intro";
import { getFeaturedProjects } from "@/lib/content/projects";
import { renderMdxBody } from "@/lib/mdx/compile";

export default async function HomePage() {
  const career = getCareerDocument();
  const intro = getIntroDocument();
  const [{ content: introContent }, { content: careerContent }] = await Promise.all([
    renderMdxBody(intro.body),
    renderMdxBody(career.body),
  ]);
  const featured = getFeaturedProjects(4);

  return (
    <div className="min-h-screen">
      <HeroIntro profile={career.frontmatter} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <section
          id="about"
          className="border-t border-black/5 py-20 dark:border-white/10"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                About
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {"\uacbd\ud5d8, \uc7a5\uc810, \uace0\ubbfc, \uc5ed\ub7c9"}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                {"\uc6f9\ud504\ub860\ud2b8\uc5d4\ub4dc\ub85c\uc11c \uc911\uc694\ud558\uac8c \ub2e4\ub8e8\uc5b4 \uc628 \ubc29\ud5a5\uc744 \uc815\ub9ac\ud588\uc5b4\uc694."}
              </p>
            </div>
          </div>
          <article className="prose prose-neutral prose-lg mt-10 max-w-none dark:prose-invert prose-headings:scroll-mt-28 prose-p:leading-relaxed prose-li:marker:text-sky-600 dark:prose-li:marker:text-sky-400">
            {introContent}
          </article>
        </section>

        <section
          id="career"
          className="border-t border-black/5 py-20 dark:border-white/10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Career
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {"\uacbd\ub825 \uae30\uc220"}
          </h2>
          <article className="prose prose-neutral prose-lg mt-10 max-w-none dark:prose-invert prose-headings:scroll-mt-28 prose-p:leading-relaxed">
            {careerContent}
          </article>
        </section>

        <section
          id="projects"
          className="border-t border-black/5 py-20 dark:border-white/10"
        >
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Work
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {"\uc8fc\uc694 \ud504\ub85c\uc81d\ud2b8"}
              </h2>
              <p className="mt-3 max-w-xl text-sm text-muted sm:text-base">
                {"\uc0c1\uc138 \ub0b4\uc6a9\uc740 "}
                <code className="rounded-lg bg-black/5 px-2 py-0.5 text-[13px] dark:bg-white/10">
                  src/content/projects
                </code>
                {" \uc5d0\uc11c MDX\ub85c \uad00\ub9ac\ud569\ub2c8\ub2e4."}
              </p>
            </div>
            <Link
              href="/projects"
              className="text-sm font-semibold text-sky-600 hover:text-sky-500 dark:text-sky-400"
            >
              {"\uc804\uccb4 \ubcf4\uae30 \u2192"}
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {featured.map((p) => (
              <ProjectCard key={p.slug} slug={p.slug} frontmatter={p.frontmatter} />
            ))}
          </div>
        </section>
      </div>

      <ContactBand profile={career.frontmatter} />
    </div>
  );
}
