import { Bell, Menu, MoonStar, Sparkles, SunMedium } from "lucide-react";
import { Link } from "react-router-dom";
import { SearchBar } from "@/components/search-bar";
import { UserMenu } from "@/components/user-menu";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/theme-context";

interface TopNavbarProps {
  onOpenMobileNav: () => void;
}

export function TopNavbar({ onOpenMobileNav }: TopNavbarProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="flex flex-wrap items-center gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <Button
          variant="secondary"
          size="icon"
          className="lg:hidden"
          onClick={onOpenMobileNav}
        >
          <Menu className="h-5 w-5" />
        </Button>
        <div className="min-w-0 flex-1">
          <SearchBar />
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <Button asChild variant="secondary" className="hidden sm:inline-flex">
            <Link to="/chat">
              <Sparkles className="h-4 w-4" />
              Ask AI
            </Link>
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "dark" ? (
              <SunMedium className="h-5 w-5" />
            ) : (
              <MoonStar className="h-5 w-5" />
            )}
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
