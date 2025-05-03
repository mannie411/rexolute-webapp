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

export default function Page({ pendingTasks }: DashboardProps) {
  const [activeTab, setActiveTab] = useState("reassigned");

  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard | Rexolute</title>
      </Head>
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
