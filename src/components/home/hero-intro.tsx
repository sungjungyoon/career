import Image from "next/image";
import Link from "next/link";
import type { CareerFrontmatter } from "@/types/content";

type Props = {
  profile: CareerFrontmatter;
};

export function HeroIntro({ profile }: Props) {
  return (
    <section id="hero" className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-sky-400/25 blur-[100px] dark:bg-sky-500/15" />
        <div className="absolute -right-24 top-24 h-[380px] w-[380px] rounded-full bg-violet-400/20 blur-[90px] dark:bg-violet-500/12" />
        <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-fuchsia-400/15 blur-[80px] dark:bg-fuchsia-500/10" />
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-20 lg:pt-28">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          <div>
            <p className="inline-flex rounded-full border border-black/5 bg-white/60 px-4 py-1.5 text-xs font-medium tracking-wide text-muted shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5">
              {profile.role}
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
              <span className="bg-gradient-to-br from-sky-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent dark:from-sky-400 dark:via-violet-400 dark:to-fuchsia-400">
                {profile.name}
              </span>
              <span className="mt-3 block text-2xl font-semibold tracking-tight text-foreground/90 sm:text-3xl">
                {"\ub2e8\uc21c\ud558\uace0 \uac15\ub825\ud55c \ud504\ub85c\uc81c\ud2b8 \uacbd\ud5d8\uc744 \ub9cc\ub4ed\ub2c8\ub2e4"}
              </span>
            </h1>
            {profile.tagline ? (
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                {profile.tagline}
              </p>
            ) : null}

            <div className="mt-8 flex flex-wrap gap-3">
              {profile.email ? (
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background shadow-lg shadow-black/10 transition hover:opacity-90 dark:shadow-black/40"
                >
                  {"\uc774\uba54\uc77c \ubb38\uc758"}
                </a>
              ) : null}
              {profile.github ? (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 px-5 py-2.5 text-sm font-semibold text-foreground backdrop-blur-md transition hover:bg-white dark:border-white/15 dark:bg-white/5 dark:hover:bg-white/10"
                >
                  GitHub
                </a>
              ) : null}
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 px-5 py-2.5 text-sm font-semibold text-foreground backdrop-blur-md transition hover:bg-white dark:border-white/15 dark:bg-white/5 dark:hover:bg-white/10"
              >
                {"\uc804\uccb4 \ud504\ub85c\uc81d\ud2b8"}
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-sky-600 hover:text-sky-500 dark:text-sky-400"
              >
                {"\uc5f0\ub77d\ucc98 \ubcf4\uae30"}
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px]">
              <div className="absolute inset-0 -z-10 scale-105 rounded-[2.8rem] bg-gradient-to-br from-white/50 to-transparent blur-2xl dark:from-white/10" />
              {/* <div className="rounded-[2.5rem] border border-black/10 bg-white/70 p-3 shadow-[0_28px_64px_-18px_rgba(0,0,0,0.35)] backdrop-blur-2xl dark:border-white/10 dark:bg-neutral-900/55 dark:shadow-black/60">
                <div className="relative aspect-[9/19] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#f7e8ff] via-[#e8f0ff] to-[#dff7ff] dark:from-[#231b31] dark:via-[#1b2236] dark:to-[#162935]">
                  <Image
                    src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92eee?auto=format&fit=crop&w=1400&q=90"
                    alt="Pastel pink and blue 3D object"
                    fill
                    className="object-contain p-5"
                    sizes="320px"
                    priority
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
