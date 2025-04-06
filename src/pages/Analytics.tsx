import React, { useState } from 'react';
import { BarChart2, TrendingUp, AlertCircle, Wind, Calendar, Filter } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

const Analytics = () => {
  // Mock data - replace with real data from your ESP32
  const hourlyData = [
    { time: '00:00', pm25: 12, pm10: 25, temperature: 22, humidity: 45 },
    { time: '04:00', pm25: 15, pm10: 30, temperature: 21, humidity: 48 },
    { time: '08:00', pm25: 25, pm10: 45, temperature: 23, humidity: 50 },
    { time: '12:00', pm25: 20, pm10: 35, temperature: 25, humidity: 42 },
    { time: '16:00', pm25: 18, pm10: 32, temperature: 24, humidity: 44 },
    { time: '20:00', pm25: 14, pm10: 28, temperature: 22, humidity: 46 },
  ];

  const monthlyData = [
    { month: 'Jan', average: 18, max: 25, min: 12 },
    { month: 'Feb', average: 20, max: 28, min: 15 },
    { month: 'Mar', average: 22, max: 30, min: 16 },
    { month: 'Apr', average: 19, max: 26, min: 14 },
    { month: 'May', average: 21, max: 29, min: 15 },
    { month: 'Jun', average: 24, max: 32, min: 18 },
  ];

  const pollutantDistribution = [
    { name: 'PM2.5', value: 35 },
    { name: 'PM10', value: 45 },
    { name: 'CO2', value: 20 },
  ];

  const [timeRange, setTimeRange] = useState('24h');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Analytics Dashboard</h1>
        <div className="flex items-center space-x-4">
          <select 
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <option value="24h">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="1y">Last Year</option>
          </select>
          <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl shadow-md p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Average PM2.5</h3>
            <TrendingUp className="h-6 w-6" />
          </div>
          <p className="text-3xl font-bold">18.5 µg/m³</p>
          <p className="text-sm opacity-80 mt-2">↑ 12% from last week</p>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-md p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Air Quality Index</h3>
            <AlertCircle className="h-6 w-6" />
          </div>
          <p className="text-3xl font-bold">Good</p>
          <p className="text-sm opacity-80 mt-2">Based on WHO guidelines</p>
        </div>

        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-md p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Sensor Status</h3>
            <Wind className="h-6 w-6" />
          </div>
          <p className="text-3xl font-bold">Normal</p>
          <p className="text-sm opacity-80 mt-2">All sensors operational</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Hourly Trends</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={hourlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pm25" stroke="#8884d8" name="PM2.5" />
                <Line type="monotone" dataKey="pm10" stroke="#82ca9d" name="PM10" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Monthly Analysis</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="max" stackId="1" stroke="#8884d8" fill="#8884d8" name="Maximum" />
                <Area type="monotone" dataKey="average" stackId="2" stroke="#82ca9d" fill="#82ca9d" name="Average" />
                <Area type="monotone" dataKey="min" stackId="3" stroke="#ffc658" fill="#ffc658" name="Minimum" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Pollutant Distribution</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={pollutantDistribution}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" name="Concentration (µg/m³)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Key Insights</h2>
          <div className="space-y-4">
            <div className="p-4 bg-indigo-50 rounded-lg">
              <h3 className="font-semibold text-indigo-900 mb-2">Trend Analysis</h3>
              <p className="text-indigo-700">PM2.5 levels show a consistent pattern with peaks during morning and evening rush hours.</p>
            </div>
            <div className="p-4 bg-emerald-50 rounded-lg">
              <h3 className="font-semibold text-emerald-900 mb-2">Recommendations</h3>
              <p className="text-emerald-700">Consider implementing ventilation during off-peak hours to maintain optimal air quality.</p>
            </div>
            <div className="p-4 bg-amber-50 rounded-lg">
              <h3 className="font-semibold text-amber-900 mb-2">Alerts</h3>
              <p className="text-amber-700">No critical alerts in the past 24 hours. All measurements within acceptable ranges.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;