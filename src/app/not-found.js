'use client';
import { useContext } from 'react';
import { ThemeContext } from './(components)/ThemeProvider';
import HeaderBar from './(components)/Header';
import Link from 'next/link';

export default function NotFound() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className={`py-8 px-5 sm:px-14 lg:px-72 mx-auto h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <HeaderBar 
        title="Page Not Found" 
        darkMode={darkMode} 
        toggleDarkMode={() => setDarkMode(!darkMode)}
      />

      <div className="flex flex-col items-center justify-center h-[75%] text-center">
        <h1 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-amber-600'}`}>
          404 - Page Not Found
        </h1>
        <p className={`text-lg mb-6 max-w-md ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Oops! The page you're looking for doesn’t exist or might have been moved.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-amber-600 text-white rounded-xl hover:bg-amber-500 transition text-base"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
