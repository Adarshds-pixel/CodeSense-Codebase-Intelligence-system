import { Bot } from "lucide-react";

export function AppLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-500 to-sky-400 shadow-glow">
        <Bot className="h-5 w-5 text-white" />
      </div>
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-300">
          AI SaaS
        </p>
        <h1 className="text-xl font-semibold text-white">CodeSense</h1>
      </div>
    </div>
  );
}
