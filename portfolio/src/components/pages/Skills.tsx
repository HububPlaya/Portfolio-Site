import { FC } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGit } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiMongodb, SiExpress, SiSass } from "react-icons/si";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@radix-ui/react-accordion";
import { Progress } from "../ui/progress";

const Skills: FC = () => (
  <section id="skills" className="bg-gray-50 py-16 px-4">
    {/* Title */}
    <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-800">
      Skills
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
      {/* Work Experience Section */}
      <div className="space-y-8">
        <h3 className="text-3xl font-semibold mb-6 text-white">Work Experience</h3>

        {/* Experience 1 with Progress Bar */}
        <Card className="hover:shadow-xl transition-shadow duration-300 bg-gray-100">
          <CardHeader>
            <CardTitle className="text-xl text-teal-600">Pickleball.com</CardTitle>
            <CardDescription className="text-gray-500">Software Engineer | Jan 2024 - Present</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Developed full-stack enterprise applications using React and Next.js. Led the frontend team to create faster, scalable applications.
            </p>
            {/* Progress bar to show duration of role */}
            <Progress value={60} className="bg-teal-500" />
            <p className="text-sm mt-2 text-gray-500">2 years in this role</p>
          </CardContent>
        </Card>

        {/* Experience 2 */}
        <Card className="hover:shadow-xl transition-shadow duration-300 bg-gray-100">
          <CardHeader>
            <CardTitle className="text-xl text-teal-600">Bosnia & Herzegovina Futures Foundation</CardTitle>
            <CardDescription className="text-gray-500">Junior to Senior | Sep 2021 - Present</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Mentored high school students, volunteered in web development, and led web projects to improve community outreach.
            </p>
            {/* Progress bar to show duration of role */}
            <Progress value={80} className="bg-teal-500" />
            <p className="text-sm mt-2 text-gray-500">3 years in this role</p>
          </CardContent>
        </Card>

        {/* More Experience Cards */}
        {/* Add additional experience cards here as needed */}
      </div>

      {/* Skills Section */}
      <div className="space-y-8">
        <h3 className="text-3xl font-semibold mb-6 text-white">Skills</h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Skill Card 1 */}
          <Card className="hover:shadow-lg transition-transform transform hover:scale-105 bg-gray-100">
            <CardContent className="flex flex-col items-center space-y-2">
              <FaReact className="text-5xl text-blue-600" />
              <p className="text-lg text-teal-600">React.js</p>
              <p className="text-sm text-gray-500">4 Years Experience</p>
            </CardContent>
          </Card>

          {/* Skill Card 2 */}
          <Card className="hover:shadow-lg transition-transform transform hover:scale-105 bg-gray-100">
            <CardContent className="flex flex-col items-center space-y-2">
              <FaNodeJs className="text-5xl text-green-600" />
              <p className="text-lg text-teal-600">Node.js</p>
              <p className="text-sm text-gray-500">3 Years Experience</p>
            </CardContent>
          </Card>

          {/* Skill Card 3 */}
          <Card className="hover:shadow-lg transition-transform transform hover:scale-105 bg-gray-100">
            <CardContent className="flex flex-col items-center space-y-2">
              <SiNextdotjs className="text-5xl text-black" />
              <p className="text-lg text-teal-600">Next.js</p>
              <p className="text-sm text-gray-500">2 Years Experience</p>
            </CardContent>
          </Card>

          {/* Skill Card 4 */}
          <Card className="hover:shadow-lg transition-transform transform hover:scale-105 bg-gray-100">
            <CardContent className="flex flex-col items-center space-y-2">
              <FaGit className="text-5xl text-orange-600" />
              <p className="text-lg text-teal-600">Git</p>
              <p className="text-sm text-gray-500">5 Years Experience</p>
            </CardContent>
          </Card>

          {/* Skill Card 5 */}
          <Card className="hover:shadow-lg transition-transform transform hover:scale-105 bg-gray-100">
            <CardContent className="flex flex-col items-center space-y-2">
              <SiMongodb className="text-5xl text-green-600" />
              <p className="text-lg text-teal-600">MongoDB</p>
              <p className="text-sm text-gray-500">3 Years Experience</p>
            </CardContent>
          </Card>

          {/* Skill Card 6 */}
          <Card className="hover:shadow-lg transition-transform transform hover:scale-105 bg-gray-100">
            <CardContent className="flex flex-col items-center space-y-2">
              <SiTypescript className="text-5xl text-blue-600" />
              <p className="text-lg text-teal-600">TypeScript</p>
              <p className="text-sm text-gray-500">2 Years Experience</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
