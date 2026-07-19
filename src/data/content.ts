import {
   Globe,
  Palette,
  Briefcase,
  FlaskConical,
  GraduationCap,
  ShieldCheck,
  type LucideIcon,
  Lightbulb,
  Rocket,
  Handshake,
  MessageCircle,
  TrendingUp,
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
    title: "Digital",
    description: "Bringing Your Vision Online — We create modern websites and digital experiences that help businesses build a strong online presence and connect with the people who matter most.",
    icon: Globe,
  },
  {
    number: "02",
    title: "Creative",
    description: "Where Ideas Find Their Voice — We turn ideas into meaningful designs, compelling content, and memorable brands that people recognize and trust.",
    icon: Palette,
  },
  {
    number: "03",
    title: "Careers",
    description: "Growing People, Growing Possibilities — We believe talent deserves opportunity. We support individuals with practical pathways to learn, grow, and succeed in their careers.",
    icon: Briefcase,
  },
  {
    number: "04",
    title: "Labs",
    description: "Turning Curiosity into Innovation — Every breakthrough starts with a question. We research, test, and build practical technology inspired by real customer needs.",
    icon: FlaskConical,
  },
  {
    number: "05",
    title: "Academy",
    description: "Learning That Lasts — We create learning experiences that build confidence, develop practical skills, and prepare people for the opportunities ahead.",
    icon: GraduationCap,
  },
  {
    number: "06",
    title: "Secure",
    description: "Protecting What You Value — Trust is built through responsibility. We encourage secure digital practices that help businesses protect their data, reputation, and future.",
    icon: ShieldCheck,
  },
]
// services icons

export interface Service {
  title: string
  description: string
  icon: LucideIcon
  capabilities: string[]
}

export const SERVICES: Service[] = [
{
  title: "Caption 01",
  description: "Every successful brand starts with one brave idea. What's yours?",
  icon: Lightbulb,
  capabilities: [],
},
{
  title: "Caption 02",
  description: "The future belongs to those who keep creating, learning, and moving forward.",
  icon: Rocket,
  capabilities: [],
},
{
  title: "Caption 03",
  description: "We're here to build more than technology—we're here to build trust, opportunity, and lasting impact.",
  icon: Handshake,
  capabilities: [],
},
{
  title: "Caption 04",
  description: "Your story deserves to be seen, heard, and remembered. Let's bring it to life together.",
  icon: MessageCircle,
  capabilities: [],
},
{
  title: "Caption 05",
  description: "Big dreams begin with small steps. Today is a great day to start building yours.",
  icon: TrendingUp,
  capabilities: [],
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
