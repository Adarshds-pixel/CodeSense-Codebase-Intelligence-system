import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

export const Tabs = TabsPrimitive.Root;

export function TabsList({
  className,
  ...props
}: TabsPrimitive.TabsListProps) {
  return (
    <TabsPrimitive.List
      className={cn(
        "inline-flex h-11 items-center rounded-xl bg-white/5 p-1 text-slate-400",
        className,
      )}
      {...props}
    />
  );
}

export function TabsTrigger({
  className,
  ...props
}: TabsPrimitive.TabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition data-[state=active]:bg-blue-600 data-[state=active]:text-white",
        className,
      )}
      {...props}
    />
  );
}

export function TabsContent({
  className,
  ...props
}: TabsPrimitive.TabsContentProps) {
  return <TabsPrimitive.Content className={cn("mt-5", className)} {...props} />;
}
