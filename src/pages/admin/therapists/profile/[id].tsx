"use client";

import type { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import DashboardLayout from "@/components/layout/AdminLayout";
import { ChevronLeft, ZoomIn } from "lucide-react";

interface TherapistProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  expertise: string[];
  specialties: string[];
  fullName: string;
  issuingAuthority: string;
  licenseNumber: string;
  yearsOfExperience: number;
  documentUrl: string;
}

interface ProfileReviewProps {
  profile: TherapistProfile;
}

export default function ProfileReview({ profile }: ProfileReviewProps) {
  const [activeStep, setActiveStep] = useState("professional");

  const handleApprove = () => {
    // In a real app, you would call your API to approve the profile
    alert("Profile approved successfully!");
  };

  const handleReject = () => {
    // In a real app, you would call your API to reject the profile
    alert("Profile rejected!");
  };

  return (
    <DashboardLayout>
      <Head>
        <title>Review Profile Setup | Rexolute</title>
      </Head>

      <div className="py-6 px-8">
        <div className="flex items-center mb-6">
          <Link
            href="/dashboard"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            <span>Review profile setup</span>
          </Link>
        </div>

        <div className="flex space-x-2 text-sm mb-6">
          <Link href="/dashboard" className="text-gray-500 hover:text-gray-700">
            Pending task
          </Link>
          <span className="text-gray-500">/</span>
          <span className="text-green-600">Profile setup</span>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 h-12 w-12 bg-green-100 rounded-md flex items-center justify-center text-green-600 font-bold">
              {profile.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-bold text-gray-900">
                {profile.name}
              </h2>
              <p className="text-gray-600">{profile.email}</p>
              <p className="text-gray-600">{profile.phone}</p>
            </div>
            <div className="ml-auto">
              <p className="text-sm text-gray-500 text-right">
                Wed, 16th May, 2024
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                AREA OF EXPERTISE ({profile.expertise.length})
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.expertise.map((item, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                AREA OF SPECIALTIES ({profile.specialties.length})
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.specialties.map((item, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div
              className={`border rounded-lg p-4 ${
                activeStep === "professional"
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200"
              }`}
              onClick={() => setActiveStep("professional")}
            >
              <div className="flex items-center">
                <div
                  className={`h-5 w-5 rounded-full border ${
                    activeStep === "professional"
                      ? "border-green-500 bg-green-500"
                      : "border-gray-300"
                  } flex items-center justify-center mr-3`}
                >
                  {activeStep === "professional" && (
                    <svg
                      className="h-3 w-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <h3 className="text-sm font-medium">
                  Validate professional info.
                </h3>
              </div>
              <p className="mt-2 text-xs text-gray-500 ml-8">
                Ensure that all information aligns with the uploaded supporting
                documents
              </p>
            </div>

            <div
              className={`border rounded-lg p-4 ${
                activeStep === "educational"
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200"
              }`}
              onClick={() => setActiveStep("educational")}
            >
              <div className="flex items-center">
                <div
                  className={`h-5 w-5 rounded-full border ${
                    activeStep === "educational"
                      ? "border-green-500 bg-green-500"
                      : "border-gray-300"
                  } flex items-center justify-center mr-3`}
                >
                  {activeStep === "educational" && (
                    <svg
                      className="h-3 w-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <h3 className="text-sm font-medium">
                  Validate educational info.
                </h3>
              </div>
              <p className="mt-2 text-xs text-gray-500 ml-8">
                Verify the educational certifications, ensuring consistency with
                the provided documents.
              </p>
            </div>

            <div
              className={`border rounded-lg p-4 ${
                activeStep === "identity"
                  ? "border-green-500 bg-green-50"
                  : "border-gray-200"
              }`}
              onClick={() => setActiveStep("identity")}
            >
              <div className="flex items-center">
                <div
                  className={`h-5 w-5 rounded-full border ${
                    activeStep === "identity"
                      ? "border-green-500 bg-green-500"
                      : "border-gray-300"
                  } flex items-center justify-center mr-3`}
                >
                  {activeStep === "identity" && (
                    <svg
                      className="h-3 w-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <h3 className="text-sm font-medium">Validate identity info.</h3>
              </div>
              <p className="mt-2 text-xs text-gray-500 ml-8">
                Confirm personal details is consistent with the uploaded
                identification.
              </p>
            </div>
          </div>

          {activeStep === "professional" && (
            <>
              <h2 className="text-lg font-semibold mb-4">
                Validate professional information
              </h2>

              <div className="grid grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                    USER INFORMATION
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <p className="text-xs text-gray-500">Full name</p>
                      <p className="text-sm font-medium text-green-600">
                        {profile.fullName}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">Issuing authority</p>
                      <p className="text-sm font-medium text-green-600">
                        {profile.issuingAuthority}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">Licence number</p>
                      <p className="text-sm font-medium text-green-600">
                        {profile.licenseNumber}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">
                        Years of experience
                      </p>
                      <p className="text-sm font-medium text-green-600">
                        {profile.yearsOfExperience} years
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                    UPLOADED DOCUMENT
                  </h3>

                  <div className="relative h-80 bg-white border rounded-lg overflow-hidden">
                    <img
                      src={
                        profile.documentUrl ||
                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Profile%20set%20up-PEzwow7o2bs1S6ZCdlJnG2eeQxF1vm.png"
                      }
                      alt="License document"
                      className="w-full h-full object-contain"
                    />
                    <button className="absolute bottom-2 right-2 p-2 bg-white rounded-full shadow">
                      <ZoomIn className="h-5 w-5 text-gray-500" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-end space-x-4">
                <button
                  onClick={handleReject}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Reject
                </button>
                <button
                  onClick={handleApprove}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Approve
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/login",
  //       permanent: false,
  //     },
  //   };
  // }

  const { id } = context.params as { id: string };

  // Mock data - in a real app, you would fetch this from your API
  const profile = {
    id,
    name: "James Bully",
    email: "Quotientspecialist@gmail.com",
    phone: "08105201636",
    expertise: ["Anxiety", "Personality disorder"],
    specialties: ["Psychiatry", "Guidance and counselling"],
    fullName: "James Bully",
    issuingAuthority: "Therapist board",
    licenseNumber: "124563780",
    yearsOfExperience: 5,
    documentUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Profile%20set%20up-PEzwow7o2bs1S6ZCdlJnG2eeQxF1vm.png",
  };

  return {
    props: {
      profile,
    },
  };
};
