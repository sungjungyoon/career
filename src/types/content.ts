export type ProjectFrontmatter = {
  title: string;
  summary: string;
  /** ISO date string, e.g. 2025-06-01 */
  date: string;
  tags: string[];
  repo?: string;
  demo?: string;
  featured?: boolean;
  /** Lower sorts first when dates tie */
  order?: number;
};

export type CareerFrontmatter = {
  name: string;
  role: string;
  /** Short line under the name */
  tagline?: string;
  email?: string;
  github?: string;
  linkedin?: string;
};
