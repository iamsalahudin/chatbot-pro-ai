export default function ChatInput({ input, setInput, handleSend, loading, handleKeyPress, darkMode }) {
    return (
      <div className="flex mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type your message..."
          className={`px-4 py-3 rounded-xl border flex-1 mr-4 text-base outline-none border-amber-600 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className="px-6 py-3 rounded-xl bg-amber-600 text-white text-base disabled:bg-amber-400"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    );
  }
  