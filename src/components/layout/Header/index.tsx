import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Your Logo
          </Link>
          <div className="flex space-x-4">
            <Link href="/" className="hover:text-gray-600">
              Home
            </Link>
            <Link href="/features" className="hover:text-gray-600">
              Features
            </Link>
            <Link href="/contact" className="hover:text-gray-600">
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
} 