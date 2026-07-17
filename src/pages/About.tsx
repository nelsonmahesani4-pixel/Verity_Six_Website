import { COMPANY_PROMISE, SIX_PILLARS, VALUES } from "@/data/content"
import { useDocumentMeta } from "@/hooks/useDocumentMeta"
import { PageHero } from "@/components/PageHero"
import { Reveal } from "@/components/Reveal"
import { SectionHeading } from "@/components/SectionHeading"
import { CTASection } from "@/components/CTASection"

export default function About() {
  useDocumentMeta({
    title: "About — Verity Six",
    description:
      "Verity Six is a small, senior digital and creative studio built on honesty and craft. Learn about our promise, values, and the six pillars behind our work.",
  })

  return (
    <>
      <PageHero
        kicker="About"
        title="A studio built on truth and craft."
        description="Verity Six is a small, senior team that believes good work starts with honesty. We named ourselves after that idea — verity, and the six pillars we hold ourselves to."
      />

      {/* Promise */}
      <section>
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
          <Reveal className="md:col-span-5">
            <SectionHeading kicker={COMPANY_PROMISE.kicker} title={COMPANY_PROMISE.title} />
          </Reveal>
          <Reveal delay={120} className="md:col-span-7 md:pt-2">
            <p className="text-pretty leading-relaxed text-muted-foreground md:text-lg">{COMPANY_PROMISE.body}</p>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground md:text-lg">
              We stay intentionally small so that the people you meet are the people who do the work. That means
              fewer projects at once, more attention on each, and a direct line to the makers throughout.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <SectionHeading
              kicker="How we operate"
              title="What you can count on."
              description="These are the working principles that shape every relationship we take on."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {VALUES.map((value, i) => (
              <Reveal
                key={value.title}
                delay={(i % 2) * 100}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <h3 className="font-serif text-xl font-semibold text-foreground">{value.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{value.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars recap */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <SectionHeading
              kicker="The Six Pillars"
              title="The standard behind our name."
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SIX_PILLARS.map((pillar, i) => {
              const Icon = pillar.icon
              return (
                <Reveal
                  key={pillar.number}
                  delay={(i % 3) * 80}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-7"
                >
                  <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground">
                      <span className="text-muted-foreground/50">{pillar.number}</span> {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
