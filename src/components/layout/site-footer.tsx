import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-black/5 py-10 text-center text-xs text-muted dark:border-white/10">
      <p className="font-medium text-foreground/80">
        © {new Date().getFullYear()} Yoon Sung Jung
      </p>
      <p className="mt-2">
        Next.js App Router · Tailwind CSS · MDX ·{" "}
        <Link href="/projects" className="text-sky-600 hover:underline dark:text-sky-400">
          Projects
        </Link>
      </p>
    </footer>
  );
}
