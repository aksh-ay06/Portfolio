import React from "react";
import Link from "next/link";

interface SectionProps {
  title: string;
  content?: string;
  items?: { name: string; link: string; desc: string }[];
}

const Section: React.FC<SectionProps> = ({ title, content, items }) => {
  return (
    <section className="w-full max-w-6xl">
      <h2 className="text-3xl font-semibold text-gray-800 border-b pb-2 mb-4">{title}</h2>
      {content && <p className="text-gray-700 text-lg">{content}</p>}
      {items && (
        <ul className="list-disc pl-8 text-gray-700 space-y-4 text-lg">
          {items.map((item, index) => (
            <li key={index}>
              {item.link.startsWith("/") ? (
                <Link href={item.link} className="text-blue-600 hover:underline font-medium">
                  {item.name}
                </Link>
              ) : (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium"
                >
                  {item.name}
                </a>
              )}
              {" - "}{item.desc}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Section;
