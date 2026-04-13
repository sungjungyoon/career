import { compileMDX } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/mdx-components";

export async function renderMdxBody(source: string) {
  return compileMDX({
    source,
    components: mdxComponents,
    options: { parseFrontmatter: false },
  });
}
