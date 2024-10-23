import { FC } from "react";

const Contact: FC = () => (
  <footer id="contact" className="bg-gray-800 py-16 text-center text-white">
    <h2 className="text-3xl font-semibold mb-6">Contact</h2>
    <p>Email: <a href="mailto:your.email@example.com" className="text-blue-400">your.email@example.com</a></p>
    <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" className="text-blue-400">linkedin.com/in/yourprofile</a></p>
    <p>GitHub: <a href="https://github.com/yourprofile" className="text-blue-400">github.com/yourprofile</a></p>
  </footer>
);

export default Contact;
