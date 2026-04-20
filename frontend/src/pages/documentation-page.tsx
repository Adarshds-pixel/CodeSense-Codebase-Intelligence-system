import { Download, FileText, ScrollText } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function DocumentationPage() {
  return (
    <PageShell>
      <SectionHeading
        eyebrow="Documentation"
        title="Generated project docs and technical summaries"
        description="Review README content, APIs, functions, classes, and exportable documentation sections."
        action={
          <Button>
            <Download className="h-4 w-4" />
            Export Markdown
          </Button>
        }
      />

      <Tabs defaultValue="readme">
        <TabsList>
          <TabsTrigger value="readme">README</TabsTrigger>
          <TabsTrigger value="api">API Docs</TabsTrigger>
          <TabsTrigger value="functions">Functions</TabsTrigger>
          <TabsTrigger value="classes">Classes</TabsTrigger>
        </TabsList>
        <TabsContent value="readme">
          <Card>
            <CardContent className="space-y-4 p-6">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-300" />
                <h3 className="text-xl font-semibold text-white">README Preview</h3>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5 text-sm leading-8 text-slate-300">
                <p># CodeSense</p>
                <p>CodeSense is an AI-powered platform for understanding repositories faster.</p>
                <p>## Key capabilities</p>
                <p>- Repository analysis</p>
                <p>- AI explanations</p>
                <p>- Dependency visualization</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="api">
          <Card>
            <CardContent className="space-y-4 p-6 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <ScrollText className="h-5 w-5 text-blue-300" />
                <h3 className="text-xl font-semibold text-white">API Documentation</h3>
              </div>
              <p>Planned endpoints: `/auth`, `/repositories`, `/analysis`, `/explanations`, `/search`, `/dashboard`</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="functions">
          <Card>
            <CardContent className="space-y-4 p-6 text-sm text-slate-300">
              <h3 className="text-xl font-semibold text-white">Function documentation</h3>
              <p>`analyzeRepository()` indexes files, creates embeddings, and prepares summaries.</p>
              <p>`generateSummary()` transforms raw repository information into concise explanations.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="classes">
          <Card>
            <CardContent className="space-y-4 p-6 text-sm text-slate-300">
              <h3 className="text-xl font-semibold text-white">Class documentation</h3>
              <p>`RepositoryService` orchestrates ingestion and persistence.</p>
              <p>`EmbeddingPipeline` manages chunking, vector creation, and retrieval preparation.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </PageShell>
  );
}
