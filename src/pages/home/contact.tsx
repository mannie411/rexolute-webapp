export default function ContactPage() {
  return (
    <>
      {/* Main Contact Heading */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact us</h1>
        <p className="text-lg text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Vell malesuodo placerat sit gravida. Eu tincidunt urna idi. 
          Etiam vitae odio magnis.
        </p>
      </section>
      <div className="bg-black text-white p-8 rounded-lg">
  <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
  <p className="text-gray-300 mb-6">
    Fill up the form and we'll get back to you in few hours.
  </p>
  
  <div className="space-y-4">
    <div className="flex items-center gap-3">
      <span className="text-xl">📞</span>
      <span>+29000009000</span>
    </div>
    <div className="flex items-center gap-3">
      <span className="text-xl">✉️</span>
      <span>hellosemail.com</span>
    </div>
    <div className="flex items-center gap-3">
      <span className="text-xl">📍</span>
      <span>33, New York City, United States</span>
    </div>
  </div>
</div>

<div className="bg-white p-6 rounded-lg shadow-sm">
  <form className="space-y-5">
    {/* Name Row */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
        <input
          type="text"
          placeholder="Enter first name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
        <input
          type="text"
          placeholder="Enter last name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
        />
      </div>
    </div>

    {/* Contact Method */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">How should we contact you?</label>
      <div className="space-y-3">
        <div className="flex items-center">
          <input 
            type="radio" 
            id="email" 
            name="contactMethod" 
            className="mr-2 h-4 w-4 text-green-600" 
            defaultChecked 
          />
          <label htmlFor="email" className="text-sm text-gray-700">Email Address</label>
        </div>
        <input
          type="email"
          placeholder="Enter email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        
        <div className="flex items-center">
          <input 
            type="radio" 
            id="phone" 
            name="contactMethod" 
            className="mr-2 h-4 w-4 text-green-600" 
          />
          <label htmlFor="phone" className="text-sm text-gray-700">Phone Number</label>
        </div>
        <input
          type="tel"
          placeholder="Enter phone number"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>
    </div>

    {/* Message */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
      <textarea
        rows={4}
        placeholder="Enter your message"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
    >
      Send Message
    </button>
  </form>
</div>

    
    </>
  );
}