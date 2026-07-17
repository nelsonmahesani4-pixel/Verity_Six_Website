import type { ElementType, ReactNode } from "react"
import { useReveal } from "@/hooks/useReveal"
import { cn } from "@/lib/utils"

interface RevealProps {
  children: ReactNode
  as?: ElementType
  className?: string
  delay?: number
}

export function Reveal({ children, as: Tag = "div", className, delay = 0 }: RevealProps) {
  const { ref, isVisible } = useReveal()
  return (
    <Tag
      ref={ref}
      className={cn("reveal", isVisible && "is-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
