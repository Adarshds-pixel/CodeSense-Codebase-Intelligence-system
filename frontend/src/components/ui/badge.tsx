import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1",
  {
    variants: {
      variant: {
        default: "bg-blue-500/10 text-blue-200 ring-blue-400/20",
        success: "bg-emerald-500/10 text-emerald-200 ring-emerald-400/20",
        warning: "bg-amber-500/10 text-amber-200 ring-amber-400/20",
        danger: "bg-red-500/10 text-red-200 ring-red-400/20",
        muted: "bg-white/5 text-slate-300 ring-white/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
