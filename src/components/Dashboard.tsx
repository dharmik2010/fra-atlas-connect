import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  MapPin, 
  FileCheck, 
  TreePine, 
  Droplets,
  Home,
  Wheat
} from "lucide-react";

const Dashboard = () => {
  const stateData = [
    { state: "Madhya Pradesh", progress: 78, villages: 450, claims: 12540 },
    { state: "Odisha", progress: 65, villages: 320, claims: 8920 },
    { state: "Telangana", progress: 82, villages: 280, claims: 6780 },
    { state: "Tripura", progress: 71, villages: 150, claims: 3450 }
  ];

  const assetTypes = [
    { type: "Agricultural Land", count: "15,240", icon: <Wheat className="h-5 w-5" />, color: "land" },
    { type: "Forest Cover", count: "8,950", icon: <TreePine className="h-5 w-5" />, color: "forest" },
    { type: "Water Bodies", count: "1,280", icon: <Droplets className="h-5 w-5" />, color: "water" },
    { type: "Homesteads", count: "12,670", icon: <Home className="h-5 w-5" />, color: "earth" }
  ];

  return (
    <section id="dashboard" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl mb-4">
            Real-Time FRA Implementation Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Live monitoring and analytics for transparent forest rights implementation across all target states
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total FRA Claims</CardTitle>
              <FileCheck className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">31,690</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="inline h-3 w-3 mr-1" />
                +12% from last quarter
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-success/5 to-success/10 border-success/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Villages Covered</CardTitle>
              <MapPin className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">1,200</div>
              <p className="text-xs text-muted-foreground">
                Across 4 states
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-water/5 to-water/10 border-water/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Patta Holders</CardTitle>
              <Users className="h-4 w-4 text-water" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-water">28,450</div>
              <p className="text-xs text-muted-foreground">
                Active beneficiaries
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">74%</div>
              <p className="text-xs text-muted-foreground">
                Overall progress
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* State Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                State-wise Implementation Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {stateData.map((state, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm">{state.state}</span>
                    <Badge variant="secondary" className="text-xs">
                      {state.progress}%
                    </Badge>
                  </div>
                  <Progress value={state.progress} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{state.villages} villages</span>
                    <span>{state.claims} claims</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Asset Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TreePine className="h-5 w-5 text-forest" />
                AI-Mapped Assets Distribution
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {assetTypes.map((asset, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-muted/20">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-${asset.color}/10`}>
                      <div className={`text-${asset.color}`}>
                        {asset.icon}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-sm">{asset.type}</div>
                      <div className="text-xs text-muted-foreground">Identified assets</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg">{asset.count}</div>
                    <div className="text-xs text-muted-foreground">hectares</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;