import type { Metadata } from "next";
import { ProjectCard } from "@/components/project/project-card";
import { getAllProjects } from "@/lib/content/projects";

export const metadata: Metadata = {
  title: "프로젝트",
  description: "MDX 기반 프로젝트 목록",
};

export default function ProjectsIndexPage() {
  const projects = getAllProjects();

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">프로젝트</h1>
      <p className="mt-3 max-w-2xl text-muted">
        각 카드는 MDX 파일 하나를 기준으로 구성되며, frontmatter에는 메타데이터를,
        본문에는 상세 내용을 작성합니다.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} slug={p.slug} frontmatter={p.frontmatter} />
        ))}
      </div>
    </div>
  );
}
