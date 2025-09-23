import { Map, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Map className="h-6 w-6" />
              <span className="font-bold text-lg">FRA Atlas</span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              AI-powered Decision Support System for integrated monitoring of Forest Rights Act implementation across tribal communities.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Target States</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Madhya Pradesh</li>
              <li>Odisha</li>
              <li>Telangana</li>
              <li>Tripura</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Key Features</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>WebGIS Portal</li>
              <li>AI Asset Mapping</li>
              <li>Decision Support Engine</li>
              <li>Digital Archive System</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@fra-atlas.gov.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91-11-2389-XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Ministry of Tribal Affairs</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2024 FRA Atlas. Developed for Ministry of Tribal Affairs, Government of India. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;