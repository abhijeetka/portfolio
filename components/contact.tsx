import { Mail, MapPin, Phone } from "lucide-react"
import type { Contact as ContactType } from "@/lib/types"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface ContactProps {
  contact: ContactType
}

export default function Contact({ contact }: ContactProps) {
  return (
    <section id="contact" className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get In Touch</h2>
          <p className="text-muted-foreground md:text-xl">{contact.description}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                {contact.email && (
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-highlight mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-muted-foreground hover:text-highlight transition-colors"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>
                )}

                {contact.phone && (
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-highlight mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <a
                        href={`tel:${contact.phone}`}
                        className="text-muted-foreground hover:text-highlight transition-colors"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                )}

                {contact.location && (
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-highlight mt-0.5" />
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-muted-foreground">{contact.location}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {contact.availability && (
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="font-medium mb-2">Availability</h3>
                  <p className="text-muted-foreground">{contact.availability}</p>
                </CardContent>
              </Card>
            )}
          </div>

          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <Input id="subject" placeholder="Subject" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea id="message" placeholder="Your message" className="min-h-[120px]" />
            </div>
            <Button type="submit" className="w-full bg-highlight hover:bg-highlight/90 text-white">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

