import { FC, useRef } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGit } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiMongodb, SiExpress, SiSass } from "react-icons/si";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {useScroll, useTransform, motion} from "framer-motion";

const Skills: FC = () => {
  const experienceRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: experienceRef,
    offset: ["start end", "end start"],
  });

  const progressScale = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const milestones = [
    { icon: FaReact, position: 0.2 },
    { icon: FaNodeJs, position: 0.5 },
    { icon: SiNextdotjs, position: 0.8 },
  ];

  return (
    <section id="experience-skills" className="relative bg-gray-50 py-32 px-4 flex flex-col items-center" style={{ minHeight: "150vh" }}>
      <h3 className="text-4xl font-bold mb-8 text-center">Work Experience</h3>

      <div className="flex items-start w-full max-w-5xl relative">
        <motion.div
          className="relative flex flex-col items-center"
          style={{
            width: "6px",
            backgroundColor: "#e5e7eb",
            height: "330vh",
            marginTop: "32px",
          }}
        >
          <motion.div
            className="bg-teal-500 rounded-full"
            style={{
              width: "6px",
              height: progressScale,
              transition: { type: "spring", stiffness: 50, damping: 20 },
            }}
          />

          {milestones.map(({ icon: Icon, position }, index) => (
            <motion.div
              key={index}
              className="bg-teal-500 p-1 rounded-full flex items-center justify-center shadow-lg"
              style={{
                width: "32px",
                height: "32px",
                position: "absolute",
                top: `${position * 90}vh`,
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: scrollYProgress.get() >= position ? 1 : 0.3,
              }}
            >
              <Icon size={16} color="white" />
            </motion.div>
          ))}
        </motion.div>

        <div className="space-y-8 ml-16 flex-1" ref={experienceRef}>
          <Card className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-teal-600 text-2xl">Pickleball.com</CardTitle>
              <CardDescription className="text-gray-500">Software Engineer | Jan 2024 - Present</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Developed full-stack enterprise applications using React and Next.js. Led frontend team to build scalable applications.
              </p>
              <Progress value={60} className="bg-teal-500" />
              <p className="text-sm mt-2 text-gray-500">2 years in this role</p>

              <div className="flex space-x-4 mt-4">
                {[
                  { label: "React.js", icon: FaReact, description: "Built dynamic interfaces with custom hooks." },
                  { label: "Next.js", icon: SiNextdotjs, description: "Optimized server-side rendering and API routes." },
                ].map((skill, index) => (
                  <Popover key={index}>
                    <PopoverTrigger asChild>
                      <button
                        className="relative bg-black text-white rounded-lg p-2 flex flex-col items-center justify-center border border-transparent transition-all hover:scale-105 hover:bg-opacity-90"
                        style={{
                          background: "linear-gradient(145deg, #1e90ff, #ff007f)",
                          borderImageSlice: 1,
                        }}
                      >
                        <div className="bg-black p-4 rounded-md">
                          <skill.icon className="text-white" size={24} />
                          <span className="text-sm mt-1">{skill.label}</span>
                        </div>
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="bg-white shadow-lg rounded-lg p-4 max-w-xs">
                      <p className="text-gray-700">{skill.description}</p>
                    </PopoverContent>
                  </Popover>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* test */}

          {/* 1. */}
          <Card className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-teal-600 text-2xl">Pickleball.com</CardTitle>
              <CardDescription className="text-gray-500">Software Engineer | Jan 2024 - Present</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Developed full-stack enterprise applications using React and Next.js. Led frontend team to build scalable applications.
              </p>
              <Progress value={60} className="bg-teal-500" />
              <p className="text-sm mt-2 text-gray-500">2 years in this role</p>

              <div className="flex space-x-4 mt-4">
                {[
                  { label: "React.js", icon: FaReact, description: "Built dynamic interfaces with custom hooks." },
                  { label: "Next.js", icon: SiNextdotjs, description: "Optimized server-side rendering and API routes." },
                ].map((skill, index) => (
                  <Popover key={index}>
                    <PopoverTrigger asChild>
                      <button
                        className="relative bg-black text-white rounded-lg p-2 flex flex-col items-center justify-center border border-transparent transition-all hover:scale-105 hover:bg-opacity-90"
                        style={{
                          background: "linear-gradient(145deg, #1e90ff, #ff007f)",
                          borderImageSlice: 1,
                        }}
                      >
                        <div className="bg-black p-4 rounded-md">
                          <skill.icon className="text-white" size={24} />
                          <span className="text-sm mt-1">{skill.label}</span>
                        </div>
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="bg-white shadow-lg rounded-lg p-4 max-w-xs">
                      <p className="text-gray-700">{skill.description}</p>
                    </PopoverContent>
                  </Popover>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 2. */}
          <Card className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-teal-600 text-2xl">Pickleball.com</CardTitle>
              <CardDescription className="text-gray-500">Software Engineer | Jan 2024 - Present</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Developed full-stack enterprise applications using React and Next.js. Led frontend team to build scalable applications.
              </p>
              <Progress value={60} className="bg-teal-500" />
              <p className="text-sm mt-2 text-gray-500">2 years in this role</p>

              <div className="flex space-x-4 mt-4">
                {[
                  { label: "React.js", icon: FaReact, description: "Built dynamic interfaces with custom hooks." },
                  { label: "Next.js", icon: SiNextdotjs, description: "Optimized server-side rendering and API routes." },
                ].map((skill, index) => (
                  <Popover key={index}>
                    <PopoverTrigger asChild>
                      <button
                        className="relative bg-black text-white rounded-lg p-2 flex flex-col items-center justify-center border border-transparent transition-all hover:scale-105 hover:bg-opacity-90"
                        style={{
                          background: "linear-gradient(145deg, #1e90ff, #ff007f)",
                          borderImageSlice: 1,
                        }}
                      >
                        <div className="bg-black p-4 rounded-md">
                          <skill.icon className="text-white" size={24} />
                          <span className="text-sm mt-1">{skill.label}</span>
                        </div>
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="bg-white shadow-lg rounded-lg p-4 max-w-xs">
                      <p className="text-gray-700">{skill.description}</p>
                    </PopoverContent>
                  </Popover>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 3. */}
          <Card className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-teal-600 text-2xl">Pickleball.com</CardTitle>
              <CardDescription className="text-gray-500">Software Engineer | Jan 2024 - Present</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Developed full-stack enterprise applications using React and Next.js. Led frontend team to build scalable applications.
              </p>
              <Progress value={60} className="bg-teal-500" />
              <p className="text-sm mt-2 text-gray-500">2 years in this role</p>

              <div className="flex space-x-4 mt-4">
                {[
                  { label: "React.js", icon: FaReact, description: "Built dynamic interfaces with custom hooks." },
                  { label: "Next.js", icon: SiNextdotjs, description: "Optimized server-side rendering and API routes." },
                ].map((skill, index) => (
                  <Popover key={index}>
                    <PopoverTrigger asChild>
                      <button
                        className="relative bg-black text-white rounded-lg p-2 flex flex-col items-center justify-center border border-transparent transition-all hover:scale-105 hover:bg-opacity-90"
                        style={{
                          background: "linear-gradient(145deg, #1e90ff, #ff007f)",
                          borderImageSlice: 1,
                        }}
                      >
                        <div className="bg-black p-4 rounded-md">
                          <skill.icon className="text-white" size={24} />
                          <span className="text-sm mt-1">{skill.label}</span>
                        </div>
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="bg-white shadow-lg rounded-lg p-4 max-w-xs">
                      <p className="text-gray-700">{skill.description}</p>
                    </PopoverContent>
                  </Popover>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 4. */}
          <Card className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-teal-600 text-2xl">Pickleball.com</CardTitle>
              <CardDescription className="text-gray-500">Software Engineer | Jan 2024 - Present</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Developed full-stack enterprise applications using React and Next.js. Led frontend team to build scalable applications.
              </p>
              <Progress value={60} className="bg-teal-500" />
              <p className="text-sm mt-2 text-gray-500">2 years in this role</p>

              <div className="flex space-x-4 mt-4">
                {[
                  { label: "React.js", icon: FaReact, description: "Built dynamic interfaces with custom hooks." },
                  { label: "Next.js", icon: SiNextdotjs, description: "Optimized server-side rendering and API routes." },
                ].map((skill, index) => (
                  <Popover key={index}>
                    <PopoverTrigger asChild>
                      <button
                        className="relative bg-black text-white rounded-lg p-2 flex flex-col items-center justify-center border border-transparent transition-all hover:scale-105 hover:bg-opacity-90"
                        style={{
                          background: "linear-gradient(145deg, #1e90ff, #ff007f)",
                          borderImageSlice: 1,
                        }}
                      >
                        <div className="bg-black p-4 rounded-md">
                          <skill.icon className="text-white" size={24} />
                          <span className="text-sm mt-1">{skill.label}</span>
                        </div>
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="bg-white shadow-lg rounded-lg p-4 max-w-xs">
                      <p className="text-gray-700">{skill.description}</p>
                    </PopoverContent>
                  </Popover>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 5. */}
          <Card className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-teal-600 text-2xl">Pickleball.com</CardTitle>
              <CardDescription className="text-gray-500">Software Engineer | Jan 2024 - Present</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Developed full-stack enterprise applications using React and Next.js. Led frontend team to build scalable applications.
              </p>
              <Progress value={60} className="bg-teal-500" />
              <p className="text-sm mt-2 text-gray-500">2 years in this role</p>

              <div className="flex space-x-4 mt-4">
                {[
                  { label: "React.js", icon: FaReact, description: "Built dynamic interfaces with custom hooks." },
                  { label: "Next.js", icon: SiNextdotjs, description: "Optimized server-side rendering and API routes." },
                ].map((skill, index) => (
                  <Popover key={index}>
                    <PopoverTrigger asChild>
                      <button
                        className="relative bg-black text-white rounded-lg p-2 flex flex-col items-center justify-center border border-transparent transition-all hover:scale-105 hover:bg-opacity-90"
                        style={{
                          background: "linear-gradient(145deg, #1e90ff, #ff007f)",
                          borderImageSlice: 1,
                        }}
                      >
                        <div className="bg-black p-4 rounded-md">
                          <skill.icon className="text-white" size={24} />
                          <span className="text-sm mt-1">{skill.label}</span>
                        </div>
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="bg-white shadow-lg rounded-lg p-4 max-w-xs">
                      <p className="text-gray-700">{skill.description}</p>
                    </PopoverContent>
                  </Popover>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 6 */}
          <Card className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-teal-600 text-2xl">Pickleball.com</CardTitle>
              <CardDescription className="text-gray-500">Software Engineer | Jan 2024 - Present</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Developed full-stack enterprise applications using React and Next.js. Led frontend team to build scalable applications.
              </p>
              <Progress value={60} className="bg-teal-500" />
              <p className="text-sm mt-2 text-gray-500">2 years in this role</p>

              <div className="flex space-x-4 mt-4">
                {[
                  { label: "React.js", icon: FaReact, description: "Built dynamic interfaces with custom hooks." },
                  { label: "Next.js", icon: SiNextdotjs, description: "Optimized server-side rendering and API routes." },
                ].map((skill, index) => (
                  <Popover key={index}>
                    <PopoverTrigger asChild>
                      <button
                        className="relative bg-black text-white rounded-lg p-2 flex flex-col items-center justify-center border border-transparent transition-all hover:scale-105 hover:bg-opacity-90"
                        style={{
                          background: "linear-gradient(145deg, #1e90ff, #ff007f)",
                          borderImageSlice: 1,
                        }}
                      >
                        <div className="bg-black p-4 rounded-md">
                          <skill.icon className="text-white" size={24} />
                          <span className="text-sm mt-1">{skill.label}</span>
                        </div>
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="bg-white shadow-lg rounded-lg p-4 max-w-xs">
                      <p className="text-gray-700">{skill.description}</p>
                    </PopoverContent>
                  </Popover>
                ))}
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default Skills;