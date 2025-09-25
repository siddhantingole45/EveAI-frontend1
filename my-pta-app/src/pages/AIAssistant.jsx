import React, { useState } from "react";

import { useNavigate } from "react-router-dom";


export default function AIAssistant() {
      const navigate = useNavigate();

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      name: "AI Assistant",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBCprEsQdbvsdthaFWr6ABill29X_6spHPtScN1OztBYs_mU0ECBaTYoAsZn2Kh1zwFK5ApIejqE6e9U7sbhITPgg4MwTI5wZWkTuDCO2S39X3e8RXCy8dKWkdmh9sPGhwRre3fc42lVRcf8xlH9b9wrfhtP_FMP3-hvr7-qDA38T0Ryo_nZYJIBh6nczd-80XDLyW85hGnaItaOqF4zckZzoSADTC1ySHYrP4k4gtsJsiC59Q79SNc4JOvdXZgqQwOumiQtPoJVB55",
      text: "Hi there! How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const newMessages = [
      ...messages,
      {
        sender: "user",
        name: "Sophia",
        avatar:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuByWBF-VTHuBEr2v4rI0bS34Yh5BJRRAndcEr7Zp_ivhnXIaBQuCyoYwPLkbYgsLHgpYDP59Roi3kLd5BnAJ57bHp_Duk31IIfiANO8SAkMezi68Ur8pD3wbEPzY8euBXgoV-AViKD3T3ECOB52Mkd1ibh1bh1Kgt2qwALd5CpKjIbd46I8bnfbdzFRcbTZ04GIza6iXbGtdZ2pe6ecrwOjsHfHSeVDaa4oh6435DBeOMn-sKSKSp48SrrmJQ3Hy6XeSuuyeJ5a68TL",
        text: input,
      },
    ];
    setMessages(newMessages);

    setInput("");

    // Simulate AI reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          name: "AI Assistant",
          avatar:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBCprEsQdbvsdthaFWr6ABill29X_6spHPtScN1OztBYs_mU0ECBaTYoAsZn2Kh1zwFK5ApIejqE6e9U7sbhITPgg4MwTI5wZWkTuDCO2S39X3e8RXCy8dKWkdmh9sPGhwRre3fc42lVRcf8xlH9b9wrfhtP_FMP3-hvr7-qDA38T0Ryo_nZYJIBh6nczd-80XDLyW85hGnaItaOqF4zckZzoSADTC1ySHYrP4k4gtsJsiC59Q79SNc4JOvdXZgqQwOumiQtPoJVB55",
          text: "Got it! Let me explain...",
        },
      ]);
    }, 1200);
  };

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#f9f9fb] group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col ">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e9eaf2] px-10 py-3 fixed top-0 right-0 left-0 z-9 bg-[#f9f9fb]">
          <div className="flex items-center gap-4 text-[#0f111a] cursor-pointer " onClick={() => navigate("/dashboard")}>
            <div className="size-4">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-[#0f111a] text-lg font-bold leading-tight tracking-[-0.015em]">
              EveAI
            </h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-[#0f111a] text-sm font-medium" href="#">
                Dashboard
              </a>
              <a className="text-[#0f111a] text-sm font-medium" href="#">
                Courses
              </a>
              <a className="text-[#0f111a] text-sm font-medium" href="#">
                Resources
              </a>
              <a className="text-[#0f111a] text-sm font-medium" href="#">
                Community
              </a>
            </div>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAKsveOF4xOzFVJnuB63cB88-bM5IX7JPfPSUVvRNx7xJ4CR3wg5-g9qaEWQgpmI4COrtVBiR8S1LGdfhRzMn7d3v4J0MjdPfgywqeZq7NxTaobmMQuoQ6kVNWTRHgBLXVOmTLL3o0fNrlomt2Qqpe-UYucC3NBzBoZh4bCwMKNyrmXUpZgno8cv7DUqGorcdh7BIdRHdSH6PyGr7EBwEBz-Pp2DHnVYQ4rPUDlcCCg5RZE3NPj14NM71PXsRIKWIGy_26k_Ia7ZBtL")',
              }}
            />
          </div>
        </header>

        {/* Main Content */}
        <div className="px-40 flex flex-1 justify-center py-5 relative top-20">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1 space-y-4">
            {/* Title */}
            <div className="flex flex-wrap justify-center gap-3 p-4 ">
              <p className="text-[#0f111a] text-[32px] font-bold leading-tight min-w-72 ">
                Ask a doubt
              </p>
            </div>

            {/* Dynamic Chat */}
            <div className="flex flex-col space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex items-end gap-3 p-4 ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.sender === "ai" && (
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
                      style={{ backgroundImage: `url(${msg.avatar})` }}
                    />
                  )}
                  <div
                    className={`flex flex-col gap-1 max-w-[360px] ${
                      msg.sender === "user" ? "items-end" : "items-start"
                    }`}
                  >
                    <p
                      className={`text-[#56618f] text-[13px] font-normal leading-normal ${
                        msg.sender === "user" ? "text-right" : ""
                      }`}
                    >
                      {msg.name}
                    </p>
                    <p
                      className={`text-base font-normal leading-normal rounded-xl px-4 py-3 ${
                        msg.sender === "user"
                          ? "bg-[#e9ecfa] text-[#0f111a]"
                          : "bg-[#e9eaf2] text-[#0f111a]"
                      }`}
                    >
                      {msg.text}
                    </p>
                  </div>
                  {msg.sender === "user" && (
                    <div
                      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
                      style={{ backgroundImage: `url(${msg.avatar})` }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Input Box */}
            <div className="flex items-center gap-2 p-4 border-t border-[#e9eaf2]">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your question..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-blue-200"
              />
              <button
                onClick={handleSend}
                className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600"
              >
                Send
              </button>
            </div>

            {/* Suggestions */}
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              {[
                "That's a great explanation!",
                "Tell me more about chlorophyll.",
                "How does this relate to plant growth?",
              ].map((s, i) => (
                <div
                  key={i}
                  className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#e9eaf2] px-4 cursor-pointer hover:bg-[#dfe0eb]"
                  onClick={() => setInput(s)}
                >
                  <p className="text-[#0f111a] text-sm font-medium">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
