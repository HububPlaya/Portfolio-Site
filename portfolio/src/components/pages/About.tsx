import { FC } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const About: FC = () => (
  <section id="about" className="bg-gray-100 py-16 px-4 text-center">
    <h2 className="text-3xl font-semibold mb-6">About Me</h2>
    <div className="max-w-4xl mx-auto">
      {/* Carousel Component */}
      <Carousel className="relative" orientation="horizontal">
        <CarouselPrevious className="absolute left-0 z-10">Previous</CarouselPrevious>
        <CarouselContent className="flex space-x-6">
          {/* Slide 1 */}
          <CarouselItem className="basis-1/3 p-6 bg-teal-600 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-white">Who I Am</h3>
            <p className="text-white">
              I’m driven by my family and a desire to overcome challenges. My family has inspired me to pursue education, compassion, and lifelong learning.
            </p>
          </CarouselItem>
          {/* Slide 2 */}
          <CarouselItem className="basis-1/3 p-6 bg-blue-600 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-white">What I'm Interested In</h3>
            <p className="text-white">
              I’m passionate about software architecture, building scalable systems, and making technology accessible to all. My focus is on using technology to make a positive impact, especially in education and community work.
            </p>
          </CarouselItem>
          {/* Slide 3 */}
          <CarouselItem className="basis-1/3 p-6 bg-purple-600 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-white">Why I Became a Software Engineer</h3>
            <p className="text-white">
              My journey into software engineering was driven by my desire to improve problem-solving skills and build solutions that help others.
            </p>
          </CarouselItem>
          {/* Slide 4 */}
          <CarouselItem className="basis-1/3 p-6 bg-yellow-600 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-white">Where I See Myself</h3>
            <p className="text-white">
              In the future, I aim to develop open-source tools for children and non-profits, focusing on education and accessibility through creative, engaging technology.
            </p>
          </CarouselItem>
        </CarouselContent>
        <CarouselNext className="absolute right-0 z-10">Next</CarouselNext>
      </Carousel>
    </div>
  </section>
);

export default About;
