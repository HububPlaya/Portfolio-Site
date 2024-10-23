import { FC } from "react";
import ProjectCard from "./ProjectCard";

const Projects: FC = () => {
  const projects = [
    { title: "Project One", description: "A web app for...", link: "#" },
    { title: "Project Two", description: "A tool for...", link: "#" },
  ];

  return (
    <section id="projects" className="bg-gray-100 py-16 px-4">
      <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
