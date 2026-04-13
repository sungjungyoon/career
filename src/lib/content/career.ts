import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { CareerFrontmatter } from "@/types/content";

const CAREER_PATH = path.join(process.cwd(), "src/content/career.mdx");

export type CareerDocument = {
  frontmatter: CareerFrontmatter;
  body: string;
};

export function getCareerDocument(): CareerDocument {
  const raw = fs.readFileSync(CAREER_PATH, "utf8");
  const { data, content } = matter(raw);
  return {
    frontmatter: data as CareerFrontmatter,
    body: content.trim(),
  };
}
