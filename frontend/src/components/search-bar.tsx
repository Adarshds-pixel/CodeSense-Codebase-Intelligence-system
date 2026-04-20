import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  placeholder?: string;
}

export function SearchBar({
  placeholder = "Search repositories, files, functions...",
}: SearchBarProps) {
  return (
    <div className="relative w-full">
      <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
      <Input className="pl-10" placeholder={placeholder} />
    </div>
  );
}
