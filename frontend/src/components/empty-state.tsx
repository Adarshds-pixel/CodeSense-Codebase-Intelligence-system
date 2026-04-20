import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function EmptyState({
  icon: Icon,
  title,
  description,
}: EmptyStateProps) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center gap-4 py-14 text-center">
        <div className="rounded-2xl bg-blue-500/10 p-4 text-blue-300">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-2 max-w-md text-sm text-slate-400">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
