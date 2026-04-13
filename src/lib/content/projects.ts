import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { ProjectFrontmatter } from "@/types/content";

const PROJECTS_DIR = path.join(process.cwd(), "src/content/projects");

export type ProjectSource = {
  slug: string;
  frontmatter: ProjectFrontmatter;
  body: string;
};

function parseProjectFile(slug: string): ProjectSource {
  const fullPath = path.join(PROJECTS_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    frontmatter: data as ProjectFrontmatter,
    body: content.trim(),
  };
}

export function getProjectSlugs(): string[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getProjectBySlug(slug: string): ProjectSource | null {
  const fullPath = path.join(PROJECTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  return parseProjectFile(slug);
}

export function getAllProjects(): ProjectSource[] {
  return getProjectSlugs()
    .map(parseProjectFile)
    .sort((a, b) => {
      const oa = a.frontmatter.order ?? 0;
      const ob = b.frontmatter.order ?? 0;
      if (oa !== ob) return oa - ob;
      return b.frontmatter.date.localeCompare(a.frontmatter.date);
    });
}

export function getFeaturedProjects(limit = 3): ProjectSource[] {
  const featured = getAllProjects().filter((p) => p.frontmatter.featured);
  if (featured.length > 0) return featured.slice(0, limit);
  return getAllProjects().slice(0, limit);
}
