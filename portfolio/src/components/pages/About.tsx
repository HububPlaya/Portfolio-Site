import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
// import React from "react";

const About: React.FC = () => (
  <section className="p-8 bg-gray-100">
    <h2 className="text-2xl font-bold mb-6">About Me</h2>

    {/* Ensure you're using Accordion and providing the 'type' prop */}
    <Accordion type="single">  {/* or 'multiple' if you want multiple items open */}
      <AccordionItem value="experience">
        <AccordionTrigger>Experience</AccordionTrigger>
        <AccordionContent>
          <p>[Your work experience goes here]</p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="skills">
        <AccordionTrigger>Skills</AccordionTrigger>
        <AccordionContent>
          <p>React, TypeScript, Tailwind CSS, Node.js, etc.</p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="education">
        <AccordionTrigger>Education</AccordionTrigger>
        <AccordionContent>
          <p>Bachelor's Degree in Computer Science from [Your University]</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </section>
);

export default About;
