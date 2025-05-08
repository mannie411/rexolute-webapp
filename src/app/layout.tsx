'use client'
import { ReactNode } from 'react'
import Link from 'next/link'

export default function HomeLayer({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ========== HEADER ========== */}
      <header className="bg-white py-4 px-6 border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors">
            Revolute
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 hover:text-green-600 transition-colors py-2">Home</Link>
            <Link href="/about" className="text-gray-800 hover:text-green-600 transition-colors py-2">About</Link>
            <Link href="/blog" className="text-gray-800 hover:text-green-600 transition-colors py-2">Blog</Link>
            <Link href="/contact" className="text-gray-800 hover:text-green-600 transition-colors py-2">Contact</Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-gray-800 hover:text-green-600 transition-colors py-2 px-3">
              Login
            </Link>
            <Link 
              href="/signup" 
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors shadow-sm"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* ========== MAIN CONTENT ========== */}
      <main className="flex-grow">
        {children} {/* Your pages inject here */}
      </main>

      {/* ========== FOOTER ========== */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Revolute</h2>
              <p className="text-gray-400 mb-6">Your financial companion</p>
              
              {/* App Store Badges */}
              <div className="flex flex-wrap gap-3">
                <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-lg flex items-center transition-colors">
                  <span className="mr-2">→</span> Google Play
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded-lg flex items-center transition-colors">
                  <span className="mr-2">→</span> App Store
                </button>
              </div>
            </div>

            {/* Links Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="flex flex-col space-y-2">
                <Link href="/" className="text-gray-400 hover:text-green-400">Home</Link>
                <Link href="/about" className="text-gray-400 hover:text-green-400">About</Link>
                <Link href="/contact" className="text-gray-400 hover:text-green-400">Contact</Link>
              </div>
            </div>

            {/* Social Media Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Social icons would go here */}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            © 2024 Revolute. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}