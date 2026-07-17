import { useState, type FormEvent } from "react"
import { Mail, LifeBuoy, Send, CheckCircle2 } from "lucide-react"
import { SITE } from "@/data/content"
import { useDocumentMeta } from "@/hooks/useDocumentMeta"
import { PageHero } from "@/components/PageHero"
import { Reveal } from "@/components/Reveal"
import { Button } from "@/components/Button"
import { cn } from "@/lib/utils"

interface FormState {
  name: string
  email: string
  company: string
  message: string
}

interface Errors {
  name?: string
  email?: string
  message?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const emailChannels = [
  { label: "General enquiries", email: SITE.emails.general, icon: Mail },
  { label: "Support", email: SITE.emails.support, icon: LifeBuoy },
  { label: "New projects", email: SITE.emails.contact, icon: Send },
]

export default function Contact() {
  useDocumentMeta({
    title: "Contact — Verity Six",
    description:
      "Get in touch with Verity Six. Tell us about your project and we will respond with honest, practical next steps.",
  })

  const [form, setForm] = useState<FormState>({ name: "", email: "", company: "", message: "" })
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)

  function validate(state: FormState): Errors {
    const next: Errors = {}
    if (!state.name.trim()) next.name = "Please enter your name."
    if (!state.email.trim()) next.email = "Please enter your email."
    else if (!EMAIL_RE.test(state.email.trim())) next.email = "Please enter a valid email address."
    if (!state.message.trim()) next.message = "Please tell us a little about your project."
    else if (state.message.trim().length < 10) next.message = "Please add a little more detail (10+ characters)."
    return next
  }

  function update(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof Errors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    const subject = `New project enquiry from ${form.name.trim()}`
    const bodyLines = [
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      form.company.trim() ? `Company: ${form.company.trim()}` : null,
      "",
      form.message.trim(),
    ].filter((line) => line !== null)

    const mailto = `mailto:${SITE.emails.contact}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`

    // Open the user's email client with a fully composed message.
    window.location.href = mailto
    setSubmitted(true)
  }

  const inputClass =
    "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"

  return (
    <>
      <PageHero
        kicker="Contact"
        title="Let's talk about what you're building."
        description="Tell us about your project, timeline, and goals. We read every message and reply with honest, practical next steps — usually within two business days."
      />

      <section>
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-24">
          {/* Channels */}
          <Reveal className="md:col-span-5">
            <h2 className="font-serif text-2xl font-semibold text-foreground">Prefer email?</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Reach the right part of the studio directly. We keep our inboxes tidy and honest — no auto-responders,
              no black holes.
            </p>
            <ul className="mt-8 flex flex-col gap-3">
              {emailChannels.map((channel) => {
                const Icon = channel.icon
                return (
                  <li key={channel.email}>
                    <a
                      href={`mailto:${channel.email}`}
                      className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
                    >
                      <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-xs uppercase tracking-[0.15em] text-muted-foreground">
                          {channel.label}
                        </span>
                        <span className="text-foreground transition-colors group-hover:text-primary">
                          {channel.email}
                        </span>
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </Reveal>

          {/* Form */}
          <Reveal delay={120} className="md:col-span-7">
            <div className="rounded-2xl border border-border bg-card p-6 md:p-9">
              {submitted ? (
                <div className="flex flex-col items-center py-10 text-center" role="status" aria-live="polite">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h2 className="mt-6 font-serif text-2xl font-semibold text-foreground">Your message is ready to send</h2>
                  <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
                    We&apos;ve opened your email app with the details filled in. If it didn&apos;t open, email us
                    directly at{" "}
                    <a href={`mailto:${SITE.emails.contact}`} className="text-primary underline-offset-4 hover:underline">
                      {SITE.emails.contact}
                    </a>
                    .
                  </p>
                  <Button
                    variant="outline"
                    className="mt-8"
                    type="button"
                    onClick={() => {
                      setSubmitted(false)
                      setForm({ name: "", email: "", company: "", message: "" })
                    }}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                        Name <span className="text-primary">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={cn(inputClass, errors.name && "border-primary")}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-2 text-xs text-primary">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                        Email <span className="text-primary">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={cn(inputClass, errors.email && "border-primary")}
                        placeholder="you@company.com"
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-2 text-xs text-primary">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm font-medium text-foreground">
                      Company <span className="text-muted-foreground">(optional)</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      value={form.company}
                      onChange={(e) => update("company", e.target.value)}
                      className={inputClass}
                      placeholder="Company or project name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={cn(inputClass, "resize-y", errors.message && "border-primary")}
                      placeholder="Tell us about your project, goals, and timeline."
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-2 text-xs text-primary">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="mt-2">
                    <Button type="submit" variant="primary" className="w-full sm:w-auto">
                      Send message
                      <Send className="h-4 w-4" aria-hidden="true" />
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
