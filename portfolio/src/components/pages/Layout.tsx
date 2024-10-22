// src/components/Layout.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header className="p-4 bg-blue-500 text-white">
        <h1 className="text-3xl font-bold">Your Name</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <main className="p-8">{children}</main>
      <footer className="p-4 bg-gray-200 text-center">
        <p>© 2024 Your Name</p>
      </footer>
    </div>
  );
};

export default Layout;
