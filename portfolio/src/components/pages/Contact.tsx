// src/pages/Contact.tsx
import React from 'react';

const Contact = () => {
  return (
    <section className="p-8 bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <p className="text-lg">
        Feel free to reach out via email at{' '}
        <a href="mailto:your.email@example.com" className="text-blue-500 underline">
          your.email@example.com
        </a>
        .
      </p>
      <p className="text-lg mt-4">
        You can also find me on{' '}
        <a
          href="https://www.linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          LinkedIn
        </a>
        .
      </p>
    </section>
  );
};

export default Contact;
