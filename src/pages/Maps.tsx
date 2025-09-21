import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, AlertTriangle, Filter } from "lucide-react";

export default function Maps() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Live Maps</h1>
          <p className="text-muted-foreground">Real-time tourist locations and incident monitoring</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
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
          <Badge variant="outline" className="ml-auto">1,247</Badge>
        </Button>
        <Button variant="outline" className="justify-start">
          <AlertTriangle className="h-4 w-4 mr-2 text-destructive" />
          SOS Active
          <Badge variant="destructive" className="ml-auto">3</Badge>
        </Button>
        <Button variant="outline" className="justify-start">
          <MapPin className="h-4 w-4 mr-2 text-accent" />
          Volunteers
          <Badge variant="secondary" className="ml-auto">45</Badge>
        </Button>
        <Button variant="outline" className="justify-start">
          <MapPin className="h-4 w-4 mr-2 text-warning" />
          Geofenced Areas
          <Badge variant="secondary" className="ml-auto">12</Badge>
        </Button>
      </div>

      {/* Map Placeholder */}
      <Card className="shadow-khaki">
        <CardHeader>
          <CardTitle>Interactive Map View</CardTitle>
          <CardDescription>
            Google Maps integration showing live tourist locations, geofenced zones, and active incidents
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full h-96 bg-gradient-hero rounded-lg flex items-center justify-center border-2 border-dashed border-border">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Map Integration</h3>
              <p className="text-muted-foreground">
                Google Maps will be integrated here to show:
              </p>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li>• Live tourist locations with real-time tracking</li>
                <li>• SOS incident markers with emergency details</li>
                <li>• Geofenced danger zones and safe areas</li>
                <li>• Community volunteer locations and availability</li>
                <li>• Police station locations and response units</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Map Legend */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-khaki">
          <CardHeader>
            <CardTitle className="text-lg">Map Legend</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span className="text-sm">Tourist Locations</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <span className="text-sm">SOS Alerts</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="text-sm">Community Volunteers</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <span className="text-sm">Geofenced Areas</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-khaki">
          <CardHeader>
            <CardTitle className="text-lg">Active Zones</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Red Fort Area</span>
              <Badge variant="secondary">Safe</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Chandni Chowk</span>
              <Badge variant="destructive">Alert</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">India Gate</span>
              <Badge variant="secondary">Safe</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Connaught Place</span>
              <Badge variant="secondary">Safe</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}