import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Settings as SettingsIcon, Users, Shield, Globe, Bell, Database, Key } from "lucide-react";

const policeStations = [
  {
    id: "PS-001",
    name: "Red Fort Police Station",
    area: "Old Delhi",
    status: "connected",
    officers: 45,
    contact: "+91 11 2327 4567"
  },
  {
    id: "PS-002", 
    name: "Connaught Place Police Station",
    area: "Central Delhi",
    status: "connected",
    officers: 38,
    contact: "+91 11 2334 1234"
  },
  {
    id: "PS-003",
    name: "Chandni Chowk Police Station", 
    area: "Old Delhi",
    status: "pending",
    officers: 42,
    contact: "+91 11 2396 5432"
  }
];

export default function Settings() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">System Settings</h1>
          <p className="text-muted-foreground">Manage police accounts, integrations, and system preferences</p>
        </div>
      </div>

      {/* User Management */}
      <Card className="shadow-khaki">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="h-5 w-5" />
            <span>User Management</span>
          </CardTitle>
          <CardDescription>
            Manage police officer accounts and access levels
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-border rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold">Admin Users</h4>
                <Badge variant="destructive">5</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Full system access</p>
            </div>
            
            <div className="p-4 border border-border rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold">Police Officers</h4>
                <Badge variant="secondary">23</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Standard operational access</p>
            </div>
            
            <div className="p-4 border border-border rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold">Community Leads</h4>
                <Badge variant="outline">8</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Volunteer coordination access</p>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <Button className="bg-gradient-primary hover:opacity-90">
              <Users className="h-4 w-4 mr-2" />
              Add New User
            </Button>
            <Button variant="outline">
              <Shield className="h-4 w-4 mr-2" />
              Manage Permissions
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Police Station Integration */}
      <Card className="shadow-khaki">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-5 w-5" />
            <span>Police Station Integration</span>
          </CardTitle>
          <CardDescription>
            Connect and manage local police station systems
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {policeStations.map((station) => (
              <div key={station.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div>
                  <h4 className="font-semibold">{station.name}</h4>
                  <p className="text-sm text-muted-foreground">{station.area} • {station.officers} officers • {station.contact}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={station.status === 'connected' ? 'default' : 'secondary'}>
                    {station.status}
                  </Badge>
                  <Button size="sm" variant="outline">
                    {station.status === 'connected' ? 'Manage' : 'Connect'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t border-border">
            <Button variant="outline">
              <Shield className="h-4 w-4 mr-2" />
              Add Police Station
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* System Preferences */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-khaki">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="h-5 w-5" />
              <span>Language & Regional Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="language">Primary Language</Label>
              <select className="w-full p-2 border border-border rounded-md bg-background">
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="local">Local Language</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="timezone">Timezone</Label>
              <select className="w-full p-2 border border-border rounded-md bg-background">
                <option value="IST">India Standard Time (IST)</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="region">Region</Label>
              <Input id="region" placeholder="Delhi NCR" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-khaki">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="h-5 w-5" />
              <span>Notification Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="sos-alerts">SOS Alert Notifications</Label>
                <p className="text-sm text-muted-foreground">Real-time emergency alerts</p>
              </div>
              <Switch id="sos-alerts" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="geofence-alerts">Geofence Breach Alerts</Label>
                <p className="text-sm text-muted-foreground">Tourist enters restricted areas</p>
              </div>
              <Switch id="geofence-alerts" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="system-updates">System Updates</Label>
                <p className="text-sm text-muted-foreground">Software updates and maintenance</p>
              </div>
              <Switch id="system-updates" />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="daily-reports">Daily Reports</Label>
                <p className="text-sm text-muted-foreground">Automated daily summary emails</p>
              </div>
              <Switch id="daily-reports" defaultChecked />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Configuration */}
      <Card className="shadow-khaki">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Database className="h-5 w-5" />
            <span>System Configuration</span>
          </CardTitle>
          <CardDescription>
            Advanced system settings and API configurations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold">Emergency Response</h4>
              <div className="space-y-2">
                <Label htmlFor="response-time">Target Response Time (minutes)</Label>
                <Input id="response-time" type="number" defaultValue="5" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="escalation-time">Auto-escalation Time (minutes)</Label>
                <Input id="escalation-time" type="number" defaultValue="10" />
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Geofencing</h4>
              <div className="space-y-2">
                <Label htmlFor="default-radius">Default Alert Radius (meters)</Label>
                <Input id="default-radius" type="number" defaultValue="500" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="high-risk-radius">High Risk Zone Radius (meters)</Label>
                <Input id="high-risk-radius" type="number" defaultValue="200" />
              </div>
            </div>
          </div>
          
          <div className="pt-4 border-t border-border">
            <div className="flex space-x-2">
              <Button className="bg-gradient-primary hover:opacity-90">
                <Database className="h-4 w-4 mr-2" />
                Update Settings
              </Button>
              <Button variant="outline">
                <Key className="h-4 w-4 mr-2" />
                API Configuration
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}