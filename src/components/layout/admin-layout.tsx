"use client";

import React from "react";
import type { FC } from "react";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import {
  LayoutDashboard,
  Users,
  UserCog,
  Handshake,
  Calendar,
  BarChart2,
  Settings,
  Bell,
  Search,
} from "lucide-react";
import { LayoutProps } from "@/types";
import { ThemeProvider } from "../shared/theme-provider";
import {
  Toaster,
  Sidebar,
  SidebarProvider,
  SidebarContent,
  SidebarFooter,
  SidebarTrigger,
} from "../ui";
import { MenuProps } from "@/types";
import { logoGreen } from "@/assets/svg";

const Layout: FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  // const { data: session } = useSession();

  const navigation: MenuProps[] = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Users management", path: "/dashboard/users", icon: Users },
    { name: "Therapist mgt.", path: "/dashboard/therapists", icon: UserCog },
    {
      name: "Partnership mgt.",
      path: "/dashboard/partnerships",
      icon: Handshake,
    },
    { name: "Session mgt.", path: "/dashboard/sessions", icon: Calendar },
    { name: "Report & analytics", path: "/dashboard/reports", icon: BarChart2 },
  ];

  const isActive = (path: string) => {
    return router.pathname.startsWith(path);
  };

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider>
        <Sidebar>
          {/* Sidebar */}
          <SidebarContent>
            <div className="w-64 bg-sbGradient border-r border-gray-200">
              <div className="flex items-center p-4">
                <Link href="/dashboard" className="flex items-center">
                  <Image src={logoGreen} alt="Rexolute Logo" />
                </Link>
              </div>

              <div className="p-4">
                <div className="flex items-center mb-4">
                  <div className="flex items-center bg-gray-100 rounded-md p-2 w-full">
                    <span className="text-sm font-medium text-gray-700">
                      Tasks
                    </span>
                    <span className="ml-auto bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">
                      13
                    </span>
                  </div>
                </div>

                <div className="flex items-center mb-8">
                  <div className="flex items-center bg-gray-100 rounded-md p-2 w-full">
                    <span className="text-sm font-medium text-gray-700">
                      Activities
                    </span>
                  </div>
                </div>

                <div className="mb-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    MAIN
                  </p>
                </div>

                <nav className="space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.path}
                      className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                        isActive(item.path)
                          ? "text-gray-900 bg-gray-100"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      <item.icon className="mr-3 h-5 w-5 text-gray-500" />
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <SidebarFooter>
              <SidebarTrigger />
            </SidebarFooter>
          </SidebarContent>
        </Sidebar>
        <div className="flex w-screen h-screen bg-gray-50">
          {/* Main content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Top header */}
            <header className="bg-white border-b border-gray-200">
              <div className="flex items-center justify-between px-6 py-3">
                <div>
                  <h1 className="text-lg font-semibold">
                    Welcome,
                    <div className="text-xl font-bold">
                      {
                        // session?.user?.name ||
                        "Admin"
                      }
                    </div>
                  </h1>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search here..."
                      className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>

                  <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none">
                    <Settings className="h-6 w-6" />
                  </button>

                  <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none">
                    <Bell className="h-6 w-6" />
                  </button>

                  <button
                    className="flex items-center"
                    onClick={() => signOut({ callbackUrl: "/login" })}
                  >
                    <img
                      className="h-8 w-8 rounded-full"
                      src={
                        // session?.user?.image ||
                        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Approve%20prof.%20info..png-rftDchyYv52zz5hQCXZcPdFJboaRBw.jpeg"
                      }
                      alt="User avatar"
                    />
                  </button>
                </div>
              </div>
            </header>

            {/* Page content */}
            <main className="flex-1 overflow-auto bg-gray-50">{children}</main>
          </div>
        </div>
      </SidebarProvider>

      <Toaster />
    </ThemeProvider>
  );
};

export default Layout;
