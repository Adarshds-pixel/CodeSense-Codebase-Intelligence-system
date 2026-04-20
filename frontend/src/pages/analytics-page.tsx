import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartCard } from "@/components/chart-card";
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { fileDistribution, languageUsage, repositoryGrowth } from "@/data/mock-data";

export function AnalyticsPage() {
  return (
    <PageShell>
      <SectionHeading
        eyebrow="Analytics"
        title="Repository intelligence at a glance"
        description="Monitor code growth, language usage, complexity patterns, and functional spread."
        action={<Badge variant="muted">Updated 5 min ago</Badge>}
      />

      <div className="grid gap-6 xl:grid-cols-2">
        <ChartCard title="Repository growth" description="Size and functions added through the week">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={repositoryGrowth}>
              <CartesianGrid stroke="rgba(148, 163, 184, 0.1)" vertical={false} />
              <XAxis dataKey="name" tick={{ fill: "#94a3b8", fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#94a3b8", fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: "#020617", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16 }} />
              <Line type="monotone" dataKey="size" stroke="#3b82f6" strokeWidth={3} dot={false} />
              <Line type="monotone" dataKey="functions" stroke="#818cf8" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="Language usage" description="Detected code composition across repositories">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={languageUsage}>
              <CartesianGrid stroke="rgba(148, 163, 184, 0.1)" vertical={false} />
              <XAxis dataKey="name" tick={{ fill: "#94a3b8", fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#94a3b8", fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: "#020617", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16 }} />
              <Bar dataKey="value" radius={[12, 12, 0, 0]} fill="#6366f1" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="File distribution" description="Files grouped by domain">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={fileDistribution}>
              <CartesianGrid stroke="rgba(148, 163, 184, 0.1)" vertical={false} />
              <XAxis dataKey="name" tick={{ fill: "#94a3b8", fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#94a3b8", fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: "#020617", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16 }} />
              <Bar dataKey="files" radius={[12, 12, 0, 0]} fill="#06b6d4" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="Coverage snapshot" description="Production-ready space for future metrics">
          <div className="grid h-full gap-4 sm:grid-cols-2">
            {[
              { label: "Complexity score", value: "67 / 100" },
              { label: "Doc coverage", value: "81%" },
              { label: "Functions extracted", value: "12,540" },
              { label: "Mean repository size", value: "2.8 GB" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm text-slate-400">{item.label}</p>
                <p className="mt-3 text-3xl font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </ChartCard>
      </div>
    </PageShell>
  );
}
