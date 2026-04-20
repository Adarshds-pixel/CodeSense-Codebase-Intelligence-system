import { Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function RegisterPage() {
  return (
    <Card>
      <CardContent className="space-y-6 p-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            Get started
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white">Create your CodeSense workspace</h1>
          <p className="mt-2 text-sm text-slate-400">
            Build a modern AI knowledge layer for every repository your team touches.
          </p>
        </div>
        <Button variant="secondary" className="w-full">
          <Github className="h-4 w-4" />
          Sign up with GitHub
        </Button>
        <div className="grid gap-4">
          <Input placeholder="Full name" />
          <Input type="email" placeholder="Work email" />
          <Input placeholder="Workspace name" />
          <Input type="password" placeholder="Create password" />
          <p className="text-sm text-emerald-300">
            Strong password detected. This is a ready state for backend validation later.
          </p>
          <Button className="w-full">Create account</Button>
        </div>
        <p className="text-center text-sm text-slate-400">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-300 hover:text-blue-200">
            Login
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
