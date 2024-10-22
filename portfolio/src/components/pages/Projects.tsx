// src/pages/Projects.tsx
import React from 'react';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal website to showcase my work and skills.',
    link: 'https://github.com/yourusername/portfolio',
  },
  {
    title: 'E-commerce App',
    description: 'A fully functional e-commerce app with React and Node.js.',
    link: 'https://github.com/yourusername/ecommerce-app',
  },
];

const Projects = () => {
  return (
    <section className="p-8 bg-white">
      <h2 className="text-2xl font-bold mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border p-4 rounded shadow-lg">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-4 block"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
