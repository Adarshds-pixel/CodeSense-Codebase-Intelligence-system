import { Bell } from "lucide-react";
import { notifications } from "@/data/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function NotificationsPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-blue-300" />
          Notifications
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-medium text-white">{notification.title}</p>
                <p className="mt-1 text-sm text-slate-400">
                  {notification.description}
                </p>
              </div>
              {notification.unread ? (
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-400" />
              ) : null}
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-slate-500">
              {notification.time}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
