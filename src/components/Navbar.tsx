import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell, Settings, User } from 'lucide-react';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-indigo-600">AirQuality</span>
              <span className="text-2xl font-bold text-gray-700">Monitor</span>
            </Link>
          </div>

          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            <div className="ml-4 flex items-center space-x-4">
              <button className="text-gray-600 hover:text-indigo-600">
                <Bell className="h-6 w-6" />
              </button>
              <Link to="/settings" className="text-gray-600 hover:text-indigo-600">
                <Settings className="h-6 w-6" />
              </Link>
              <Link to="/profile" className="text-gray-600 hover:text-indigo-600">
                <User className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;