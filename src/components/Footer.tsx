import { Link } from "react-router-dom"
import { Mail } from "lucide-react"
import { NAV_LINKS, SITE } from "@/data/content"
import { Wordmark } from "./Wordmark"

const emailList = [
  { label: "General enquiries", email: SITE.emails.general },
  { label: "Support", email: SITE.emails.support },
  { label: "New projects", email: SITE.emails.contact },
]

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="max-w-sm">
            <Wordmark />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{SITE.description}</p>
          </div>

          <nav aria-label="Footer" className="md:justify-self-center">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Explore</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-foreground/80 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Contact</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {emailList.map((item) => (
                <li key={item.email}>
                  <a
                    href={`mailto:${item.email}`}
                    className="group inline-flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-primary"
                  >
                    <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                    <span>
                      <span className="block text-xs text-muted-foreground">{item.label}</span>
                      {item.email}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>
            &copy; {year} {SITE.name}. All rights reserved.
          </p>
          <p className="text-xs uppercase tracking-[0.2em]">Truth &amp; craft, in six.</p>
        </div>
      </div>
    </footer>
  )
}
