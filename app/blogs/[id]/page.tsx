import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// This would typically come from a database or CMS
const blogs = [
  {
    id: "1",
    title: "Implementing GitOps with ArgoCD and Kubernetes",
    content: `
      <p>GitOps is a paradigm that takes DevOps best practices used for application development such as version control, collaboration, compliance, and CI/CD, and applies them to infrastructure automation.</p>
      
      <h2>What is GitOps?</h2>
      <p>GitOps is a way of implementing Continuous Deployment for cloud native applications. It focuses on a developer-centric experience when operating infrastructure, by using tools developers are already familiar with, including Git and Continuous Deployment tools.</p>
      
      <p>The core idea of GitOps is having a Git repository that always contains declarative descriptions of the infrastructure currently desired in the production environment and an automated process to make the production environment match the described state in the repository. If you want to deploy a new application or update an existing one, you only need to update the repository - the automated process handles everything else.</p>
      
      <h2>ArgoCD and Kubernetes</h2>
      <p>ArgoCD is a declarative, GitOps continuous delivery tool for Kubernetes. It automates the deployment of the desired application states in the specified target environments. Application deployments can track updates to branches, tags, or pinned to a specific version of manifests at a Git commit.</p>
      
      <p>ArgoCD follows the GitOps pattern of using Git repositories as the source of truth for defining the desired application state. Kubernetes manifests can be specified in several ways:</p>
      <ul>
        <li>kustomize applications</li>
        <li>helm charts</li>
        <li>jsonnet files</li>
        <li>Plain directory of YAML/json manifests</li>
        <li>Any custom config management tool configured as a config management plugin</li>
      </ul>
      
      <h2>Setting Up ArgoCD</h2>
      <p>Let's walk through the process of setting up ArgoCD on a Kubernetes cluster:</p>
      
      <h3>1. Install ArgoCD</h3>
      <pre><code>kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml</code></pre>
      
      <h3>2. Access the ArgoCD API Server</h3>
      <p>By default, the ArgoCD API server is not exposed externally. To access it, you can either use port forwarding or create an Ingress.</p>
      <pre><code>kubectl port-forward svc/argocd-server -n argocd 8080:443</code></pre>
      
      <h3>3. Login Using the CLI</h3>
      <p>The initial password for the admin account is auto-generated and stored as a Kubernetes secret.</p>
      <pre><code>kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d
argocd login localhost:8080</code></pre>
      
      <h3>4. Create an Application</h3>
      <p>Now you can create an application that ArgoCD will manage:</p>
      <pre><code>argocd app create guestbook \\
  --repo https://github.com/argoproj/argocd-example-apps.git \\
  --path guestbook \\
  --dest-server https://kubernetes.default.svc \\
  --dest-namespace default</code></pre>
      
      <h2>Benefits of GitOps with ArgoCD</h2>
      <p>Implementing GitOps with ArgoCD provides several benefits:</p>
      <ul>
        <li><strong>Increased Productivity:</strong> Developers can use familiar tools and processes for both application and infrastructure changes.</li>
        <li><strong>Enhanced Security:</strong> Git's strong security features help maintain a secure and compliant infrastructure.</li>
        <li><strong>Improved Reliability:</strong> Declarative descriptions ensure consistent deployments and make it easy to roll back changes if needed.</li>
        <li><strong>Better Visibility:</strong> Git provides a clear audit trail of who changed what and when.</li>
        <li><strong>Faster Recovery:</strong> In case of a disaster, you can quickly recover your infrastructure by reapplying the configurations from Git.</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>GitOps with ArgoCD provides a powerful approach to managing Kubernetes deployments. By leveraging Git as the single source of truth for your infrastructure, you can achieve more reliable, secure, and efficient deployments while giving developers the tools they need to be productive.</p>
    `,
    date: "May 15, 2023",
    readTime: "8 min read",
    author: "Alex Morgan",
    image: "/placeholder.svg?height=600&width=1200&text=GitOps",
    tags: ["GitOps", "ArgoCD", "Kubernetes"],
  },
  {
    id: "2",
    title: "Terraform Best Practices for Managing Multi-Cloud Infrastructure",
    content: "<p>This is a placeholder for the full blog content.</p>",
    date: "April 22, 2023",
    readTime: "10 min read",
    author: "Alex Morgan",
    image: "/placeholder.svg?height=600&width=1200&text=Terraform",
    tags: ["Terraform", "IaC", "Multi-Cloud"],
  },
]

type Props = {
  params: { id: string }
}

export function generateMetadata({ params }: Props): Metadata {
  const blog = blogs.find((b) => b.id === params.id)

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${blog.title} | DevOps Blog`,
    description: blog.content.substring(0, 160).replace(/<[^>]*>/g, ""),
  }
}

export default function BlogPost({ params }: Props) {
  const blog = blogs.find((b) => b.id === params.id)

  if (!blog) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
          <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/blogs">Back to Blogs</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-12 md:py-24 max-w-4xl mx-auto">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/blogs" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Blogs
          </Link>
        </Button>

        <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
          <Image src={blog.image || "/placeholder.svg"} alt={blog.title} fill className="object-cover" priority />
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {blog.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>

        <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-4 mb-8 pb-8 border-b">
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
        </div>

        <div
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </div>
  )
}

