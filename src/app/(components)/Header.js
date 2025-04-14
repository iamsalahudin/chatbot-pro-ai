import { Moon, Sun } from "lucide-react";

export default function HeaderBar({ title, darkMode, toggleDarkMode, children }) {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold text-amber-600">{title}</h2>
      <div className="flex items-center gap-3">
        {children}
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full border-2 ${darkMode ? 'text-white border-white' : 'border-amber-600 text-amber-600'} transition`}
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </div>
  );
}
