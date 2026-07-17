import { ArrowRight } from "lucide-react"
import { SITE } from "@/data/content"
import { Reveal } from "./Reveal"
import { ButtonLink } from "./Button"

export function CTASection() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal className="relative overflow-hidden rounded-2xl border border-border bg-card px-6 py-14 text-center md:px-16 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
          />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Let&apos;s build something true</span>
          <h2 className="mx-auto mt-5 max-w-2xl text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Have a project in mind? Tell us the truth about it.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Share your goals, timeline, and constraints. We&apos;ll respond with honest, practical next steps — no
            pressure and no jargon.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink to="/contact" variant="primary">
              Start a project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink to={`mailto:${SITE.emails.contact}`} variant="outline">
              Email us directly
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
