import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Satellite, 
  FileText, 
  Map, 
  Brain, 
  Database, 
  Users, 
  Layers, 
  TrendingUp,
  Shield,
  Globe,
  Camera,
  Settings
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Satellite className="h-6 w-6" />,
      title: "AI-Powered Asset Mapping",
      description: "Computer Vision on high-resolution satellite imagery to detect agricultural land, forest cover, water bodies, and homesteads.",
      color: "water"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Digital Archive System",
      description: "AI-processed digitization of legacy FRA documents with NER for extracting village names, patta holders, and coordinates.",
      color: "primary"
    },
    {
      icon: <Map className="h-6 w-6" />,
      title: "Interactive WebGIS Portal",
      description: "Comprehensive mapping platform with interactive layers for IFR/CR, village boundaries, land-use, and asset visualization.",
      color: "forest"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Decision Support Engine",
      description: "Rule-based + AI-enhanced DSS for cross-linking FRA holders with eligibility for Central Sector Schemes.",
      color: "accent"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Centralized Data Hub",
      description: "Integrated repository of FRA claims, verifications, pattas, and real-time progress tracking across all administrative levels.",
      color: "success"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Multi-Stakeholder Access",
      description: "Role-based access for Ministry of Tribal Affairs, District Departments, Forest & Revenue Departments, and NGOs.",
      color: "earth"
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Multi-Layer Integration",
      description: "Forest data, groundwater information, and infrastructure data from PM Gati Shakti for comprehensive analysis.",
      color: "water"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Progress Monitoring",
      description: "Real-time FRA implementation tracking at village, block, district, and state levels with comprehensive analytics.",
      color: "primary"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Data Management",
      description: "Government-grade security protocols ensuring data integrity and compliance with privacy regulations.",
      color: "destructive"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "State Coverage",
      description: "Comprehensive coverage across Madhya Pradesh, Tripura, Odisha, and Telangana with scalable architecture.",
      color: "forest"
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Satellite Integration",
      description: "Real-time satellite feeds for monitoring CFR forests with advanced remote sensing capabilities.",
      color: "accent"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Scheme Optimization",
      description: "Intelligent recommendation system for layering CSS schemes like PM-KISAN, Jal Jeevan Mission, and MGNREGA.",
      color: "warning"
    }
  ];

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl mb-4">
            Comprehensive FRA Implementation Tools
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced AI and WebGIS technologies for transparent, efficient forest rights monitoring and decision support
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary/20">
              <CardHeader className="pb-4">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-${feature.color}/10 mb-4`}>
                  <div className={`text-${feature.color}`}>
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;