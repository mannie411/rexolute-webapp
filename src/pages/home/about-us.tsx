import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { Head } from "@/components/shared";
import { HomeLayout } from "@/components/layout";

// Using a more detailed star icon: MdStarRate (from react-icons/md)
import { MdStarRate } from "react-icons/md";

const Page = () => {
  const router = useRouter();

  return (
    <Fragment>
      <div className="max-w-3xl mx-auto text-center py-12 px-6">
  <h1 className="text-5xl font-extrabold mb-6">About Rexolute</h1>
  <p className="text-gray-700 leading-relaxed space-y-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.<br />
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.<br />
    Excepteur sint occaecat cupidatat non proident, sunt in culpa.
  </p>

  
</div>
<img 
    src="/pictures/about1.png" 
    alt="About Rexolute" 
    className="w-full rounded-lg shadow-lg"
  />

  <p className="text-gray-700 leading-relaxed text-right mb-16 mt-16">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.<br />
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.<br />
    Excepteur sint occaecat cupidatat non proident, sunt in culpa.<br />
    Officia deserunt mollit anim id est laborum.
  </p>

   <div className="w-screen bg-green-600 text-center relative left-1/2 right-1/2 -ml-[50vw] px-6 py-16">
   <h1 className="text-5xl text-white font-extrabold mb-6">Executive Leadership</h1>
     <p className="text-white-50 leading-relaxed space-y-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
    </p>

    
    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
      {/* Team Member 1 */}
      <div className="text-center">
        <img
          src="/pictures/executives/whatever-happens-im-ready-to-face-it.jpg"
          alt="Team Member 1"
          className="w-45 h-45 rounded-md object-cover mx-auto mb-4"
        />
        <p className="text-white font-semibold">Dr. Jane Smith</p>
        <p className="text-gray-300 text-sm">Lead Therapist</p>
      </div>

      {/* Team Member 2 */}
      <div className="text-center">
        <img
          src="/pictures/executives/well-im-not-in-the-mood-for-any-jokes-today.jpg"
          alt="Team Member 2"
          className="w-45 h-45 rounded-md object-cover mx-auto mb-4"
        />
        <p className="text-white font-semibold">Mr. John Doe</p>
        <p className="text-gray-300 text-sm">Cognitive Specialist</p>
      </div>

      {/* Team Member 3 */}
      <div className="text-center">
        <img
          src="/pictures/executives/ready-for-a-date.jpg"
          alt="Team Member 3"
          className="w-45 h-45 rounded-md object-cover mx-auto mb-4"
        />
        <p className="text-white font-semibold">Dr. Emily Rose</p>
        <p className="text-gray-300 text-sm">Child Psychologist</p>
      </div>

      {/* Team Member 4 */}
      <div className="text-center">
        <img
          src="/pictures/executives/looking-at-the-day-ahead.jpg"
          alt="Team Member 4"
          className="w-45 h-45 rounded-md object-cover mx-auto mb-4"
        />
        <p className="text-white font-semibold">Mr. Mark Lee</p>
        <p className="text-gray-300 text-sm">Family Counselor</p>
      </div>
    </div>
    </div>
  

    </Fragment>
  );
};

export default Page;
