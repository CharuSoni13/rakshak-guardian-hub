import { Users, AlertTriangle, CheckCircle, UserCheck, Phone, Megaphone, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Mock data - will be replaced with real data
const stats = {
  totalUsers: 1247,
  activeAlerts: 3,
  resolvedAlerts: 89,
  volunteersOnline: 45
};

const recentAlerts = [
  {
    id: "SOS-001",
    user: "Tourist ID: T-9847",
    location: "Red Fort, Delhi",
    time: "2 mins ago",
    type: "SOS",
    status: "active"
  },
  {
    id: "GEO-002", 
    user: "Tourist ID: T-2156",
    location: "Geofence: Chandni Chowk",
    time: "15 mins ago",
    type: "Geofence",
    status: "investigating"
  },
  {
    id: "SOS-003",
    user: "Tourist ID: T-7834",
    location: "India Gate Metro",
    time: "1 hour ago",
    type: "SOS",
    status: "resolved"
  }
];

export default function Dashboard() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="bg-gradient-hero rounded-lg p-8 text-center shadow-khaki">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          RAKSHAK
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          Smart Tourist Safety Monitoring & Incident Response System
        </p>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Real-time monitoring and coordination system for ensuring tourist safety across India. 
          Connect with community volunteers and respond to incidents instantly.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-card shadow-khaki hover:shadow-elevated transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{stats.totalUsers.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Active tourists monitored</p>
          </CardContent>
        </Card>

        <Card className="bg-card shadow-khaki hover:shadow-elevated transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">{stats.activeAlerts}</div>
            <p className="text-xs text-muted-foreground">Require immediate attention</p>
          </CardContent>
        </Card>

        <Card className="bg-card shadow-khaki hover:shadow-elevated transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resolved Today</CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{stats.resolvedAlerts}</div>
            <p className="text-xs text-muted-foreground">Successfully handled cases</p>
          </CardContent>
        </Card>

        <Card className="bg-card shadow-khaki hover:shadow-elevated transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Community Online</CardTitle>
            <UserCheck className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">{stats.volunteersOnline}</div>
            <p className="text-xs text-muted-foreground">Volunteers available</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="shadow-khaki">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MessageSquare className="h-5 w-5" />
            <span>Quick Actions</span>
          </CardTitle>
          <CardDescription>
            Emergency response and communication tools
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="bg-gradient-primary hover:opacity-90 shadow-khaki">
              <Phone className="h-4 w-4 mr-2" />
              Notify Nearby Police
            </Button>
            <Button variant="destructive" className="shadow-khaki">
              <Megaphone className="h-4 w-4 mr-2" />
              Broadcast Alert
            </Button>
            <Button variant="outline" className="shadow-khaki border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <UserCheck className="h-4 w-4 mr-2" />
              Contact Community
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Alerts */}
      <Card className="shadow-khaki">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5" />
            <span>Recent Alerts</span>
          </CardTitle>
          <CardDescription>
            Latest incidents and emergency reports
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentAlerts.map((alert) => (
              <div key={alert.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${
                    alert.status === 'active' ? 'bg-destructive' :
                    alert.status === 'investigating' ? 'bg-warning' :
                    'bg-success'
                  }`} />
                  <div>
                    <p className="font-medium">{alert.user}</p>
                    <p className="text-sm text-muted-foreground">{alert.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant={
                    alert.status === 'active' ? 'destructive' :
                    alert.status === 'investigating' ? 'secondary' : 
                    'default'
                  }>
                    {alert.type}
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}