import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Github, PlayCircle, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { AppLogo } from "@/components/app-logo";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { faqItems, featureHighlights, pricingPlans, repositories, testimonials } from "@/data/mock-data";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <AppLogo />
          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-slate-300 transition hover:text-white">
              Features
            </a>
            <a href="#pricing" className="text-sm text-slate-300 transition hover:text-white">
              Pricing
            </a>
            <a href="#faq" className="text-sm text-slate-300 transition hover:text-white">
              FAQ
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Button asChild variant="ghost">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/dashboard">
                Open App
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
          <div className="space-y-8">
            <Badge className="px-4 py-1.5" variant="default">
              <Sparkles className="mr-2 h-3.5 w-3.5" />
              Premium AI codebase understanding
            </Badge>
            <div className="space-y-5">
              <h1 className="max-w-4xl text-5xl font-semibold leading-tight text-white sm:text-6xl">
                Turn complex repositories into insights your team can act on.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                CodeSense helps developers, students, and engineering teams understand
                files, architecture, dependencies, and project flow through AI-powered analysis.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg">
                <Link to="/register">
                  Start free
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary">
                <PlayCircle className="h-4 w-4" />
                Watch demo
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {["Semantic code search", "AI docs generation", "Dependency graphs"].map((item) => (
                <div key={item} className="glass rounded-2xl px-4 py-3 text-sm text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="glass rounded-[32px] p-5 shadow-glow"
          >
            <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Workspace Snapshot</p>
                  <h3 className="text-xl font-semibold text-white">codesense-platform</h3>
                </div>
                <Badge variant="success">Analyzed</Badge>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {repositories.slice(0, 4).map((repo) => (
                  <Card key={repo.id} className="bg-white/[0.03]">
                    <CardContent className="space-y-3 p-4">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-white">{repo.name}</p>
                        <Github className="h-4 w-4 text-slate-500" />
                      </div>
                      <p className="text-sm text-slate-400">{repo.description}</p>
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span>{repo.language}</span>
                        <span>{repo.files} files</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to explore unfamiliar codebases"
          description="Built for modern teams that need fast onboarding, code clarity, and architecture visibility."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featureHighlights.map((feature) => (
            <Card key={feature.title} className="overflow-hidden">
              <CardContent className="space-y-4 p-6">
                <div className="inline-flex rounded-2xl bg-blue-500/10 p-3 text-blue-300">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-sm leading-7 text-slate-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardContent className="space-y-5 p-6">
              <SectionHeading
                eyebrow="How it works"
                title="Upload, analyze, ask, and export"
                description="A workflow designed to feel intuitive from the first repository."
              />
              {[
                "Upload a ZIP or connect GitHub",
                "Index files and detect technologies automatically",
                "Generate summaries, docs, and dependency insights",
                "Ask AI questions with repository context",
              ].map((step, index) => (
                <div key={step} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <p className="text-sm text-slate-300">{step}</p>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardContent className="space-y-5 p-6">
              <SectionHeading
                eyebrow="Benefits"
                title="Shorter onboarding, deeper visibility"
                description="Give every contributor the context they need without weeks of manual exploration."
              />
              {[
                "Understand large projects faster",
                "Reduce manual documentation effort",
                "Track complexity and architecture hotspots",
                "Centralize repository intelligence for your team",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-200">
                  <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                  {benefit}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Screens"
          title="A clean dashboard built for modern engineering workflows"
          description="Inspired by premium SaaS dashboards with analytics, AI tooling, and repository navigation."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {["Analytics Overview", "Repository Explorer", "AI Chat Workspace"].map((panel) => (
            <Card key={panel}>
              <CardContent className="p-4">
                <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950/40 p-5">
                  <div className="mb-5 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-300" />
                    <span className="h-3 w-3 rounded-full bg-emerald-300" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-8 w-1/2 rounded-xl bg-white/10" />
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-28 rounded-2xl bg-white/5" />
                      <div className="h-28 rounded-2xl bg-white/5" />
                    </div>
                    <div className="h-28 rounded-2xl bg-white/5" />
                  </div>
                </div>
                <p className="mt-4 text-sm font-medium text-white">{panel}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Teams use CodeSense to make complex software easier to understand"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name}>
              <CardContent className="space-y-4 p-6">
                <div className="flex items-center gap-1 text-amber-300">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm leading-7 text-slate-300">“{item.quote}”</p>
                <div>
                  <p className="font-medium text-white">{item.name}</p>
                  <p className="text-sm text-slate-400">{item.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Plans built for students, teams, and enterprises"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.title}
              className={plan.featured ? "border-blue-500/40 bg-blue-500/5 shadow-glow" : ""}
            >
              <CardContent className="space-y-6 p-6">
                <div>
                  <h3 className="text-xl font-semibold text-white">{plan.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{plan.description}</p>
                </div>
                <div>
                  <p className="text-4xl font-semibold text-white">{plan.price}</p>
                  <p className="mt-1 text-sm text-slate-500">per month</p>
                </div>
                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                      {feature}
                    </div>
                  ))}
                </div>
                <Button className="w-full" variant={plan.featured ? "default" : "secondary"}>
                  Choose {plan.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Common questions about CodeSense" />
        <div className="mt-10 space-y-4">
          {faqItems.map((item) => (
            <Card key={item.question}>
              <CardContent className="space-y-3 p-6">
                <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                <p className="text-sm leading-7 text-slate-400">{item.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <AppLogo />
          <p>© 2026 CodeSense. Built for AI-powered codebase understanding.</p>
        </div>
      </footer>
    </div>
  );
}
