import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Map, 
  Layers, 
  ZoomIn, 
  Filter,
  Download,
  TreePine,
  Droplets,
  Home,
  Wheat
} from "lucide-react";

const MapPreview = () => {
  const layers = [
    { name: "Forest Cover", active: true, color: "forest" },
    { name: "Water Bodies", active: true, color: "water" },
    { name: "Agricultural Land", active: false, color: "land" },
    { name: "Village Boundaries", active: true, color: "primary" },
    { name: "FRA Claims", active: true, color: "accent" }
  ];

  const selectedVillage = {
    name: "Gram Panchayat Baiga",
    district: "Dindori",
    state: "Madhya Pradesh",
    claims: 142,
    approved: 108,
    pending: 34
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl mb-4">
            Interactive WebGIS Portal
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore FRA implementation through our comprehensive mapping interface with real-time data visualization
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Map Controls */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Layers className="h-5 w-5" />
                Map Layers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {layers.map((layer, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div 
                      className={`w-3 h-3 rounded-full bg-${layer.color} ${!layer.active ? 'opacity-30' : ''}`}
                    />
                    <span className={`text-sm ${!layer.active ? 'text-muted-foreground' : ''}`}>
                      {layer.name}
                    </span>
                  </div>
                  <Badge variant={layer.active ? "default" : "secondary"} className="h-5 px-2 text-xs">
                    {layer.active ? "ON" : "OFF"}
                  </Badge>
                </div>
              ))}
              
              <div className="pt-4 space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter Data
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Download className="mr-2 h-4 w-4" />
                  Export Map
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Main Map Area */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Map className="h-5 w-5" />
                  FRA Atlas Map View
                </div>
                <Button variant="outline" size="sm">
                  <ZoomIn className="mr-2 h-4 w-4" />
                  Full Screen
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative h-96 bg-gradient-to-br from-forest/20 via-water/10 to-land/20 rounded-lg border">
                {/* Mock Map Interface */}
                <div className="absolute inset-4 bg-gradient-to-br from-forest/30 to-water/30 rounded-lg border-2 border-primary/20">
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur p-2 rounded border text-xs font-medium">
                    Zoom Level: 12
                  </div>
                  
                  {/* Mock village markers */}
                  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 bg-accent rounded-full border-2 border-background animate-pulse cursor-pointer" 
                         title="Baiga Village - 142 claims" />
                  </div>
                  <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-3 h-3 bg-primary rounded-full border-2 border-background cursor-pointer" 
                         title="Gond Village - 89 claims" />
                  </div>
                  <div className="absolute bottom-1/3 right-1/3 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-3 h-3 bg-success rounded-full border-2 border-background cursor-pointer" 
                         title="Korku Village - 67 claims" />
                  </div>
                  
                  {/* Mock forest areas */}
                  <div className="absolute top-8 left-8 w-20 h-16 bg-forest/40 rounded-lg" />
                  <div className="absolute bottom-8 right-8 w-24 h-20 bg-forest/40 rounded-lg" />
                  
                  {/* Mock water bodies */}
                  <div className="absolute top-1/2 right-1/4 w-12 h-8 bg-water/60 rounded-full" />
                </div>
                
                <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur p-2 rounded border text-xs">
                  Madhya Pradesh, India
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Village Details */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg">Selected Area</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-primary">{selectedVillage.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {selectedVillage.district}, {selectedVillage.state}
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Total Claims</span>
                  <Badge variant="outline">{selectedVillage.claims}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-success">Approved</span>
                  <Badge variant="default" className="bg-success">{selectedVillage.approved}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-warning">Pending</span>
                  <Badge variant="default" className="bg-warning text-warning-foreground">{selectedVillage.pending}</Badge>
                </div>
              </div>
              
              <div className="pt-4 space-y-2">
                <h4 className="text-sm font-medium mb-2">Detected Assets</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-1">
                    <TreePine className="h-3 w-3 text-forest" />
                    <span>Forest: 45%</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Wheat className="h-3 w-3 text-land" />
                    <span>Agri: 30%</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Droplets className="h-3 w-3 text-water" />
                    <span>Water: 8%</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Home className="h-3 w-3 text-earth" />
                    <span>Homes: 17%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MapPreview;