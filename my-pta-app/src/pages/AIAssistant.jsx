import React, { useState, useEffect, useRef } from "react";
import apiClient from "../api/client";

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
    setMessages(prev => [...prev, { sender: "user", text: userMsg }]);
    setInput("");
    setLoading(true);

    try {
      const res = await apiClient.post("/ai/chat", { message: userMsg });
      setMessages(prev => [...prev, { sender: "ai", text: res.data.response }]);
    } catch {
      setMessages(prev => [...prev, { sender: "ai", text: "I'm having trouble connecting to my brain. Try again?" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <header className="p-6 border-b font-bold text-xl">EveAI Tutor</header>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[70%] p-4 rounded-2xl ${
              m.sender === "user" ? "bg-blue-600 text-white rounded-tr-none" : "bg-gray-100 text-gray-800 rounded-tl-none"
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {loading && <div className="text-gray-400 text-sm animate-pulse">Eve is thinking...</div>}
        <div ref={scrollRef} />
      </div>

      <div className="p-6 border-t flex gap-4">
        <input 
          className="flex-1 border rounded-xl px-4 py-3 focus:outline-blue-500"
          placeholder="Ask anything (e.g. Explain photosynthesis using a football analogy)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend} className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold">Send</button>
      </div>
    </div>
  );
}