export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-neutral-200/80 py-8 text-center text-xs text-muted dark:border-neutral-800/80">
      <p>© {new Date().getFullYear()} — Next.js · Tailwind · MDX</p>
    </footer>
  );
}
