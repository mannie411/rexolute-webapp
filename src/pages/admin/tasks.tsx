import React, { Fragment, useEffect, useState } from "react";
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
import { ArrowRight, MoreVertical } from "lucide-react";
import {
  pendingSessions,
  pendingStudents,
  pendingTherapists,
} from "@/lib/constants";
import { parseAxiosError, setupAxiosInterceptors } from "@/lib/api";
import { useAxiosInterceptors } from "@/hooks";
import { ResponseList, TherapistProfile } from "@/types";
import { useRouter } from "next/router";
import { useSharedData } from "@/hooks/use-layout";
import { DateTimeFormatter as datetime } from "@/lib/utils";

const Page = (props: any) => {
  const router = useRouter();
  const { setData, setIsLoading: setIsLoadingData } = useSharedData();
  const [currtTab, setCurrTab] = useState<string>("therapists");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [newTherapists, setNewTherapists] = useState<any[]>([]);
  const [therapySessions, setTherapySessions] = useState<[]>(
    props?.pendingSessions ?? []
  );
  const [newStudents, setNewStudents] = useState<[]>(
    props?.pendingStudents ?? []
  );

  const api = useAxiosInterceptors();

  const fetchNewTherapist = async () => {
    try {
      setIsLoading(true);
      const res = await api.get(
        "/users/profiles?profileType=therapists&where=is_approved:false,is_onboarded:true"
      );
      const { data } = res.data;
      if (data) {
        console.log(data);
        const { items } = data as ResponseList;
        setNewTherapists(items);
      }
      setIsLoading(false);
    } catch (error) {
      const e = parseAxiosError(error);
      console.log(e);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNewTherapist();
    return () => {};
  }, []);

  const goto = (path: string, data: any) => {
    setData(data);
    setIsLoadingData(true);
    router.push(path);
  };

  console.log("task:", props);
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

          {/* Reassign Session */}
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
                  {newStudents.map((therapist: any) => (
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
                        <Link
                          href="/admin/therapists/verification/profile-setup"
                          aria-label="View details"
                          title="View details"
                        >
                          <ArrowRight />
                        </Link>
                        {/* <DropdownMenu>
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
                        </DropdownMenu> */}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          {/*  New Therapist */}
          <TabsContent value="therapists">
            {!isLoading && (
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
                    {newTherapists.map((therapist: TherapistProfile) => (
                      <TableRow key={therapist.user_id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 overflow-hidden rounded-full">
                              <Image
                                src={
                                  therapist.profile_img ??
                                  "/graphics/svg/placeholder.svg"
                                }
                                alt={therapist.name}
                                width={40}
                                height={40}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div>
                              <div className="font-medium">
                                {therapist.name}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {therapist.email}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          {datetime.formatWithPattern(
                            datetime.toDateTime(therapist.dob),
                            "D MMM, YYYY"
                          )}
                        </TableCell>
                        <TableCell>{therapist.gender}</TableCell>
                        <TableCell>{therapist.doc.degree_type}</TableCell>
                        <TableCell>{therapist.doc.years_exp}</TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            onClick={() =>
                              goto(
                                "/admin/therapists/verification/profile-setup",
                                therapist
                              )
                            }
                          >
                            <ArrowRight />
                          </Button>
                          {/* <Link
                            href="/admin/therapists/verification/profile-setup"
                            aria-label="View details"
                            title="View details"
                          >
                          </Link> */}
                          {/* <DropdownMenu>
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
                        </DropdownMenu> */}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </TabsContent>

          {/* New Students */}
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
                  {newStudents.map((therapist: any) => (
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
                        <Link
                          href="/admin/therapists/verification/profile-setup"
                          aria-label="View details"
                          title="View details"
                        >
                          <ArrowRight />
                        </Link>
                        {/* <DropdownMenu>
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
                        </DropdownMenu> */}
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
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      pendingSessions,
      pendingStudents,
      pendingTherapists,
    },
  };
};

export default Page;
