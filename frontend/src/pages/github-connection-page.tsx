import { CheckCircle2, Github, LockKeyhole, Workflow } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function GithubConnectionPage() {
  return (
    <PageShell>
      <SectionHeading
        eyebrow="GitHub Integration"
        title="Connect repositories from GitHub"
        description="Authorize CodeSense to analyze repositories, sync commits, and keep documentation current."
      />
      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <CardContent className="space-y-6 p-6">
            <div className="inline-flex rounded-3xl bg-white/5 p-4 text-white">
              <Github className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">Connect your GitHub account</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Enable secure repository selection, pull-based sync, and source visibility for AI answers.
              </p>
            </div>
            <Button className="w-full">
              <Github className="h-4 w-4" />
              Continue with GitHub
            </Button>
          </CardContent>
        </Card>
        <div className="grid gap-6">
          {[
            {
              icon: LockKeyhole,
              title: "Scoped permissions",
              description: "Only request repository access that matches the workspace use case.",
            },
            {
              icon: Workflow,
              title: "Background sync",
              description: "Keep summaries, chats, and dependency maps aligned with new commits.",
            },
            {
              icon: CheckCircle2,
              title: "Fast onboarding",
              description: "Start asking architecture questions moments after connecting your repo.",
            },
          ].map((item) => (
            <Card key={item.title}>
              <CardContent className="flex items-start gap-4 p-6">
                <div className="rounded-2xl bg-blue-500/10 p-3 text-blue-300">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
