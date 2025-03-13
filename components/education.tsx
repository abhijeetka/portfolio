import type { Education as EducationType } from "@/lib/types"
import { Card, CardContent } from "@/components/ui/card"

interface EducationProps {
  education: EducationType
}

export default function Education({ education }: EducationProps) {
  return (
    <section id="education" className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Education</h2>
          <p className="text-muted-foreground md:text-xl">{education.description}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {education.items.map((edu, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                <p className="text-highlight font-medium">{edu.institution}</p>
                <p className="text-sm text-muted-foreground mb-4">{edu.years}</p>
                {edu.description && <p>{edu.description}</p>}
                {edu.achievements && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-sm mb-2">Key Achievements:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

