import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ChatMessage as ChatMessageType } from "@/types";

export function ChatMessage({ message }: { message: ChatMessageType }) {
  const isAssistant = message.role === "assistant";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn("flex gap-4", !isAssistant && "justify-end")}
    >
      {isAssistant ? (
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600/15 text-blue-300">
          <Bot className="h-5 w-5" />
        </div>
      ) : null}
      <div
        className={cn(
          "max-w-3xl rounded-2xl border border-white/10 px-5 py-4 text-sm leading-7 shadow-card",
          isAssistant
            ? "bg-slate-950/80 text-slate-100"
            : "bg-blue-600 text-white",
        )}
      >
        <p>{message.content}</p>
        {message.code ? (
          <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900/80 p-4 text-xs text-blue-100">
            <code>{message.code}</code>
          </pre>
        ) : null}
      </div>
      {!isAssistant ? (
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-slate-100">
          <User className="h-5 w-5" />
        </div>
      ) : null}
    </motion.div>
  );
}
