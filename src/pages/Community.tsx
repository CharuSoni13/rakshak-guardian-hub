import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MapPin, Phone, MessageSquare, Clock, UserCheck } from "lucide-react";

const volunteers = [
  {
    id: "V-001",
    name: "Amit Sharma",
    phone: "+91 98765 43210",
    location: "Red Fort Area",
    coordinates: "28.6562° N, 77.2410° E",
    status: "available",
    lastActive: "Online now",
    incidentsHandled: 23,
    rating: 4.8,
    languages: ["Hindi", "English", "Punjabi"]
  },
  {
    id: "V-002",
    name: "Priya Patel",
    phone: "+91 87654 32109",
    location: "Connaught Place",
    coordinates: "28.6315° N, 77.2167° E",
    status: "busy",
    lastActive: "2 minutes ago",
    incidentsHandled: 45,
    rating: 4.9,
    languages: ["Hindi", "English", "Gujarati"]
  },
  {
    id: "V-003",
    name: "Rajesh Kumar",
    phone: "+91 76543 21098",
    location: "Chandni Chowk",
    coordinates: "28.6503° N, 77.2311° E",
    status: "available",
    lastActive: "Online now",
    incidentsHandled: 67,
    rating: 5.0,
    languages: ["Hindi", "English", "Urdu"]
  },
  {
    id: "V-004",
    name: "Sunita Devi",
    phone: "+91 65432 10987",
    location: "India Gate",
    coordinates: "28.6129° N, 77.2295° E",
    status: "offline",
    lastActive: "1 hour ago",
    incidentsHandled: 34,
    rating: 4.7,
    languages: ["Hindi", "English"]
  },
  {
    id: "V-005",
    name: "Mohammad Ali",
    phone: "+91 54321 09876",
    location: "Karol Bagh",
    coordinates: "28.6519° N, 77.1946° E",
    status: "available",
    lastActive: "Online now",
    incidentsHandled: 29,
    rating: 4.6,
    languages: ["Hindi", "English", "Urdu"]
  }
];

export default function Community() {
  const availableVolunteers = volunteers.filter(v => v.status === 'available').length;
  const busyVolunteers = volunteers.filter(v => v.status === 'busy').length;
  const offlineVolunteers = volunteers.filter(v => v.status === 'offline').length;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Community Network</h1>
          <p className="text-muted-foreground">Rakshak volunteer coordination and management</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90">
          <Users className="h-4 w-4 mr-2" />
          Add New Volunteer
        </Button>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-khaki border-l-4 border-l-success">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center space-x-2">
              <UserCheck className="h-5 w-5 text-success" />
              <span>Available</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{availableVolunteers}</div>
            <p className="text-sm text-muted-foreground">Ready to respond</p>
          </CardContent>
        </Card>

        <Card className="shadow-khaki border-l-4 border-l-warning">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center space-x-2">
              <Clock className="h-5 w-5 text-warning" />
              <span>Busy</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">{busyVolunteers}</div>
            <p className="text-sm text-muted-foreground">Currently assigned</p>
          </CardContent>
        </Card>

        <Card className="shadow-khaki border-l-4 border-l-muted">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center space-x-2">
              <Users className="h-5 w-5 text-muted-foreground" />
              <span>Offline</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-muted-foreground">{offlineVolunteers}</div>
            <p className="text-sm text-muted-foreground">Not available</p>
          </CardContent>
        </Card>

        <Card className="shadow-khaki border-l-4 border-l-primary">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center space-x-2">
              <Users className="h-5 w-5 text-primary" />
              <span>Total Network</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{volunteers.length}</div>
            <p className="text-sm text-muted-foreground">Community members</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="shadow-khaki">
        <CardHeader>
          <CardTitle>Broadcast Actions</CardTitle>
          <CardDescription>
            Send alerts and coordination messages to community volunteers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="destructive" className="shadow-khaki">
              <MessageSquare className="h-4 w-4 mr-2" />
              Emergency Broadcast
            </Button>
            <Button variant="outline" className="shadow-khaki border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <MapPin className="h-4 w-4 mr-2" />
              Area Coverage Alert
            </Button>
            <Button variant="secondary" className="shadow-khaki">
              <Users className="h-4 w-4 mr-2" />
              Request Volunteers
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Volunteers List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Active Volunteers</h2>
        
        {volunteers.map((volunteer) => (
          <Card key={volunteer.id} className="shadow-khaki hover:shadow-elevated transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className={`w-4 h-4 rounded-full ${
                      volunteer.status === 'available' ? 'bg-success' :
                      volunteer.status === 'busy' ? 'bg-warning' :
                      'bg-muted-foreground'
                    }`} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{volunteer.name}</h3>
                      <Badge variant={
                        volunteer.status === 'available' ? 'default' :
                        volunteer.status === 'busy' ? 'secondary' :
                        'outline'
                      }>
                        {volunteer.status.charAt(0).toUpperCase() + volunteer.status.slice(1)}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-3 w-3" />
                        <span>{volunteer.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-3 w-3" />
                        <span>{volunteer.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-3 w-3" />
                        <span>{volunteer.lastActive}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <UserCheck className="h-3 w-3" />
                        <span>{volunteer.incidentsHandled} incidents handled</span>
                      </div>
                    </div>
                    
                    <div className="mt-3 flex flex-wrap gap-1">
                      {volunteer.languages.map((lang) => (
                        <Badge key={lang} variant="outline" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-end space-y-2">
                  <div className="flex items-center space-x-1 text-sm">
                    <span className="text-muted-foreground">Rating:</span>
                    <span className="font-semibold text-accent">{volunteer.rating}/5.0</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Phone className="h-3 w-3 mr-1" />
                      Call
                    </Button>
                    <Button size="sm" variant="outline">
                      <MessageSquare className="h-3 w-3 mr-1" />
                      Message
                    </Button>
                    {volunteer.status === 'available' && (
                      <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                        <UserCheck className="h-3 w-3 mr-1" />
                        Assign
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}