import { Github, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function LoginPage() {
  return (
    <Card>
      <CardContent className="space-y-6 p-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            Welcome back
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white">Sign in to CodeSense</h1>
          <p className="mt-2 text-sm text-slate-400">
            Continue exploring repositories, analytics, and AI-assisted documentation.
          </p>
        </div>
        <div className="space-y-4">
          <Button variant="secondary" className="w-full">
            <Github className="h-4 w-4" />
            Continue with GitHub
          </Button>
          <div className="grid gap-4">
            <Input type="email" placeholder="Email address" />
            <Input type="password" placeholder="Password" />
            <div className="flex items-center justify-between text-sm">
              <span className="text-red-300">Invalid credentials. Try demo mode.</span>
              <Link to="/forgot-password" className="text-blue-300 hover:text-blue-200">
                Forgot password?
              </Link>
            </div>
            <Button className="w-full">
              <Loader2 className="h-4 w-4 animate-spin" />
              Signing in...
            </Button>
          </div>
        </div>
        <p className="text-center text-sm text-slate-400">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-blue-300 hover:text-blue-200">
            Create one
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
