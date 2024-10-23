import { FC } from "react";


// Smooth scroll function
const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar: FC = () => (
  <nav className="sticky top-0 left-0 right-0 bg-gray-800 py-4 shadow-lg z-50">
    <div className="container mx-auto flex justify-center space-x-16">
      <a
        href="#home"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('home');
        }}
        className="text-white font-semibold hover:text-gray-300 transition-colors"
      >
        Home
      </a>
      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('about');
        }}
        className="text-white font-semibold hover:text-gray-300 transition-colors"
      >
        About
      </a>
      <a
        href="#projects"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('projects');
        }}
        className="text-white font-semibold hover:text-gray-300 transition-colors"
      >
        Projects
      </a>
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('contact');
        }}
        className="text-white font-semibold hover:text-gray-300 transition-colors"
      >
        Contact
      </a>
    </div>
  </nav>
);



export default Navbar;
