import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Clock, MapPin, Phone, Users, CheckCircle } from "lucide-react";

const alerts = [
  {
    id: "SOS-001",
    userId: "T-9847",
    userName: "Rajesh Kumar",
    type: "SOS",
    location: "Red Fort, Delhi",
    coordinates: "28.6562° N, 77.2410° E",
    timestamp: "2024-01-15 14:32:45",
    timeAgo: "2 mins ago",
    status: "active",
    priority: "high",
    description: "Tourist pressed SOS button, no response to callback",
    nearbyVolunteers: 3,
    assignedOfficer: null
  },
  {
    id: "GEO-002", 
    userId: "T-2156",
    userName: "Priya Sharma",
    type: "Geofence",
    location: "Chandni Chowk (Restricted Zone)",
    coordinates: "28.6503° N, 77.2311° E",
    timestamp: "2024-01-15 14:17:22",
    timeAgo: "15 mins ago",
    status: "investigating",
    priority: "medium",
    description: "Tourist entered high-risk area during peak hours",
    nearbyVolunteers: 5,
    assignedOfficer: "Officer Singh"
  },
  {
    id: "SOS-003",
    userId: "T-7834",
    userName: "David Miller",
    type: "SOS",
    location: "India Gate Metro Station",
    coordinates: "28.6129° N, 77.2295° E",
    timestamp: "2024-01-15 13:45:12",
    timeAgo: "1 hour ago",
    status: "resolved",
    priority: "high",
    description: "Medical emergency - resolved by nearby volunteer",
    nearbyVolunteers: 2,
    assignedOfficer: "Officer Patel"
  }
];

export default function Alerts() {
  const activeAlerts = alerts.filter(a => a.status === 'active').length;
  const investigatingAlerts = alerts.filter(a => a.status === 'investigating').length;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Alert Management</h1>
          <p className="text-muted-foreground">Monitor and respond to tourist safety incidents</p>
        </div>
        <div className="flex space-x-2">
          <Badge variant="destructive" className="px-3 py-1">
            {activeAlerts} Active
          </Badge>
          <Badge variant="secondary" className="px-3 py-1">
            {investigatingAlerts} Under Investigation
          </Badge>
        </div>
      </div>

      {/* Alert Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-khaki border-l-4 border-l-destructive">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <span>Critical Alerts</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">{activeAlerts}</div>
            <p className="text-sm text-muted-foreground">Require immediate response</p>
          </CardContent>
        </Card>

        <Card className="shadow-khaki border-l-4 border-l-warning">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center space-x-2">
              <Clock className="h-5 w-5 text-warning" />
              <span>Under Investigation</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">{investigatingAlerts}</div>
            <p className="text-sm text-muted-foreground">Being handled by officers</p>
          </CardContent>
        </Card>

        <Card className="shadow-khaki border-l-4 border-l-success">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-success" />
              <span>Resolved Today</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">89</div>
            <p className="text-sm text-muted-foreground">Successfully handled</p>
          </CardContent>
        </Card>
      </div>

      {/* Alerts List */}
      <div className="space-y-4">
        {alerts.map((alert) => (
          <Card key={alert.id} className={`shadow-khaki transition-all hover:shadow-elevated ${
            alert.status === 'active' ? 'border-l-4 border-l-destructive' :
            alert.status === 'investigating' ? 'border-l-4 border-l-warning' :
            'border-l-4 border-l-success'
          }`}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    alert.status === 'active' ? 'bg-destructive' :
                    alert.status === 'investigating' ? 'bg-warning' :
                    'bg-success'
                  }`} />
                  <div>
                    <CardTitle className="text-lg">{alert.id} - {alert.userName}</CardTitle>
                    <CardDescription className="flex items-center space-x-4 mt-1">
                      <span className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{alert.timeAgo}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{alert.location}</span>
                      </span>
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={alert.type === 'SOS' ? 'destructive' : 'secondary'}>
                    {alert.type}
                  </Badge>
                  <Badge variant={
                    alert.priority === 'high' ? 'destructive' :
                    alert.priority === 'medium' ? 'secondary' : 'outline'
                  }>
                    {alert.priority.toUpperCase()}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">{alert.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Tourist ID:</span> {alert.userId}
                  </div>
                  <div>
                    <span className="font-medium">Coordinates:</span> {alert.coordinates}
                  </div>
                  <div>
                    <span className="font-medium">Nearby Volunteers:</span> {alert.nearbyVolunteers}
                  </div>
                  <div>
                    <span className="font-medium">Assigned Officer:</span> {alert.assignedOfficer || 'Unassigned'}
                  </div>
                </div>

                {alert.status !== 'resolved' && (
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                    <Button size="sm" variant="destructive">
                      <Phone className="h-3 w-3 mr-1" />
                      Forward to Police
                    </Button>
                    <Button size="sm" variant="outline">
                      <Users className="h-3 w-3 mr-1" />
                      Notify Community
                    </Button>
                    <Button size="sm" variant="outline">
                      <MapPin className="h-3 w-3 mr-1" />
                      View on Map
                    </Button>
                    {alert.status === 'active' && (
                      <Button size="sm" variant="secondary">
                        Mark as Investigating
                      </Button>
                    )}
                    {alert.status === 'investigating' && (
                      <Button size="sm" variant="default">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Mark as Resolved
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}