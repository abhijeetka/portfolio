export interface NavItem {
  id: string
  label: string
  href: string
}

export interface Personal {
  name: string
  title: string
  greeting: string
  summary: string
  avatar?: string
  email?: string
  phone?: string
  location?: string
  github?: string
  linkedin?: string
  resumeUrl: string
}

export interface About {
  description: string
  highlights: Array<{
    title: string
    description: string
    tags: string[]
  }>
}

export interface Skills {
  description: string
  categories: {
    [category: string]: Array<{
      name: string
      level: number
    }>
  }
}

export interface Experience {
  description: string
  positions: Array<{
    title: string
    company: string
    period: string
    description: string
    responsibilities: string[]
    technologies: string[]
  }>
}

export interface Projects {
  description: string
  items: Array<{
    title: string
    description: string
    image?: string
    technologies: string[]
    liveUrl?: string
    repoUrl?: string
  }>
}

export interface Education {
  description: string
  items: Array<{
    degree: string
    institution: string
    years: string
    description?: string
    achievements?: string[]
  }>
}

export interface Certifications {
  description: string
  items: Array<{
    name: string
    issuer: string
    year: string
    description?: string
  }>
  logos: Array<{
    name: string
    image?: string
  }>
}

export interface Tools {
  description: string
  categories: {
    [category: string]: Array<{
      name: string
      logo?: string
    }>
  }
}

export interface Contact {
  description: string
  email?: string
  phone?: string
  location?: string
  availability?: string
}

export interface PortfolioData {
  navItems: NavItem[]
  personal: Personal
  about: About
  skills: Skills
  experience: Experience
  projects: Projects
  education: Education
  certifications: Certifications
  tools: Tools
  contact: Contact
}

