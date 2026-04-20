import { useState } from "react";
import { Outlet } from "react-router-dom";
import { SidebarNav } from "@/components/sidebar-nav";
import { TopNavbar } from "@/components/top-navbar";
import { Sheet, SheetContent } from "@/components/ui/sheet";

export function AppLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 shrink-0 border-r border-white/10 bg-slate-950/85 lg:block">
          <SidebarNav />
        </aside>
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetContent className="p-0 lg:hidden">
            <SidebarNav />
          </SheetContent>
        </Sheet>
        <div className="flex min-h-screen min-w-0 flex-1 flex-col">
          <TopNavbar onOpenMobileNav={() => setMobileOpen(true)} />
          <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
