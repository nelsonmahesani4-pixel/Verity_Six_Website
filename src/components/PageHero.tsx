import { Reveal } from "./Reveal"

interface PageHeroProps {
  kicker: string
  title: string
  description: string
}

export function PageHero({ kicker, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
        <Reveal>
          <span className="mb-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            <span aria-hidden="true" className="h-px w-6 bg-primary" />
            {kicker}
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="max-w-3xl text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
