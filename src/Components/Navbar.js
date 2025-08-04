import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-800 text-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">MyApp</div>
        <ul className="flex space-x-6">
          <li><Link href="/"><span className="hover:underline">Home</span></Link></li>
          <li><Link href="/news"><span className="hover:underline">News</span></Link></li>
          <li><Link href="/contact"><span className="hover:underline">Contact</span></Link></li>
          <li><Link href="/about"><span className="hover:underline">About</span></Link></li>
        </ul>
      </div>
    </nav>
  );
}
