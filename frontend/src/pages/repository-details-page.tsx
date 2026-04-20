import { ArrowRight, Database, FileText, FolderTree, GitBranch, Network, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FileTree } from "@/components/file-tree";
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { StatusBadge } from "@/components/status-badge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fileTree, repositories } from "@/data/mock-data";

export function RepositoryDetailsPage() {
  const repository = repositories[0];

  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Repositories", href: "/repositories" },
          { label: repository.name },
        ]}
      />
      <SectionHeading
        eyebrow="Repository Details"
        title={repository.name}
        description={repository.description}
        action={
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/chat">
                <Sparkles className="h-4 w-4" />
                Chat with repo
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/documentation">
                <FileText className="h-4 w-4" />
                View docs
              </Link>
            </Button>
          </div>
        }
      />

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <CardContent className="grid gap-5 p-6 md:grid-cols-2 xl:grid-cols-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Status</p>
              <div className="mt-3">
                <StatusBadge status={repository.status} />
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Language</p>
              <p className="mt-3 text-lg font-semibold text-white">{repository.language}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Files</p>
              <p className="mt-3 text-lg font-semibold text-white">{repository.files}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Coverage</p>
              <p className="mt-3 text-lg font-semibold text-white">{repository.coverage}%</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="grid gap-4 p-6">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <span className="text-sm text-slate-400">Updated</span>
              <span className="text-sm text-white">{repository.updatedAt}</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <span className="text-sm text-slate-400">Contributors</span>
              <span className="text-sm text-white">{repository.contributors}</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <span className="text-sm text-slate-400">Default branch</span>
              <span className="text-sm text-white">main</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FolderTree className="h-5 w-5 text-blue-300" />
              Folder structure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <FileTree nodes={fileTree} />
          </CardContent>
        </Card>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GitBranch className="h-5 w-5 text-blue-300" />
                Tech stack
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              {["React", "FastAPI", "PostgreSQL", "ChromaDB", "LangChain", "Ollama"].map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Network className="h-5 w-5 text-blue-300" />
                Dependency insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-slate-300">
              <p>Frontend depends on API routes, auth state, and analytics services.</p>
              <p>AI explanation services connect to retrieval pipelines and documentation builders.</p>
              <Link to="/dependency-graph" className="inline-flex items-center gap-2 text-blue-300">
                Open dependency graph
                <ArrowRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-blue-300" />
                Database schema and APIs
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-slate-300">
              <p>Collections planned: Users, Repositories, Files, Summaries, Dependencies, Search History, Analysis Results.</p>
              <p>Endpoints include auth, upload, GitHub sync, analysis, explanations, search, and dashboard reporting.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageShell>
  );
}
