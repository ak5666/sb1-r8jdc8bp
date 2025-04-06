import React, { useState, useEffect } from 'react';
import { Cloud, Thermometer, Wind, Droplets, Sun, CloudRain } from 'lucide-react';
import { format } from 'date-fns';

const Weather = () => {
  const [weather, setWeather] = useState({
    temperature: 23,
    humidity: 65,
    windSpeed: 12,
    condition: 'Partly Cloudy',
    forecast: [
      { day: 'Today', temp: 23, condition: 'Partly Cloudy' },
      { day: 'Tomorrow', temp: 25, condition: 'Sunny' },
      { day: 'Wednesday', temp: 22, condition: 'Rain' },
      { day: 'Thursday', temp: 24, condition: 'Cloudy' },
      { day: 'Friday', temp: 26, condition: 'Sunny' },
    ]
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Weather Conditions</h1>
        <p className="text-gray-600">{format(new Date(), 'EEEE, MMMM d, yyyy')}</p>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-50 p-4 rounded-full">
              <Cloud className="h-12 w-12 text-blue-500" />
            </div>
            <div>
              <p className="text-4xl font-bold text-gray-800">{weather.temperature}°C</p>
              <p className="text-gray-600">{weather.condition}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <Wind className="h-6 w-6 text-gray-600 mx-auto mb-2" />
              <p className="text-sm text-gray-500">Wind</p>
              <p className="text-lg font-semibold">{weather.windSpeed} km/h</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <Droplets className="h-6 w-6 text-blue-500 mx-auto mb-2" />
              <p className="text-sm text-gray-500">Humidity</p>
              <p className="text-lg font-semibold">{weather.humidity}%</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <Sun className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
              <p className="text-sm text-gray-500">UV Index</p>
              <p className="text-lg font-semibold">Moderate</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">5-Day Forecast</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {weather.forecast.map((day, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
              <p className="font-medium text-gray-700">{day.day}</p>
              {day.condition === 'Sunny' && <Sun className="h-8 w-8 text-yellow-500 mx-auto my-2" />}
              {day.condition === 'Cloudy' && <Cloud className="h-8 w-8 text-gray-500 mx-auto my-2" />}
              {day.condition === 'Rain' && <CloudRain className="h-8 w-8 text-blue-500 mx-auto my-2" />}
              {day.condition === 'Partly Cloudy' && <Cloud className="h-8 w-8 text-blue-400 mx-auto my-2" />}
              <p className="text-2xl font-bold text-gray-800">{day.temp}°C</p>
              <p className="text-sm text-gray-600">{day.condition}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Air Quality Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <p className="text-gray-600">Current weather conditions can affect air quality measurements:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>High humidity may affect particle measurements</li>
              <li>Wind speed influences pollutant dispersion</li>
              <li>Temperature inversions can trap pollutants</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">Recommendations</h3>
            <p className="text-blue-600">Based on current conditions, sensor readings may need adjustment for humidity interference. Ventilation is good due to moderate wind speeds.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;