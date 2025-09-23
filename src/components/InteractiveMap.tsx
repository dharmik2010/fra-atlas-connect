import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Layers, 
  ZoomIn, 
  ZoomOut,
  Move,
  MousePointer,
  Download,
  Share2,
  Settings,
  Info,
  TreePine,
  Droplets,
  Home,
  Wheat,
  Mountain,
  Users,
  Navigation,
  Maximize
} from "lucide-react";

const InteractiveMap = () => {
  const [selectedTool, setSelectedTool] = useState("pointer");
  const [activeLayer, setActiveLayer] = useState({
    forest: true,
    water: true,
    agriculture: false,
    settlements: true,
    boundaries: true,
    claims: true,
    infrastructure: false
  });

  const [selectedVillage, setSelectedVillage] = useState({
    name: "Baiga Chak Village",
    district: "Dindori",
    state: "Madhya Pradesh",
    population: "342 families",
    claims: {
      total: 87,
      approved: 65,
      pending: 15,
      rejected: 7
    },
    assets: {
      forest: "425 hectares",
      water: "23 hectares", 
      agriculture: "156 hectares",
      settlements: "12 hectares"
    },
    coordinates: "22.7644° N, 81.0955° E"
  });

  const mapLayers = [
    { id: "forest", name: "Forest Cover", icon: <TreePine className="h-4 w-4" />, color: "forest", active: activeLayer.forest },
    { id: "water", name: "Water Bodies", icon: <Droplets className="h-4 w-4" />, color: "water", active: activeLayer.water },
    { id: "agriculture", name: "Agricultural Land", icon: <Wheat className="h-4 w-4" />, color: "land", active: activeLayer.agriculture },
    { id: "settlements", name: "Settlements", icon: <Home className="h-4 w-4" />, color: "earth", active: activeLayer.settlements },
    { id: "boundaries", name: "Administrative Boundaries", icon: <Mountain className="h-4 w-4" />, color: "primary", active: activeLayer.boundaries },
    { id: "claims", name: "FRA Claims", icon: <Users className="h-4 w-4" />, color: "accent", active: activeLayer.claims },
    { id: "infrastructure", name: "Infrastructure", icon: <Navigation className="h-4 w-4" />, color: "muted", active: activeLayer.infrastructure }
  ];

  const toggleLayer = (layerId: string) => {
    setActiveLayer(prev => ({
      ...prev,
      [layerId]: !prev[layerId as keyof typeof prev]
    }));
  };

  const mapTools = [
    { id: "pointer", name: "Select", icon: <MousePointer className="h-4 w-4" /> },
    { id: "pan", name: "Pan", icon: <Move className="h-4 w-4" /> },
    { id: "zoom-in", name: "Zoom In", icon: <ZoomIn className="h-4 w-4" /> },
    { id: "zoom-out", name: "Zoom Out", icon: <ZoomOut className="h-4 w-4" /> },
    { id: "info", name: "Info", icon: <Info className="h-4 w-4" /> }
  ];

  return (
    <div className="grid lg:grid-cols-5 gap-4 h-[800px]">
      {/* Map Controls Sidebar */}
      <Card className="lg:col-span-1 flex flex-col">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Layers className="h-5 w-5" />
            Map Controls
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 space-y-6 overflow-auto">
          {/* Map Tools */}
          <div>
            <h3 className="font-semibold text-sm mb-3">Tools</h3>
            <div className="grid grid-cols-2 gap-2">
              {mapTools.map((tool) => (
                <Button
                  key={tool.id}
                  variant={selectedTool === tool.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTool(tool.id)}
                  className="flex items-center gap-2 text-xs"
                >
                  {tool.icon}
                  <span className="hidden sm:inline">{tool.name}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Layer Controls */}
          <div>
            <h3 className="font-semibold text-sm mb-3">Map Layers</h3>
            <div className="space-y-2">
              {mapLayers.map((layer) => (
                <div key={layer.id} className="flex items-center justify-between p-2 rounded-lg border bg-card/50">
                  <div className="flex items-center gap-2">
                    <div className={`text-${layer.color}`}>
                      {layer.icon}
                    </div>
                    <span className="text-sm font-medium">{layer.name}</span>
                  </div>
                  <Button
                    variant={layer.active ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleLayer(layer.id)}
                    className="h-6 px-2 text-xs"
                  >
                    {layer.active ? "ON" : "OFF"}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Map Actions */}
          <div>
            <h3 className="font-semibold text-sm mb-3">Actions</h3>
            <div className="space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Download className="mr-2 h-4 w-4" />
                Export Map
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Share2 className="mr-2 h-4 w-4" />
                Share View
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" />
                Map Settings
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Map Area */}
      <Card className="lg:col-span-3">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              Interactive FRA Atlas
            </CardTitle>
            <Button variant="outline" size="sm">
              <Maximize className="mr-2 h-4 w-4" />
              Full Screen
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-2">
          <div className="relative h-[650px] bg-gradient-to-br from-forest/10 via-water/5 to-land/10 rounded-lg border-2 border-primary/20 overflow-hidden">
            {/* Map Background with realistic elements */}
            <div className="absolute inset-0">
              {/* Satellite-style background */}
              <div className="absolute inset-0 bg-gradient-to-br from-forest/30 to-earth/20" />
              
              {/* Forest areas */}
              {activeLayer.forest && (
                <>
                  <div className="absolute top-8 left-8 w-32 h-24 bg-forest/60 rounded-lg opacity-80" />
                  <div className="absolute bottom-16 right-12 w-40 h-32 bg-forest/60 rounded-lg opacity-80" />
                  <div className="absolute top-32 right-20 w-28 h-20 bg-forest/60 rounded-lg opacity-80" />
                </>
              )}
              
              {/* Water bodies */}
              {activeLayer.water && (
                <>
                  <div className="absolute top-1/3 right-1/4 w-16 h-12 bg-water/80 rounded-full" />
                  <div className="absolute bottom-1/3 left-1/4 w-24 h-8 bg-water/80 rounded-full" />
                </>
              )}
              
              {/* Agricultural areas */}
              {activeLayer.agriculture && (
                <>
                  <div className="absolute top-1/2 left-1/3 w-20 h-16 bg-land/60 rounded-lg" />
                  <div className="absolute bottom-1/4 center w-28 h-20 bg-land/60 rounded-lg" />
                </>
              )}
              
              {/* Villages and settlements */}
              {activeLayer.settlements && (
                <>
                  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-6 h-6 bg-accent rounded-full border-4 border-background animate-pulse cursor-pointer shadow-lg" 
                         title="Baiga Chak Village" />
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium bg-background/90 px-2 py-1 rounded border">
                      Baiga Chak
                    </div>
                  </div>
                  <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 bg-primary rounded-full border-2 border-background cursor-pointer" 
                         title="Gond Village" />
                  </div>
                  <div className="absolute bottom-1/3 right-1/3 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-5 h-5 bg-success rounded-full border-3 border-background cursor-pointer" 
                         title="Korku Settlement" />
                  </div>
                </>
              )}
              
              {/* Administrative boundaries */}
              {activeLayer.boundaries && (
                <div className="absolute inset-4 border-2 border-dashed border-primary/40 rounded-lg" />
              )}
            </div>
            
            {/* Map UI Elements */}
            <div className="absolute top-4 left-4 bg-background/95 backdrop-blur p-2 rounded border text-xs font-medium shadow-sm">
              Zoom: 1:50,000 | Tool: {mapTools.find(t => t.id === selectedTool)?.name}
            </div>
            
            <div className="absolute top-4 right-4 bg-background/95 backdrop-blur p-2 rounded border text-xs shadow-sm">
              Coordinates: 22.7644°N, 81.0955°E
            </div>
            
            <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur p-2 rounded border text-xs shadow-sm">
              Dindori District, Madhya Pradesh
            </div>
            
            {/* Scale bar */}
            <div className="absolute bottom-4 right-4 bg-background/95 backdrop-blur p-2 rounded border shadow-sm">
              <div className="flex items-center gap-2 text-xs">
                <div className="w-12 h-1 bg-primary"></div>
                <span>5 km</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Village Details Panel */}
      <Card className="lg:col-span-1">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg">Selected Area</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-primary">{selectedVillage.name}</h3>
            <p className="text-sm text-muted-foreground">
              {selectedVillage.district}, {selectedVillage.state}
            </p>
            <p className="text-xs text-muted-foreground">
              Population: {selectedVillage.population}
            </p>
          </div>
          
          {/* Claims Statistics */}
          <div className="space-y-3">
            <h4 className="font-medium text-sm">FRA Claims Status</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Total Claims</span>
                <Badge variant="outline">{selectedVillage.claims.total}</Badge>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span>Approved ({selectedVillage.claims.approved})</span>
                  <span>{Math.round((selectedVillage.claims.approved / selectedVillage.claims.total) * 100)}%</span>
                </div>
                <Progress value={(selectedVillage.claims.approved / selectedVillage.claims.total) * 100} className="h-2" />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-warning">Pending</span>
                <Badge variant="outline" className="text-warning border-warning">{selectedVillage.claims.pending}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-destructive">Rejected</span>
                <Badge variant="outline" className="text-destructive border-destructive">{selectedVillage.claims.rejected}</Badge>
              </div>
            </div>
          </div>
          
          {/* Asset Distribution */}
          <div className="space-y-3">
            <h4 className="font-medium text-sm">Asset Distribution</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TreePine className="h-4 w-4 text-forest" />
                  <span className="text-sm">Forest</span>
                </div>
                <span className="text-sm font-medium">{selectedVillage.assets.forest}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Droplets className="h-4 w-4 text-water" />
                  <span className="text-sm">Water</span>
                </div>
                <span className="text-sm font-medium">{selectedVillage.assets.water}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Wheat className="h-4 w-4 text-land" />
                  <span className="text-sm">Agriculture</span>
                </div>
                <span className="text-sm font-medium">{selectedVillage.assets.agriculture}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Home className="h-4 w-4 text-earth" />
                  <span className="text-sm">Settlements</span>
                </div>
                <span className="text-sm font-medium">{selectedVillage.assets.settlements}</span>
              </div>
            </div>
          </div>

          <div className="pt-4 space-y-2">
            <Button size="sm" className="w-full">View Detailed Report</Button>
            <Button variant="outline" size="sm" className="w-full">Export Village Data</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InteractiveMap;