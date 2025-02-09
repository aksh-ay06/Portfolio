import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="text-center w-full max-w-6xl">
      <h1 className="text-5xl font-bold text-gray-800">Akshay Patel</h1>
      <p className="text-xl text-gray-600">Full-Stack Developer & Data Scientist</p>
      <div className="flex justify-center space-x-6 mt-4">
        <a
          href="https://github.com/aksh-ay06"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 text-3xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/aksh-ay06"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 text-3xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:akshaypatelnitb6@gmail.com"
          className="text-gray-600 hover:text-gray-900 text-3xl"
        >
          <FaEnvelope />
        </a>
      </div>
    </header>
  );
};

export default Header;
