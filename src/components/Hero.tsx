import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Database, Brain, TreePine } from "lucide-react";
import heroImage from "@/assets/fra-hero.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-forest/5">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/90" />
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm font-medium text-primary">
                <TreePine className="h-4 w-4" />
                <span>Forest Rights Act 2006 Implementation</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight lg:text-6xl">
                FRA Atlas
                <span className="block text-forest text-3xl lg:text-5xl mt-2">
                  Decision Support System
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                AI-powered WebGIS platform for integrated monitoring of Forest Rights Act implementation across Madhya Pradesh, Tripura, Odisha, and Telangana.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Explore Atlas
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                View Documentation
              </Button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-3 mx-auto">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">4</div>
                <div className="text-sm text-muted-foreground">States</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-success/10 mb-3 mx-auto">
                  <Database className="h-6 w-6 text-success" />
                </div>
                <div className="text-2xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">FRA Records</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-water/10 mb-3 mx-auto">
                  <Brain className="h-6 w-6 text-water" />
                </div>
                <div className="text-2xl font-bold text-foreground">AI/ML</div>
                <div className="text-sm text-muted-foreground">Asset Mapping</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 mb-3 mx-auto">
                  <TreePine className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground">1000+</div>
                <div className="text-sm text-muted-foreground">Villages</div>
              </div>
            </div>
          </div>
          
          <div className="relative lg:pl-8">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="FRA Atlas Forest Monitoring"
                className="rounded-lg shadow-xl border"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;