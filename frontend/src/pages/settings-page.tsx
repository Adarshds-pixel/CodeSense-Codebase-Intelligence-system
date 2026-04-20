import { Github, ShieldAlert } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalTitle,
  ModalTrigger,
} from "@/components/ui/modal";
import { Switch } from "@/components/ui/switch";

export function SettingsPage() {
  return (
    <PageShell>
      <SectionHeading
        eyebrow="Settings"
        title="Manage your profile, security, and preferences"
        description="Everything here is prepared for backend settings APIs later."
      />
      <div className="grid gap-6 xl:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Profile settings</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Input placeholder="Full name" defaultValue="Adarsh Singh" />
            <Input placeholder="Email address" defaultValue="adarsh@codesense.ai" />
            <Input placeholder="Workspace name" defaultValue="CodeSense Frontend" />
            <Button className="w-fit">Save changes</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Input type="password" placeholder="Current password" />
            <Input type="password" placeholder="New password" />
            <Input type="password" placeholder="Confirm new password" />
            <Button variant="secondary" className="w-fit">
              Update password
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              "Repository analysis completed",
              "GitHub sync updates",
              "Weekly analytics digest",
            ].map((item, index) => (
              <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div>
                  <p className="font-medium text-white">{item}</p>
                  <p className="text-sm text-slate-400">Receive alerts for {item.toLowerCase()}.</p>
                </div>
                <Switch defaultChecked={index !== 2} />
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Connected accounts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-white" />
                <div>
                  <p className="font-medium text-white">GitHub</p>
                  <p className="text-sm text-slate-400">Connected to `adarsh-dev`</p>
                </div>
              </div>
              <Button variant="secondary">Manage</Button>
            </div>
          </CardContent>
        </Card>
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Danger zone</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 rounded-b-2xl bg-red-500/5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <ShieldAlert className="mt-0.5 h-5 w-5 text-red-300" />
              <div>
                <p className="font-medium text-white">Delete account</p>
                <p className="text-sm text-slate-400">
                  Permanently remove your workspace, repository metadata, and settings.
                </p>
              </div>
            </div>
            <Modal>
              <ModalTrigger asChild>
                <Button variant="destructive">Delete account</Button>
              </ModalTrigger>
              <ModalContent>
                <ModalTitle className="text-xl font-semibold text-white">
                  Confirm account deletion
                </ModalTitle>
                <ModalDescription className="mt-2 text-sm leading-7 text-slate-400">
                  This modal is ready for destructive backend actions once account APIs are connected.
                </ModalDescription>
                <div className="mt-6 flex justify-end gap-3">
                  <Button variant="secondary">Cancel</Button>
                  <Button variant="destructive">Yes, delete</Button>
                </div>
              </ModalContent>
            </Modal>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  );
}
