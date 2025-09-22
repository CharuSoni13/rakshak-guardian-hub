import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, AlertTriangle, Filter } from "lucide-react";

// React Leaflet imports
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom marker icons
const userIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
  iconSize: [30, 30],
});

const sosIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/463/463612.png",
  iconSize: [30, 30],
});

const volunteerIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/1946/1946429.png",
  iconSize: [30, 30],
});

export default function Maps() {
  // Mock data
  const users = [
    { id: 1, name: "Tourist 1", lat: 28.6139, lng: 77.209 },
    { id: 2, name: "Tourist 2", lat: 28.6158, lng: 77.207 },
  ];

  const sosAlerts = [{ id: 1, name: "SOS 1", lat: 28.612, lng: 77.21 }];

  const volunteers = [{ id: 1, name: "Volunteer 1", lat: 28.6145, lng: 77.208 }];

  const geofencedAreas = [
    { id: 1, name: "Red Fort Zone", lat: 28.6562, lng: 77.241, radius: 300 },
  ];

  return (
    <div className="space-y-6 animate-fade-in p-4 md:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-4 md:mb-0">
          <h1 className="text-3xl font-bold text-foreground">Live Maps</h1>
          <p className="text-muted-foreground">
            Real-time tourist locations and incident monitoring
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="flex items-center">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      {/* Map Controls */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Button variant="secondary" className="justify-start">
          <Users className="h-4 w-4 mr-2" />
          All Users
          <Badge variant="outline" className="ml-auto">
            {users.length}
          </Badge>
        </Button>
        <Button variant="destructive" className="justify-start">
          <AlertTriangle className="h-4 w-4 mr-2" />
          SOS Active
          <Badge variant="destructive" className="ml-auto">
            {sosAlerts.length}
          </Badge>
        </Button>
        <Button variant="secondary" className="justify-start">
          <MapPin className="h-4 w-4 mr-2" />
          Volunteers
          <Badge variant="secondary" className="ml-auto">
            {volunteers.length}
          </Badge>
        </Button>
        <Button variant="outline" className="justify-start text-yellow-700 border-yellow-500">
          <MapPin className="h-4 w-4 mr-2 text-yellow-700" />
          Geofenced Areas
          <Badge variant="outline" className="ml-auto text-yellow-700 border-yellow-500">
            {geofencedAreas.length}
          </Badge>
        </Button>
      </div>

      {/* Map Card */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Interactive Map View</CardTitle>
          <CardDescription>
            Live map showing tourist locations, SOS alerts, volunteers, and geofenced zones.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MapContainer
            center={[28.6139, 77.209]}
            zoom={13}
            className="w-full h-96 rounded-lg"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />

            {/* Users */}
            {users.map((user) => (
              <Marker key={user.id} position={[user.lat, user.lng]} icon={userIcon}>
                <Popup>{user.name}</Popup>
              </Marker>
            ))}

            {/* SOS Alerts */}
            {sosAlerts.map((alert) => (
              <Marker key={alert.id} position={[alert.lat, alert.lng]} icon={sosIcon}>
                <Popup>{alert.name}</Popup>
              </Marker>
            ))}

            {/* Volunteers */}
            {volunteers.map((v) => (
              <Marker key={v.id} position={[v.lat, v.lng]} icon={volunteerIcon}>
                <Popup>{v.name}</Popup>
              </Marker>
            ))}

            {/* Geofenced Areas */}
            {geofencedAreas.map((area) => (
              <Circle
                key={area.id}
                center={[area.lat, area.lng]}
                radius={area.radius}
                pathOptions={{ color: "orange", fillColor: "orange", fillOpacity: 0.2 }}
              />
            ))}
          </MapContainer>
        </CardContent>
      </Card>

      {/* Map Legend & Active Zones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Legend */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg">Map Legend</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center space-x-3">
              <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" className="w-5 h-5" />
              <span className="text-sm">Tourist Locations</span>
            </div>
            <div className="flex items-center space-x-3">
              <img src="https://cdn-icons-png.flaticon.com/512/463/463612.png" className="w-5 h-5" />
              <span className="text-sm">SOS Alerts</span>
            </div>
            <div className="flex items-center space-x-3">
              <img src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" className="w-5 h-5" />
              <span className="text-sm">Community Volunteers</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <span className="text-sm">Geofenced Areas</span>
            </div>
          </CardContent>
        </Card>

        {/* Active Zones */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg">Active Zones</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { name: "Red Fort Area", status: "Safe" },
              { name: "Chandni Chowk", status: "Alert" },
              { name: "India Gate", status: "Safe" },
              { name: "Connaught Place", status: "Safe" },
            ].map((zone) => (
              <div key={zone.name} className="flex justify-between items-center">
                <span className="text-sm">{zone.name}</span>
                <Badge
                  variant={zone.status === "Alert" ? "destructive" : "secondary"}
                >
                  {zone.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
