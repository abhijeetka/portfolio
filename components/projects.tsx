import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import type { Projects as ProjectsType } from "@/lib/types"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProjectsProps {
  projects: ProjectsType
}

export default function Projects({ projects }: ProjectsProps) {
  // Only show the first 3 projects
  const featuredProjects = projects.items.slice(0, 3)

  return (
    <section id="projects" className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Featured Projects</h2>
          <p className="text-muted-foreground md:text-xl">{projects.description}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col h-full bg-card/50 backdrop-blur-sm">
              <div className="relative aspect-video">
                <Image
                  src={project.image || "/placeholder.svg?height=400&width=600"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4 space-y-2 flex-1 flex flex-col">
                <h3 className="font-bold text-xl">{project.title}</h3>
                <p className="text-sm text-muted-foreground flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 pt-4">
                  {project.liveUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-highlight text-highlight hover:bg-highlight/10"
                    >
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                  {project.repoUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-highlight text-highlight hover:bg-highlight/10"
                    >
                      <Link
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <Github className="h-3.5 w-3.5" />
                        Code
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button asChild className="bg-highlight hover:bg-highlight/90 text-white">
            <Link href="/devops" className="flex items-center gap-2">
              Explore More Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

