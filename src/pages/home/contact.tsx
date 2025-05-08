// src/pages/contact.tsx
export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Centered Header Section */}
      <section className="container mx-auto px-4 pt-12 max-w-4xl text-center">
        <h1 className="text-3xl font-bold mb-4">Contact us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Vel malesuada placerat sit gravida. 
          Eu tincidunt urna idi. Etiam vitae odio magnis.
        </p>
      </section>

      {/* Two-column Section */}
      <div className="container mx-auto px-4 pb-12 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Column - Contact Info (Black Background) */}
          <div className="md:w-1/2 p-8 bg-black text-white rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-gray-300 mb-8">
              Fill up the form and we'll get back to you in few hours.
            </p>
            <div className="space-y-4 text-gray-200">
              <p>+29000000000</p>
              <p>hello@mail.com</p>
              <p>33, New York City. United States.</p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="md:w-1/2">
            <div className="space-y-6">
              {/* Name Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">First Name</label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                  <p className="text-red-500 text-sm mt-1">Value incorrect</p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter last name!"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              {/* Contact Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Enter phone no"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  placeholder="Enter message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md h-32"
                />
              </div>

              {/* Submit Button */}
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-md font-medium">
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}