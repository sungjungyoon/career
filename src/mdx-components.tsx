import type { ComponentPropsWithoutRef } from "react";
import type { MDXComponents } from "mdx/types";

/** Shared MDX element mapping; parent uses `prose` from Tailwind Typography. */
export const mdxComponents = {
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a
      {...props}
      className="font-medium text-sky-600 underline decoration-sky-600/40 underline-offset-4 transition-colors hover:text-sky-500 hover:decoration-sky-500 dark:text-sky-400 dark:decoration-sky-400/40 dark:hover:text-sky-300"
    />
  ),
} satisfies MDXComponents;
