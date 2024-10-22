import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header className="p-4 bg-blue-600 text-white">
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold">Your Name</h1>
      <nav>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/projects" className="mr-4">Projects</Link>
        <Link to="/about" className="mr-4">About</Link>
      </nav>
    </div>
  </header>
);

export default Header;
