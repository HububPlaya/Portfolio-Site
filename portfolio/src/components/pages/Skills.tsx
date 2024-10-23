import { FC } from "react";

const Skills: FC = () => (
  <section id="Skills" className="bg-white py-16 px-4">
    <h2 className="text-3xl font-semibold text-center mb-8">Skills</h2>
    <div className="flex flex-wrap justify-center gap-4">
      <span className="bg-gray-200 p-2 rounded">JavaScript</span>
      <span className="bg-gray-200 p-2 rounded">React</span>
      <span className="bg-gray-200 p-2 rounded">TypeScript</span>
      <span className="bg-gray-200 p-2 rounded">Tailwind CSS</span>
      <span className="bg-gray-200 p-2 rounded">Node.js</span>
    </div>
  </section>
);

export default Skills;
