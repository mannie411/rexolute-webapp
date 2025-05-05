"use client";

import { Fragment, useState } from "react";
import { getSession } from "next-auth/react";
import Link from "next/link";
import type { GetServerSideProps } from "next";
import { Head } from "@/components/shared";

const Page = ({}) => {
  const [activeTab, setActiveTab] = useState("reassigned");

  return (
    <Fragment>
      <Head title="Settings" />
      <div className="flex min-h-screen w-full flex-col px-6 py-4">
        {/* Page content */}
        <h1>Settings</h1>
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

export default Page;
