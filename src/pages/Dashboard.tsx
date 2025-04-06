import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Wind, Droplets, Thermometer, Sun } from 'lucide-react';

// Mock data - replace with real data from ESP32
const data = [
  { time: '00:00', pm25: 12, pm10: 25, temperature: 22, humidity: 45 },
  { time: '04:00', pm25: 15, pm10: 30, temperature: 21, humidity: 48 },
  { time: '08:00', pm25: 25, pm10: 45, temperature: 23, humidity: 50 },
  { time: '12:00', pm25: 20, pm10: 35, temperature: 25, humidity: 42 },
  { time: '16:00', pm25: 18, pm10: 32, temperature: 24, humidity: 44 },
  { time: '20:00', pm25: 14, pm10: 28, temperature: 22, humidity: 46 },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Air Quality Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">PM2.5</p>
              <p className="text-2xl font-bold text-gray-800">15 µg/m³</p>
            </div>
            <Wind className="h-8 w-8 text-indigo-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">PM10</p>
              <p className="text-2xl font-bold text-gray-800">30 µg/m³</p>
            </div>
            <Wind className="h-8 w-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Temperature</p>
              <p className="text-2xl font-bold text-gray-800">23°C</p>
            </div>
            <Thermometer className="h-8 w-8 text-red-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Humidity</p>
              <p className="text-2xl font-bold text-gray-800">45%</p>
            </div>
            <Droplets className="h-8 w-8 text-blue-500" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Air Quality Trends</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pm25" stroke="#8884d8" name="PM2.5" />
              <Line type="monotone" dataKey="pm10" stroke="#82ca9d" name="PM10" />
              <Line type="monotone" dataKey="temperature" stroke="#ff7300" name="Temperature" />
              <Line type="monotone" dataKey="humidity" stroke="#0088fe" name="Humidity" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;