"use client";

import { useState, useRef, useEffect } from "react";
import { marked } from "marked";
import styles from "./AIChat.module.css";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SYSTEM_PROMPT = `You are a helpful assistant for Md Mubassir Ahmed Siddique's portfolio website. You can help visitors learn about:
- His skills: TypeScript, Next.js, React, Node.js, Tailwind CSS, Framer Motion, PostgreSQL, REST APIs
- His projects: Atlas Dashboard (analytics suite), Lumen Commerce (headless storefront), News Portal
- His experience: Independent developer, project-based learning, frontend practice
- His focus areas: Design Systems, Frontend Architecture, Product Strategy, UX Engineering
- His contact: ms.mubassir@proton.me

Keep responses concise and professional. Use markdown formatting when helpful (bold with **text**, lists with - or 1., code with \`code\`).`;

// Configure marked for safe rendering
marked.setOptions({
  breaks: true,
  gfm: true,
});

function renderMarkdown(content: string) {
  const html = marked.parse(content) as string;
  return { __html: html };
}

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm here to help you learn about Md Mubassir's work. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Use server-side API route on Vercel, fallback to direct call
      const isVercel = typeof window !== "undefined" && window.location.hostname.includes("vercel.app");

      let response;
      if (isVercel) {
        // Vercel: use local API route (server-side)
        response = await fetch("/api/chat/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: [
              { role: "system", content: SYSTEM_PROMPT },
              ...messages.map((m) => ({ role: m.role, content: m.content })),
              { role: "user", content: input.trim() },
            ],
          }),
        });
      } else {
        // GitHub Pages: try direct call with additional timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 15000);

        response = await fetch("https://opencode.ai/zen/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer sk-79nH8aoFgSuDNdVkiT4bNlYV82Mv1ki2iuPfIfY0d5aLnlLC5EKuLLoFCQDJPTDp",
          },
          body: JSON.stringify({
            model: "minimax-m2.5-free",
            messages: [
              { role: "system", content: SYSTEM_PROMPT },
              ...messages.map((m) => ({ role: m.role, content: m.content })),
              { role: "user", content: input.trim() },
            ],
            max_tokens: 500,
          }),
          signal: controller.signal,
        });
        clearTimeout(timeoutId);
      }

      if (!response.ok) {
        const errorText = await response.text();
        console.error("API Error:", response.status, errorText);
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      let content = isVercel ? data.content : data.choices?.[0]?.message?.content;

      // Handle null content (refusal or empty response)
      if (!content) {
        content = "Sorry, I couldn't process that request. Please try again or contact ms.mubassir@proton.me directly.";
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: content,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      let errorMsg = "I'm having trouble responding right now.";
      if (error instanceof TypeError && error.message.includes("Failed to fetch")) {
        errorMsg = "Unable to connect. Check your connection or try again later.";
      }
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: errorMsg + " You can email ms.mubassir@proton.me directly.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105"
        aria-label="Open AI chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-24 right-6 z-50 w-[90vw] max-w-md bg-[#18181b] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden ${styles.chatWindow}`}>
          {/* Header */}
          <div className="bg-[#09090b] px-5 py-4 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-sm">AI Assistant</h3>
                <p className="text-xs text-zinc-500">Powered by Claude</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${
                    msg.role === "user"
                      ? "bg-orange-500 text-black rounded-br-md"
                      : `bg-zinc-800 text-zinc-200 rounded-bl-md ${styles.markdownContent}`
                  }`}
                  dangerouslySetInnerHTML={msg.role === "assistant" ? renderMarkdown(msg.content) : undefined}
                >
                  {msg.role === "user" ? msg.content : undefined}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 px-4 py-3 rounded-2xl rounded-bl-md">
                  <div className="flex gap-1">
                    <span className={`w-2 h-2 bg-zinc-500 rounded-full animate-bounce ${styles.bounce1}`} />
                    <span className={`w-2 h-2 bg-zinc-500 rounded-full animate-bounce ${styles.bounce2}`} />
                    <span className={`w-2 h-2 bg-zinc-500 rounded-full animate-bounce ${styles.bounce3}`} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="border-t border-zinc-800 p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my work..."
                className="flex-1 bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-orange-500 transition-colors"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="px-4 py-2.5 bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-colors"
              >
                <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}

      import styles from "./AIChat.module.css";
    </>
  );
}