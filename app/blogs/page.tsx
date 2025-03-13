import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "DevOps Blogs | Portfolio",
  description: "Articles and insights on DevOps practices, tools, and technologies",
}

const blogs = [
  {
    id: 1,
    title: "Implementing GitOps with ArgoCD and Kubernetes",
    excerpt:
      "Learn how to implement GitOps workflows using ArgoCD for Kubernetes deployments, enabling declarative and version-controlled application delivery.",
    date: "May 15, 2023",
    readTime: "8 min read",
    author: "Alex Morgan",
    image: "/placeholder.svg?height=400&width=800&text=GitOps",
    tags: ["GitOps", "ArgoCD", "Kubernetes"],
  },
  {
    id: 2,
    title: "Terraform Best Practices for Managing Multi-Cloud Infrastructure",
    excerpt:
      "Discover best practices for using Terraform to manage infrastructure across multiple cloud providers while maintaining consistency and security.",
    date: "April 22, 2023",
    readTime: "10 min read",
    author: "Alex Morgan",
    image: "/placeholder.svg?height=400&width=800&text=Terraform",
    tags: ["Terraform", "IaC", "Multi-Cloud"],
  },
  {
    id: 3,
    title: "Building Resilient CI/CD Pipelines with GitHub Actions",
    excerpt:
      "Explore strategies for creating resilient CI/CD pipelines using GitHub Actions that can handle failures gracefully and ensure reliable software delivery.",
    date: "March 10, 2023",
    readTime: "7 min read",
    author: "Alex Morgan",
    image: "/placeholder.svg?height=400&width=800&text=CI/CD",
    tags: ["CI/CD", "GitHub Actions", "DevOps"],
  },
  {
    id: 4,
    title: "Kubernetes Monitoring with Prometheus and Grafana",
    excerpt:
      "A comprehensive guide to setting up Kubernetes monitoring using Prometheus for metrics collection and Grafana for visualization.",
    date: "February 5, 2023",
    readTime: "12 min read",
    author: "Alex Morgan",
    image: "/placeholder.svg?height=400&width=800&text=Monitoring",
    tags: ["Kubernetes", "Prometheus", "Grafana", "Monitoring"],
  },
  {
    id: 5,
    title: "Securing Kubernetes Clusters: A DevSecOps Approach",
    excerpt:
      "Learn how to secure your Kubernetes clusters using a DevSecOps approach with tools like OPA, Trivy, and Vault.",
    date: "January 18, 2023",
    readTime: "9 min read",
    author: "Alex Morgan",
    image: "/placeholder.svg?height=400&width=800&text=Security",
    tags: ["Kubernetes", "Security", "DevSecOps"],
  },
]

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-12 md:py-24 max-w-5xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-4xl font-bold mb-4">DevOps Blog</h1>
          <p className="text-muted-foreground text-lg mb-8">
            Insights, tutorials, and best practices on DevOps, cloud infrastructure, and automation.
          </p>
        </div>

        <div className="grid gap-8">
          {blogs.map((blog) => (
            <Card key={blog.id} className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 relative h-48 md:h-auto">
                  <Image src={blog.image || "/placeholder.svg"} alt={blog.title} fill className="object-cover" />
                </div>
                <div className="md:w-2/3">
                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {blog.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-xl md:text-2xl hover:text-primary transition-colors">
                      <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{blog.excerpt}</p>
                  </CardContent>
                  <CardFooter className="flex flex-wrap items-center text-sm text-muted-foreground gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{blog.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{blog.author}</span>
                    </div>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

