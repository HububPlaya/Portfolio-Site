import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'A personal website to showcase my work and skills using React and Tailwind CSS.',
    link: 'https://github.com/yourusername/portfolio',
  },
  {
    title: 'E-commerce App',
    description: 'A fully functional e-commerce app built with React, Node.js, and MongoDB.',
    link: 'https://github.com/yourusername/ecommerce-app',
  },
];

const Projects: React.FC = () => (
  <section className="p-8 bg-white">
    <h2 className="text-2xl font-bold mb-6">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <Card key={index} className="p-4 shadow-lg">
          <CardHeader className="text-xl font-bold">{project.title}</CardHeader>
          <CardContent>{project.description}</CardContent>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <Button className="mt-4">View Project</Button>
          </a>
        </Card>
      ))}
    </div>
  </section>
);

export default Projects;
