import { FC } from "react";
import { Button } from "../ui/button";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
// import { Tabs, TabsList, TabsTrigger } from "shadcn/ui/tabs";

// Smooth scroll function
const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const Hero: FC = () => (
    <div className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 via-teal-400 to-purple-600 text-center text-white">
      {/* Hero Text */}
      <div className="relative z-10 max-w-5xl mx-auto p-4">
        <h1 className="text-7xl font-extrabold mb-4 leading-tight whitespace-nowrap">
          Hey, I'm <span className="text-yellow-300">Keelan</span>.
        </h1>
        <p className="text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          I'm a full-stack developer building scalable, modern web applications from front-end to back-end.
        </p>
  
        {/* Button */}
        <Button
          className="bg-yellow-400 text-black font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-500 transition-all transform hover:scale-105"
          onClick={() => scrollToSection('projects')}
        >
          Explore My Projects ↓
        </Button>
      </div>
  
      {/* Sticky Navbar with Smooth Scrolling
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
      </nav> */}
    </div>
  );
  
  export default Hero;