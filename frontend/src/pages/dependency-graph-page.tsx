import { GitBranch, Network } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export function DependencyGraphPage() {
  return (
    <PageShell>
      <SectionHeading
        eyebrow="Dependency Graph"
        title="Visualize module and service relationships"
        description="A frontend mock of the graph workspace with room for future interactive graph rendering."
      />
      <Card>
        <CardContent className="p-6">
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/80 p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_35%)]" />
            <div className="relative grid min-h-[520px] place-items-center">
              <div className="grid gap-10 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-600/20 text-blue-300">
                  <Network className="h-8 w-8" />
                </div>
                <div className="grid gap-6 sm:grid-cols-3">
                  {["Frontend", "API Layer", "AI Services"].map((node) => (
                    <div key={node} className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 text-white">
                      {node}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-3 text-slate-400">
                  <GitBranch className="h-4 w-4" />
                  Interactive graph nodes, zoom, pan, and drill-down are ready to be connected later.
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </PageShell>
  );
}
