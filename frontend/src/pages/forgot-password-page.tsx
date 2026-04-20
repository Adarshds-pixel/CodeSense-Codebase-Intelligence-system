import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function ForgotPasswordPage() {
  return (
    <Card>
      <CardContent className="space-y-6 p-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            Recover access
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white">Reset your password</h1>
          <p className="mt-2 text-sm text-slate-400">
            Enter your email and we&apos;ll send a secure reset link.
          </p>
        </div>
        <div className="grid gap-4">
          <Input type="email" placeholder="Email address" />
          <p className="text-sm text-emerald-300">
            Password reset link will be delivered once backend email flow is connected.
          </p>
          <Button className="w-full">Send reset link</Button>
        </div>
        <p className="text-center text-sm text-slate-400">
          <Link to="/login" className="text-blue-300 hover:text-blue-200">
            Back to login
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
