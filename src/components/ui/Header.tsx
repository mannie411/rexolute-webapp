import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-900">
          Revolute
        </Link>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <Link href="/" className="font-medium hover:text-blue-600">Home</Link>
          <Link href="/about" className="font-medium hover:text-blue-600">About us</Link>
          <Link href="/blog" className="font-medium hover:text-blue-600">Blog</Link>
          <Link href="/contact" className="font-medium hover:text-blue-600">Contact us</Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex space-x-4">
          <Link href="/login" className="font-medium hover:text-blue-600">Login</Link>
          <Link 
            href="/get-started" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
          >
            Get started
          </Link>

 
        </div>
      </div>
    </header>
  );
}