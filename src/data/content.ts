import {
  Compass,
  PenTool,
  ShieldCheck,
  Layers,
  Repeat,
  TrendingUp,
  Palette,
  MonitorSmartphone,
  LayoutDashboard,
  Clapperboard,
  Search,
  Megaphone,
  type LucideIcon,
} from "lucide-react"

export const SITE = {
  name: "Verity Six",
  shortName: "V6",
  tagline: "A digital & creative studio built on truth and craft.",
  description:
    "Verity Six is a digital and creative studio that builds honest brands and high-performing digital experiences, guided by six pillars of craft.",
  emails: {
    general: "info@veritysix.com",
    support: "support@veritysix.com",
    contact: "contact@veritysix.com",
  },
}

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Work", to: "/work" },
  { label: "Contact", to: "/contact" },
]

export const COMPANY_PROMISE = {
  kicker: "Our Promise",
  title: "We tell the truth, and we do the work.",
  body: "Verity Six exists to bring honesty back to digital and creative work. No inflated promises, no vanity metrics, no filler. We commit to clear thinking, meticulous craft, and outcomes we can stand behind. Every engagement is measured against a simple standard: did we make the brand clearer, the experience better, and the results real?",
  points: [
    "Clarity over jargon in everything we deliver.",
    "Craft that holds up to close inspection.",
    "Honest measurement and transparent reporting.",
  ],
}

export interface Pillar {
  number: string
  title: string
  description: string
  icon: LucideIcon
}

export const SIX_PILLARS: Pillar[] = [
  {
    number: "01",
    title: "Clarity",
    description: "We strip away noise so the message, the interface, and the intent are unmistakable.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Craft",
    description: "Details are the work. Type, spacing, motion, and code are treated with equal care.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Integrity",
    description: "We say what we will do, then do it. Our recommendations serve the brand, not the invoice.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Strategy",
    description: "Design decisions are anchored to goals, audiences, and evidence rather than trends.",
    icon: Layers,
  },
  {
    number: "05",
    title: "Consistency",
    description: "One coherent system across every touchpoint, so the brand feels the same everywhere.",
    icon: Repeat,
  },
  {
    number: "06",
    title: "Impact",
    description: "We build for measurable outcomes and keep refining after launch, not before.",
    icon: TrendingUp,
  },
]

export interface Service {
  title: string
  description: string
  icon: LucideIcon
  capabilities: string[]
}

export const SERVICES: Service[] = [
  {
    title: "Brand Identity & Design",
    description: "Naming systems, visual identity, and brand guidelines that give your work a confident, consistent voice.",
    icon: Palette,
    capabilities: ["Logo & wordmark systems", "Visual identity", "Brand guidelines", "Art direction"],
  },
  {
    title: "Web Design & Development",
    description: "Fast, accessible, responsive websites engineered with modern tooling and built to scale.",
    icon: MonitorSmartphone,
    capabilities: ["Marketing sites", "Design systems", "Headless & CMS builds", "Performance optimization"],
  },
  {
    title: "UI / UX Product Design",
    description: "Research-led interface and experience design for products people find genuinely easy to use.",
    icon: LayoutDashboard,
    capabilities: ["User research", "Wireframing & prototyping", "Interface design", "Usability testing"],
  },
  {
    title: "Content & Motion",
    description: "Editorial, photography direction, and motion design that make the brand feel alive across channels.",
    icon: Clapperboard,
    capabilities: ["Content strategy", "Motion & animation", "Photo & video direction", "Copywriting"],
  },
  {
    title: "Digital Marketing & SEO",
    description: "Technical SEO and marketing foundations that help the right people find and trust your brand.",
    icon: Search,
    capabilities: ["Technical SEO", "Analytics & reporting", "Landing pages", "Conversion optimization"],
  },
  {
    title: "Social & Campaigns",
    description: "Considered social systems and campaign concepts designed to earn attention honestly.",
    icon: Megaphone,
    capabilities: ["Campaign concepts", "Social templates", "Launch strategy", "Creative production"],
  },
]

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We listen first. Through interviews and audits we learn your goals, audience, and constraints before proposing anything.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We turn findings into a clear strategy — positioning, scope, and success criteria that everyone agrees on.",
  },
  {
    number: "03",
    title: "Design & Build",
    description:
      "We design and engineer in tight, transparent loops, sharing work early and often so there are no surprises.",
  },
  {
    number: "04",
    title: "Launch & Grow",
    description:
      "We ship carefully, measure honestly, and keep iterating so the work continues to earn its keep over time.",
  },
]

export const VALUES = [
  {
    title: "Honest by default",
    description: "We would rather lose a pitch than overstate what we can deliver. Trust compounds; hype does not.",
  },
  {
    title: "Small team, senior work",
    description: "You work directly with the people doing the work — no layers, no hand-offs, no lost context.",
  },
  {
    title: "Systems, not one-offs",
    description: "We design reusable systems so your brand stays consistent long after the engagement ends.",
  },
  {
    title: "Built to last",
    description: "Accessible, performant, and maintainable by default, so the work holds up as you grow.",
  },
]
