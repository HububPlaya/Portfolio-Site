import { FC, useState, useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const About: FC = () => {
  const emblaApiRef = useRef<CarouselApi | null>(null);

  return (
    <section
      id="about"
      className="bg-gradient-to-r from-blue-500 to-teal-500 py-16 px-4 text-center"
    >
      {/* Enhanced Title */}
      <h2 className="text-6xl font-extrabold mb-12 mt-8 text-white drop-shadow-lg underline decoration-yellow-400 decoration-4 underline-offset-8">
        About Me
      </h2>

      <div className="relative max-w-full mx-auto overflow-hidden z-10">
        {/* Carousel */}
        <Carousel
          className="relative"
          opts={{
            align: "start",
            loop: true, // Disable loop to test
            containScroll: "trimSnaps",
            slidesToScroll: "auto",
          }}
          setApi={(api) => (emblaApiRef.current = api)}
          orientation="horizontal"
        >
          {/* Carousel Previous Button */}
          <CarouselPrevious
            onClick={() => emblaApiRef.current?.scrollPrev()}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-lg z-20"
          >
            ←
          </CarouselPrevious>

          {/* Carousel Content */}
          <CarouselContent className="flex w-full space-x-6 px-6"> {/* Removed -ml-6 and added px-6 */}
            {/* Slide 1 */}
            <CarouselItem className="embla__slide flex-grow basis-3/4 md:basis-2/3 lg:basis-1/2 p-8 bg-teal-600 rounded-lg shadow-lg space-y-4">
              <h3 className="text-4xl font-bold mb-2 text-white">
                I'm building for tomorrow
              </h3>
              <p className="text-lg text-white leading-relaxed">
                "In the future, I see myself developing open-source tools that make a real difference, especially for children and non-profits. Technology should create accessibility, and that's where I want to lead innovation."
              </p>
            </CarouselItem>
            {/* Slide 2 */}
            <CarouselItem className="embla__slide flex-grow basis-3/4 md:basis-2/3 lg:basis-1/2 p-8 bg-green-600 rounded-lg shadow-lg space-y-4">
              <h3 className="text-4xl font-bold mb-2 text-white">
                My drive comes from challenge
              </h3>
              <p className="text-lg text-white leading-relaxed">
                "I thrive when I'm tackling challenges head-on. Whether it's learning new technologies or pushing myself beyond my comfort zone, I'm always looking to grow and improve, both for myself and for the teams I work with."
              </p>
            </CarouselItem>
            {/* Slide 3 */}
            <CarouselItem className="embla__slide flex-grow basis-3/4 md:basis-2/3 lg:basis-1/2 p-8 bg-purple-600 rounded-lg shadow-lg space-y-4">
              <h3 className="text-4xl font-bold mb-2 text-white">
                Why Software Engineering?
              </h3>
              <p className="text-lg text-white leading-relaxed">
                "I chose software engineering because I love solving problems. Breaking down complex issues, designing solutions, and seeing the impact of my work is what keeps me inspired."
              </p>
            </CarouselItem>
            {/* Slide 4 */}
            <CarouselItem className="embla__slide flex-grow basis-3/4 md:basis-2/3 lg:basis-1/2 p-8 bg-yellow-600 rounded-lg shadow-lg space-y-4">
              <h3 className="text-4xl font-bold mb-2 text-white">
                Technology for the people
              </h3>
              <p className="text-lg text-white leading-relaxed">
                "I believe in creating technology that benefits people. I'm passionate about making tech accessible to all and finding ways to use modern software architectures to solve real-world problems."
              </p>
            </CarouselItem>
          </CarouselContent>

          {/* Carousel Next Button */}
          <CarouselNext
            onClick={() => emblaApiRef.current?.scrollNext()}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-lg z-20"
          >
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
};

export default About;