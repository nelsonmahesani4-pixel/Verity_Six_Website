import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

interface WordmarkProps {
  className?: string
  onClick?: () => void
}

export function Wordmark({ className, onClick }: WordmarkProps) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Verity Six — home"
      className={cn("group inline-flex items-baseline gap-2 font-serif leading-none", className)}
    >
      <span className="text-xl font-semibold tracking-tight text-foreground">Verity</span>
      <span className="text-xl font-semibold tracking-tight text-primary">Six</span>
      <span
        aria-hidden="true"
        className="ml-0.5 h-1.5 w-1.5 rounded-full bg-primary transition-transform duration-300 group-hover:scale-150"
      />
    </Link>
  )
}
