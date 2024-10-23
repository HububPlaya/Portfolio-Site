import { FC } from "react";
import { Button } from "../ui/button";

type Project = {
  title: string;
  description: string;
  link: string;
};

const ProjectCard: FC<Project> = ({ title, description, link }) => (
  <div className="bg-white p-4 shadow-md">
    <h3 className="text-2xl font-bold">{title}</h3>
    <p>{description}</p>
    <Button
      className="bg-blue-500 text-white mt-4"
      onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
    >
      View Project
    </Button>
  </div>
);

export default ProjectCard;
