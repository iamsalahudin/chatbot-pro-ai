import MessageBubble from "./MessageBubble";

export default function ChatWindow({ messages, loading, chatEndRef, darkMode }) {
  return (
    <div className={`h-[80%] hide-scrollbar my-4 border rounded-xl p-4 border-amber-600 ${darkMode ? 'bg-gray-800' : ''}`}>
      {messages.map((msg, index) => (
        <MessageBubble key={index} message={msg} darkMode={darkMode} />
      ))}
      {loading && (
        <MessageBubble
          message={{ sender: "ai", text: "Loading..." }}
          darkMode={darkMode}
        />
      )}
      <div ref={chatEndRef} />
    </div>
  );
}
