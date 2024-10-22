import React from 'react';

const Footer: React.FC = () => (
  <footer className="p-4 bg-gray-200 text-center">
    <p>&copy; 2024 Your Name. Built with React and Tailwind CSS.</p>
    <div className="mt-2">
      <a href="https://github.com/yourgithub" className="mr-4" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
  </footer>
);

export default Footer;
