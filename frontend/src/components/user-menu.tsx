import { LogOut, Settings, UserCircle2 } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 transition hover:bg-white/[0.08]">
          <Avatar className="h-9 w-9">
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>
          <div className="hidden text-left sm:block">
            <p className="text-sm font-medium text-white">Adarsh Singh</p>
            <p className="text-xs text-slate-400">Frontend Workspace</p>
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Account</DropdownMenuLabel>
        <DropdownMenuItem>
          <UserCircle2 className="h-4 w-4" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="h-4 w-4" />
          Settings
        </DropdownMenuItem>
        <div className="my-2 h-px bg-white/10" />
        <DropdownMenuItem>
          <LogOut className="h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
