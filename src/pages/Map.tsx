import React, { useState, useCallback } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { Cloud, CloudRain, Sun, Wind, Thermometer, MapPin } from 'lucide-react';

const mapContainerStyle = {
  width: '100%',
  height: '70vh',
};

const center = {
  lat: 51.5074,
  lng: -0.1278,
};

// Mock sensor locations with weather data
const sensorLocations = [
  {
    id: 1,
    position: { lat: 51.5074, lng: -0.1278 },
    name: "Central Station",
    weather: {
      temp: 22,
      condition: "Sunny",
      humidity: 45,
      windSpeed: 12
    },
    aqi: 45
  },
  {
    id: 2,
    position: { lat: 51.5174, lng: -0.1378 },
    name: "North Station",
    weather: {
      temp: 20,
      condition: "Cloudy",
      humidity: 65,
      windSpeed: 8
    },
    aqi: 52
  },
  {
    id: 3,
    position: { lat: 51.4974, lng: -0.1178 },
    name: "South Station",
    weather: {
      temp: 21,
      condition: "Rainy",
      humidity: 75,
      windSpeed: 15
    },
    aqi: 38
  }
];

const getWeatherIcon = (condition: string) => {
  switch (condition.toLowerCase()) {
    case 'sunny':
      return <Sun className="h-6 w-6 text-yellow-500" />;
    case 'rainy':
      return <CloudRain className="h-6 w-6 text-blue-500" />;
    case 'cloudy':
      return <Cloud className="h-6 w-6 text-gray-500" />;
    default:
      return <Cloud className="h-6 w-6 text-gray-500" />;
  }
};

const getAQIColor = (aqi: number) => {
  if (aqi <= 50) return 'bg-green-100 text-green-800';
  if (aqi <= 100) return 'bg-yellow-100 text-yellow-800';
  return 'bg-red-100 text-red-800';
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // Replace with your API key
  });

  const [selectedLocation, setSelectedLocation] = useState<any>(null);
  const [userLocation, setUserLocation] = useState<any>(null);

  const onMapClick = useCallback(() => {
    setSelectedLocation(null);
  }, []);

  // Get user's location
  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          console.log("Error getting location");
        }
      );
    }
  }, []);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading maps...</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Weather Map</h1>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            Center on My Location
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={13}
          center={userLocation || center}
          onClick={onMapClick}
          options={{
            styles: [
              {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
              },
            ],
          }}
        >
          {userLocation && (
            <Marker
              position={userLocation}
              icon={{
                url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
              }}
            />
          )}

          {sensorLocations.map((location) => (
            <Marker
              key={location.id}
              position={location.position}
              onClick={() => setSelectedLocation(location)}
            />
          ))}

          {selectedLocation && (
            <InfoWindow
              position={selectedLocation.position}
              onCloseClick={() => setSelectedLocation(null)}
            >
              <div className="p-2 min-w-[200px]">
                <h3 className="font-semibold text-lg mb-2">{selectedLocation.name}</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {getWeatherIcon(selectedLocation.weather.condition)}
                      <span className="ml-2">{selectedLocation.weather.condition}</span>
                    </div>
                    <span className="font-semibold">{selectedLocation.weather.temp}°C</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Wind className="h-5 w-5 text-gray-500" />
                      <span className="ml-2">Wind</span>
                    </div>
                    <span>{selectedLocation.weather.windSpeed} km/h</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Air Quality</span>
                    <span className={`px-2 py-1 rounded-full text-sm ${getAQIColor(selectedLocation.aqi)}`}>
                      AQI {selectedLocation.aqi}
                    </span>
                  </div>
                </div>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sensorLocations.map((location) => (
          <div key={location.id} className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">{location.name}</h3>
              {getWeatherIcon(location.weather.condition)}
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Thermometer className="h-5 w-5 text-red-500" />
                  <span className="ml-2">Temperature</span>
                </div>
                <span>{location.weather.temp}°C</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Wind className="h-5 w-5 text-blue-500" />
                  <span className="ml-2">Wind Speed</span>
                </div>
                <span>{location.weather.windSpeed} km/h</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Air Quality Index</span>
                <span className={`px-2 py-1 rounded-full text-sm ${getAQIColor(location.aqi)}`}>
                  AQI {location.aqi}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Map;