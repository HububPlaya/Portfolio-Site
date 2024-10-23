import { FC } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


const About: FC = () => (
    <section id="about" className="bg-gradient-to-r from-blue-500 to-teal-500 py-16 px-4 text-center">
      {/* Enhanced Title */}
      <h2 className="text-6xl font-extrabold mb-12 text-white drop-shadow-lg underline decoration-yellow-400 decoration-4 underline-offset-8">
        About Me
      </h2>
  
      <div className="relative max-w-full mx-auto overflow-hidden">
        {/* Carousel Component */}
        <Carousel
          className="relative"
          opts={{ loop: false, align: "start" }} // Fix loop issue, use loop if you really need it but better without here
          orientation="horizontal"
        >
          <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-lg">
            ←
          </CarouselPrevious>
          <CarouselContent className="flex space-x-8 w-full"> {/* Increased space between items */}
            {/* Slide 1 */}
            <CarouselItem className="flex-grow basis-4/5 md:basis-2/3 lg:basis-1/2 p-8 bg-teal-600 rounded-lg shadow-lg space-y-4">
              <h3 className="text-4xl font-bold mb-2 text-white">I'm building for tomorrow</h3>
              <p className="text-lg text-white leading-relaxed">
                "In the future, I see myself developing open-source tools that make a real difference, especially for children and non-profits. Technology should create accessibility, and that's where I want to lead innovation."
              </p>
            </CarouselItem>
            {/* Slide 2 */}
            <CarouselItem className="flex-grow basis-4/5 md:basis-2/3 lg:basis-1/2 p-8 bg-green-600 rounded-lg shadow-lg space-y-4">
              <h3 className="text-4xl font-bold mb-2 text-white">My drive comes from challenge</h3>
              <p className="text-lg text-white leading-relaxed">
                "I thrive when I'm tackling challenges head-on. Whether it's learning new technologies or pushing myself beyond my comfort zone, I'm always looking to grow and improve, both for myself and for the teams I work with."
              </p>
            </CarouselItem>
            {/* Slide 3 */}
            <CarouselItem className="flex-grow basis-4/5 md:basis-2/3 lg:basis-1/2 p-8 bg-purple-600 rounded-lg shadow-lg space-y-4">
              <h3 className="text-4xl font-bold mb-2 text-white">Why Software Engineering?</h3>
              <p className="text-lg text-white leading-relaxed">
                "I chose software engineering because I love solving problems. Breaking down complex issues, designing solutions, and seeing the impact of my work is what keeps me inspired."
              </p>
            </CarouselItem>
            {/* Slide 4 */}
            <CarouselItem className="flex-grow basis-4/5 md:basis-2/3 lg:basis-1/2 p-8 bg-yellow-600 rounded-lg shadow-lg space-y-4">
              <h3 className="text-4xl font-bold mb-2 text-white">Technology for the people</h3>
              <p className="text-lg text-white leading-relaxed">
                "I believe in creating technology that benefits people. I'm passionate about making tech accessible to all and finding ways to use modern software architectures to solve real-world problems."
              </p>
            </CarouselItem>
          </CarouselContent>
          <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-lg">
            →
          </CarouselNext>
        </Carousel>
      </div>
  
      {/* Explore My Skills Message */}
      <div className="mt-12 text-white text-lg flex items-center justify-center space-x-2">
        <span>Explore my skills below</span>
        <span className="animate-bounce">↓</span>
      </div>
    </section>
  );
  
  export default About;