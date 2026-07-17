import type { ReactNode } from "react"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

type Variant = "primary" | "outline" | "ghost"

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50"

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:brightness-110",
  outline: "border border-border text-foreground hover:border-primary hover:text-primary",
  ghost: "text-foreground hover:text-primary",
}

interface CommonProps {
  variant?: Variant
  className?: string
  children: ReactNode
}

export function ButtonLink({
  to,
  variant = "primary",
  className,
  children,
}: CommonProps & { to: string }) {
  const isExternal = to.startsWith("mailto:") || to.startsWith("http")
  if (isExternal) {
    return (
      <a href={to} className={cn(base, variants[variant], className)}>
        {children}
      </a>
    )
  }
  return (
    <Link to={to} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  )
}

export function Button({
  variant = "primary",
  className,
  children,
  type = "button",
  disabled,
  onClick,
}: CommonProps & { type?: "button" | "submit"; disabled?: boolean; onClick?: () => void }) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(base, variants[variant], className)}
    >
      {children}
    </button>
  )
}
