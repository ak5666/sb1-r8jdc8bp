import React from 'react';
import { User, Mail, Phone, MapPin } from 'lucide-react';

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex items-center space-x-6 mb-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="h-24 w-24 rounded-full"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
            <p className="text-gray-600">Air Quality Analyst</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex items-center space-x-3">
            <User className="h-5 w-5 text-gray-500" />
            <span className="text-gray-600">Username: johndoe</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-gray-500" />
            <span className="text-gray-600">Email: john@example.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-gray-500" />
            <span className="text-gray-600">Phone: +1 234 567 890</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-gray-500" />
            <span className="text-gray-600">Location: New York, USA</span>
          </div>
        </div>

        <div className="border-t pt-4">
          <h3 className="text-xl font-semibold mb-4">Notification Preferences</h3>
          <div className="space-y-3">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
              <span className="ml-2 text-gray-700">Email notifications</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
              <span className="ml-2 text-gray-700">Push notifications</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
              <span className="ml-2 text-gray-700">SMS alerts</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;