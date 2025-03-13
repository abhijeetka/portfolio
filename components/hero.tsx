"use client"

import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import type { Personal } from "@/lib/types"

interface HeroProps {
  personal: Personal
}

export default function Hero({ personal }: HeroProps) {
  return (
    <section id="home" className="container relative px-4 md:px-6 py-12 md:py-24 lg:py-32 overflow-hidden">
      <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              {personal.greeting} <span className="text-highlight">{personal.name}</span>
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl">{personal.title}</p>
            <p className="text-muted-foreground md:text-xl max-w-[600px]">{personal.summary}</p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild className="bg-highlight hover:bg-highlight/90 text-white">
              <Link
                href="#contact"
                className="flex items-center gap-2"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector("#contact")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Contact Me <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild className="border-highlight text-highlight hover:bg-highlight/10">
              <Link
                href={personal.resumeUrl}
                className="flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </Link>
            </Button>
          </div>
          <div className="flex items-center gap-4 mt-4">
            {personal.github && (
              <Button variant="ghost" size="icon" asChild className="hover:text-highlight">
                <Link href={personal.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            )}
            {personal.linkedin && (
              <Button variant="ghost" size="icon" asChild className="hover:text-highlight">
                <Link href={personal.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            )}
            {personal.email && (
              <Button variant="ghost" size="icon" asChild className="hover:text-highlight">
                <Link href={`mailto:${personal.email}`}>
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-highlight/20 to-highlight/40 blur-3xl opacity-50"></div>
            <Image
              src={personal.avatar || "/placeholder.svg?height=400&width=400"}
              alt={personal.name}
              width={400}
              height={400}
              className="rounded-full object-cover border-4 border-highlight/20 relative z-10"
              priority
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="floating-logo absolute top-1/4 left-1/4 w-16 h-16 opacity-20">
          <Image src="/placeholder.svg?height=64&width=64&text=AWS" alt="AWS" width={64} height={64} />
        </div>
        <div className="floating-logo absolute top-1/3 right-1/4 w-12 h-12 opacity-20">
          <Image src="/placeholder.svg?height=48&width=48&text=K8s" alt="Kubernetes" width={48} height={48} />
        </div>
        <div className="floating-logo absolute bottom-1/4 left-1/3 w-14 h-14 opacity-20">
          <Image src="/placeholder.svg?height=56&width=56&text=Docker" alt="Docker" width={56} height={56} />
        </div>
        <div className="floating-logo absolute top-1/2 right-1/3 w-10 h-10 opacity-20">
          <Image src="/placeholder.svg?height=40&width=40&text=Git" alt="Git" width={40} height={40} />
        </div>
        <div className="floating-logo absolute bottom-1/3 right-1/4 w-16 h-16 opacity-20">
          <Image src="/placeholder.svg?height=64&width=64&text=Terraform" alt="Terraform" width={64} height={64} />
        </div>
      </div>
    </section>
  )
}

