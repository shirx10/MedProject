import { ChevronFirst } from 'lucide-react';

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className = '' }: SidebarProps) {
  return (
    <aside
      className={`bg-gray-800 text-white flex flex-col items-center w-56 shrink-0 h-screen sticky top-0 ${className}`}
    >
      <img src="/images/med.png" alt="logo" className="w-32 mt-6 mb-8" />

      {/* ⬇️ nav items */}
      <nav className="flex flex-col gap-4 text-sm">
        <a href="#" className="hover:text-blue-400">Question 1</a>
        <a href="#" className="hover:text-blue-400">Question 2</a>
        <a href="#" className="hover:text-blue-400">Question 3</a>
      </nav>

      <button className="mt-auto mb-6 p-2 rounded hover:bg-gray-700">
        <ChevronFirst size={20} />
      </button>
    </aside>
  );
}
