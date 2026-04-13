import Link from "next/link";
import { ThemeToggle } from "@/components/theme/theme-toggle";

const nav = [
  { href: "/#intro", label: "\uc18c\uac1c" },
  { href: "/#career", label: "\uacbd\ub825" },
  { href: "/#projects", label: "\ud504\ub85c\uc81d\ud2b8" },
  { href: "/projects", label: "\uc804\uccb4 \ubaa9\ub85d" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/80 bg-background/80 backdrop-blur-md dark:border-neutral-800/80">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground"
        >
          Portfolio
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted sm:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-foreground"
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
