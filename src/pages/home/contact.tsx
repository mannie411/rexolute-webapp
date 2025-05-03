import { HomeLayout } from "@/components/layout";
import { Head } from "@/components/shared";
import Link from "next/link";
import { Fragment } from "react";

const ContactPage = () => {
  return (
    <Fragment>
      <Head title="Contact us" />
      <HomeLayout>
        <div className="min-h-screen bg-white">
          {/* Header/Navigation */}

          {/* Main Contact Heading */}
          <section className="max-w-4xl mx-auto px-4 py-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contact us
            </h1>
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Vell malesuodo placerat
              sit gravida. Eu tincidunt urna idi. Etiam vitae odio magnis.
            </p>
          </section>

          {/* Contact Content - Two Columns */}
          <section className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-12">
            {/* Left Side - Contact Info */}
            {/* Contact Information Section with Black Background */}
            <div className="bg-black p-8 rounded-lg text-white">
              <h2 className="text-2xl font-semibold mb-4">
                Contact Information
              </h2>
              <p className="text-gray-300 mb-6">
                Fill up the form and we'll get back to you in few hours.
              </p>
              <div className="space-y-4">
                <p className="flex items-center gap-3">
                  <span className="text-xl">📞</span> +29000009000
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-xl">✉️</span> hellosemail.com
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-xl">📍</span> 33, New York City, United
                  States
                </p>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter first name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter last name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter phone no"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Enter message"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
                >
                  Send message
                </button>
              </form>
            </div>
          </section>
        </div>
      </HomeLayout>
    </Fragment>
  );
};

export default ContactPage;
