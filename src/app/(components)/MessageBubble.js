import ReactMarkdown from "react-markdown";

export default function MessageBubble({ message, darkMode }) {
  const isUser = message.sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`px-6 py-4 rounded-xl max-w-[80%] break-words text-base overflow-hidden ${
          isUser
            ? "bg-amber-600 text-white"
            : darkMode
            ? "bg-gray-700 text-white"
            : "bg-gray-100 text-black"
        }`}
      >
        {/* Render markdown if it's from AI */}
        {isUser ? (
          message.text
        ) : (
          <ReactMarkdown>{message.text}</ReactMarkdown>
        )}
      </div>
    </div>
  );
}
