import React, { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getSession } from "next-auth/react";
import { GetServerSideProps } from "next/types";
import { Head } from "@/components/shared";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui";
import { MoreVertical } from "lucide-react";
import {
  pendingSessions,
  pendingStudents,
  pendingTherapists,
} from "@/lib/constants";

const Page = () => {
  const [currtTab, setCurrTab] = useState<string>("therapists");
  return (
    <Fragment>
      <Head title="Pending Tasks" />

      <div className="px-6">
        <div className="py-6 md:max-w-[80%]">
          <h1 className="text-2xl font-bold text-gray-900">
            Pending Task (13)
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Below are the list of pending task needing your attention.
          </p>
        </div>

        <Tabs
          defaultValue="therapists"
          value={currtTab}
          onValueChange={(val) => setCurrTab(val)}
        >
          <TabsList className="w-full max-w-md grid grid-cols-3">
            <TabsTrigger value="sessions">Reassigned sessions </TabsTrigger>
            <TabsTrigger value="therapists">Profile set-up </TabsTrigger>
            <TabsTrigger value="students">Student registration </TabsTrigger>
          </TabsList>
          <TabsContent value="sessions">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Therapist name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Gender</TableHead>
                    <TableHead>Highest degree</TableHead>
                    <TableHead>Years of experience</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingTherapists.map((therapist) => (
                    <TableRow key={therapist.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 overflow-hidden rounded-full">
                            <Image
                              src="/graphics/svg/placeholder.svg?height=40&width=40"
                              alt={therapist.name}
                              width={40}
                              height={40}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-medium">{therapist.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {therapist.email}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{therapist.date}</TableCell>
                      <TableCell>{therapist.gender}</TableCell>
                      <TableCell>{therapist.degree}</TableCell>
                      <TableCell>{therapist.experience}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Link href="/admin/therapists/verification/profile-setup">
                                View details
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>Reject</DropdownMenuItem>
                            <DropdownMenuItem>Approve</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          <TabsContent value="therapists">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Therapist name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Gender</TableHead>
                    <TableHead>Highest degree</TableHead>
                    <TableHead>Years of experience</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingTherapists.map((therapist) => (
                    <TableRow key={therapist.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 overflow-hidden rounded-full">
                            <Image
                              src={`/graphics/raster/${therapist.profileImg}?height=40&width=40`}
                              alt={therapist.name}
                              width={40}
                              height={40}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-medium">{therapist.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {therapist.email}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{therapist.date}</TableCell>
                      <TableCell>{therapist.gender}</TableCell>
                      <TableCell>{therapist.degree}</TableCell>
                      <TableCell>{therapist.experience}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Link href="/admin/therapists/verification/profile-setup">
                                View details
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>Reject</DropdownMenuItem>
                            <DropdownMenuItem>Approve</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          <TabsContent value="students">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Therapist name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Gender</TableHead>
                    <TableHead>Highest degree</TableHead>
                    <TableHead>Years of experience</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingTherapists.map((therapist) => (
                    <TableRow key={therapist.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 overflow-hidden rounded-full">
                            <Image
                              src="/graphics/svg/placeholder.svg?height=40&width=40"
                              alt={therapist.name}
                              width={40}
                              height={40}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-medium">{therapist.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {therapist.email}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{therapist.date}</TableCell>
                      <TableCell>{therapist.gender}</TableCell>
                      <TableCell>{therapist.degree}</TableCell>
                      <TableCell>{therapist.experience}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Link href="/admin/therapists/verification/profile-setup">
                                View details
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>Reject</DropdownMenuItem>
                            <DropdownMenuItem>Approve</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const session = await getSession(context);

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/login",
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: {
      pendingSessions,
      pendingStudents,
      pendingTherapists,
    },
  };
};

export default Page;
