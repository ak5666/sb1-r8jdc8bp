import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  BarChart2, 
  Cloud, 
  Map, 
  AlertTriangle, 
  Settings, 
  User 
} from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-lg h-[calc(100vh-4rem)]">
      <div className="p-4">
        <nav className="space-y-2">
          <Link to="/" className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded-lg">
            <Home className="h-5 w-5 mr-3" />
            Dashboard
          </Link>
          <Link to="/analytics" className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded-lg">
            <BarChart2 className="h-5 w-5 mr-3" />
            Analytics
          </Link>
          <Link to="/weather" className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded-lg">
            <Cloud className="h-5 w-5 mr-3" />
            Weather
          </Link>
          <Link to="/map" className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded-lg">
            <Map className="h-5 w-5 mr-3" />
            Map View
          </Link>
          <Link to="/alerts" className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded-lg">
            <AlertTriangle className="h-5 w-5 mr-3" />
            Alerts
          </Link>
          <Link to="/settings" className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded-lg">
            <Settings className="h-5 w-5 mr-3" />
            Settings
          </Link>
          <Link to="/profile" className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded-lg">
            <User className="h-5 w-5 mr-3" />
            Profile
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;