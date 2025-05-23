"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Check, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useToast } from "@/hooks";

// Mock data for the therapist profile
const therapistData = {
  name: "James Bully",
  email: "Quotientspecialist@gmail.com",
  phone: "08105201636",
  professional: {
    issuingAuthority: "Therapist board",
    licenseNumber: "124563780",
    yearsOfExperience: "5 years",
  },
  education: {
    highestDegree: "B.sc",
    institution: "University of Benin",
  },
  identity: {
    sex: "Male",
    dateOfBirth: "24th July,1996",
    idType: "National ID",
    countryOfResidence: "Nigeria",
  },
  expertise: [
    "Adult and Aging Issues",
    "Anxiety",
    "Disabilities",
    "Personality disorder",
    "Psychosomatic Problems",
    "Career and Life adjustment",
  ],
  specialties: ["Guidance and counselling", "Psychiatry"],
};

export default function ProfileSetupPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const router = useRouter();
  const { toast } = useToast();

  const steps = [
    { id: "professional", title: "Validate professional info." },
    { id: "educational", title: "Validate educational info." },
    { id: "identity", title: "Validate identity info." },
  ];

  const handleApprove = () => {
    if (activeStep < steps.length - 1) {
      setCompletedSteps([...completedSteps, activeStep]);
      setActiveStep(activeStep + 1);
    } else {
      // Final approval
      toast({
        variant: "success",
        title: "Profile set-up approved",
        description: "James Bully account has been approved.",
      });

      // Redirect to the dashboard after a short delay
      setTimeout(() => {
        router.push("/admin/therapists");
      }, 2000);
    }
  };

  const handleTabChange = (value: string) => {
    const index = steps.findIndex((step) => step.id === value);
    setActiveStep(index);
  };

  return (
    <div className="flex flex-col gap-6 px-6 mb-12">
      <div className="flex items-center gap-2">
        <Link href="/therapist/verification">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-2xl font-semibold">Review profile setup</h1>
      </div>

      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>Pending task</span>
        <span className="px-2 py-1 bg-green-100 text-green-600 rounded-full">
          Profile setup
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
              <Image
                src="/graphics/svg/placeholder.svg?height=80&width=80"
                alt="James Bully"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold">{therapistData.name}</h2>
            <p className="text-sm text-muted-foreground">
              {therapistData.email}
            </p>
            <p className="text-sm text-muted-foreground">
              {therapistData.phone}
            </p>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardContent className="p-6">
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-4">
                AREA OF EXPERTISE ({therapistData.expertise.length})
              </h3>
              <div className="flex flex-wrap gap-2">
                {therapistData.expertise.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-4">
                AREA OF SPECIALTIES ({therapistData.specialties.length})
              </h3>
              <div className="flex flex-wrap gap-2">
                {therapistData.specialties.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {steps.map((step, index) => {
          const isCompleted = completedSteps.includes(index);
          const isActive = activeStep === index;
          const isUpcoming = index > activeStep;

          return (
            <Card
              key={step.id}
              className={`relative ${isActive ? "ring-2 ring-green-600" : ""}`}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-2">
                  {isCompleted ? (
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                  ) : (
                    <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-gray-100">
                      <span className="text-xs">{index + 1}</span>
                    </div>
                  )}
                  <div>
                    <h3 className="font-medium">{step.title}</h3>
                    {step.id === "professional" && (
                      <p className="text-xs text-muted-foreground">
                        Ensure that all information aligns with the uploaded
                        supporting documents
                      </p>
                    )}
                    {step.id === "educational" && (
                      <p className="text-xs text-muted-foreground">
                        Verify the educational certifications, ensuring
                        consistency with the provided documents.
                      </p>
                    )}
                    {step.id === "identity" && (
                      <p className="text-xs text-muted-foreground">
                        Confirm personal details is consistent with the uploaded
                        identification.
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Tabs value={steps[activeStep].id} onValueChange={handleTabChange}>
        <TabsContent value="professional">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-6">USER INFORMATION</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      Full name
                    </div>
                    <div className="font-medium">{therapistData.name}</div>
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      Issuing authority
                    </div>
                    <div className="font-medium">
                      {therapistData.professional.issuingAuthority}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      Licence number
                    </div>
                    <div className="font-medium">
                      {therapistData.professional.licenseNumber}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      Years of experience
                    </div>
                    <div className="font-medium">
                      {therapistData.professional.yearsOfExperience}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="relative">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-6">
                    UPLOADED DOCUMENT
                  </h3>
                  <div className="relative">
                    <div className="aspect-[16/10] overflow-hidden rounded-md">
                      <Image
                        src="/graphics/svg/placeholder.svg?height=300&width=500"
                        alt="Professional License"
                        width={500}
                        height={300}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute bottom-2 right-2 h-8 w-8 rounded-full bg-white shadow-md"
                    >
                      <Search className="h-4 w-4" />
                      <span className="sr-only">Zoom</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="flex flex-col items-center bg-white rounded-md shadow-md p-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 px-2 text-xs"
                  >
                    Compare
                  </Button>
                  <div className="flex flex-col items-center">
                    <ArrowLeft className="h-4 w-4 rotate-90" />
                    <ArrowLeft className="h-4 w-4 -rotate-90" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="educational">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-6">USER INFORMATION</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      Full name
                    </div>
                    <div className="font-medium">{therapistData.name}</div>
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      Highest degree earned
                    </div>
                    <div className="font-medium">
                      {therapistData.education.highestDegree}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      Institution name
                    </div>
                    <div className="font-medium">
                      {therapistData.education.institution}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="relative">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-6">
                    UPLOADED DOCUMENT
                  </h3>
                  <div className="relative">
                    <div className="aspect-[16/10] overflow-hidden rounded-md">
                      <Image
                        src="/graphics/svg/placeholder.svg?height=300&width=500"
                        alt="Educational Certificate"
                        width={500}
                        height={300}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute bottom-2 right-2 h-8 w-8 rounded-full bg-white shadow-md"
                    >
                      <Search className="h-4 w-4" />
                      <span className="sr-only">Zoom</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="flex flex-col items-center bg-white rounded-md shadow-md p-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 px-2 text-xs"
                  >
                    Compare
                  </Button>
                  <div className="flex flex-col items-center">
                    <ArrowLeft className="h-4 w-4 rotate-90" />
                    <ArrowLeft className="h-4 w-4 -rotate-90" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="identity">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-6">USER INFORMATION</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      Full name
                    </div>
                    <div className="font-medium">{therapistData.name}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        Sex
                      </div>
                      <div className="font-medium">
                        {therapistData.identity.sex}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        Date of birth
                      </div>
                      <div className="font-medium">
                        {therapistData.identity.dateOfBirth}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        ID type
                      </div>
                      <div className="font-medium">
                        {therapistData.identity.idType}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        Country of residence
                      </div>
                      <div className="font-medium">
                        {therapistData.identity.countryOfResidence}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="relative">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-6">
                    UPLOADED DOCUMENT
                  </h3>
                  <div className="relative">
                    <div className="aspect-[16/10] overflow-hidden rounded-md">
                      <Image
                        src="/graphics/svg/placeholder.svg?height=300&width=500"
                        alt="National ID"
                        width={500}
                        height={300}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute bottom-2 right-2 h-8 w-8 rounded-full bg-white shadow-md"
                    >
                      <Search className="h-4 w-4" />
                      <span className="sr-only">Zoom</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="flex flex-col items-center bg-white rounded-md shadow-md p-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 px-2 text-xs"
                  >
                    Compare
                  </Button>
                  <div className="flex flex-col items-center">
                    <ArrowLeft className="h-4 w-4 rotate-90" />
                    <ArrowLeft className="h-4 w-4 -rotate-90" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end gap-4 mt-4">
        <Button variant="outline">Reject</Button>
        <Button onClick={handleApprove}>Approve</Button>
      </div>
    </div>
  );
}
