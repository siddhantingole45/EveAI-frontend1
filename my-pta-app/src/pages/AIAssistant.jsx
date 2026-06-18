import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import apiClient from "../api/client";
import AppShell from "../Components/AppShell";

export default function AIAssistant() {
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      sender: "ai",
      text: "Hi! I'm Eve, your study tutor. What questions or doubts are you working on today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    setError("");
    setInput("");

    const userId = `user-${Date.now()}`;
    const aiId = `ai-${Date.now()}`;

    setMessages((prev) => [
      ...prev,
      { id: userId, sender: "user", text: trimmed },
      { id: aiId, sender: "ai", text: "..." },
    ]);

    setLoading(true);

    try {
      const res = await apiClient.post("/ai/chat", {
        message: trimmed,
      });

      const text =
        res.data?.response ||
        res.data?.message ||
        "I'm having trouble responding right now.";

      setMessages((prev) =>
        prev.map((m) => (m.id === aiId ? { ...m, text } : m))
      );
    } catch {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === aiId
            ? {
                ...m,
                text: "Sorry, something went wrong while generating response.",
              }
            : m
        )
      );

      setError("Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppShell title="EveAI Quick Ask" hideSearch>
      <div className="mx-auto flex min-h-[60vh] max-w-[900px] flex-col gap-6 rounded-[32px] bg-white p-6 shadow-sm">

        {/* Header */}
        <div className="rounded-[28px] border border-[#e8edf8] bg-[#f8fafc] p-5 text-sm text-[#475569]">
          Chat with Eve and get personalized study help any time.
        </div>

        {/* Chat */}
        <div className="flex-1 space-y-4 overflow-y-auto px-1">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[85%] rounded-3xl p-4 text-sm leading-relaxed shadow-sm ${
                  message.sender === "user"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-[#f3f4f6] text-[#111827] rounded-bl-none"
                }`}
              >
                {message.sender === "ai" ? (
                  <div className="prose prose-sm max-w-none text-left">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {message.text}
                    </ReactMarkdown>
                  </div>
                ) : (
                  message.text
                )}
              </div>
            </div>
          ))}

          {loading && (
            <div className="text-sm text-[#6b7280]">Eve is thinking...</div>
          )}

          <div ref={scrollRef} />
        </div>

        {/* Error */}
        {error && (
          <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* Input */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            placeholder="Ask anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 rounded-2xl border border-[#d2d6e4] bg-[#f8fafc] px-4 py-3 text-sm outline-none transition focus:border-[#607afb] focus:ring-2 focus:ring-[#dbe4ff]"
          />

          <button
            type="button"
            onClick={handleSend}
            disabled={loading}
            className="rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Send
          </button>
        </div>
      </div>
    </AppShell>
  );
}