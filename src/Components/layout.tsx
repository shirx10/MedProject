import React, { ReactNode } from 'react';
import Sidebar from './sidebar';

                            

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className = "min-h-screen flex flex-col">  
      {/* Navbar */}
      <header className = "bg-gray-700 text-white p-4 shadow-md">
        <nav className = "max-w-7x1 mx-auto flex justify-between items-center">
          <h1 className = "text-lg font-semibold">MedProject</h1>
          <ul className = "flex space-x-4">
            <li><a href = "/" className = "hover:underline">Home</a></li>
            <li><a href = "/" className = "hover:underline">Cases</a></li>
            <li><a href = "/" className = "hover:underline">About</a></li>
            <li><a href = "/">
              <img src="/Images/guestlogo.png" className="h-auto w-9" />
              </a>
              </li>
          </ul>
        </nav>
      </header>
      {/* Sidebar */}
      <div className = "flex flex-1">
        <Sidebar className ="h-[calc(100vh-64px)]" />
        <main className = "flex flex-grow p-6">
        {children}
       </main>
      </div>
      <footer>
      </footer>
    </div>
  );
};



export default Layout;
``