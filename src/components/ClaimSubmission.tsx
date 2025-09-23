import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { 
  FileText, 
  Upload, 
  MapPin, 
  User, 
  Calendar,
  Paperclip,
  Save,
  Send,
  AlertCircle
} from "lucide-react";

const ClaimSubmission = () => {
  const [claimType, setClaimType] = useState("");
  const [documents, setDocuments] = useState<File[]>([]);
  const { toast } = useToast();

  const handleDocumentUpload = (files: FileList | null) => {
    if (files) {
      setDocuments(prev => [...prev, ...Array.from(files)]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Claim Submitted Successfully",
      description: "Your FRA claim has been submitted for review. Reference ID: FRA/2024/NEW/001",
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Submit New FRA Claim
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="individual" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="individual">Individual Forest Rights (IFR)</TabsTrigger>
              <TabsTrigger value="community">Community Rights (CR)</TabsTrigger>
              <TabsTrigger value="forest">Community Forest Rights (CFR)</TabsTrigger>
            </TabsList>
            
            <TabsContent value="individual" className="space-y-6 mt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Applicant Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Applicant Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="full-name">Full Name *</Label>
                      <Input id="full-name" placeholder="Enter full name as per Aadhaar" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="father-name">Father's/Husband's Name *</Label>
                      <Input id="father-name" placeholder="Enter father's/husband's name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="aadhaar">Aadhaar Number *</Label>
                      <Input id="aadhaar" placeholder="XXXX-XXXX-XXXX" maxLength={14} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mobile">Mobile Number *</Label>
                      <Input id="mobile" placeholder="+91-XXXXX-XXXXX" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Input id="age" type="number" placeholder="Enter age" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                {/* Location Details */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      Location Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="state">State *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mp">Madhya Pradesh</SelectItem>
                          <SelectItem value="od">Odisha</SelectItem>
                          <SelectItem value="tg">Telangana</SelectItem>
                          <SelectItem value="tr">Tripura</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="district">District *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select district" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dindori">Dindori</SelectItem>
                          <SelectItem value="jhabua">Jhabua</SelectItem>
                          <SelectItem value="kalahandi">Kalahandi</SelectItem>
                          <SelectItem value="warangal">Warangal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="block">Block/Tehsil *</Label>
                      <Input id="block" placeholder="Enter block/tehsil name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="village">Village *</Label>
                      <Input id="village" placeholder="Enter village name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="survey-no">Survey Number *</Label>
                      <Input id="survey-no" placeholder="Enter survey number" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="area">Claimed Area (in hectares) *</Label>
                      <Input id="area" type="number" step="0.01" placeholder="0.00" required />
                    </div>
                  </CardContent>
                </Card>

                {/* Land Use Details */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Land Use and Occupation Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="occupation-period">Period of Occupation *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select occupation period" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="before-2005">Before 13th December 2005</SelectItem>
                          <SelectItem value="before-1980">Before 25th October 1980</SelectItem>
                          <SelectItem value="ancestral">Ancestral occupation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="land-use">Current Land Use *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select land use" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="agriculture">Agriculture</SelectItem>
                          <SelectItem value="habitation">Habitation</SelectItem>
                          <SelectItem value="mixed">Mixed use</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="evidence">Evidence of Occupation</Label>
                      <Textarea 
                        id="evidence" 
                        placeholder="Describe evidence of occupation (witnesses, cultivation records, etc.)"
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Document Upload */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Paperclip className="h-5 w-5" />
                      Required Documents
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Document Type</Label>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <div>• Aadhaar Card (mandatory)</div>
                          <div>• Voter ID Card</div>
                          <div>• Ration Card</div>
                          <div>• Village Headman Certificate</div>
                          <div>• Cultivation/Occupation Proof</div>
                          <div>• Survey Settlement Records</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="documents">Upload Documents</Label>
                        <Input 
                          id="documents" 
                          type="file" 
                          multiple 
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => handleDocumentUpload(e.target.files)}
                        />
                        {documents.length > 0 && (
                          <div className="text-sm text-muted-foreground">
                            {documents.length} file(s) selected
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Declaration */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3 p-4 bg-warning/10 border border-warning/30 rounded-lg">
                      <AlertCircle className="h-5 w-5 text-warning mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium mb-2">Declaration</p>
                        <p className="text-muted-foreground">
                          I hereby declare that the information provided is true and correct to the best of my knowledge. 
                          I understand that any false information may lead to rejection of my claim and legal action.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Submit Actions */}
                <div className="flex gap-4 justify-end">
                  <Button type="button" variant="outline">
                    <Save className="mr-2 h-4 w-4" />
                    Save as Draft
                  </Button>
                  <Button type="submit">
                    <Send className="mr-2 h-4 w-4" />
                    Submit Claim
                  </Button>
                </div>
              </form>
            </TabsContent>

            <TabsContent value="community" className="space-y-4 mt-6">
              <div className="text-center py-12 text-muted-foreground">
                <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-semibold mb-2">Community Rights (CR) Application</h3>
                <p>Application form for community rights over forest resources.</p>
                <Button className="mt-4">Start Application</Button>
              </div>
            </TabsContent>

            <TabsContent value="forest" className="space-y-4 mt-6">
              <div className="text-center py-12 text-muted-foreground">
                <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-semibold mb-2">Community Forest Rights (CFR) Application</h3>
                <p>Application form for community forest resource rights.</p>
                <Button className="mt-4">Start Application</Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClaimSubmission;