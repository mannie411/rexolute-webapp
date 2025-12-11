import { Fragment, useEffect, useState } from "react";
import type { GetServerSideProps } from "next";
import { Head } from "@/components/shared";
import dynamic from "next/dynamic";
import { DetailsMode } from "@/types";

const SessionDetails = dynamic(
  () => import("@/components/admin/sessions/details")
);
const SessionTherapist = dynamic(
  () => import("@/components/admin/sessions/list")
);

interface Therapist {
  id: string;
  name: string;
  profileImg: string;
  role: string;
  experience: number;
  specialty: number;
  rating: number;
}

interface SessionSlugProps {
  currentRoute: string | null;
  query: any;
  title: string;
  therapists: Therapist[];
}

const Page = ({ currentRoute, query, therapists, title }: SessionSlugProps) => {
  const [detailsMode, setDetailsMode] = useState<DetailsMode>("default");

  useEffect(() => {
    if (currentRoute === "details" && query.id && query.mode) {
      setDetailsMode(query.mode);
    }

    return () => {};
  }, [query]);

  return (
    <Fragment>
      <Head title={title} />
      {currentRoute === "details" && <SessionDetails mode={detailsMode} />}
      {/* <div>Route: {currentRoute || "Default/List"}</div>
      {currentRoute === "therapists" && (
        <div>
          <h2>Therapists</h2>
          <ul>
            {therapists.map((t) => (
              <li key={t.id}>{t.name}</li>
            ))}
          </ul>
        </div>
      )} */}
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const slug = query.slug as string[] | undefined;
  const validRoutes = ["details", "list", "therapists"];
  let currentRoute: string | null = null;
  let title: string = "Total session";

  if (slug && slug.length > 0 && validRoutes.includes(slug[0])) {
    currentRoute = slug[0];

    switch (currentRoute) {
      case "details":
        title = "Session Details";
        break;
      case "therapists":
        title = "Availble Therapists";
        break;
    }
  }
  const therapists: Therapist[] = [
    {
      id: "1",
      name: "John Samuel Tara",
      profileImg: "/graphics/raster/avatar3.png",
      role: "Psychologist (LHCH)",
      experience: 5,
      specialty: 7,
      rating: 5.0,
    },
    {
      id: "2",
      name: "Dr. Joseph Brostito",
      profileImg: "/graphics/raster/avatar4.png",
      role: "Relationship therapist",
      experience: 7,
      specialty: 8,
      rating: 4.5,
    },
    {
      id: "3",
      name: "Dr. Joseph Brostito",
      profileImg: "/graphics/raster/avatar4.png",

      role: "Trauma psychologist",
      experience: 7,
      specialty: 8,
      rating: 4.5,
    },
    {
      id: "4",
      name: "John Samuel Tara",
      profileImg: "/graphics/raster/avatar5.png",
      role: "Psychologist (LHCH)",
      experience: 5,
      specialty: 7,
      rating: 5.0,
    },
    {
      id: "5",
      name: "Dr. Joseph Brostito",
      profileImg: "/graphics/raster/avatar6.png",
      role: "Relationship therapist",
      experience: 7,
      specialty: 8,
      rating: 4.5,
    },
    {
      id: "6",
      name: "Dr. Joseph Brostito",
      profileImg: "/graphics/raster/avatar7.png",
      role: "Trauma psychologist",
      experience: 7,
      specialty: 8,
      rating: 4.5,
    },
  ];

  return {
    props: {
      currentRoute,
      query,
      therapists,
      title,
    },
  };
};

export default Page;
