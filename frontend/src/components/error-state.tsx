import type { LucideIcon } from "lucide-react";
import { AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ErrorStateProps {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export function ErrorState({
  title,
  description,
  icon: Icon = AlertTriangle,
}: ErrorStateProps) {
  return (
    <Card className="border-red-500/20 bg-red-500/5">
      <CardContent className="flex items-center gap-4 p-6">
        <div className="rounded-2xl bg-red-500/10 p-3 text-red-300">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm text-red-100/80">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
