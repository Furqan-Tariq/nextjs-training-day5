import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Website</h1>
        <div className="space-x-4">
          <Link href="/home" className="hover:text-blue-200 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-200 transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-200 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
