import { Github, Mail, Linkedin, FileText } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-background border-b">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="#" className="text-xl font-bold">
            John Doe
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#about" className="font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#projects" className="font-medium transition-colors hover:text-primary">
              Projects
            </Link>
            <Link href="#skills" className="font-medium transition-colors hover:text-primary">
              Skills
            </Link>
            <Link href="#contact" className="font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="mailto:example@example.com">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section id="hero" className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Hi, I'm John Doe</h1>
                <p className="text-muted-foreground md:text-xl">
                  Full Stack Developer specializing in building exceptional digital experiences
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="#contact">Get in Touch</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Download Resume
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Profile"
                width={400}
                height={400}
                className="rounded-full object-cover border-4 border-border"
                priority
              />
            </div>
          </div>
        </section>
        <section id="about" className="container px-4 md:px-6 py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Me</h2>
              <p className="text-muted-foreground md:text-xl">
                I'm a passionate Full Stack Developer with over 5 years of experience building web applications. I enjoy
                solving complex problems and creating intuitive, efficient user experiences.
              </p>
              <p className="text-muted-foreground md:text-xl">
                When I'm not coding, you can find me hiking, reading, or experimenting with new technologies. I believe
                in continuous learning and staying updated with the latest industry trends.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Work Experience</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">Senior Developer at Tech Solutions</h4>
                  <p className="text-sm text-muted-foreground">2020 - Present</p>
                  <p>Led development of multiple web applications using React, Node.js, and PostgreSQL.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Web Developer at Digital Innovations</h4>
                  <p className="text-sm text-muted-foreground">2018 - 2020</p>
                  <p>Developed responsive websites and implemented SEO strategies for various clients.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-5xl space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Featured Projects</h2>
              <p className="text-muted-foreground md:text-xl">
                Here are some of my recent projects that showcase my skills and expertise
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden">
                <div className="relative aspect-video">
                  <Image src="/placeholder.svg?height=400&width=600" alt="Project 1" fill className="object-cover" />
                </div>
                <CardContent className="p-4 space-y-2">
                  <h3 className="font-bold">E-commerce Platform</h3>
                  <p className="text-sm text-muted-foreground">
                    A full-featured online store with payment processing and inventory management.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                  </div>
                  <div className="pt-4">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="#" className="w-full">
                        View Project
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative aspect-video">
                  <Image src="/placeholder.svg?height=400&width=600" alt="Project 2" fill className="object-cover" />
                </div>
                <CardContent className="p-4 space-y-2">
                  <h3 className="font-bold">Task Management App</h3>
                  <p className="text-sm text-muted-foreground">
                    A collaborative task manager with real-time updates and team features.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">Prisma</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                  </div>
                  <div className="pt-4">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="#" className="w-full">
                        View Project
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative aspect-video">
                  <Image src="/placeholder.svg?height=400&width=600" alt="Project 3" fill className="object-cover" />
                </div>
                <CardContent className="p-4 space-y-2">
                  <h3 className="font-bold">AI Content Generator</h3>
                  <p className="text-sm text-muted-foreground">
                    A tool that uses AI to generate marketing content and social media posts.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">OpenAI API</Badge>
                    <Badge variant="secondary">Express</Badge>
                  </div>
                  <div className="pt-4">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="#" className="w-full">
                        View Project
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <Button variant="outline" asChild>
                <Link href="#">View All Projects</Link>
              </Button>
            </div>
          </div>
        </section>
        <section id="skills" className="container px-4 md:px-6 py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="mx-auto max-w-5xl space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Skills & Technologies</h2>
              <p className="text-muted-foreground md:text-xl">Here are the technologies and tools I work with</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Frontend</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Badge>React</Badge>
                    <span className="text-sm text-muted-foreground">Advanced</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge>Next.js</Badge>
                    <span className="text-sm text-muted-foreground">Advanced</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge>TypeScript</Badge>
                    <span className="text-sm text-muted-foreground">Intermediate</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge>Tailwind CSS</Badge>
                    <span className="text-sm text-muted-foreground">Advanced</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Backend</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Badge>Node.js</Badge>
                    <span className="text-sm text-muted-foreground">Advanced</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge>Express</Badge>
                    <span className="text-sm text-muted-foreground">Advanced</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge>PostgreSQL</Badge>
                    <span className="text-sm text-muted-foreground">Intermediate</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge>MongoDB</Badge>
                    <span className="text-sm text-muted-foreground">Intermediate</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Tools & Others</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Badge>Git</Badge>
                    <span className="text-sm text-muted-foreground">Advanced</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge>Docker</Badge>
                    <span className="text-sm text-muted-foreground">Intermediate</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge>AWS</Badge>
                    <span className="text-sm text-muted-foreground">Intermediate</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge>CI/CD</Badge>
                    <span className="text-sm text-muted-foreground">Intermediate</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-5xl space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get In Touch</h2>
              <p className="text-muted-foreground md:text-xl">
                Feel free to reach out if you have any questions or want to work together
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Contact Information</h3>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>example@example.com</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4" />
                    <Link href="https://linkedin.com" className="hover:underline">
                      linkedin.com/in/johndoe
                    </Link>
                  </p>
                  <p className="flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    <Link href="https://github.com" className="hover:underline">
                      github.com/johndoe
                    </Link>
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Send a Message</h3>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your message"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 text-center">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:example@example.com">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

