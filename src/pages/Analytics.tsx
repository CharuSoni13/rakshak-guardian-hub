import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, BarChart3, MapPin, Users, Clock } from "lucide-react";

export default function Analytics() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Tourist safety trends, incident analysis, and performance metrics</p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-khaki">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center justify-between">
              Response Time (Avg)
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">4.2 min</div>
            <div className="flex items-center text-sm text-success">
              <TrendingDown className="h-3 w-3 mr-1" />
              -15% from last week
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-khaki">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center justify-between">
              Safety Score
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">87%</div>
            <div className="flex items-center text-sm text-success">
              <TrendingUp className="h-3 w-3 mr-1" />
              +3% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-khaki">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center justify-between">
              Incidents Prevented
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">156</div>
            <div className="flex items-center text-sm text-success">
              <TrendingUp className="h-3 w-3 mr-1" />
              +23% this month
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-khaki">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center justify-between">
              Community Engagement
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">92%</div>
            <div className="flex items-center text-sm text-success">
              <TrendingUp className="h-3 w-3 mr-1" />
              +8% from last week
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-khaki">
          <CardHeader>
            <CardTitle>Daily SOS Alerts Trend</CardTitle>
            <CardDescription>Number of SOS alerts received over the past 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-hero rounded-lg flex items-center justify-center border-2 border-dashed border-border">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Line Chart</h3>
                <p className="text-muted-foreground text-sm">
                  Daily trend of SOS alerts showing patterns and peak times
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-khaki">
          <CardHeader>
            <CardTitle>Incident Types Distribution</CardTitle>
            <CardDescription>Breakdown of different types of incidents reported</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-hero rounded-lg flex items-center justify-center border-2 border-dashed border-border">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Pie Chart</h3>
                <p className="text-muted-foreground text-sm">
                  SOS alerts, geofence breaches, medical emergencies, etc.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Danger Zones Heatmap */}
      <Card className="shadow-khaki">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-5 w-5" />
            <span>High-Risk Zones Analysis</span>
          </CardTitle>
          <CardDescription>
            Areas with the highest concentration of incidents and safety concerns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 border border-border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">Tsomgo Lake</h4>
                  <Badge variant="destructive">High Risk</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">45 incidents this month</p>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-destructive h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">Nathula Pass</h4>
                  <Badge variant="secondary">Medium Risk</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">23 incidents this month</p>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-warning h-2 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">Gangtok</h4>
                  <Badge variant="secondary">Medium Risk</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">18 incidents this month</p>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-warning h-2 rounded-full" style={{width: '45%'}}></div>
                </div>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">Pelling</h4>
                  <Badge variant="outline">Low Risk</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">7 incidents this month</p>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-success h-2 rounded-full" style={{width: '25%'}}></div>
                </div>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">Yuksom</h4>
                  <Badge variant="outline">Low Risk</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">3 incidents this month</p>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-success h-2 rounded-full" style={{width: '15%'}}></div>
                </div>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">Lachung</h4>
                  <Badge variant="outline">Low Risk</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">5 incidents this month</p>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-success h-2 rounded-full" style={{width: '20%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-khaki">
          <CardHeader>
            <CardTitle>Weekly Performance Summary</CardTitle>
            <CardDescription>Key performance indicators for the past week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Total Alerts Handled</span>
                <span className="text-lg font-bold text-primary">247</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Average Response Time</span>
                <span className="text-lg font-bold text-success">4.2 minutes</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Community Volunteers Active</span>
                <span className="text-lg font-bold text-accent">156</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Successful Resolutions</span>
                <span className="text-lg font-bold text-success">98.5%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-khaki">
          <CardHeader>
            <CardTitle>AI Safety Predictions</CardTitle>
            <CardDescription>Machine learning insights and recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-muted rounded-lg">
                <h4 className="font-semibold text-sm mb-2">Peak Risk Hours</h4>
                <p className="text-sm text-muted-foreground">
                  Increased incidents predicted between 6-8 PM in Chandni Chowk area
                </p>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <h4 className="font-semibold text-sm mb-2">Resource Allocation</h4>
                <p className="text-sm text-muted-foreground">
                  Recommend 3 additional volunteers in Old Delhi during weekend evenings
                </p>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <h4 className="font-semibold text-sm mb-2">Safety Trend</h4>
                <p className="text-sm text-muted-foreground">
                  Overall safety score improving by 2.3% based on recent data patterns
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}