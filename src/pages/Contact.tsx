import { useState, type FormEvent } from "react"
import { Mail, LifeBuoy, Send, CheckCircle2 } from "lucide-react"
import { SITE } from "@/data/content"
import { useDocumentMeta } from "@/hooks/useDocumentMeta"
import { PageHero } from "@/components/PageHero"
import { Reveal } from "@/components/Reveal"
import { Button } from "@/components/Button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { toast } from "sonner";

const interviewQuestions = [
  "What inspired you to choose Verity6 for your project?",
  "What challenge were you hoping to solve before working with us?",
  "What was your first impression of the Verity6 team?",
  "What part of our work made the biggest difference for you?",
  "How would you describe your overall experience with Verity6 in three words?",
  "Did our team understand your vision and bring it to life? We'd love to hear more.",
  "What do you value most about the final result?",
  "If you could describe Verity6 to a friend in one sentence, what would you say?",
  "What advice or feedback would help us improve and serve you even better?",
  "Is there anything about your experience that you'd like others to know?",
];

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
  const [answers, setAnswers] = useState(
  Array(interviewQuestions.length).fill("")
);

  // interview form submit handler
 const SubmitHandler = () => {
  const isFilled = answers.every(
    (answer) => answer.trim() !== ""
  );

  if (!isFilled) {
    toast.error("Please fill all fields first!");
    return;
  }

  toast.success("Answers submitted successfully!");
};

  const inputClass =
    "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"

  return (
    <>
      <PageHero
         kicker="Customer Interview"
  title="We'd Love to Hear About Your Experience"
  description="Your feedback helps us improve and continue delivering meaningful digital experiences. Please answer the questions below and share your honest thoughts."
/>
{/* Interview Form */}

    <div className="mx-auto mt-12 w-full max-w-4xl px-4 sm:px-6 lg:px-8">
  <div className="space-y-6">
    {interviewQuestions.map((question, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        className="overflow-hidden rounded-2xl border border-[#3d2c1e] bg-[#111111] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#8b5e3c] hover:shadow-[0_15px_40px_rgba(139,94,60,0.25)]"
      >
        {/* Header */}
        <div className="border-b border-[#2a2a2a] bg-gradient-to-r from-[#1a1a1a] via-[#161616] to-[#111111] px-5 py-4 sm:px-6">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#8b5e3c] text-base font-bold text-white shadow-md">
              {index + 1}
            </div>

            <h3 className="pt-1 text-base font-semibold leading-relaxed text-white sm:text-lg">
              {question}
            </h3>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6">
          <textarea 
          rows={5} 
          value={answers[index]} 
          onChange={(e) => { 
            const updatedAnswers = [...answers]; 
            updatedAnswers[index] = e.target.value; 
            setAnswers(updatedAnswers); }}
            placeholder="Write your answer here..." 
            className="w-full resize-none rounded-xl border border-[#3d2c1e] bg-[#1b1b1b] p-4 text-sm text-gray-200 placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-[#8b5e3c] focus:ring-2 focus:ring-[#8b5e3c]/30 sm:text-base"
/>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-xs text-gray-500">
              Be honest and specific in your response.
            </p>

            <span className="rounded-full border border-[#8b5e3c]/40 bg-[#22170f] px-3 py-1 text-xs font-medium text-[#c89b6d]">
              Practice
            </span>
          </div>
        </div>
      </motion.div>
    ))}
    <div className="mx-auto mt-10 flex justify-center">
  <motion.button
  onClick={SubmitHandler}
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.96 }}
  className="rounded-xl bg-[#8b5e3c] px-10 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#a36b43] hover:shadow-[0_10px_30px_rgba(139,94,60,0.35)] focus:outline-none focus:ring-2 focus:ring-[#8b5e3c]/50"
>
  Submit Answers
</motion.button>
</div>
  </div>

</div>


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
