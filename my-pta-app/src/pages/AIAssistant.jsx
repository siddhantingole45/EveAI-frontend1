import React, { useState, useEffect, useRef } from "react";
import apiClient from "../api/client";
import AppShell from "../Components/AppShell";

export default function AIAssistant() {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello! I'm Eve, your study tutor. What are we learning today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
    setInput("");
    setLoading(true);

    try {
      const res = await apiClient.post("/ai/chat", { message: userMsg });
      setMessages((prev) => [...prev, { sender: "ai", text: res.data.response }]);
    } catch {
      setMessages((prev) => [...prev, { sender: "ai", text: "I'm having trouble connecting to my brain. Try again?" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppShell title="EveAI Tutor" hideSearch>
      <div className="flex min-h-[60vh] flex-col gap-6 rounded-3xl bg-white p-6 shadow-sm">
        <div className="flex-1 space-y-4 overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[75%] rounded-3xl p-4 text-sm leading-relaxed ${
                message.sender === "user"
                  ? "bg-blue-600 text-white rounded-tr-none"
                  : "bg-[#f3f4f6] text-[#111827] rounded-tl-none"
              }`}>
                {message.text}
              </div>
            </div>
          ))}
          {loading && <div className="text-sm text-[#6b7280]">Eve is thinking...</div>}
          <div ref={scrollRef} />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            placeholder="Ask anything (e.g. Explain photosynthesis using a football analogy)"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 rounded-2xl border border-[#d2d6e4] bg-[#f8fafc] px-4 py-3 text-sm outline-none focus:border-[#607afb] focus:ring-2 focus:ring-[#dbe4ff]"
          />
          <button
            type="button"
            onClick={handleSend}
            className="rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </div>
    </AppShell>
  );
}
