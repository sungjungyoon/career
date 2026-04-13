import type { CareerFrontmatter } from "@/types/content";

type Props = {
  profile: CareerFrontmatter;
};

export function ContactBand({ profile }: Props) {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-4 pb-24 pt-4 sm:px-6"
    >
      <div className="rounded-[2rem] border border-black/8 bg-gradient-to-br from-white/80 via-white/50 to-white/30 p-8 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.2)] backdrop-blur-xl dark:border-white/10 dark:from-neutral-900/80 dark:via-neutral-900/50 dark:to-neutral-900/30 dark:shadow-black/40 sm:p-10">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Contact
        </h2>
        <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {"\ud611\uc5c5\u00b7 \uc81c\uc548\uc740 \uc5b8\uc81c\ub4e0 \ud658\uc601\uc785\ub2c8\ub2e4"}
        </p>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          {"\uc774\uba54\uc77c\uacfc GitHub\uc744 \ud1b5\ud574 \uc5f0\ub77d\uc8fc\uc138\uc694. \ud3ec\ud2b8\ud3f4\ub9ac\uc624\ub098 \ud504\ub85c\uc81d\ud2b8 \ub0b4\uc6a9\uc744 \uc790\uc720\ub86d\uac8c \ubcf4\ub0b4\uc8fc\uc2dc\uba74 \ube60\ub974\uac8c \ub2f5\ub4dc\ub9b4\uac8c\uc694."}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {profile.email ? (
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90"
            >
              {"\uc774\uba54\uc77c \ubcf4\ub0b4\uae30"}
            </a>
          ) : null}
          {profile.github ? (
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/80 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-md transition hover:bg-white dark:border-white/15 dark:bg-white/5 dark:hover:bg-white/10"
            >
              GitHub {"\uc5f4\uae30"}
            </a>
          ) : null}
          {profile.linkedin ? (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/80 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-md transition hover:bg-white dark:border-white/15 dark:bg-white/5 dark:hover:bg-white/10"
            >
              LinkedIn
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
