import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Briefcase, Mail, Phone, MapPin, DollarSign, Clock, FileText, Upload } from "lucide-react";

// Validation schema for all mandatory fields
const applicationSchema = z.object({
  name: z.string().min(1, "Full name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().min(1, "Email is required").email("Invalid email address").max(255),
  contactNumber: z.string().min(1, "Contact number is required").max(20),
  linkedinProfile: z.string().min(1, "LinkedIn profile is required").max(255),
  resume: z.instanceof(FileList).refine((files) => files?.length > 0, "Resume is required"),
  interestedPosition: z.string().min(1, "Please select a position"),
  currentRole: z.string().min(1, "Current role is required").max(100),
  currentOrganization: z.string().min(1, "Current organization is required").max(100),
  totalExperience: z.string().min(1, "Total experience is required"),
  currentLocation: z.string().min(1, "Current location is required").max(100),
  locationPreference: z.string().min(1, "Location preference is required"),
  currentCTC: z.string().min(1, "Current CTC is required"),
  expectedCTC: z.string().min(1, "Expected CTC is required"),
  noticePeriod: z.string().min(1, "Notice period is required"),
  isInNotice: z.string().min(1, "Please select an option"),
  isImmediateJoiner: z.string().min(1, "Please select an option"),
  hasOffers: z.string().min(1, "Please select an option"),
  offeredCTC: z.string().min(1, "Offered CTC is required"),
  certifications: z.string().min(1, "Certifications are required").max(500),
  referredBy: z.string().min(1, "Referred by is required").max(100),
  comments: z.string().min(1, "Additional comments are required").max(1000),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

const JobApplicationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      name: "",
      email: "",
      contactNumber: "",
      linkedinProfile: "",
      interestedPosition: "",
      currentRole: "",
      currentOrganization: "",
      totalExperience: "",
      currentLocation: "",
      locationPreference: "",
      currentCTC: "",
      expectedCTC: "",
      noticePeriod: "",
      isInNotice: "",
      isImmediateJoiner: "",
      hasOffers: "",
      offeredCTC: "",
      certifications: "",
      referredBy: "",
      comments: "",
    },
  });

  const interestedPosition = watch("interestedPosition");
  const locationPreference = watch("locationPreference");
  const isInNotice = watch("isInNotice");
  const isImmediateJoiner = watch("isImmediateJoiner");
  const hasOffers = watch("hasOffers");

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true);
    
    try {
      // Prepare form data for cloud storage
      const formPayload = new FormData();
      
      // Add all form fields
      const applicationData = {
        fullName: data.name,
        email: data.email,
        contactNumber: data.contactNumber,
        linkedinProfile: data.linkedinProfile || "",
        interestedPosition: data.interestedPosition,
        currentRole: data.currentRole || "",
        currentOrganization: data.currentOrganization || "",
        totalExperience: data.totalExperience,
        currentLocation: data.currentLocation || "",
        locationPreference: data.locationPreference || "",
        currentCTC: data.currentCTC || "",
        expectedCTC: data.expectedCTC || "",
        noticePeriod: data.noticePeriod || "",
        currentlyInNotice: data.isInNotice || "",
        immediateJoiner: data.isImmediateJoiner || "",
        otherOffersInHand: data.hasOffers || "",
        offeredCTC: data.offeredCTC || "",
        certifications: data.certifications || "",
        referredBy: data.referredBy || "",
        additionalInfo: data.comments || "",
        submittedAt: new Date().toISOString(),
      };

      // Add JSON data as blob
      formPayload.append(
        "data",
        new Blob([JSON.stringify(applicationData)], { type: "application/json" })
      );

      // Add resume file
      if (data.resume && data.resume[0]) {
        formPayload.append("resume", data.resume[0]);
      }

      // Get cloud endpoint from environment or use placeholder
      const CLOUD_ENDPOINT = import.meta.env.VITE_CLOUD_ENDPOINT || "https://your-backend-endpoint.com/api/applications";

      // Submit to external cloud storage
      const response = await fetch(CLOUD_ENDPOINT, {
        method: "POST",
        body: formPayload,
      });

      if (!response.ok) {
        throw new Error(`Upload failed with status: ${response.status}`);
      }

      const result = await response.json();
      
      toast.success("✅ Application submitted successfully! We'll get back to you soon.");
      
      // Reset form after successful submission
      reset();
      
    } catch (error) {
      console.error("Application submission error:", error);
      toast.error("❌ Failed to submit application. Please try again or contact support.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="application-form" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <Card className="shadow-[var(--shadow-elegant)] border-primary/20">
          <CardHeader className="text-center space-y-2 p-4 sm:p-6">
            <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Application Form
            </CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Fill in your details and we'll get in touch with you shortly
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 lg:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 md:space-y-8">
              {/* Personal Information */}
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2">
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  Personal Information
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name <span className="text-destructive">*</span></Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive">{errors.name.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email ID <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactNumber" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Contact Number <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="contactNumber"
                      placeholder="+91 9876543210"
                      {...register("contactNumber")}
                    />
                    {errors.contactNumber && (
                      <p className="text-xs text-destructive">{errors.contactNumber.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="linkedinProfile">LinkedIn Profile <span className="text-destructive">*</span></Label>
                    <Input
                      id="linkedinProfile"
                      placeholder="linkedin.com/in/johndoe"
                      {...register("linkedinProfile")}
                    />
                    {errors.linkedinProfile && (
                      <p className="text-xs text-destructive">{errors.linkedinProfile.message}</p>
                    )}
                  </div>
                </div>
                
                {/* Resume Upload */}
                <div className="space-y-2">
                  <Label htmlFor="resume" className="flex items-center gap-2">
                    <Upload className="w-4 h-4" />
                    Upload Resume / CV <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx,.txt,.rtf"
                    className="cursor-pointer file:cursor-pointer"
                    {...register("resume")}
                  />
                  {errors.resume && (
                    <p className="text-xs text-destructive">{errors.resume.message}</p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    Accepted formats: PDF, DOC, DOCX, TXT, RTF (Max 5MB)
                  </p>
                </div>
              </div>

              {/* Position Details */}
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2">
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  Position Details
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="interestedPosition">Interested Position <span className="text-destructive">*</span></Label>
                    <Select
                      value={interestedPosition}
                      onValueChange={(value) => setValue("interestedPosition", value)}
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
                    {errors.interestedPosition && (
                      <p className="text-xs text-destructive">{errors.interestedPosition.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentRole">Current Role <span className="text-destructive">*</span></Label>
                    <Input
                      id="currentRole"
                      placeholder="Senior Developer"
                      {...register("currentRole")}
                    />
                    {errors.currentRole && (
                      <p className="text-xs text-destructive">{errors.currentRole.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentOrganization">Current Organization <span className="text-destructive">*</span></Label>
                    <Input
                      id="currentOrganization"
                      placeholder="Tech Corp"
                      {...register("currentOrganization")}
                    />
                    {errors.currentOrganization && (
                      <p className="text-xs text-destructive">{errors.currentOrganization.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="totalExperience" className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Total Years of Experience <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="totalExperience"
                      type="number"
                      placeholder="5"
                      {...register("totalExperience")}
                    />
                    {errors.totalExperience && (
                      <p className="text-xs text-destructive">{errors.totalExperience.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Location & Compensation */}
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  Location & Compensation
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentLocation">Current Location <span className="text-destructive">*</span></Label>
                    <Input
                      id="currentLocation"
                      placeholder="Bangalore"
                      {...register("currentLocation")}
                    />
                    {errors.currentLocation && (
                      <p className="text-xs text-destructive">{errors.currentLocation.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="locationPreference">Location Preference <span className="text-destructive">*</span></Label>
                    <Select
                      value={locationPreference}
                      onValueChange={(value) => setValue("locationPreference", value)}
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
                    {errors.locationPreference && (
                      <p className="text-xs text-destructive">{errors.locationPreference.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentCTC" className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      Current CTC per Annum (₹) <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="currentCTC"
                      placeholder="1200000"
                      {...register("currentCTC")}
                    />
                    {errors.currentCTC && (
                      <p className="text-xs text-destructive">{errors.currentCTC.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="expectedCTC" className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      Expected CTC per Annum (₹) <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="expectedCTC"
                      placeholder="1500000"
                      {...register("expectedCTC")}
                    />
                    {errors.expectedCTC && (
                      <p className="text-xs text-destructive">{errors.expectedCTC.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  Availability
                </h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="noticePeriod">Notice Period (Days) <span className="text-destructive">*</span></Label>
                    <Input
                      id="noticePeriod"
                      type="number"
                      placeholder="30"
                      {...register("noticePeriod")}
                    />
                    {errors.noticePeriod && (
                      <p className="text-xs text-destructive">{errors.noticePeriod.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="isInNotice">Currently in Notice? <span className="text-destructive">*</span></Label>
                    <Select
                      value={isInNotice}
                      onValueChange={(value) => setValue("isInNotice", value)}
                    >
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent className="bg-background z-50">
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.isInNotice && (
                      <p className="text-xs text-destructive">{errors.isInNotice.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="isImmediateJoiner">Immediate Joiner? <span className="text-destructive">*</span></Label>
                    <Select
                      value={isImmediateJoiner}
                      onValueChange={(value) => setValue("isImmediateJoiner", value)}
                    >
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent className="bg-background z-50">
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.isImmediateJoiner && (
                      <p className="text-xs text-destructive">{errors.isImmediateJoiner.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  Additional Information
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="hasOffers">Other Offers in Hand? <span className="text-destructive">*</span></Label>
                    <Select
                      value={hasOffers}
                      onValueChange={(value) => setValue("hasOffers", value)}
                    >
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent className="bg-background z-50">
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.hasOffers && (
                      <p className="text-xs text-destructive">{errors.hasOffers.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="offeredCTC">Offered CTC (if any) (₹) <span className="text-destructive">*</span></Label>
                    <Input
                      id="offeredCTC"
                      placeholder="1400000"
                      {...register("offeredCTC")}
                    />
                    {errors.offeredCTC && (
                      <p className="text-xs text-destructive">{errors.offeredCTC.message}</p>
                    )}
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="certifications">Certifications <span className="text-destructive">*</span></Label>
                    <Input
                      id="certifications"
                      placeholder="AWS Certified, Azure Solutions Architect"
                      {...register("certifications")}
                    />
                    {errors.certifications && (
                      <p className="text-xs text-destructive">{errors.certifications.message}</p>
                    )}
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="referredBy">Referred By <span className="text-destructive">*</span></Label>
                    <Input
                      id="referredBy"
                      placeholder="Employee Name or N/A"
                      {...register("referredBy")}
                    />
                    {errors.referredBy && (
                      <p className="text-xs text-destructive">{errors.referredBy.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="comments">Additional Comments <span className="text-destructive">*</span></Label>
                  <Textarea
                    id="comments"
                    placeholder="Any additional information you'd like to share..."
                    className="min-h-[100px] resize-none"
                    {...register("comments")}
                  />
                  {errors.comments && (
                    <p className="text-xs text-destructive">{errors.comments.message}</p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-6 text-base sm:text-lg"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default JobApplicationForm;
