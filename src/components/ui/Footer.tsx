// src/components/ui/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black py-12 text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Top Section - Logo + Links */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Rexolute</h2>
            <div className="flex flex-wrap gap-x-4">
              <Link href="/" className="hover:text-green-400">Home</Link>
              <span className="text-gray-500">|</span>
              <Link href="/about" className="hover:text-green-400">About us</Link>
              <span className="text-gray-500">|</span>
              <Link href="/contact" className="hover:text-green-400">Contact us</Link>
              <span className="text-gray-500">|</span>
              <Link href="/blog" className="hover:text-green-400">Blog</Link>
            </div>
          </div>
        </div>

        {/* Download Buttons - Now below navigation */}
        <div className="flex gap-4 mb-8"> {/* Horizontal layout */}
          <div className="bg-white text-black px-6 py-3 rounded-full text-center min-w-[160px]">
            <p className="text-xs text-gray-600">Download on</p>
            <p className="font-medium">Google Play</p>
          </div>
          <div className="bg-white text-black px-6 py-3 rounded-full text-center min-w-[160px]">
            <p className="text-xs text-gray-600">Download on</p>
            <p className="font-medium">Apple Store</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500 text-sm">
            © 2024 Modus create. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}