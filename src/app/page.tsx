import React from "react";
import Header from "@/components/Header";
import Section from "@/components/Section";
import { techStack, projects, blogs } from "@/data/content";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-start p-10 space-y-8 overflow-hidden w-full">
      <Header />
      <Section title="Tech Stack" content={techStack} />
      <Section title="Projects" items={projects} />
      <Section title="Blogs" items={blogs} />
    </div>
  );
};

export default Home;
