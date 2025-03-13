import type { Experience as ExperienceType } from "@/lib/types"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ExperienceProps {
  experience: ExperienceType
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="container px-4 md:px-6 py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Work Experience</h2>
          <p className="text-muted-foreground md:text-xl">{experience.description}</p>
        </div>

        <div className="relative pl-6 border-l border-primary/30 space-y-8">
          {experience.positions.map((position, index) => (
            <div key={index} className="relative">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[26px] top-1"></div>
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{position.title}</h3>
                      <p className="text-muted-foreground">{position.company}</p>
                    </div>
                    <div className="text-sm text-muted-foreground">{position.period}</div>
                  </div>
                  <p className="mb-4">{position.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Responsibilities:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      {position.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {position.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

