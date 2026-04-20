import { ArrowUpRight, GitBranch, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/status-badge";
import type { Repository } from "@/types";

export function RepoCard({ repository }: { repository: Repository }) {
  return (
    <Card className="group">
      <CardContent className="space-y-5 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white">{repository.name}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              {repository.description}
            </p>
          </div>
          <StatusBadge status={repository.status} />
        </div>
        <div className="grid gap-3 text-sm text-slate-400 sm:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Language</p>
            <p className="mt-1 text-slate-100">{repository.language}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Files</p>
            <p className="mt-1 text-slate-100">{repository.files}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Coverage</p>
            <p className="mt-1 text-slate-100">{repository.coverage}%</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 text-sm text-slate-400">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2">
              <GitBranch className="h-4 w-4" />
              Updated {repository.updatedAt}
            </span>
            <span className="inline-flex items-center gap-2">
              <Users className="h-4 w-4" />
              {repository.contributors} contributors
            </span>
          </div>
          <Button asChild variant="ghost" className="text-white">
            <Link to={`/repositories/${repository.id}`}>
              Open
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
