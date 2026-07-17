import { Clock, ArrowRight } from "lucide-react"
import { SITE } from "@/data/content"
import { useDocumentMeta } from "@/hooks/useDocumentMeta"
import { PageHero } from "@/components/PageHero"
import { Reveal } from "@/components/Reveal"
import { ButtonLink } from "@/components/Button"

const PLACEHOLDERS = [
  "Brand Identity",
  "Web Experience",
  "Product Design",
  "Content & Motion",
  "Digital Campaign",
  "SEO & Growth",
]

export default function Work() {
  useDocumentMeta({
    title: "Work — Verity Six",
    description:
      "Selected work from Verity Six is coming soon. We are preparing a considered set of case studies to share.",
  })

  return (
    <>
      <PageHero
        kicker="Work"
        title="Selected work, coming soon."
        description="We are putting together a considered set of case studies that show the thinking, craft, and outcomes behind our projects. Check back shortly — we would rather show it properly than rush it."
      />

      <section>
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PLACEHOLDERS.map((label, i) => (
              <Reveal
                key={label}
                delay={(i % 3) * 80}
                className="group relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-2xl border border-dashed border-border bg-card p-7"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,var(--color-foreground)_1px,transparent_0)] [background-size:16px_16px]"
                />
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-primary">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  Coming Soon
                </span>
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">{label}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">Case study in progress</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 rounded-2xl border border-border bg-card/40 p-8 text-center md:p-12">
            <h2 className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
              Want to be one of our first case studies?
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
              We are actively taking on new projects. If you would like to work together, we would love to hear
              what you are building.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink to="/contact" variant="primary">
                Start a project
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink to={`mailto:${SITE.emails.contact}`} variant="outline">
                {SITE.emails.contact}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
