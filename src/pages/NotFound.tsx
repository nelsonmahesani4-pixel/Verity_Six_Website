import { useDocumentMeta } from "@/hooks/useDocumentMeta"
import { ButtonLink } from "@/components/Button"

export default function NotFound() {
  useDocumentMeta({
    title: "Page not found — Verity Six",
    description: "The page you were looking for could not be found.",
  })

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-5 py-32 text-center md:px-8">
      <span className="font-serif text-7xl font-semibold text-primary md:text-8xl">404</span>
      <h1 className="mt-6 font-serif text-3xl font-semibold text-foreground md:text-4xl">
        This page took an honest wrong turn.
      </h1>
      <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
        The page you were looking for does not exist or may have moved. Let&apos;s get you back on track.
      </p>
      <div className="mt-8">
        <ButtonLink to="/" variant="primary">
          Back to home
        </ButtonLink>
      </div>
    </section>
  )
}
