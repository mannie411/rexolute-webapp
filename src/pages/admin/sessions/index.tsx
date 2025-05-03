"use client";

import { useState } from "react";
import type { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import DashboardLayout from "@/components/layout/AdminLayout";
import { Calendar } from "lucide-react";

interface Task {
  id: string;
  title: string;
  type: string;
  date: string;
  time: string;
  patient: string;
  therapist: string;
}

interface DashboardProps {
  pendingTasks: Task[];
}

export default function Dashboard({ pendingTasks }: DashboardProps) {
  const [activeTab, setActiveTab] = useState("reassigned");

  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard | Rexolute</title>
      </Head>

      <div className="py-6 px-8 md:max-w-[80%]">
        <h1 className="text-2xl font-bold text-gray-900">Pending Task (13)</h1>
        <p className="mt-1 text-sm text-gray-500">
          Below are the list of pending task needing your attention.
        </p>

        <div className="mt-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab("reassigned")}
                className={`${
                  activeTab === "reassigned"
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Reassigned sessions (2)
              </button>
              <button
                onClick={() => setActiveTab("profile")}
                className={`${
                  activeTab === "profile"
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Profile set-up (10)
              </button>
              <button
                onClick={() => setActiveTab("student")}
                className={`${
                  activeTab === "student"
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Student registration (1)
              </button>
            </nav>
          </div>

          <div className="mt-6 space-y-6">
            {pendingTasks.map((task) => (
              <div key={task.id} className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-start">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Calendar className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Approve reassigned session by {task.therapist}
                      </h3>
                      <div className="mt-2 flex items-center text-sm text-gray-500 space-x-6">
                        <span>{task.date}</span>
                        <span>{task.time}</span>
                        <span>{task.patient}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">{task.date}</div>
                    <Link
                      href={`/dashboard/sessions/reassign/${task.id}`}
                      className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      View details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
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

  // Mock data - in a real app, you would fetch this from your API
  const pendingTasks = [
    {
      id: "1",
      title: "Approve reassigned session",
      type: "reassigned",
      date: "Wed, 16th May, 2024",
      time: "09:00AM - 09:30AM",
      patient: "John Samuel Tara",
      therapist: "Rita Dusee",
    },
    {
      id: "2",
      title: "Approve reassigned session",
      type: "reassigned",
      date: "Wed, 16th May, 2024",
      time: "09:00AM - 09:30AM",
      patient: "Sivebe Dulie",
      therapist: "Grace Wellington",
    },
  ];

  return {
    props: {
      pendingTasks,
    },
  };
};
