"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Certifications from "@/components/certifications"
import Tools from "@/components/tools"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import type { PortfolioData } from "@/lib/types"
import portfolioData from "@/data/portfolio-data.json"

export default function PortfolioContent() {
  const [data, setData] = useState<PortfolioData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real application, you might fetch this from an API
    // For this example, we're importing the JSON directly
    setData(portfolioData as PortfolioData)
    setLoading(false)
  }, [])

  if (loading || !data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-highlight"></div>
      </div>
    )
  }

  return (
    <>
      <Header navItems={data.navItems} personal={data.personal} />
      <Hero personal={data.personal} />
      <About about={data.about} />
      <Skills skills={data.skills} />
      <Experience experience={data.experience} />
      <Projects projects={data.projects} />
      <Education education={data.education} />
      <Certifications certifications={data.certifications} />
      <Tools tools={data.tools} />
      <Contact contact={data.contact} />
      <Footer personal={data.personal} />
    </>
  )
}

