import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { 
  Shield, 
  User, 
  Lock, 
  Building, 
  MapPin,
  Phone,
  Mail,
  IdCard
} from "lucide-react";

const AuthenticationPage = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Login Successful",
        description: "Welcome to FRA Atlas Dashboard",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-forest/5 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl grid lg:grid-cols-2 gap-8">
        {/* Government Branding */}
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">FRA Atlas</h1>
                <p className="text-sm text-muted-foreground">Ministry of Tribal Affairs</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Secure Access Portal</h2>
              <p className="text-muted-foreground text-lg">
                AI-powered Decision Support System for Forest Rights Act Implementation
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-4 rounded-lg border">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold text-sm">4 States</div>
                    <div className="text-xs text-muted-foreground">Coverage Area</div>
                  </div>
                </div>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <div className="flex items-center gap-3">
                  <Building className="h-5 w-5 text-success" />
                  <div>
                    <div className="font-semibold text-sm">45+ Districts</div>
                    <div className="text-xs text-muted-foreground">Administrative Units</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-4 rounded-lg border-l-4 border-l-primary">
              <h3 className="font-semibold text-sm mb-2">System Features</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Real-time FRA claim tracking</li>
                <li>• AI-powered asset mapping</li>
                <li>• Integrated scheme recommendations</li>
                <li>• Multi-level progress monitoring</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Authentication Forms */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Official Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="official" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="official">Government Official</TabsTrigger>
                <TabsTrigger value="ngo">NGO Partner</TabsTrigger>
              </TabsList>
              
              <TabsContent value="official" className="space-y-4">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="employee-id">Employee ID</Label>
                    <div className="relative">
                      <IdCard className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="employee-id" 
                        placeholder="MTA/2024/XXXX"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <select className="w-full p-2 border border-input rounded-md bg-background">
                      <option>Ministry of Tribal Affairs</option>
                      <option>Forest Department</option>
                      <option>Revenue Department</option>
                      <option>District Collector Office</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="password" 
                        type="password"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <select className="w-full p-2 border border-input rounded-md bg-background">
                      <option>Select State</option>
                      <option>Madhya Pradesh</option>
                      <option>Odisha</option>
                      <option>Telangana</option>
                      <option>Tripura</option>
                    </select>
                  </div>

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Authenticating..." : "Secure Login"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="ngo" className="space-y-4">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="ngo-id">NGO Registration ID</Label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="ngo-id" 
                        placeholder="NGO/REG/XXXX/XXXX"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact">Contact Person</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="contact" 
                        placeholder="Full Name"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ngo-password">Access Code</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="ngo-password" 
                        type="password"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Verifying..." : "Partner Access"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4" />
                <span>Secured by Government of India</span>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-xs">
                <Badge variant="outline" className="justify-center">
                  <Phone className="h-3 w-3 mr-1" />
                  Help: 1800-XXX-XXXX
                </Badge>
                <Badge variant="outline" className="justify-center">
                  <Mail className="h-3 w-3 mr-1" />
                  Support Portal
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AuthenticationPage;