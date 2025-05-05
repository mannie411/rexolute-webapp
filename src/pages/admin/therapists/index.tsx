import React, { Fragment } from "react";
import { Calendar, ChevronDown, Download, Filter, Search } from "lucide-react";
import { Head } from "@/components/shared";
import { UserTable, UserTabs } from "@/components/admin/dashboard";
import { Button, Input, Tabs, TabsList, TabsTrigger } from "@/components/ui";
import { TherapistStatsCards } from "@/components/admin/dashboard";
import { TabsContent } from "@radix-ui/react-tabs";

const Page = () => {
  return (
    <Fragment>
      <Head title="Therapist mgt" />

      <div className="flex flex-col gap-6 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Therapist management</h1>
            <p className="text-sm text-muted-foreground">
              Keep track of therapist and their activities
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="gap-2">
              <Calendar className="h-4 w-4" />
              Jan 6, 2022 - Jan 13, 2022
              <ChevronDown className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <TherapistStatsCards />
        <Tabs defaultValue="active">
          <TabsList className="w-full max-w-md grid grid-cols-3">
            <TabsTrigger value="active">Active Therapist</TabsTrigger>
            <TabsTrigger value="inactive">Inactive Therapist</TabsTrigger>
            <TabsTrigger value="suspended">Suspended Therapist</TabsTrigger>
          </TabsList>

          <TabsContent value="active">
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Student users list</h2>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search here..."
                      className="pl-8 w-[300px]"
                    />
                  </div>
                  <Button variant="outline" className="gap-2">
                    <Filter className="h-4 w-4" />
                    Filters
                  </Button>
                </div>
              </div>

              <UserTable />
              <div className="flex items-center justify-between">
                <Button variant="outline">Previous</Button>
                <div className="text-sm">Page 1 of 10</div>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="inactive">
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Student users list</h2>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search here..."
                      className="pl-8 w-[300px]"
                    />
                  </div>
                  <Button variant="outline" className="gap-2">
                    <Filter className="h-4 w-4" />
                    Filters
                  </Button>
                </div>
              </div>

              <UserTable />
              <div className="flex items-center justify-between">
                <Button variant="outline">Previous</Button>
                <div className="text-sm">Page 1 of 10</div>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="suspended">
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Student users list</h2>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search here..."
                      className="pl-8 w-[300px]"
                    />
                  </div>
                  <Button variant="outline" className="gap-2">
                    <Filter className="h-4 w-4" />
                    Filters
                  </Button>
                </div>
              </div>

              <UserTable />
              <div className="flex items-center justify-between">
                <Button variant="outline">Previous</Button>
                <div className="text-sm">Page 1 of 10</div>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Fragment>
  );
};

export default Page;
