import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";  // Import the correct components

const Home: React.FC = () => (
  <section className="p-8 bg-gray-100 text-center">
    <Avatar className="mx-auto mb-4">
      <AvatarImage src="path/to/your/profile-picture.jpg" alt="Your Name" />
      <AvatarFallback></AvatarFallback> {/* Fallback for initials or placeholder */}
    </Avatar>
    <h2 className="text-4xl font-bold mb-4">Hello, I'm [Your Name]</h2>
    <p className="text-lg mb-6">I'm a passionate [Your Role], specializing in [Your Specialties].</p>
    <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Check Out My GitHub</button>
    </a>
  </section>
);

export default Home;
