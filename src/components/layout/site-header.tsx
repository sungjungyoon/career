import Link from "next/link";
import { ThemeToggle } from "@/components/theme/theme-toggle";

const nav = [
  { href: "/#hero", label: "Home" },
  { href: "/#about", label: "\uc18c\uac1c" },
  { href: "/#career", label: "\uacbd\ub825" },
  { href: "/#projects", label: "\ud504\ub85c\uc81d\ud2b8" },
  { href: "/#contact", label: "\uc5f0\ub77d" },
  { href: "/projects", label: "\uc804\uccb4 \ubaa9\ub85d" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-background/75 backdrop-blur-2xl dark:border-white/10 dark:bg-black/55">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground"
        >
          YSJ
        </Link>
        <nav className="hidden items-center gap-1 text-[13px] font-medium text-muted md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 transition hover:bg-black/5 hover:text-foreground dark:hover:bg-white/10"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
