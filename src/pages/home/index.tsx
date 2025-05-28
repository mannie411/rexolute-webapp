import React, { Fragment } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Head } from "@/components/shared";
import {
  ArrowRight,
  CheckCircle,
  Accessibility,
  Users,
  Calendar,
} from "lucide-react";

const Page = () => {
  const router = useRouter();

  return (
    <Fragment>
      <Head title="Welcome to Rexolute" />

      <section className="min-h-screen w-full grid md:grid-cols-2 px-0 py-12 gap-12 bg-white">
        {/* Left Side */}
        <div className="flex flex-col items-start space-y-6 px-6 md:px-12">
          <p className="text-sm text-gray-700 max-w-md">
            Find professional therapy services online anytime, anywhere.
          </p>

          <h1 className="text-4xl font-extrabold text-gray-800 leading-snug">
            Your Journey To A Better{" "}
            <span className="text-[#b8860b]">Mental Wellness</span> starts here
          </h1>

          <button
            onClick={() => router.push("/contact")}
            className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300"
          >
            Book a therapist <ArrowRight size={20} />
          </button>

          <div className="mb-12 self-start pt-24">
            <Image
              src="/pictures/pic2.jpg"
              alt="Mental Wellness Visual"
              width={500}
              height={400}
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-start text-left px-6 md:px-12">
          <div className="self-start">
            <Image
              src="/pictures/pic1.jpg"
              alt="Therapy Illustration"
              width={600}
              height={400}
              className="object-contain rounded-lg"
            />
          </div>

          <div className="mt-10 w-full">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why therapy is important for you
            </h2>

            <p className="text-sm text-gray-700 mb-6 leading-relaxed">
              Therapy helps you gain clarity and emotional support. <br />
              It equips you with tools to manage stress and anxiety. <br />
              You’re able to break harmful patterns and grow stronger. <br />
              Talking to a therapist builds confidence and peace of mind.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Boosts emotional intelligence",
                "Improves your self-awareness",
                "Helps manage anxiety and trauma",
                "Builds healthier relationships",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 font-semibold"
                >
                  <CheckCircle className="text-[#b8860b]" size={20} />
                  {item}
                </li>
              ))}
            </ul>

            <button
              onClick={() => router.push("/contact")}
              className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300 mb-8"
            >
              Book a therapist <ArrowRight size={20} />
            </button>

            {/* Full Width Image Strip */}
            <div className="w-screen relative -ml-[52vw] left-1/10 mt-12">
              <div className="flex w-full">
                <Image
                  src="/pictures/pic3.png"
                  alt="Visual 1"
                  width={0}
                  height={0}
                  sizes="33vw"
                  className="w-1/3 h-auto object-cover"
                />
                <Image
                  src="/pictures/pic4.png"
                  alt="Visual 2"
                  width={0}
                  height={0}
                  sizes="33vw"
                  className="w-1/3 h-auto object-cover"
                />
                <Image
                  src="/pictures/pic5.png"
                  alt="Visual 3"
                  width={0}
                  height={0}
                  sizes="33vw"
                  className="w-1/3 h-auto object-cover"
                />
              </div>

              {/* Section Below Strip */}
              <div className="mt-12 flex justify-between items-start w-full px-6 flex-wrap gap-8">
                {/* LEFT TEXT SECTION */}
                <div className="max-w-md space-y-6">
                  <div>
                    <h2 className="text-3xl font-extrabold text-gray-800">
                      Why you should choose us
                    </h2>
                    <p className="text-gray-700 text-sm leading-relaxed mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                      Quisquam quidem, voluptatum voluptas facilis soluta!
                    </p>
                  </div>

                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                      <Accessibility className="text-green-600" size={20} />
                      Accessibility
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Access professional therapy services from anywhere.
                    </p>
                  </div>

                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                      <Users className="text-green-600" size={20} />
                      Therapist Network
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Choose from a diverse network of licensed therapists.
                    </p>
                  </div>

                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                      <Calendar className="text-green-600" size={20} />
                      Flexible Scheduling
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Schedule appointments at your convenience. Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>

                <div>
                  <Image
                    src="/pictures/pic6.jpg"
                    alt="Right Side Image"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <div className="w-screen bg-green-600 relative left-1/2 right-1/2 -ml-[50vw] px-6 py-16">
        <div className="text-center mb-14">
          <h2 className="text-white text-4xl font-extrabold mb-3">
            How it works
          </h2>
          <p className="text-white/80 text-base max-w-xl mx-auto">
            Step-by-step guide to using the service:
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start">
          {/* Left Side: Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/pictures/pic8.jpg"
              alt="Therapy session"
              width={400}
              height={200}
              className="w-full h-auto object-cover rounded-xl shadow-md"
            />
          </div>

          {/* Right Side: Vertical Stepper */}
          <div className="w-full md:w-1/2 relative pl-8">
            <div className="absolute left-4 top-4 bottom-0 w-1 bg-white/30"></div>

            {[
              {
                step: "1",
                title: "Choose therapy type",
                desc: "Decide the kind of therapy you need from our options.",
              },
              {
                step: "2",
                title: "Fill assessment questionnaire",
                desc: "Provide brief answers to help us understand your needs.",
              },
              {
                step: "3",
                title: "Select a therapist",
                desc: "Browse qualified therapists and choose your best fit.",
              },
              {
                step: "4",
                title: "Start your session",
                desc: "Begin your journey to healing and personal growth.",
              },
            ].map(({ step, title, desc }) => (
              <div
                key={step}
                className="flex items-start gap-4 mb-10 last:mb-0 relative z-10"
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-green-600 font-bold text-lg">
                  {step}
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold">{title}</h3>
                  <p className="text-white/80 text-sm mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="w-full px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Left Content */}
          <div>
            <p className="text-sm text-[#b8860b] font-semibold tracking-wide mb-2">
              USERS FEEDBACK
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
              See what our users are saying
            </h2>

            {/* Feedback Quote Container */}
<div className="mt-10 max-w-xl text-left">
  <div className="text-[#228B22] text-8xl font-extrabold leading-none select-none">
    &ldquo;
  </div>
  <p className="mt-4 text-gray-700 text-base leading-relaxed">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. <br />
    Nisi ut aliquip ex ea commodo consequat.
  </p>

  <div className="flex items-center mt-4 gap-1 text-yellow-400">
    {/* 5 stars */}
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 fill-current"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.385 2.46c-.785.57-1.84-.197-1.54-1.118l1.287-3.974a1 1 0 00-.364-1.118L3.613 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
      </svg>
    ))}
  </div>

  <p className="mt-2 text-sm font-bold text-gray-800">Said Hassan</p>
</div>

          </div>

          

 {/* Right Arrows + duplicate quote below */}
<div className="flex flex-col items-end gap-6">
  <div className="flex gap-4">
    <div className="w-10 h-10 rounded-full bg-[#e6f4ea] flex items-center justify-center cursor-pointer">
      <span className="text-xl text-green-700">{'<'}</span>
    </div>
    <div className="w-10 h-10 rounded-full bg-[#e6f4ea] flex items-center justify-center cursor-pointer">
      <span className="text-xl text-green-700">{'>'}</span>
    </div>
  </div>

  {/* Duplicate Feedback Quote */}
  <div className="max-w-xl text-right">
    <div className="text-[#228B22] text-8xl font-extrabold leading-none select-none">
      &ldquo;
    </div>
    <p className="mt-4 text-gray-700 text-base leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. <br />
      Nisi ut aliquip ex ea commodo consequat.
    </p>

    <div className="flex justify-end items-center mt-4 gap-1 text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 fill-current"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.385 2.46c-.785.57-1.84-.197-1.54-1.118l1.287-3.974a1 1 0 00-.364-1.118L3.613 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
        </svg>
      ))}
    </div>

    <p className="mt-2 text-sm font-bold text-gray-800">Said Hassan</p>
  </div>
</div>


        </div>
        
      </div>

    <div className="w-screen bg-green-600 relative left-1/2 right-1/2 -ml-[50vw] px-6 py-16">
  <div className="max-w-6xl mx-auto mt-16 p-8 bg-white rounded-lg shadow-lg">
    
    {/* Flex container for text and image */}
    <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
      
      {/* TEXT SECTION */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl font-extrabold text-black mb-2">Download</h1>
        <h2 className="text-3xl font-bold text-green-600 mb-4">Rexolute Mobile App</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>

        {/* Download buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          {/* Google Play */}
          <a href="#app" className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-lg flex items-center transition-colors">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">...svg path...
               <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04-10.011v20.022l10.04-10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                </svg>
            Google Play
          </a>

          {/* App Store */}
          <a href="#" className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-lg flex items-center transition-colors">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">...svg path...
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
            
            App Store
          </a>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <Image
          src="/pictures/pic9.jpg"
          alt="Rexolute App Preview"
          width={400}
          height={400}
          className="rounded-lg object-contain w-full max-w-sm"
        />
      </div>

    </div>
  </div>
</div>

<div className="w-screen px-6 py-16 bg-white">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-12">
    {/* Left: Text content */}
    <div className="md:w-1/2 text-left">
      <h2 className="text-4xl font-extrabold text-black mb-4">
        Join our team of <br /> <span className="text-yellow-500">Expert Therapists</span> today
      </h2>
      <p className="text-gray-700 mb-6 leading-relaxed max-w-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
        Ut enim ad minim veniam, quis nostrud exercitation ullamco.
      </p>
      <a
        href="#"
        className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
      >
        Get Started
        <svg
          className="ml-2 w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>

    {/* Right: Image */}
    <div className="md:w-1/2">
      <Image
        src="/pictures/pic10.png"  // Replace with your actual image path
        alt="Join our team"
        width={450}
        height={450}
        className="rounded-lg object-contain w-full max-w-md"
      />
    </div>
  </div>
</div>



    </Fragment>
  );
};

export default Page;
