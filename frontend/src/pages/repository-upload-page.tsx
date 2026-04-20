import { FileArchive, FolderUp, Github, ShieldCheck, UploadCloud } from "lucide-react";
import { Link } from "react-router-dom";
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { ErrorState } from "@/components/error-state";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function RepositoryUploadPage() {
  return (
    <PageShell>
      <SectionHeading
        eyebrow="Repository Upload"
        title="Add a repository for AI analysis"
        description="Upload a ZIP archive or connect a source provider. The UI is ready for backend integration."
      />

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Card className="border-dashed border-blue-500/30">
          <CardContent className="flex min-h-[420px] flex-col items-center justify-center gap-5 p-8 text-center">
            <div className="rounded-3xl bg-blue-500/10 p-5 text-blue-300">
              <UploadCloud className="h-10 w-10" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">Drop repository ZIP here</h3>
              <p className="mt-3 max-w-lg text-sm leading-7 text-slate-400">
                Drag and drop project archives or browse your device. Upload states,
                progress indicators, and validation messaging are designed for production use.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button>
                <FolderUp className="h-4 w-4" />
                Browse files
              </Button>
              <Button asChild variant="secondary">
                <Link to="/github">
                  <Github className="h-4 w-4" />
                  Connect GitHub instead
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6">
          <Card>
            <CardContent className="space-y-4 p-6">
              <h3 className="text-xl font-semibold text-white">Accepted inputs</h3>
              {[
                "ZIP files with source code and docs",
                "Multi-language repositories",
                "Private GitHub sync after authorization",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-300">
                  <FileArchive className="h-4 w-4 text-blue-300" />
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardContent className="space-y-4 p-6">
              <h3 className="text-xl font-semibold text-white">Security</h3>
              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-emerald-200">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5" />
                  Workspace uploads can be paired with scoped storage, access control, and retention settings.
                </div>
              </div>
              <p className="text-sm leading-7 text-slate-400">
                This page is intentionally frontend-only right now, but the UX flow is designed to attach cleanly to upload APIs later.
              </p>
            </CardContent>
          </Card>
          <ErrorState
            title="Archive validation failed"
            description="A sample error-state card for unsupported archives, oversized uploads, or invalid repository content."
          />
        </div>
      </div>
    </PageShell>
  );
}
