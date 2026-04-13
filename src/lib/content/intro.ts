import fs from "fs";
import path from "path";
import matter from "gray-matter";

const INTRO_PATH = path.join(process.cwd(), "src/content/intro.mdx");

export type IntroDocument = {
  body: string;
};

export function getIntroDocument(): IntroDocument {
  const raw = fs.readFileSync(INTRO_PATH, "utf8");
  const { content } = matter(raw);
  return { body: content.trim() };
}
