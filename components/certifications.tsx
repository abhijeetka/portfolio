import Image from "next/image"
import type { Certifications as CertificationsType } from "@/lib/types"
import { Card, CardContent } from "@/components/ui/card"

interface CertificationsProps {
  certifications: CertificationsType
}

export default function Certifications({ certifications }: CertificationsProps) {
  return (
    <section id="certifications" className="container px-4 md:px-6 py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Certifications</h2>
          <p className="text-muted-foreground md:text-xl">{certifications.description}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.items.map((cert, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">{cert.name}</h3>
                <p className="text-highlight font-medium">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground mb-4">{cert.year}</p>
                {cert.description && <p className="text-sm">{cert.description}</p>}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-bold mb-6 text-center">Certification Partners</h3>
          <div className="marquee-container py-4">
            <div className="marquee-content">
              {certifications.logos.map((logo, index) => (
                <div key={index} className="inline-block mx-6">
                  <div className="relative w-24 h-24">
                    <Image
                      src={logo.image || `/placeholder.svg?height=96&width=96&text=${encodeURIComponent(logo.name)}`}
                      alt={logo.name}
                      width={96}
                      height={96}
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate logos for seamless looping */}
              {certifications.logos.map((logo, index) => (
                <div key={`dup-${index}`} className="inline-block mx-6">
                  <div className="relative w-24 h-24">
                    <Image
                      src={logo.image || `/placeholder.svg?height=96&width=96&text=${encodeURIComponent(logo.name)}`}
                      alt={logo.name}
                      width={96}
                      height={96}
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

