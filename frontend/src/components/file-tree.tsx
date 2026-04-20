import { ChevronRight, FileCode2, Folder } from "lucide-react";
import type { TreeNode } from "@/types";
import { cn } from "@/lib/utils";

function FileTreeItem({ node, depth = 0 }: { node: TreeNode; depth?: number }) {
  return (
    <div className="space-y-1">
      <div
        className={cn(
          "flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5",
          depth === 0 && "font-medium text-white",
        )}
        style={{ paddingLeft: `${depth * 14 + 12}px` }}
      >
        {node.type === "folder" ? (
          <>
            <ChevronRight className="h-4 w-4 text-slate-500" />
            <Folder className="h-4 w-4 text-blue-300" />
          </>
        ) : (
          <>
            <span className="w-4" />
            <FileCode2 className="h-4 w-4 text-slate-400" />
          </>
        )}
        <span>{node.name}</span>
      </div>
      {node.children?.map((child) => (
        <FileTreeItem key={`${node.name}-${child.name}`} node={child} depth={depth + 1} />
      ))}
    </div>
  );
}

export function FileTree({ nodes }: { nodes: TreeNode[] }) {
  return (
    <div className="space-y-1">
      {nodes.map((node) => (
        <FileTreeItem key={node.name} node={node} />
      ))}
    </div>
  );
}
