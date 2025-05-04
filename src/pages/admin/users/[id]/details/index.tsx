import { ArrowLeft, Calendar, Check, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { DashboardNav } from "../../../dashboard/dashboard-nav"
import { DashboardHeader } from "../../../dashboard/dashboard-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function UserDetailsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="flex flex-1">
        <aside className="hidden w-[240px] flex-col border-r bg-white lg:flex">
          <div className="flex h-14 items-center border-b px-4">
            <Link href="/" className="flex items-center gap-2 font-semibold text-lg text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>
              <span>Resolute</span>
            </Link>
          </div>
          <DashboardNav />
        </aside>
        <div className="flex flex-1 flex-col">
          <DashboardHeader />
          <main className="flex-1 p-6">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <Link href="/users">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                </Link>
                <h1 className="text-2xl font-semibold">View user details</h1>
              </div>

              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/users">User management</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#" className="text-green-600">
                      View details
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <Card className="md:col-span-1">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600 text-xl mb-4">
                      EA
                    </div>
                    <h2 className="text-2xl font-semibold mb-2">Ekene Dulle</h2>
                    <div className="flex items-center gap-1 text-green-600">
                      <span>Active</span>
                      <Check className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">PHONE NUMBER</div>
                        <div>08142056773</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">EMAIL</div>
                        <div>@gmail.com</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">DOB</div>
                        <div>12th Jan, 1998</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">GENDER</div>
                        <div>Male</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">REGISTRATION DATE</div>
                        <div>02-2-2025</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">EXPIRY DATE</div>
                        <div>02-2-2026</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Tabs defaultValue="upcoming">
                <TabsList>
                  <TabsTrigger value="upcoming">Upcoming sessions (2)</TabsTrigger>
                  <TabsTrigger value="completed">Completed session (10)</TabsTrigger>
                </TabsList>
                <TabsContent value="upcoming" className="pt-4">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <SessionCard />
                    <SessionCard />
                  </div>
                </TabsContent>
                <TabsContent value="completed" className="pt-4">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Completed sessions would go here */}
                    <div className="text-muted-foreground">No completed sessions to display.</div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

function SessionCard() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-12 w-12 overflow-hidden rounded-full">
            <Image
              src="/placeholder.svg?height=48&width=48"
              alt="Therapist"
              width={48}
              height={48}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <div className="font-semibold">John Samuel Tara</div>
            <div className="text-sm text-muted-foreground">Psychologist (LHCH)</div>
          </div>
        </div>
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-green-600" />
            <span>Wed, 16th May, 2024</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 flex items-center justify-center text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <span>09:00AM - 09:30AM</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-green-600" />
            <span>Text</span>
          </div>
        </div>
        <Button variant="outline" className="w-full">
          View details
        </Button>
      </CardContent>
    </Card>
  )
}
