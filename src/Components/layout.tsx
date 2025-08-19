import React, { ReactNode } from 'react';
import Sidebar from './sidebar';

interface LayoutProps { children: ReactNode }

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ───── nav bar ───── */}
      <header className="bg-gray-900 text-white px-6 py-3 flex justify-between items-center shadow">
        <h1 className="font-semibold text-lg">MedProject</h1>

        <nav className="flex items-center gap-6 text-sm">
          <a href="/" className="hover:text-blue-400 flex items-center">Home</a>
          <a href="/" className="hover:text-blue-400 flex items-center">Cases</a>
          <a href="/" className="hover:text-blue-400 flex items-center">About</a>
          <a href="/" className="flex items-center">
            <img src="/Images/guestlogo.png" className="w-8 h-8 object-contain" />
          </a>
        </nav>

      </header>

      {/* ───── main grid ───── */}
      <div className="flex">
        <Sidebar />

        <main className="flex-1 pr-6 py-8 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
