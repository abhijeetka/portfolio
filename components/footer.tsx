import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Personal } from "@/lib/types"

interface FooterProps {
  personal: Personal
}

export default function Footer({ personal }: FooterProps) {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 text-center">
        <div className="flex items-center gap-4">
          {personal.github && (
            <Button variant="ghost" size="icon" asChild>
              <Link href={personal.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          )}
          {personal.linkedin && (
            <Button variant="ghost" size="icon" asChild>
              <Link href={personal.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          )}
          {personal.email && (
            <Button variant="ghost" size="icon" asChild>
              <Link href={`mailto:${personal.email}`}>
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          )}
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

