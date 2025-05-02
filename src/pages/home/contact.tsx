import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="bg-white py-4 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-green-600">Revolute</div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-800 hover:text-green-600">Home</Link>
            <Link href="/about" className="text-gray-800 hover:text-green-600">About us</Link>
            <Link href="/blog" className="text-gray-800 hover:text-green-600">Blog</Link>
            <Link href="/contact" className="text-gray-800 hover:text-green-600">Contact us</Link>
          </nav>

          <div className="flex items-center space-x-6">
            <Link href="/login" className="text-gray-800 hover:text-green-600">Login</Link>
            <Link href="/signup" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
              Get started
            </Link>
          </div>
        </div>
      </header>

      {/* Main Contact Heading */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact us</h1>
        <p className="text-lg text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Vell malesuodo placerat sit gravida. Eu tincidunt urna idi. 
          Etiam vitae odio magnis.
        </p>
      </section>

      {/* Contact Content - Two Columns */}
      <section className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-12">
        {/* Left Side - Contact Info */}
      {/* Contact Information Section with Black Background */}
<div className="bg-black p-8 rounded-lg text-white">
  <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
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
      <span className="text-xl">📍</span> 33, New York City, United States
    </p>
  </div>
</div>

        {/* Right Side - Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <form className="space-y-5">
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

            <div className="grid grid-cols-2 gap-4">
  {/* Email Field */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
    <input
      type="email"
      placeholder="Enter email"
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
    />
  </div>
  
  {/* Phone Field */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
    <input
      type="tel"
      placeholder="Enter phone no"
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
    />
  </div>
</div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
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
      <footer className="bg-black text-white py-12 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Left Column - Brand Info */}
    <div className="md:col-span-2">
      <h2 className="text-2xl font-bold mb-6">Revolute</h2>
      <div className="flex flex-wrap gap-6 mb-8">
        <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
        <Link href="/about" className="hover:text-green-400 transition-colors">About us</Link>
        <Link href="/contact" className="hover:text-green-400 transition-colors">Contact us</Link>
        <Link href="/blog" className="hover:text-green-400 transition-colors">Blog</Link>
      </div>
      
      <div className="flex gap-4 mb-8">
        {/* Google Play Button */}
        <a href="#" className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-lg flex items-center transition-colors">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04-10.011v20.022l10.04-10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z"/>
          </svg>
          Google Play
        </a>
        
        {/* App Store Button */}
        <a href="#" className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-lg flex items-center transition-colors">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          App Store
        </a>
      </div>
      
      <p className="text-gray-400">© 2024 Modus creator. All rights reserved.</p>
    </div>

    {/* Right Column - Social + Legal Links */}
    <div className="flex flex-col items-end">
      {/* Social Media Icons */}
      <div className="flex gap-4 mb-6">
        <a href="#" className="text-white hover:text-green-400 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
          </svg>
        </a>
        <a href="#" className="text-white hover:text-green-400 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </a>
        <a href="#" className="text-white hover:text-green-400 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        <a href="#" className="text-white hover:text-green-400 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
      </div>

      {/* Legal Links */}
      <div className="flex gap-4">
        <Link href="/terms" className="text-gray-400 hover:text-green-400 text-sm">Terms</Link>
        <Link href="/privacy" className="text-gray-400 hover:text-green-400 text-sm">Privacy</Link>
        <Link href="/cookies" className="text-gray-400 hover:text-green-400 text-sm">Cookies</Link>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
};

export default ContactPage;