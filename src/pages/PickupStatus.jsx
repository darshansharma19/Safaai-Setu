import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Car icon
const carIcon = new L.Icon({
  iconUrl: "/car-icon.png", 
  iconSize: [32, 32],
  iconAnchor: [16, 16],
});

const defaultPos = [22.7196, 75.8577]; 

function PickupStatus() {
  const [userLocation, setUserLocation] = useState(null);
  const [vehiclePos, setVehiclePos] = useState(null);
  const [timeLeft, setTimeLeft] = useState(600); // 10 mins

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setUserLocation([latitude, longitude]);
        setVehiclePos([latitude - 0.02, longitude - 0.02]);
      },
      () => {
        setUserLocation(defaultPos);
        setVehiclePos([defaultPos[0] - 0.02, defaultPos[1] - 0.02]);
      }
    );
  }, []);

  useEffect(() => {
    if (!userLocation || !vehiclePos) return;

    const interval = setInterval(() => {
      setVehiclePos((prev) => {
        if (!prev) return prev;
        const [vLat, vLng] = prev;
        const [uLat, uLng] = userLocation;

        const latDiff = uLat - vLat;
        const lngDiff = uLng - vLng;

        if (Math.abs(latDiff) < 0.0001 && Math.abs(lngDiff) < 0.0001) {
          clearInterval(interval);
          return prev;
        }

        const newLat = vLat + latDiff * 0.05;
        const newLng = vLng + lngDiff * 0.05;

        return [newLat, newLng];
      });
    }, 500);

    return () => clearInterval(interval);
  }, [userLocation, vehiclePos]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const min = String(Math.floor(seconds / 60)).padStart(2, "0");
    const sec = String(seconds % 60).padStart(2, "0");
    return `${min}:${sec}`;
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-900">
      <h1 className="text-3xl font-bold text-center mb-4 text-green-600">
        🚚 Pickup In Route
      </h1>

      <div className="bg-white border border-green-300 p-6 rounded-xl shadow-md mb-6">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-green-800 animate-bounce">
            Your Zonal Sevak is on the way!
          </h2>
          <p className="text-gray-600 mt-2">Expected arrival in:</p>
          <div
            className={`text-5xl font-bold mt-1 tracking-wider ${
              timeLeft < 60 ? "text-red-500 animate-pulse" : "text-green-800"
            }`}
          >
            {formatTime(timeLeft)}
          </div>
        </div>
      </div>

      <div className="h-96 rounded-xl overflow-hidden shadow">
        {userLocation && vehiclePos ? (
          <MapContainer
            center={userLocation}
            zoom={13}
            className="h-full w-full"
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={userLocation}>
              <Popup>You are here</Popup>
            </Marker>
            <Marker position={vehiclePos} icon={carIcon}>
              <Popup>Zonal Sevak</Popup>
            </Marker>
            <Polyline positions={[vehiclePos, userLocation]} color="green" />
          </MapContainer>
        ) : (
          <p className="text-center py-24 text-gray-500 animate-pulse">
            Loading map...
          </p>
        )}
      </div>
    </div>
  );
}

export default PickupStatus;
