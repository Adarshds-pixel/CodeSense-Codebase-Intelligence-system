import {
  Activity,
  Bot,
  Boxes,
  BrainCircuit,
  FileCode2,
  FolderGit2,
  MessageSquareText,
} from "lucide-react";
import type {
  ActivityItem,
  ChatMessage,
  NotificationItem,
  Repository,
  StatCard,
  TreeNode,
} from "@/types";

export const dashboardStats: StatCard[] = [
  {
    title: "Total repositories",
    value: "128",
    change: "+12.6%",
    trend: "up",
    icon: FolderGit2,
  },
  {
    title: "Files analyzed",
    value: "84,392",
    change: "+8.1%",
    trend: "up",
    icon: FileCode2,
  },
  {
    title: "Functions extracted",
    value: "12,540",
    change: "+18.4%",
    trend: "up",
    icon: Boxes,
  },
  {
    title: "AI chats",
    value: "2,460",
    change: "+23.2%",
    trend: "up",
    icon: MessageSquareText,
  },
];

export const repositories: Repository[] = [
  {
    id: "repo-1",
    name: "codesense-platform",
    description: "Core SaaS platform with auth, analytics, and AI repository summaries.",
    language: "TypeScript",
    status: "Analyzed",
    updatedAt: "2 hours ago",
    files: 1240,
    contributors: 8,
    coverage: 92,
  },
  {
    id: "repo-2",
    name: "gateway-service",
    description: "API gateway with service discovery, observability, and RBAC controls.",
    language: "Go",
    status: "Syncing",
    updatedAt: "5 hours ago",
    files: 412,
    contributors: 5,
    coverage: 78,
  },
  {
    id: "repo-3",
    name: "legacy-monolith",
    description: "Large legacy ERP codebase under modernization and documentation cleanup.",
    language: "Java",
    status: "Queued",
    updatedAt: "Yesterday",
    files: 2840,
    contributors: 14,
    coverage: 64,
  },
  {
    id: "repo-4",
    name: "mobile-sdk",
    description: "Cross-platform SDK with native adapters and analytics instrumentation.",
    language: "Kotlin",
    status: "Failed",
    updatedAt: "2 days ago",
    files: 356,
    contributors: 4,
    coverage: 41,
  },
];

export const recentActivities: ActivityItem[] = [
  {
    id: "act-1",
    title: "Repository analysis completed",
    description: "CodeSense finished extracting services, APIs, and dependencies for codesense-platform.",
    time: "8 min ago",
    type: "analysis",
  },
  {
    id: "act-2",
    title: "New AI chat summary generated",
    description: "Architecture overview shared with the team workspace for gateway-service.",
    time: "21 min ago",
    type: "chat",
  },
  {
    id: "act-3",
    title: "GitHub sync triggered",
    description: "Detected 37 changed files after the latest main branch push.",
    time: "1 hour ago",
    type: "sync",
  },
  {
    id: "act-4",
    title: "Documentation bundle exported",
    description: "README, API notes, and database schema were exported to Markdown.",
    time: "3 hours ago",
    type: "docs",
  },
];

export const notifications: NotificationItem[] = [
  {
    id: "not-1",
    title: "Analysis finished",
    description: "codesense-platform is ready for review.",
    time: "Just now",
    unread: true,
  },
  {
    id: "not-2",
    title: "GitHub connected",
    description: "Your GitHub account was connected successfully.",
    time: "30 min ago",
    unread: true,
  },
  {
    id: "not-3",
    title: "Storage nearing limit",
    description: "You have used 82% of your repository storage quota.",
    time: "2 hrs ago",
  },
];

export const languageUsage = [
  { name: "TypeScript", value: 38 },
  { name: "Python", value: 24 },
  { name: "Java", value: 16 },
  { name: "Go", value: 12 },
  { name: "Other", value: 10 },
];

export const complexityTrend = [
  { name: "Jan", complexity: 63, docs: 44 },
  { name: "Feb", complexity: 59, docs: 52 },
  { name: "Mar", complexity: 71, docs: 58 },
  { name: "Apr", complexity: 68, docs: 64 },
  { name: "May", complexity: 54, docs: 73 },
  { name: "Jun", complexity: 49, docs: 81 },
];

export const fileDistribution = [
  { name: "Components", files: 320 },
  { name: "Services", files: 180 },
  { name: "APIs", files: 92 },
  { name: "Tests", files: 245 },
  { name: "Docs", files: 140 },
];

export const repositoryGrowth = [
  { name: "Mon", size: 22, functions: 180 },
  { name: "Tue", size: 28, functions: 210 },
  { name: "Wed", size: 36, functions: 260 },
  { name: "Thu", size: 31, functions: 240 },
  { name: "Fri", size: 44, functions: 325 },
  { name: "Sat", size: 39, functions: 298 },
  { name: "Sun", size: 46, functions: 360 },
];

export const chatMessages: ChatMessage[] = [
  {
    id: "m-1",
    role: "assistant",
    content:
      "I mapped the repository into 7 major domains: auth, repository ingestion, AI pipeline, semantic retrieval, reporting, platform core, and shared utilities.",
  },
  {
    id: "m-2",
    role: "user",
    content: "Explain how the upload flow triggers analysis and documentation generation.",
  },
  {
    id: "m-3",
    role: "assistant",
    content:
      "The upload flow saves the ZIP, expands it into a workspace, runs parsers to index files, then sends chunks into the embedding pipeline for retrieval and doc generation.",
    code:
      "UploadController -> RepositoryService -> ParserQueue -> EmbeddingPipeline -> SummaryService -> DocsAssembler",
  },
];

export const fileTree: TreeNode[] = [
  {
    name: "src",
    type: "folder",
    children: [
      {
        name: "api",
        type: "folder",
        children: [
          { name: "routes.py", type: "file" },
          { name: "auth.py", type: "file" },
        ],
      },
      {
        name: "services",
        type: "folder",
        children: [
          { name: "analysis_service.py", type: "file" },
          { name: "embedding_service.py", type: "file" },
        ],
      },
      { name: "main.py", type: "file" },
    ],
  },
  {
    name: "docs",
    type: "folder",
    children: [{ name: "architecture.md", type: "file" }],
  },
];

export const suggestedQuestions = [
  "Summarize the authentication flow",
  "List the key external integrations",
  "Explain the repository analysis pipeline",
  "Which modules are the most complex?",
];

export const pricingPlans = [
  {
    title: "Starter",
    price: "$19",
    description: "For students and solo developers exploring repositories.",
    features: ["5 repositories", "AI chat", "Documentation export", "Email support"],
  },
  {
    title: "Growth",
    price: "$59",
    description: "For teams onboarding faster and documenting internal systems.",
    features: ["50 repositories", "Dependency graphs", "Analytics", "Priority support"],
    featured: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "For large engineering organizations with compliance needs.",
    features: ["Unlimited workspaces", "SSO", "Custom retention", "Dedicated success team"],
  },
];

export const faqItems = [
  {
    question: "Can CodeSense work with private GitHub repositories?",
    answer:
      "Yes. The platform is designed to support secure GitHub connections so teams can analyze private repositories with access controls.",
  },
  {
    question: "Does it support semantic search across code?",
    answer:
      "Yes. CodeSense combines repository parsing, embeddings, and vector retrieval for semantic code search and AI chat.",
  },
  {
    question: "Can I export generated documentation?",
    answer:
      "Yes. Documentation outputs can be prepared for Markdown or PDF export once backend integration is connected.",
  },
];

export const testimonials = [
  {
    name: "Riya Sharma",
    role: "Frontend Engineer",
    quote:
      "CodeSense helped our team understand a 3-year-old codebase in days instead of weeks.",
  },
  {
    name: "Aditya Rao",
    role: "Engineering Manager",
    quote:
      "The architecture summaries and dependency views made onboarding dramatically easier.",
  },
  {
    name: "Sneha Iyer",
    role: "CS Student",
    quote:
      "It feels like having a senior engineer explain the project structure on demand.",
  },
];

export const featureHighlights = [
  {
    title: "Repository intelligence",
    description: "Turn raw repositories into summaries, dependency maps, and architecture context.",
    icon: BrainCircuit,
  },
  {
    title: "Search with intent",
    description: "Ask questions in plain English and find relevant files, functions, and modules instantly.",
    icon: Bot,
  },
  {
    title: "Actionable analytics",
    description: "Track complexity hotspots, file distribution, and documentation coverage over time.",
    icon: Activity,
  },
];
