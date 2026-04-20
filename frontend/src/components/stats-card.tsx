import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import type { StatCard } from "@/types";

export function StatsCard({ stat }: { stat: StatCard }) {
  const TrendIcon = stat.trend === "up" ? ArrowUpRight : ArrowDownRight;
  const Icon = stat.icon;

  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
      <Card className="overflow-hidden">
        <CardContent className="p-5">
          <div className="mb-5 flex items-center justify-between">
            <div className="rounded-2xl bg-blue-500/10 p-3 text-blue-300">
              <Icon className="h-5 w-5" />
            </div>
            <div className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
              <TrendIcon className="h-3.5 w-3.5" />
              {stat.change}
            </div>
          </div>
          <p className="text-sm text-slate-400">{stat.title}</p>
          <h3 className="mt-2 text-3xl font-semibold text-white">{stat.value}</h3>
        </CardContent>
      </Card>
    </motion.div>
  );
}
