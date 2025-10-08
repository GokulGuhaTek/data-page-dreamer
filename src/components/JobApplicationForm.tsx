import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Briefcase, Mail, Phone, MapPin, DollarSign, Clock, FileText, Upload } from "lucide-react";

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    interestedPosition: "",
    currentRole: "",
    currentOrganization: "",
    currentLocation: "",
    currentCTC: "",
    expectedCTC: "",
    totalExperience: "",
    noticePeriod: "",
    isInNotice: "",
    isImmediateJoiner: "",
    hasOffers: "",
    offeredCTC: "",
    locationPreference: "",
    certifications: "",
    linkedinProfile: "",
    comments: "",
    referredBy: "",
  });

  const [resume, setResume] = useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Application submitted:", formData);
    console.log("Resume file:", resume);
    toast.success("Application submitted successfully! We'll get back to you soon.");
    // Reset form
    setResume(null);
    setFormData({
      name: "",
      email: "",
      contactNumber: "",
      interestedPosition: "",
      currentRole: "",
      currentOrganization: "",
      currentLocation: "",
      currentCTC: "",
      expectedCTC: "",
      totalExperience: "",
      noticePeriod: "",
      isInNotice: "",
      isImmediateJoiner: "",
      hasOffers: "",
      offeredCTC: "",
      locationPreference: "",
      certifications: "",
      linkedinProfile: "",
      comments: "",
      referredBy: "",
    });
  };

  return (
    <section id="application-form" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="shadow-[var(--shadow-elegant)] border-primary/20">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Application Form
            </CardTitle>
            <CardDescription className="text-base">
              Fill in your details and we'll get in touch with you shortly
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email ID *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactNumber" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Contact Number *
                    </Label>
                    <Input
                      id="contactNumber"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                      required
                      placeholder="+91 9876543210"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="linkedinProfile">LinkedIn Profile</Label>
                    <Input
                      id="linkedinProfile"
                      name="linkedinProfile"
                      value={formData.linkedinProfile}
                      onChange={handleInputChange}
                      placeholder="linkedin.com/in/johndoe"
                    />
                  </div>
                </div>
                
                {/* Resume Upload */}
                <div className="space-y-2">
                  <Label htmlFor="resume" className="flex items-center gap-2">
                    <Upload className="w-4 h-4" />
                    Upload Resume / CV *
                  </Label>
                  <div className="flex items-center gap-4">
                    <Input
                      id="resume"
                      name="resume"
                      type="file"
                      onChange={handleFileChange}
                      required
                      accept=".pdf,.doc,.docx,.txt,.rtf"
                      className="cursor-pointer file:cursor-pointer"
                    />
                    {resume && (
                      <span className="text-sm text-muted-foreground">
                        {resume.name}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Accepted formats: PDF, DOC, DOCX, TXT, RTF (Max 5MB)
                  </p>
                </div>
              </div>

              {/* Position Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Position Details
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="interestedPosition">Interested Position *</Label>
                    <Select
                      value={formData.interestedPosition}
                      onValueChange={(value) => handleSelectChange("interestedPosition", value)}
                      required
                    >
                      <SelectTrigger className="w-full bg-background">
                        <SelectValue placeholder="Select a position" />
                      </SelectTrigger>
                      <SelectContent className="bg-background z-50">
                        <SelectItem value="Current Openings">Current Openings</SelectItem>
                        <SelectItem value="Site Reliability Engineer">Site Reliability Engineer</SelectItem>
                        <SelectItem value="Senior Site Reliability Engineer">Senior Site Reliability Engineer</SelectItem>
                        <SelectItem value="Lead Site Reliability Engineer">Lead Site Reliability Engineer</SelectItem>
                        <SelectItem value="Application Site Reliability Engineer">Application Site Reliability Engineer</SelectItem>
                        <SelectItem value="Security Operations Centre Engineer">Security Operations Centre Engineer</SelectItem>
                        <SelectItem value="Performance Engineer">Performance Engineer</SelectItem>
                        <SelectItem value="QA Automation Engineer (Playwright & Selenium)">QA Automation Engineer (Playwright & Selenium)</SelectItem>
                        <SelectItem value="DevOps Engineer">DevOps Engineer</SelectItem>
                        <SelectItem value="Lead SAP Engineer">Lead SAP Engineer</SelectItem>
                        <SelectItem value="AI/ML Engineer">AI/ML Engineer</SelectItem>
                        <SelectItem value="AI/ML Intern">AI/ML Intern</SelectItem>
                        <SelectItem value="Internship">Internship</SelectItem>
                        <SelectItem value="Fresher">Fresher</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentRole">Current Role</Label>
                    <Input
                      id="currentRole"
                      name="currentRole"
                      value={formData.currentRole}
                      onChange={handleInputChange}
                      placeholder="Senior Developer"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentOrganization">Current Organization</Label>
                    <Input
                      id="currentOrganization"
                      name="currentOrganization"
                      value={formData.currentOrganization}
                      onChange={handleInputChange}
                      placeholder="Tech Corp"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="totalExperience" className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Total Years of Experience *
                    </Label>
                    <Input
                      id="totalExperience"
                      name="totalExperience"
                      type="number"
                      value={formData.totalExperience}
                      onChange={handleInputChange}
                      required
                      placeholder="5"
                    />
                  </div>
                </div>
              </div>

              {/* Location & Compensation */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Location & Compensation
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentLocation">Current Location</Label>
                    <Input
                      id="currentLocation"
                      name="currentLocation"
                      value={formData.currentLocation}
                      onChange={handleInputChange}
                      placeholder="Bangalore"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="locationPreference">Location Preference</Label>
                    <Select
                      value={formData.locationPreference}
                      onValueChange={(value) => handleSelectChange("locationPreference", value)}
                    >
                      <SelectTrigger className="w-full bg-background">
                        <SelectValue placeholder="Select location preference" />
                      </SelectTrigger>
                      <SelectContent className="bg-background z-50">
                        <SelectItem value="Any">Any</SelectItem>
                        <SelectItem value="Coimbatore">Coimbatore</SelectItem>
                        <SelectItem value="Chennai">Chennai</SelectItem>
                        <SelectItem value="Bangalore">Bangalore</SelectItem>
                        <SelectItem value="Coimbatore/Hybrid">Coimbatore/Hybrid</SelectItem>
                        <SelectItem value="Chennai/Hybrid">Chennai/Hybrid</SelectItem>
                        <SelectItem value="Bangalore/Hybrid">Bangalore/Hybrid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentCTC" className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      Current CTC per Annum (₹)
                    </Label>
                    <Input
                      id="currentCTC"
                      name="currentCTC"
                      value={formData.currentCTC}
                      onChange={handleInputChange}
                      placeholder="1200000"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="expectedCTC" className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      Expected CTC per Annum (₹)
                    </Label>
                    <Input
                      id="expectedCTC"
                      name="expectedCTC"
                      value={formData.expectedCTC}
                      onChange={handleInputChange}
                      placeholder="1500000"
                    />
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Availability
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="noticePeriod">Notice Period (Days)</Label>
                    <Input
                      id="noticePeriod"
                      name="noticePeriod"
                      type="number"
                      value={formData.noticePeriod}
                      onChange={handleInputChange}
                      placeholder="30"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="isInNotice">Currently in Notice?</Label>
                    <Select
                      name="isInNotice"
                      value={formData.isInNotice}
                      onValueChange={(value) => handleSelectChange("isInNotice", value)}
                    >
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent className="bg-background z-50">
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="isImmediateJoiner">Immediate Joiner?</Label>
                    <Select
                      name="isImmediateJoiner"
                      value={formData.isImmediateJoiner}
                      onValueChange={(value) => handleSelectChange("isImmediateJoiner", value)}
                    >
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent className="bg-background z-50">
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Additional Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="hasOffers">Other Offers in Hand?</Label>
                    <Select
                      name="hasOffers"
                      value={formData.hasOffers}
                      onValueChange={(value) => handleSelectChange("hasOffers", value)}
                    >
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent className="bg-background z-50">
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="offeredCTC">Offered CTC (if any) (₹)</Label>
                    <Input
                      id="offeredCTC"
                      name="offeredCTC"
                      value={formData.offeredCTC}
                      onChange={handleInputChange}
                      placeholder="1400000"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="certifications">Certifications</Label>
                    <Input
                      id="certifications"
                      name="certifications"
                      value={formData.certifications}
                      onChange={handleInputChange}
                      placeholder="AWS Certified, Azure Solutions Architect"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="referredBy">Referred By</Label>
                    <Input
                      id="referredBy"
                      name="referredBy"
                      value={formData.referredBy}
                      onChange={handleInputChange}
                      placeholder="Employee name or reference code"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="comments">Comments / Additional Information</Label>
                    <Textarea
                      id="comments"
                      name="comments"
                      value={formData.comments}
                      onChange={handleInputChange}
                      placeholder="Tell us anything else you'd like us to know..."
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full" variant="hero">
                Submit Application
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default JobApplicationForm;
