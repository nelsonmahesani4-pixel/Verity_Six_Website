import { ArrowRight, Check } from "lucide-react"
import {
  COMPANY_PROMISE,
  PROCESS_STEPS,
  SERVICES,
  SIX_PILLARS,
  SITE,
} from "@/data/content"
import { useDocumentMeta } from "@/hooks/useDocumentMeta"
import { Reveal } from "@/components/Reveal"
import { SectionHeading } from "@/components/SectionHeading"
import { ButtonLink } from "@/components/Button"
import { CTASection } from "@/components/CTASection"

export default function Home() {
  useDocumentMeta({
    title: "Verity Six — Digital & Creative Studio",
    description: SITE.description,
  })

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        />
        <div className="mx-auto max-w-6xl px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-44">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
              Digital &amp; Creative Studio
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 max-w-4xl text-balance font-serif text-5xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl">
              Honest brands. <span className="text-primary">Exceptional</span> digital work.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Verity Six is a digital and creative studio built on truth and craft. We help ambitious teams
              clarify their brand and ship digital experiences that actually perform.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/contact" variant="primary">
                Start a project
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink to="/services" variant="outline">
                Explore our services
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Company Promise */}
      <section className="border-t border-border bg-card/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
          <Reveal>
            <SectionHeading kicker={COMPANY_PROMISE.kicker} title={COMPANY_PROMISE.title} />
          </Reveal>
          <Reveal delay={120} className="flex flex-col justify-center">
            <p className="text-pretty leading-relaxed text-muted-foreground md:text-lg">
              {COMPANY_PROMISE.body}
            </p>
            <ul className="mt-8 flex flex-col gap-4">
              {COMPANY_PROMISE.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-foreground/90">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Six Pillars */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <SectionHeading
              kicker="The Six Pillars"
              title="Six principles behind everything we make."
              description="Our name is a promise. These six pillars are the standard we hold every engagement to — from the first conversation to launch and beyond."
            />
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {SIX_PILLARS.map((pillar, i) => {
              const Icon = pillar.icon
              return (
                <Reveal
                  key={pillar.number}
                  delay={(i % 3) * 80}
                  className="group flex flex-col bg-card p-8 transition-colors duration-300 hover:bg-accent"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-serif text-2xl text-muted-foreground/40">{pillar.number}</span>
                  </div>
                  <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <SectionHeading
                kicker="What we do"
                title="Digital & creative services."
                description="A focused set of capabilities that cover the full arc of a brand — from identity through to the products and campaigns that carry it."
              />
            </Reveal>
            <Reveal delay={120}>
              <ButtonLink to="/services" variant="ghost" className="px-0">
                All services
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => {
              const Icon = service.icon
              return (
                <Reveal
                  key={service.title}
                  delay={(i % 3) * 80}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4-step process */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <SectionHeading
              kicker="How we work"
              title="A clear, four-step process."
              description="No mystery, no runaround. Here is exactly how an engagement runs from first hello to ongoing growth."
            />
          </Reveal>
          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal
                key={step.number}
                delay={i * 80}
                as="li"
                className="relative flex flex-col rounded-2xl border border-border bg-card p-8"
              >
                <span className="font-serif text-4xl font-semibold text-primary">{step.number}</span>
                <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CTASection />
    </>
  )
}
