import Image from "next/image"
import type { Tools as ToolsType } from "@/lib/types"
import { Card, CardContent } from "@/components/ui/card"

interface ToolsProps {
  tools: ToolsType
}

export default function Tools({ tools }: ToolsProps) {
  return (
    <section id="tools" className="container px-4 md:px-6 py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Tools & Technologies</h2>
          <p className="text-muted-foreground md:text-xl">{tools.description}</p>
        </div>

        <div className="grid gap-8">
          {Object.entries(tools.categories).map(([category, toolsList]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-xl font-bold">{category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {toolsList.map((tool) => (
                  <Card key={tool.name} className="bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                      <div className="relative w-12 h-12 mb-3">
                        <Image
                          src={tool.logo || `/placeholder.svg?height=48&width=48&text=${encodeURIComponent(tool.name)}`}
                          alt={tool.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-sm font-medium">{tool.name}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

