import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Edit, 
  FileText,
  Calendar,
  MapPin,
  User,
  CheckCircle,
  Clock,
  AlertCircle,
  MoreHorizontal
} from "lucide-react";

const ClaimsDatabase = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("all");

  const claimsData = [
    {
      id: "FRA/MP/DIN/2024/001",
      applicant: "Ramesh Kumar Baiga",
      village: "Baiga Chak",
      district: "Dindori",
      state: "Madhya Pradesh",
      type: "Individual Forest Rights (IFR)",
      area: "2.5 hectares",
      status: "approved",
      submissionDate: "2024-01-15",
      approvalDate: "2024-03-20",
      officer: "District Collector, Dindori"
    },
    {
      id: "FRA/OD/KAL/2024/045",
      applicant: "Sita Devi Kondh",
      village: "Karlapat",
      district: "Kalahandi",
      state: "Odisha",
      type: "Community Forest Rights (CFR)",
      area: "15.8 hectares",
      status: "pending",
      submissionDate: "2024-02-10",
      approvalDate: null,
      officer: "SDM, Kalahandi"
    },
    {
      id: "FRA/TG/WAR/2024/023",
      applicant: "Lakshmi Gond Community",
      village: "Warangal Rural",
      district: "Warangal",
      state: "Telangana",
      type: "Community Rights (CR)",
      area: "8.2 hectares",
      status: "under_review",
      submissionDate: "2024-01-28",
      approvalDate: null,
      officer: "Tribal Welfare Officer"
    },
    {
      id: "FRA/TR/DHM/2024/007",
      applicant: "Ratan Tripura",
      village: "Dharmanagar",
      district: "North Tripura",
      state: "Tripura",
      type: "Individual Forest Rights (IFR)",
      area: "1.8 hectares",
      status: "rejected",
      submissionDate: "2023-12-05",
      approvalDate: "2024-02-15",
      officer: "Forest Range Officer"
    },
    {
      id: "FRA/MP/JHA/2024/112",
      applicant: "Tribal Cooperative Society",
      village: "Jhabua Tehsil",
      district: "Jhabua",
      state: "Madhya Pradesh",
      type: "Community Forest Rights (CFR)",
      area: "25.5 hectares",
      status: "approved",
      submissionDate: "2023-11-20",
      approvalDate: "2024-01-10",
      officer: "District Collector, Jhabua"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-success text-success-foreground"><CheckCircle className="h-3 w-3 mr-1" />Approved</Badge>;
      case "pending":
        return <Badge variant="outline" className="text-warning border-warning"><Clock className="h-3 w-3 mr-1" />Pending</Badge>;
      case "under_review":
        return <Badge variant="secondary"><Eye className="h-3 w-3 mr-1" />Under Review</Badge>;
      case "rejected":
        return <Badge variant="destructive"><AlertCircle className="h-3 w-3 mr-1" />Rejected</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const filteredClaims = claimsData.filter(claim => {
    const matchesSearch = claim.applicant.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         claim.village.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         claim.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = selectedState === "all" || claim.state === selectedState;
    return matchesSearch && matchesState;
  });

  const statistics = {
    total: claimsData.length,
    approved: claimsData.filter(c => c.status === "approved").length,
    pending: claimsData.filter(c => c.status === "pending").length,
    underReview: claimsData.filter(c => c.status === "under_review").length,
    rejected: claimsData.filter(c => c.status === "rejected").length
  };

  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-primary">{statistics.total}</div>
            <div className="text-sm text-muted-foreground">Total Claims</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-success">{statistics.approved}</div>
            <div className="text-sm text-muted-foreground">Approved</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-warning">{statistics.pending}</div>
            <div className="text-sm text-muted-foreground">Pending</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-water">{statistics.underReview}</div>
            <div className="text-sm text-muted-foreground">Under Review</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-destructive">{statistics.rejected}</div>
            <div className="text-sm text-muted-foreground">Rejected</div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              FRA Claims Database
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Advanced Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by applicant name, village, or claim ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <select 
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="px-3 py-2 border border-input rounded-md bg-background"
            >
              <option value="all">All States</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Odisha">Odisha</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
            </select>
          </div>

          {/* Claims Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left p-3 font-medium">Claim ID</th>
                  <th className="text-left p-3 font-medium">Applicant</th>
                  <th className="text-left p-3 font-medium">Location</th>
                  <th className="text-left p-3 font-medium">Type</th>
                  <th className="text-left p-3 font-medium">Area</th>
                  <th className="text-left p-3 font-medium">Status</th>
                  <th className="text-left p-3 font-medium">Date</th>
                  <th className="text-left p-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredClaims.map((claim) => (
                  <tr key={claim.id} className="border-b hover:bg-muted/20">
                    <td className="p-3 font-mono text-sm">{claim.id}</td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{claim.applicant}</span>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <div className="font-medium text-sm">{claim.village}</div>
                          <div className="text-xs text-muted-foreground">{claim.district}, {claim.state}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">
                      <Badge variant="outline" className="text-xs">
                        {claim.type}
                      </Badge>
                    </td>
                    <td className="p-3 font-medium">{claim.area}</td>
                    <td className="p-3">{getStatusBadge(claim.status)}</td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <div className="text-sm">{claim.submissionDate}</div>
                          {claim.approvalDate && (
                            <div className="text-xs text-muted-foreground">Approved: {claim.approvalDate}</div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredClaims.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No claims found matching your search criteria.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ClaimsDatabase;