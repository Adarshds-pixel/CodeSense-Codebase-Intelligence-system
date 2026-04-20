import { ChevronLeft, ChevronRight, Filter, UploadCloud } from "lucide-react";
import { Link } from "react-router-dom";
import { PageShell } from "@/components/page-shell";
import { RepoCard } from "@/components/repo-card";
import { SearchBar } from "@/components/search-bar";
import { SectionHeading } from "@/components/section-heading";
import { EmptyState } from "@/components/empty-state";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { repositories } from "@/data/mock-data";

export function RepositoryListPage() {
  return (
    <PageShell>
      <SectionHeading
        eyebrow="Repositories"
        title="Manage and analyze repository workspaces"
        description="Search repositories, filter by language or status, and jump directly into analysis."
        action={
          <Button asChild>
            <Link to="/upload">
              <UploadCloud className="h-4 w-4" />
              Upload repository
            </Link>
          </Button>
        }
      />

      <Card>
        <CardContent className="flex flex-col gap-4 p-5 lg:flex-row lg:items-center">
          <div className="flex-1">
            <SearchBar />
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="secondary">
              <Filter className="h-4 w-4" />
              Language
            </Button>
            <Button variant="secondary">Last 30 days</Button>
            <Badge variant="muted">128 total</Badge>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        {repositories.map((repository) => (
          <RepoCard key={repository.id} repository={repository} />
        ))}
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Repository</TableHead>
                <TableHead>Language</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Files</TableHead>
                <TableHead>Updated</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {repositories.map((repository) => (
                <TableRow key={`table-${repository.id}`}>
                  <TableCell className="font-medium text-white">{repository.name}</TableCell>
                  <TableCell>{repository.language}</TableCell>
                  <TableCell>{repository.status}</TableCell>
                  <TableCell>{repository.files}</TableCell>
                  <TableCell>{repository.updatedAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <EmptyState
        icon={UploadCloud}
        title="No repositories match the current filters"
        description="This is the empty-state design for search and filter combinations that return no repository results."
      />

      <Card>
        <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-400">
            Showing 1-4 of 128 repositories
          </p>
          <div className="flex items-center gap-2">
            <Button variant="secondary" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </PageShell>
  );
}
