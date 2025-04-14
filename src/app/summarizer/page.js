'use client';
import { useState, useEffect, useRef, useContext } from "react";
import { ThemeContext } from "../(components)/ThemeProvider";
import HeaderBar from "../(components)/Header";
import ChatWindow from "../(components)/ChatWindow";
import ChatInput from "../(components)/ChatInput";
import Link from "next/link";

export default function SummarizerChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { text: input, sender: "user" }]);
    setLoading(true);
    const res = await fetch("/api/summarize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input }),
    });
    const data = await res.json();
    setMessages((prev) => [...prev, { text: data.summary, sender: "ai" }]);
    setLoading(false);
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={`py-8 px-5 sm:px-14 lg:px-72 mx-auto h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <HeaderBar title="Summarizer AI (Temporary)" darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)}>
        <Link href="/" className={`text-sm underline ${darkMode ? 'text-white' : 'text-amber-600'}`}>Back</Link>
      </HeaderBar>
      <ChatWindow messages={messages} loading={loading} chatEndRef={chatEndRef} darkMode={darkMode} />
      <ChatInput input={input} setInput={setInput} handleSend={handleSend} handleKeyPress={handleKeyPress} loading={loading} darkMode={darkMode} />
      <div className="text-center text-sm text-gray-600 dark:text-gray-400">
        <p><strong>Note:</strong> This is a temporary chat app. Refreshing the page will clear the chat.</p>
      </div>
    </div>
  );
}
