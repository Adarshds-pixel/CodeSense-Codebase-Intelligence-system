import { ArrowRight, Clock3, FolderGit2, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartCard } from "@/components/chart-card";
import { NotificationsPanel } from "@/components/notifications-panel";
import { PageShell } from "@/components/page-shell";
import { RepoCard } from "@/components/repo-card";
import { SectionHeading } from "@/components/section-heading";
import { StatsCard } from "@/components/stats-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  complexityTrend,
  dashboardStats,
  fileDistribution,
  languageUsage,
  recentActivities,
  repositories,
} from "@/data/mock-data";

export function DashboardPage() {
  return (
    <PageShell>
      <SectionHeading
        eyebrow="Overview"
        title="Welcome back, Adarsh"
        description="Your AI workspace is ready with repository insights, analytics, and the latest activity."
        action={
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="secondary">
              <Link to="/upload">
                <PlusCircle className="h-4 w-4" />
                Upload Repo
              </Link>
            </Button>
            <Button asChild>
              <Link to="/chat">
                Ask AI
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <StatsCard key={stat.title} stat={stat} />
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.6fr_0.8fr]">
        <div className="grid gap-6">
          <ChartCard
            title="Complexity vs documentation"
            description="Track code complexity while documentation coverage improves."
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={complexityTrend}>
                <defs>
                  <linearGradient id="complexityFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.45} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="rgba(148, 163, 184, 0.1)" vertical={false} />
                <XAxis dataKey="name" tick={{ fill: "#94a3b8", fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "#94a3b8", fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "#020617", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16 }} />
                <Area type="monotone" dataKey="complexity" stroke="#3b82f6" fill="url(#complexityFill)" strokeWidth={3} />
                <Area type="monotone" dataKey="docs" stroke="#818cf8" fillOpacity={0} strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>

          <div className="grid gap-6 lg:grid-cols-2">
            <ChartCard title="Language usage" description="Repository language composition">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={languageUsage}
                    innerRadius={65}
                    outerRadius={100}
                    dataKey="value"
                    paddingAngle={4}
                  >
                    {["#3b82f6", "#6366f1", "#06b6d4", "#14b8a6", "#94a3b8"].map((color) => (
                      <Cell key={color} fill={color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ background: "#020617", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16 }} />
                </PieChart>
              </ResponsiveContainer>
            </ChartCard>
            <ChartCard title="File distribution" description="Files grouped by major domains">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={fileDistribution}>
                  <CartesianGrid stroke="rgba(148, 163, 184, 0.1)" vertical={false} />
                  <XAxis dataKey="name" tick={{ fill: "#94a3b8", fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "#94a3b8", fontSize: 12 }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ background: "#020617", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16 }} />
                  <Bar dataKey="files" radius={[12, 12, 0, 0]} fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
        </div>

        <div className="grid gap-6">
          <NotificationsPanel />
          <Card>
            <CardHeader>
              <CardTitle>Recent activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-medium text-white">{activity.title}</p>
                      <p className="mt-1 text-sm text-slate-400">{activity.description}</p>
                    </div>
                    <Badge variant="muted">{activity.type}</Badge>
                  </div>
                  <p className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-500">
                    <Clock3 className="h-3.5 w-3.5" />
                    {activity.time}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.6fr]">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent repositories</CardTitle>
            <Link to="/repositories" className="text-sm text-blue-300">
              View all
            </Link>
          </CardHeader>
          <CardContent className="grid gap-4">
            {repositories.slice(0, 3).map((repository) => (
              <RepoCard key={repository.id} repository={repository} />
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quick actions</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            {[
              { label: "Connect GitHub", href: "/github" },
              { label: "Upload new repository", href: "/upload" },
              { label: "Open AI chat", href: "/chat" },
              { label: "Review analytics", href: "/analytics" },
            ].map((action) => (
              <Link key={action.href} to={action.href}>
                <button className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-left transition hover:bg-white/[0.06]">
                  <span className="inline-flex items-center gap-3 text-sm font-medium text-white">
                    <FolderGit2 className="h-4 w-4 text-blue-300" />
                    {action.label}
                  </span>
                  <ArrowRight className="h-4 w-4 text-slate-500" />
                </button>
              </Link>
            ))}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
              <p className="mb-3 text-sm font-medium text-white">Loading state preview</p>
              <div className="space-y-3">
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-16 w-full" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  );
}
