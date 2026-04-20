import { Outlet } from "react-router-dom";
import { AppLogo } from "@/components/app-logo";

export function AuthLayout() {
  return (
    <div className="grid min-h-screen bg-background lg:grid-cols-2">
      <div className="relative hidden overflow-hidden border-r border-white/10 bg-hero-grid lg:flex">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.22),transparent_18%),radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.16),transparent_20%)]" />
        <div className="relative z-10 flex flex-col justify-between p-12">
          <AppLogo />
          <div className="max-w-xl space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">
              AI-Powered Codebase Understanding
            </p>
            <h1 className="text-5xl font-semibold leading-tight text-white">
              Understand repositories with clarity, speed, and confidence.
            </h1>
            <p className="text-lg leading-8 text-slate-300">
              CodeSense turns complex codebases into searchable explanations,
              architecture views, analytics, and AI-assisted documentation.
            </p>
          </div>
          <div className="glass grid max-w-xl grid-cols-3 gap-4 rounded-3xl p-5">
            <div>
              <p className="text-3xl font-semibold text-white">128+</p>
              <p className="mt-1 text-sm text-slate-400">Repositories indexed</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-white">84k</p>
              <p className="mt-1 text-sm text-slate-400">Files analyzed</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-white">99.9%</p>
              <p className="mt-1 text-sm text-slate-400">Platform uptime</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-4 py-10 sm:px-8 lg:px-12">
        <div className="w-full max-w-md">
          <div className="mb-8 lg:hidden">
            <AppLogo />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
