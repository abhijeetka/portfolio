export const runtime: 'edge' | 'nodejs' = 'edge'

import type { Metadata } from "next"
import PortfolioContent from "@/components/portfolio-content"

export const metadata: Metadata = {
  title: "DevOps Lead Portfolio",
  description: "Professional portfolio for a DevOps Lead showcasing skills, experience, and projects",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <PortfolioContent />
    </main>
  )
}

