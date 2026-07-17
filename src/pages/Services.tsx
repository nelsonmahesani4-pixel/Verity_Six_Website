import { Check } from "lucide-react"
import { PROCESS_STEPS, SERVICES } from "@/data/content"
import { useDocumentMeta } from "@/hooks/useDocumentMeta"
import { PageHero } from "@/components/PageHero"
import { Reveal } from "@/components/Reveal"
import { SectionHeading } from "@/components/SectionHeading"
import { CTASection } from "@/components/CTASection"

export default function Services() {
  useDocumentMeta({
    title: "Services — Verity Six",
    description:
      "Digital and creative services from Verity Six: brand identity, web design and development, product design, content and motion, SEO, and social campaigns.",
  })

  return (
    <>
      <PageHero
        kicker="Services"
        title="Digital & creative work, done with care."
        description="We keep our offering deliberately focused so every discipline is delivered by senior hands. Here is how we can help — and exactly what each engagement includes."
      />

      {/* Services grid */}
      <section>
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <div className="grid gap-6 md:grid-cols-2">
            {SERVICES.map((service, i) => {
              const Icon = service.icon
              return (
                <Reveal
                  key={service.title}
                  delay={(i % 2) * 100}
                  className="flex flex-col rounded-2xl border border-border bg-card p-8 md:p-10"
                >
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h2 className="font-serif text-2xl font-semibold text-foreground">{service.title}</h2>
                  </div>
                  <p className="mt-5 leading-relaxed text-muted-foreground">{service.description}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {service.capabilities.map((cap) => (
                      <li key={cap} className="flex items-center gap-2.5 text-sm text-foreground/90">
                        <Check className="h-4 w-4 flex-none text-primary" aria-hidden="true" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <SectionHeading
              kicker="Our process"
              title="Four steps, start to finish."
              description="Every service follows the same transparent path, so you always know where a project stands and what happens next."
            />
          </Reveal>
          <ol className="mt-14 flex flex-col gap-4">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal
                key={step.number}
                delay={i * 60}
                as="li"
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-8 md:flex-row md:items-center md:gap-10"
              >
                <span className="font-serif text-4xl font-semibold text-primary md:w-24">{step.number}</span>
                <div className="md:flex-1">
                  <h3 className="font-serif text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CTASection />
    </>
  )
}
