import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

interface PageShellProps extends PropsWithChildren {
  className?: string;
}

export function PageShell({ children, className }: PageShellProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={cn("space-y-6", className)}
    >
      {children}
    </motion.div>
  );
}
