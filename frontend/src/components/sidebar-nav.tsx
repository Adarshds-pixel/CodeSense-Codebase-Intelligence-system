import {
  BarChart3,
  BookOpenText,
  FolderGit2,
  GitBranchPlus,
  LayoutDashboard,
  LogOut,
  MessageSquareText,
  Settings,
  UploadCloud,
  Workflow,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { AppLogo } from "@/components/app-logo";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

const navItems: NavItem[] = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { title: "Repositories", href: "/repositories", icon: FolderGit2 },
  { title: "Upload", href: "/upload", icon: UploadCloud },
  { title: "GitHub Connect", href: "/github", icon: GitBranchPlus },
  { title: "Chat", href: "/chat", icon: MessageSquareText, badge: "AI" },
  { title: "Documentation", href: "/documentation", icon: BookOpenText },
  { title: "Dependency Graph", href: "/dependency-graph", icon: Workflow },
  { title: "Analytics", href: "/analytics", icon: BarChart3 },
  { title: "Settings", href: "/settings", icon: Settings },
];

export function SidebarNav() {
  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-white/10 px-5 py-6">
        <AppLogo />
      </div>
      <ScrollArea className="flex-1 px-3 py-4">
        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-slate-400 transition hover:bg-white/5 hover:text-white",
                  isActive && "bg-blue-600 text-white shadow-glow",
                )
              }
            >
              <span className="flex items-center gap-3">
                <item.icon className="h-4 w-4" />
                {item.title}
              </span>
              {item.badge ? (
                <span className="rounded-full bg-white/15 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em]">
                  {item.badge}
                </span>
              ) : null}
            </NavLink>
          ))}
        </nav>
      </ScrollArea>
      <div className="border-t border-white/10 p-4">
        <button className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-400 transition hover:bg-white/5 hover:text-white">
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </div>
  );
}
