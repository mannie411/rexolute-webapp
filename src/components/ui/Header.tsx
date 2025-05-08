// src/components/ui/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-green-700">
            Revolute
          </Link>

          {/* Navigation Links - Exact spacing as shown */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="font-medium hover:text-green-600">Home</Link>
            <Link href="/about" className="font-medium hover:text-green-600">About us</Link>
            <Link href="/blog" className="font-medium hover:text-green-600">Blog</Link>
            <Link href="/contact" className="font-medium hover:text-green-600">Contact us</Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex space-x-6">
            <Link href="/login" className="border border-green-600 text-green-600 hover:bg-green-50 font-medium px-4 py-2 rounded-full transition-colors">Login</Link>
            <Link 
              href="/get-started" 
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full font-medium transition-colors"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}