import type { About as AboutType } from "@/lib/types"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface AboutProps {
  about: AboutType
}

export default function About({ about }: AboutProps) {
  return (
    <section id="about" className="container px-4 md:px-6 py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="mx-auto grid max-w-5xl gap-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Me</h2>
          <p className="text-muted-foreground md:text-xl max-w-[700px]">{about.description}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {about.highlights.map((highlight, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {highlight.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

