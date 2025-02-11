export const techStack = "C++, Java, JavaScript, TypeScript, Python, React.js, Next.js, Node.js, Express, Redux Toolkit, GraphQL, MongoDB, MySQL, Postgres, Docker, Kubernetes, Git, Machine Learning, Pytorch";

export const projects = [
  { name: "Collaborative Whiteboard", link: "https://excalidraw-aksh-ay06.vercel.app/", desc: "Real-time collaborative drawing application with Next.js, Socket.io, ExpressJs and Node." },
  { name: "Travel Blog", link: "https://travel-blog-34mb.onrender.com/", desc: "A full-stack web application that lets users create, edit, and manage personalized travel blogs with user authentication (signup/login) and secure session management." },
  { name: "Content Based Movie Recommendation System", link: "https://github.com/aksh-ay06/movie-recommender", desc: "A Content Based Movie Recommendation with serialized model to seemless deploy and reuse the recommendation system in production envrionments." },
  { name: "Automated Defect Detection System for Quality Assurance in Manufacturing", link: "https://github.com/aksh-ay06/Automated-Defect-Detection-System-for-Quality-Assurance-in-Manufacturing", desc: " The project aims to automate defect detection in cell phone manufacturing using machine learning (ML) and deep learning (DL) models, adhering to the CRISP-DM framework." }
];

export const blogs = [
  { name: "Understanding Machine Learning Bias", link: "/blogs/machine-learning-bias", desc: "Exploring the challenges of bias in machine learning models and strategies to mitigate them." },
  { name: "Optimizing React Applications", link: "/blogs/react-optimization", desc: "Best practices for improving performance and efficiency in React apps." },
  { name: "Introduction to Next.js for Full-Stack Development", link: "/blogs/nextjs-fullstack", desc: "A beginner-friendly guide to building full-stack applications with Next.js." }
];

export const blogData: { [key: string]: { title: string; content: string } } = {
  "machine-learning-bias": {
    title: "Understanding Machine Learning Bias",
    content: `
## What It Is
Machine Learning (ML) bias happens when an algorithm unintentionally favors or disfavors certain groups.

## Why It Matters
- **Fairness**: Biased models can treat people unequally.
- **Trust**: Users lose confidence if outcomes feel unfair.
- **Compliance**: Regulations demand equitable AI practices.

## Simple Ways to Reduce Bias
1. **Gather Diverse Data**: Capture various demographics to represent real-world users.
2. **Monitor Metrics**: Track fairness indicators alongside accuracy.
3. **Iterate & Improve**: Continually refine and update your model with new insights.
`
  },
  "react-optimization": {
    title: "Optimizing React Applications",
    content: `
## Why Optimize React?
- **Performance**: Faster apps keep users happy.
- **Scalability**: Optimized code grows smoothly with your user base.

## Quick Wins
1. **Use Memoization**: Avoid re-rendering by using \`React.memo\` and \`useMemo\`.
2. **Lazy Loading**: Split your code to load components only when needed.
3. **Proper State Management**: Keep local states minimal; use Context or Redux wisely.

## Final Thoughts
A few small changes can make a big impact on speed and user satisfaction. Continually measure and refine!
`
  },
  "nextjs-fullstack": {
    title: "Introduction to Next.js for Full-Stack Development",
    content: `
## What Is Next.js?
Next.js is a React framework for building both frontend and backend in a single codebase. It simplifies routing, server-side rendering, and more.

## Key Features
- **File-Based Routing**: Organize your pages easily with a clear folder structure.
- **API Routes**: Create backend endpoints right inside your Next.js project.
- **Server-Side Rendering**: Boost SEO and performance with dynamic content.

## Getting Started
1. **Install**: \`npx create-next-app my-project\`
2. **Develop**: Modify pages and components in the \`pages/\` folder.
3. **Deploy**: Deploy to services like Vercel or Netlify with ease.

## Wrap-Up
Next.js makes it straightforward to build full-stack React apps with excellent performance and developer experience.
`
  }
};
