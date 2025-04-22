// components/Header.js
import { FiSearch, FiSettings, FiBell } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
      {/* Left side - Welcome text */}
      <h1 className="text-2xl font-semibold whitespace-nowrap">
        Welcome, <span className="text-[#1B1E28]">Okey Davids</span>
      </h1>
      
      {/* Right side - Search and Icons */}
      <div className="flex flex-col sm:flex-row items-end sm:items-center gap-4 w-full md:w-auto">
        {/* Search Bar */}
        <div className="relative w-full sm:flex-1 md:w-96">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full pl-4 pr-10 py-2.5 bg-[#F9FAFB] rounded-lg border border-[#EAECF0] 
                      focus:outline-none focus:ring-2 focus:ring-[#027A48] focus:border-transparent
                      text-sm placeholder-gray-400"
            aria-label="Search"
          />
          <FiSearch className="absolute right-3 top-3.5 h-4 w-4 text-gray-400" />
        </div>
        
        {/* Icons Group */}
        <div className="flex items-center gap-4">
          <button 
            className="p-2 text-gray-500 hover:text-[#027A48] hover:bg-gray-100 rounded-full"
            aria-label="Settings"
          >
            <FiSettings className="h-5 w-5" />
          </button>
          <button 
            className="p-2 text-gray-500 hover:text-[#027A48] hover:bg-gray-100 rounded-full relative"
            aria-label="Notifications"
          >
            <FiBell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          <button 
            className="flex items-center gap-2"
            aria-label="User profile">
            <FaUserCircle className="h-8 w-8 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}