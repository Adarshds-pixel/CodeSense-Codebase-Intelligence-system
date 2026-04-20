import type { LucideIcon } from "lucide-react";

export interface StatCard {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: LucideIcon;
}

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
}

export interface Repository {
  id: string;
  name: string;
  description: string;
  language: string;
  status: "Analyzed" | "Queued" | "Failed" | "Syncing";
  updatedAt: string;
  files: number;
  contributors: number;
  coverage: number;
}

export interface ActivityItem {
  id: string;
  title: string;
  description: string;
  time: string;
  type: "analysis" | "chat" | "sync" | "docs";
}

export interface NotificationItem {
  id: string;
  title: string;
  description: string;
  time: string;
  unread?: boolean;
}

export interface ChatMessage {
  id: string;
  role: "assistant" | "user";
  content: string;
  code?: string;
}

export interface TreeNode {
  name: string;
  type: "folder" | "file";
  children?: TreeNode[];
}
