export const appName = "Rexolute";

export const pendingSessions = [
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

export const pendingStudents = [{}];

export const pendingTherapists = [
  {
    id: 1,
    name: "Sarah Dream",
    email: "getcircoles@gmail.com",
    date: "17th May, 2025",
    gender: "Female",
    degree: "M.sc",
    experience: "10 years",
    profileImg: "avatar1.png",
  },
  {
    id: 2,
    name: "Elizabeth Trust",
    email: "cmdr@gmail.com",
    date: "17th May, 2025",
    gender: "Female",
    degree: "M.sc",
    experience: "8 years",
    profileImg: "avatar2.png",
  },
];

export const therapistApprovalSteps = [
  {
    id: "professional",
    title: "Validate professional info.",
    heading: "Approve professional details",
    description:
      "Ensure that all information aligns with the uploaded supporting documents",
  },
  {
    id: "educational",
    title: "Validate educational info.",
    heading: "Approve educational details",
    description:
      "Verify the educational certifications, ensuring consistency with the provided documents.",
  },
  {
    id: "identity",
    title: "Validate identity info.",
    heading: "Approve identity details",
    description:
      "Confirm personal details is consistent with the uploaded identification.",
  },
];
