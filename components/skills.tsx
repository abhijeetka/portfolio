import type { Skills as SkillsType } from "@/lib/types"

interface SkillsProps {
  skills: SkillsType
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Skills & Expertise</h2>
          <p className="text-muted-foreground md:text-xl">{skills.description}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {Object.entries(skills.categories).map(([category, skillList]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-xl font-bold">{category}</h3>
              <div className="space-y-4">
                {skillList.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-in-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

