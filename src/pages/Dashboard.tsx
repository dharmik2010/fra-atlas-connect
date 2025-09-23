import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClaimsDatabase from "@/components/ClaimsDatabase";
import InteractiveMap from "@/components/InteractiveMap";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import ClaimSubmission from "@/components/ClaimSubmission";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  LayoutDashboard, 
  Map, 
  Database, 
  FileText, 
  BarChart3,
  Users,
  Bell,
  Settings
} from "lucide-react";

const Dashboard = () => {
  const [activeNotifications] = useState(3);
  
  const dashboardStats = {
    totalClaims: "31,690",
    pendingReview: "4,520",
    approvedToday: "156",
    activeUsers: "2,847"
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Dashboard Header */}
      <div className="border-b bg-card/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">FRA Atlas Dashboard</h1>
              <p className="text-muted-foreground">
                Comprehensive monitoring and management of Forest Rights Act implementation
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Bell className="h-5 w-5 text-muted-foreground" />
                {activeNotifications > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs">
                    {activeNotifications}
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4" />
                <span>Welcome, District Officer</span>
              </div>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">{dashboardStats.totalClaims}</div>
                    <div className="text-sm text-muted-foreground">Total Claims</div>
                  </div>
                  <FileText className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-warning">{dashboardStats.pendingReview}</div>
                    <div className="text-sm text-muted-foreground">Pending Review</div>
                  </div>
                  <BarChart3 className="h-8 w-8 text-warning" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-success">{dashboardStats.approvedToday}</div>
                    <div className="text-sm text-muted-foreground">Approved Today</div>
                  </div>
                  <FileText className="h-8 w-8 text-success" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-water">{dashboardStats.activeUsers}</div>
                    <div className="text-sm text-muted-foreground">Active Users</div>
                  </div>
                  <Users className="h-8 w-8 text-water" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <LayoutDashboard className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="map" className="flex items-center gap-2">
              <Map className="h-4 w-4" />
              Interactive Map
            </TabsTrigger>
            <TabsTrigger value="database" className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              Claims Database
            </TabsTrigger>
            <TabsTrigger value="submit" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Submit Claim
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Analytics
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-6">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LayoutDashboard className="h-5 w-5" />
                    System Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-2 gap-6">
                    <AnalyticsDashboard />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="map" className="mt-6">
            <InteractiveMap />
          </TabsContent>
          
          <TabsContent value="database" className="mt-6">
            <ClaimsDatabase />
          </TabsContent>
          
          <TabsContent value="submit" className="mt-6">
            <ClaimSubmission />
          </TabsContent>
          
          <TabsContent value="analytics" className="mt-6">
            <AnalyticsDashboard />
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;