import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown,
  Users, 
  MapPin, 
  FileCheck, 
  TreePine, 
  Droplets,
  Home,
  Wheat,
  Calendar,
  Target,
  Award,
  AlertTriangle
} from "lucide-react";

const AnalyticsDashboard = () => {
  const performanceMetrics = {
    overall: {
      completion: 74,
      efficiency: 82,
      satisfaction: 91,
      compliance: 96
    },
    monthly: {
      claimsProcessed: 1247,
      avgProcessingTime: 45, // days
      approvalRate: 78,
      rejectionRate: 12
    },
    targets: {
      yearlyTarget: 15000,
      achieved: 11250,
      remaining: 3750,
      onTrack: true
    }
  };

  const stateComparison = [
    {
      state: "Madhya Pradesh", 
      claims: 12540, 
      approved: 9782,
      completion: 78,
      trend: "up",
      efficiency: "high"
    },
    {
      state: "Odisha", 
      claims: 8920, 
      approved: 5803,
      completion: 65,
      trend: "up",
      efficiency: "medium"
    },
    {
      state: "Telangana", 
      claims: 6780, 
      approved: 5561,
      completion: 82,
      trend: "up",
      efficiency: "high"
    },
    {
      state: "Tripura", 
      claims: 3450, 
      approved: 2449,
      completion: 71,
      trend: "stable",
      efficiency: "medium"
    }
  ];

  const recentActivity = [
    {
      type: "approval",
      message: "15 new IFR claims approved in Dindori district",
      time: "2 hours ago",
      priority: "success"
    },
    {
      type: "alert",
      message: "Processing delay detected in Kalahandi district",
      time: "4 hours ago",
      priority: "warning"
    },
    {
      type: "milestone",
      message: "Tripura reaches 70% FRA implementation target",
      time: "1 day ago",
      priority: "success"
    },
    {
      type: "review",
      message: "25 CFR applications require urgent review",
      time: "2 days ago",
      priority: "warning"
    }
  ];

  const getEfficiencyBadge = (efficiency: string) => {
    switch (efficiency) {
      case "high":
        return <Badge className="bg-success text-success-foreground">High</Badge>;
      case "medium":
        return <Badge variant="secondary">Medium</Badge>;
      case "low":
        return <Badge variant="destructive">Low</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-success" />;
      case "down":
        return <TrendingDown className="h-4 w-4 text-destructive" />;
      default:
        return <div className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-primary">{performanceMetrics.overall.completion}%</div>
                <div className="text-sm text-muted-foreground">Overall Completion</div>
              </div>
              <Target className="h-8 w-8 text-primary" />
            </div>
            <Progress value={performanceMetrics.overall.completion} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-success/5 to-success/10 border-success/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-success">{performanceMetrics.overall.efficiency}%</div>
                <div className="text-sm text-muted-foreground">Process Efficiency</div>
              </div>
              <Award className="h-8 w-8 text-success" />
            </div>
            <Progress value={performanceMetrics.overall.efficiency} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-water/5 to-water/10 border-water/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-water">{performanceMetrics.overall.satisfaction}%</div>
                <div className="text-sm text-muted-foreground">User Satisfaction</div>
              </div>
              <Users className="h-8 w-8 text-water" />
            </div>
            <Progress value={performanceMetrics.overall.satisfaction} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-accent">{performanceMetrics.overall.compliance}%</div>
                <div className="text-sm text-muted-foreground">Compliance Rate</div>
              </div>
              <FileCheck className="h-8 w-8 text-accent" />
            </div>
            <Progress value={performanceMetrics.overall.compliance} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* State Performance Comparison */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              State-wise Performance Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stateComparison.map((state, index) => (
                <div key={index} className="p-4 rounded-lg border bg-card/50">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold">{state.state}</h3>
                      {getTrendIcon(state.trend)}
                      {getEfficiencyBadge(state.efficiency)}
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{state.completion}% Complete</div>
                      <div className="text-xs text-muted-foreground">
                        {state.approved.toLocaleString()} / {state.claims.toLocaleString()} claims
                      </div>
                    </div>
                  </div>
                  <Progress value={state.completion} className="h-2" />
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>Approved: {state.approved.toLocaleString()}</span>
                    <span>Pending: {(state.claims - state.approved).toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity Feed */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex gap-3 p-3 rounded-lg border bg-card/30">
                  <div className={`mt-1 p-1 rounded-full ${
                    activity.priority === "success" ? "bg-success/20" : 
                    activity.priority === "warning" ? "bg-warning/20" : "bg-muted"
                  }`}>
                    {activity.priority === "success" && <FileCheck className="h-3 w-3 text-success" />}
                    {activity.priority === "warning" && <AlertTriangle className="h-3 w-3 text-warning" />}
                    {activity.priority === "info" && <Calendar className="h-3 w-3 text-muted-foreground" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium leading-relaxed">{activity.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4" size="sm">
              View All Activities
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Statistics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Monthly Performance Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">
                {performanceMetrics.monthly.claimsProcessed.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">Claims Processed</div>
              <div className="text-xs text-success mt-1">↗ +15% from last month</div>
            </div>
            
            <div className="text-center p-4 rounded-lg bg-water/5 border border-water/20">
              <div className="text-3xl font-bold text-water mb-2">
                {performanceMetrics.monthly.avgProcessingTime}
              </div>
              <div className="text-sm text-muted-foreground">Avg. Processing Days</div>
              <div className="text-xs text-success mt-1">↗ 8% improvement</div>
            </div>
            
            <div className="text-center p-4 rounded-lg bg-success/5 border border-success/20">
              <div className="text-3xl font-bold text-success mb-2">
                {performanceMetrics.monthly.approvalRate}%
              </div>
              <div className="text-sm text-muted-foreground">Approval Rate</div>
              <div className="text-xs text-success mt-1">↗ +3% from target</div>
            </div>
            
            <div className="text-center p-4 rounded-lg bg-warning/5 border border-warning/20">
              <div className="text-3xl font-bold text-warning mb-2">
                {performanceMetrics.monthly.rejectionRate}%
              </div>
              <div className="text-sm text-muted-foreground">Rejection Rate</div>
              <div className="text-xs text-success mt-1">↘ -2% improvement</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Annual Targets */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Annual Implementation Targets
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">FY 2024-25 Target Achievement</span>
              <Badge variant={performanceMetrics.targets.onTrack ? "default" : "destructive"} className="bg-success">
                {performanceMetrics.targets.onTrack ? "On Track" : "Behind Target"}
              </Badge>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>{performanceMetrics.targets.achieved.toLocaleString()} / {performanceMetrics.targets.yearlyTarget.toLocaleString()}</span>
              </div>
              <Progress value={(performanceMetrics.targets.achieved / performanceMetrics.targets.yearlyTarget) * 100} className="h-3" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>75% Complete</span>
                <span>{performanceMetrics.targets.remaining.toLocaleString()} remaining</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsDashboard;