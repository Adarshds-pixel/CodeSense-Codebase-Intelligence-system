import { FileCode2, Search } from "lucide-react";
import { FileTree } from "@/components/file-tree";
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fileTree } from "@/data/mock-data";

export function FileExplorerPage() {
  return (
    <PageShell>
      <SectionHeading
        eyebrow="Explorer"
        title="Navigate files with context-aware explanations"
        description="Preview code, inspect imports, and surface the functions that matter most."
      />

      <div className="grid gap-6 xl:grid-cols-[0.7fr_1fr_0.8fr]">
        <Card>
          <CardHeader>
            <CardTitle>Folder tree</CardTitle>
          </CardHeader>
          <CardContent>
            <FileTree nodes={fileTree} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>File preview</CardTitle>
            <div className="relative w-full max-w-xs">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <Input className="h-10 pl-9" placeholder="Search inside file" />
            </div>
          </CardHeader>
          <CardContent>
            <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-950/80 p-5 text-xs leading-7 text-slate-300">
              <code>{`export async function analyzeRepository(repoId: string) {
  const files = await parser.index(repoId);
  const embeddings = await vectorStore.embed(files);
  const summary = await ai.generateSummary(files, embeddings);
  return { files, embeddings, summary };
}`}</code>
            </pre>
          </CardContent>
        </Card>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>AI explanation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-7 text-slate-300">
              <p>
                This function orchestrates repository indexing, vector embedding, and summary generation.
              </p>
              <p>
                It likely belongs to the analysis pipeline and acts as the high-level entry point for repository processing.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Functions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {["analyzeRepository()", "index()", "embed()", "generateSummary()"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl bg-white/[0.03] px-3 py-3 text-sm text-slate-300">
                  <FileCode2 className="h-4 w-4 text-blue-300" />
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Imports and dependencies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-300">
              <p>Imports: parser, vectorStore, ai</p>
              <p>Dependencies: repository files, embeddings, summary service</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageShell>
  );
}
