import Link from "next/link";
import { CheckCircle, Clock, AlertCircle } from "lucide-react";
import { AdminLayout as DashboardLayout } from "@/components/layout/";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Fragment } from "react";
import { Head } from "@/components/shared";

const Page = () => {
  return (
    <Fragment>
      <Head title="Therapist verification" />

      <div className="flex flex-col gap-6 p-4">
        <div>
          <h1 className="text-2xl font-semibold mb-2">Document Verification</h1>
          <p className="text-muted-foreground">
            Verify therapist documents and credentials to ensure compliance with
            platform standards.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between">
                Identity Verification
                <CheckCircle className="h-5 w-5 text-green-600" />
              </CardTitle>
              <CardDescription>Verify identity documents</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Verify government-issued ID documents to confirm identity.
              </p>
              <Link href="/therapist/verification/identity">
                <Button className="w-full">View Details</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between">
                Professional Certification
                <Clock className="h-5 w-5 text-amber-600" />
              </CardTitle>
              <CardDescription>Verify professional licenses</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Verify professional licenses and certifications from issuing
                authorities.
              </p>
              <Link href="/therapist/verification/professional">
                <Button className="w-full">View Details</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between">
                Educational Credentials
                <AlertCircle className="h-5 w-5 text-red-600" />
              </CardTitle>
              <CardDescription>Verify educational background</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Verify degrees, diplomas, and educational certificates.
              </p>
              <Link href="/therapist/verification/education">
                <Button className="w-full">View Details</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Verification Progress</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium">Identity Verification</p>
                  <p className="text-sm text-muted-foreground">
                    Completed on May 15, 2023
                  </p>
                </div>
              </div>
              <Link href="/therapist/verification/identity">
                <Button variant="outline">View</Button>
              </Link>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-amber-600" />
                <div>
                  <p className="font-medium">Professional Certification</p>
                  <p className="text-sm text-muted-foreground">In progress</p>
                </div>
              </div>
              <Link href="/therapist/verification/professional">
                <Button variant="outline">Continue</Button>
              </Link>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <AlertCircle className="h-5 w-5 text-red-600" />
                <div>
                  <p className="font-medium">Educational Credentials</p>
                  <p className="text-sm text-muted-foreground">Not started</p>
                </div>
              </div>
              <Link href="/therapist/verification/education">
                <Button variant="outline">Start</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Page;
