import { SendHorizontal, Sparkles } from "lucide-react";
import { ChatMessage } from "@/components/chat-message";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { chatMessages, suggestedQuestions } from "@/data/mock-data";

export function AiChatPage() {
  return (
    <PageShell>
      <div className="grid gap-6 xl:grid-cols-[0.35fr_1fr]">
        <Card className="h-[calc(100vh-10rem)]">
          <CardHeader>
            <CardTitle>Previous chats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {["Architecture summary", "Auth flow review", "Dependency hotspots", "Upload pipeline"].map((chat) => (
              <button
                key={chat}
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left text-sm text-slate-300 transition hover:bg-white/[0.07]"
              >
                {chat}
              </button>
            ))}
          </CardContent>
        </Card>

        <Card className="h-[calc(100vh-10rem)]">
          <CardHeader className="border-b border-white/10">
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-blue-300" />
              Chat with repository context
            </CardTitle>
            <p className="text-sm text-slate-400">
              Repository: codesense-platform • Branch: main • Context scope: full workspace
            </p>
          </CardHeader>
          <CardContent className="flex h-[calc(100%-5.5rem)] flex-col gap-5 p-0">
            <ScrollArea className="h-full px-6 py-6">
              <div className="space-y-5">
                {chatMessages.map((message) => (
                  <ChatMessage key={message.id} message={message} />
                ))}
                <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-sm text-slate-400">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
                  CodeSense is typing...
                </div>
              </div>
            </ScrollArea>
            <div className="border-t border-white/10 px-6 py-5">
              <div className="mb-4 flex flex-wrap gap-2">
                {suggestedQuestions.map((question) => (
                  <button
                    key={question}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-300 transition hover:bg-white/[0.07]"
                  >
                    {question}
                  </button>
                ))}
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Textarea
                  className="min-h-[88px] flex-1"
                  placeholder="Ask about files, architecture, APIs, data flow, or complexity hotspots..."
                />
                <Button className="sm:self-end">
                  <SendHorizontal className="h-4 w-4" />
                  Send
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  );
}
