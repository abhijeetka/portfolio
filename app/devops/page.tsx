import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "DevOps Services | Portfolio",
  description: "DevOps services and solutions offered",
}

export default function DevOpsPage() {
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
          <h1 className="text-4xl font-bold mb-4">DevOps Services</h1>
          <p className="text-muted-foreground text-lg mb-8">
            Comprehensive DevOps solutions to streamline your development and operations processes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>CI/CD Pipeline Implementation</CardTitle>
              <CardDescription>Automate your software delivery process</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                I design and implement robust CI/CD pipelines using industry-leading tools like Jenkins, GitHub Actions,
                GitLab CI, and ArgoCD. These pipelines automate the build, test, and deployment processes, reducing
                time-to-market and improving software quality.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Kubernetes Orchestration</CardTitle>
              <CardDescription>Manage containerized applications at scale</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                I provide end-to-end Kubernetes solutions including cluster setup, application deployment, monitoring,
                and maintenance. Whether you're using managed services like EKS and AKS or self-hosted clusters, I
                ensure your containerized applications run efficiently.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Infrastructure as Code</CardTitle>
              <CardDescription>Automate infrastructure provisioning</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Using tools like Terraform, CloudFormation, and Ansible, I help organizations define and provision
                infrastructure as code. This approach ensures consistency, reduces manual errors, and enables
                version-controlled infrastructure changes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cloud Migration</CardTitle>
              <CardDescription>Move your workloads to the cloud</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                I assist organizations in migrating their applications and infrastructure to cloud platforms like AWS,
                Azure, and GCP. The migration process includes assessment, planning, execution, and optimization to
                ensure a smooth transition with minimal disruption.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Monitoring & Observability</CardTitle>
              <CardDescription>Gain insights into your applications and infrastructure</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                I implement comprehensive monitoring and observability solutions using tools like Prometheus, Grafana,
                ELK Stack, and Datadog. These solutions provide real-time insights into system performance, help
                identify issues, and enable data-driven decision-making.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>DevSecOps Integration</CardTitle>
              <CardDescription>Embed security into your DevOps processes</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                I help organizations integrate security practices into their DevOps workflows, creating a DevSecOps
                culture. This includes implementing security scanning, compliance checks, and automated remediation to
                ensure applications are secure by design.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

