export const techStack = "C++, Java, JavaScript, TypeScript, Python, React.js, Next.js, Node.js, Express, Redux Toolkit, GraphQL, MongoDB, MySQL, Postgres, Docker, Kubernetes, Git, Machine Learning, Pytorch";

export const projects = [
  { name: "Collaborative Whiteboard", link: "https://github.com/aksh-ay06/excalidraw", desc: "Real-time collaborative drawing application with Next.js." },
  { name: "Food Ordering App", link: "https://github.com/aksh-ay06/swiggy-clone", desc: "A Swiggy clone built with React and Redux for optimized performance." },
  { name: "Threads Clone", link: "https://github.com/aksh-ay06/threads", desc: "A social media application built with Next.js and MongoDB." },
  { name: "Predicting Cancer Risk", link: "https://github.com/aksh-ay06/cancer-risk-prediction", desc: "Machine learning model combining health survey data and pollution metrics to predict cancer risk." }
];

export const blogs = [
  { name: "Understanding Machine Learning Bias", link: "/blogs/machine-learning-bias", desc: "Exploring the challenges of bias in machine learning models and strategies to mitigate them." },
  { name: "Optimizing React Applications", link: "/blogs/react-optimization", desc: "Best practices for improving performance and efficiency in React apps." },
  { name: "Introduction to Next.js for Full-Stack Development", link: "/blogs/nextjs-fullstack", desc: "A beginner-friendly guide to building full-stack applications with Next.js." }
];

export const blogData: { [key: string]: { title: string; content: string } } = {
  "machine-learning-bias": {
    title: "Understanding Machine Learning Bias",
    content: `Machine Learning (ML) has been a game-changer in almost every area of our lives—think about personalized recommendations on your favorite streaming platform, fraud detection in banking, or even automated resume screening tools. While these algorithms can be incredibly powerful, there’s an important conversation happening around bias in machine learning and the real harm it can cause if left unchecked.

In this post, we’ll take a down-to-earth look at what ML bias is, where it comes from, why it matters, and what we can do about it.

## What Exactly Is Machine Learning Bias?

At a high level, ML bias happens when a model produces results that are unfairly skewed toward certain individuals or groups. Even if it’s not intentional, it can have serious consequences—like systematically denying loans to qualified applicants or misidentifying faces of certain ethnicities.

But why does bias creep in? Often, it’s because machine learning models mirror the data they’re trained on. If the data reflects historical inequalities or only represents a narrow slice of the population, the model will adopt those biases.

Key insight: The machine doesn’t have an inherent sense of right or wrong; it just learns from the data we give it.

## How Does Bias Sneak Into a Model?

1. **Data Collection**  
   - Let’s say you’re building a facial recognition model, but almost all your training photos feature people of a certain age, skin tone, or ethnicity. When that model encounters different faces, it might struggle.  
   - Or imagine a hiring tool that’s built using data from a company that historically favored candidates from specific backgrounds. The tool will likely carry on that trend.

2. **Measurement and Labeling**  
   - Sometimes data is labeled incorrectly—maybe because of human error or inconsistencies. If a spam detection system is fed mislabeled emails, it will learn incorrect patterns about what spam “looks like.”

3. **Algorithm Choices**  
   - Some algorithms might naturally magnify small differences in the data, which ends up disproportionately impacting certain groups.  
   - The way we define success can also lead to bias. If we only optimize for accuracy without considering fairness, we might end up with a model that does really well for one group but fails others.

4. **Human Decisions**  
   - It’s easy to underestimate the subtle ways our own beliefs and assumptions can shape the modeling process. Which features do we choose? How do we clean the data? What metrics do we look at?  
   - Confirmation bias can play a role: we tend to notice and value information that aligns with what we already suspect.

## Everyday Examples of Bias

- **Hiring Tools**: A tool trained on a company’s past hiring decisions might favor candidates with similar backgrounds or education, overlooking other strong (but different-looking) resumes.  
- **Facial Recognition**: A system might have high accuracy for lighter-skinned faces but make more mistakes with darker-skinned faces if that latter group is underrepresented in the training data.  
- **Medical Diagnosis**: If clinical data mostly comes from certain demographics, a model might not perform as well for patients outside that data range.

## Why Addressing Bias Matters

- **Fairness and Equity**: We talk a lot about AI making life “easier,” but if it only works well for a specific subset of people, it’s not truly inclusive.  
- **Public Trust**: If people realize AI systems are systematically biased, they’ll lose confidence in those tools—harming both individuals and the businesses that deploy them.  
- **Legal and Ethical Considerations**: With increasing regulations, organizations risk heavy penalties (not to mention PR nightmares) if their AI models are found to be discriminatory.  
- **Better Performance**: Counterintuitive as it may sound, a fairer model is often a more robust one. When you train on balanced, representative data, the algorithm is better equipped for real-world scenarios.

## Tackling Machine Learning Bias: Practical Approaches

1. **Start With Representative Data**  
   - Make sure the data you use reflects the diversity of the population you serve. This might mean seeking out additional data sources or using data augmentation techniques to balance things out.

2. **Pick the Right Metrics**  
   - Don’t just look at accuracy. Consider fairness metrics, like whether different groups are being treated similarly or if error rates are consistent across demographics.

3. **Be Wary of Hidden Proxies**  
   - Even if you remove direct sensitive attributes like race or gender, other information (like ZIP codes or hobbies) can inadvertently reveal those attributes. It’s crucial to watch for features that could indirectly reinforce bias.

4. **Use Fairness-Centered Algorithms**  
   - There are techniques to modify the dataset before training (pre-processing), tweak the training itself (in-processing), or adjust the model’s outputs afterward (post-processing). Each step is an opportunity to reduce bias.

5. **Human Oversight**  
   - Ultimately, humans can catch things a machine won’t. Domain experts, ethicists, and diverse stakeholders should examine both the data and the model’s outputs. If something feels off, it probably is.

6. **Stay Transparent and Accountable**  
   - Let people know how your model works, what data it was trained on, and how you’re addressing possible biases. Transparency helps build trust and encourages community feedback.

## Building a Culture of Responsibility

Addressing bias isn’t just a one-time exercise—it’s an ongoing process. This demands a culture that values ethics alongside innovation. Some ways to cultivate that mindset:

- **Educate Everyone**: Have open conversations about bias with your data scientists, developers, product managers, and executives.  
- **Interdisciplinary Collaboration**: Bring in sociologists, psychologists, and other experts to round out your understanding of how AI can affect people’s lives.  
- **Continuous Monitoring**: Even after a model is deployed, keep tabs on its performance and update it with new, more diverse data as your user base evolves.

## Wrapping Up

Machine learning bias isn’t some abstract, far-off concern. It has real-world implications: from the products we buy to the services we access, and even to the opportunities we’re given. The good news is that with awareness, careful planning, and consistent effort, we can make our AI systems more equitable and trustworthy.

- **Remember**: Bias can creep in at any stage—data collection, model training, or even post-deployment.  
- **Focus on fairness**: Evaluate your models using more than just accuracy.  
- **Stay vigilant**: Your job isn’t done once the model is deployed. Keep monitoring and refining.

When we actively work to understand and address bias, we’re taking a huge step toward ensuring that machine learning benefits everyone—not just a select few. And that’s really the promise and the power of AI: to make our lives easier, more interesting, and more connected, but without leaving anybody behind.`
  },

  "react-optimization": {
    title: "Optimizing React Applications",
    content: `React is known for its efficient rendering and declarative style, but as applications grow, performance issues can creep in if you're not careful. The good news is that there are many strategies to ensure your React apps remain lightning-fast and responsive.

## Why React Performance Matters

- **Better User Experience**: Snappy interfaces keep users engaged and happy.
- **Resource Efficiency**: Optimized code means less strain on servers and client devices.
- **Scalability**: As your app grows, performance pitfalls can compound. Good habits early on pay off.

## Common Performance Pitfalls

1. **Unnecessary Renders**  
   - Sometimes components re-render when their data hasn’t really changed.
   - Overly complicated state structures can cause entire sections of the UI to re-render.

2. **Inefficient Data Fetching**  
   - Fetching too much data at once or not caching data can slow down initial loads.
   - Nested or repeated API calls can lead to redundant network requests.

3. **Too Many Large Libraries**  
   - Bloated bundle sizes can increase load times and degrade performance on slower devices or networks.

## Practical Optimization Techniques

1. **Memoization with React.memo and useMemo**  
   - Wrap functional components with \`React.memo\` to skip re-renders when props don’t change.
   - Use \`useMemo\` for expensive calculations that should only re-run when relevant dependencies change.

2. **useCallback for Event Handlers**  
   - By returning a memoized function, you ensure that child components receiving these callbacks don’t re-render unnecessarily.

3. **Code Splitting and Lazy Loading**  
   - Tools like \`React.lazy\` and dynamic imports let you split your app into smaller chunks.
   - Load critical features first, then fetch additional code only when it’s needed.

4. **Windowing or Virtualization**  
   - Libraries like \`react-window\` or \`react-virtualized\` render only what’s visible on screen.
   - This approach is especially useful for large lists or tables.

5. **Efficient State Management**  
   - Use context or libraries like Redux, Zustand, or MobX with caution. Overuse can trigger unnecessary re-renders.
   - Keep local state as close to where it’s needed as possible.

6. **Optimized Images and Media**  
   - Serve correctly sized images or use responsive image techniques.
   - Consider lazy-loading images to reduce initial load times.

## Measuring Performance

- **React Profiler**: Available in the React DevTools extension, it helps you track render times and identify bottlenecks.
- **Chrome DevTools**: Offers a Performance panel where you can see CPU usage and timeline events.
- **Lighthouse**: An automated tool that audits performance, accessibility, and more.

## Final Thoughts

Optimizing React applications is a continuous process. By employing memoization, code splitting, and efficient data handling, you’ll keep your UI fast and your users happy. Don’t forget to measure and profile regularly—data-driven insights will guide you to the most impactful improvements.

A streamlined, well-optimized React app not only delights end-users but also lays the groundwork for future growth. As your project scales, these best practices ensure you remain nimble, maintainable, and efficient.`
  },

  "nextjs-fullstack": {
    title: "Introduction to Next.js for Full-Stack Development",
    content: `Next.js has rapidly become a go-to framework for building production-ready React applications—complete with server-side rendering (SSR), static site generation (SSG), and a host of performance optimizations out of the box. If you're looking to take your React skills to the next level by building full-stack applications, Next.js is a fantastic place to start.

## Why Next.js?

1. **Built-In SSR and SSG**  
   - Server-side rendering can improve SEO and offer faster initial load times.  
   - Static site generation is perfect for content-heavy apps where data doesn’t change too frequently.

2. **File-Based Routing**  
   - Instead of configuring complex routing libraries, Next.js uses a straightforward \`pages/\` directory structure.
   - Dynamic routes make it easy to handle parameterized URLs (\`/pages/blog/[slug].tsx\`).

3. **API Routes**  
   - Need a quick backend endpoint? Next.js lets you create API routes directly inside the \`pages/api\` folder.
   - This means you can serve both frontend pages and backend logic from the same codebase.

4. **Performance and Image Optimization**  
   - Next.js includes an Image component that automatically optimizes images.
   - Code splitting, prefetching, and caching strategies are built-in by default.

## Setting Up a Next.js Project

1. **Install Dependencies**  
   \`\`\`bash
   npx create-next-app my-nextjs-project
   cd my-nextjs-project
   npm run dev
   \`\`\`
   - This sets up a basic Next.js project with a recommended structure.

2. **Explore the Pages Folder**  
   - Each file inside \`pages/\` corresponds to a route.
   - Add \`index.tsx\` for your homepage, and additional files or subfolders as you need them.

3. **Leverage Dynamic Routes**  
   - Example: \`pages/posts/[id].tsx\` can respond to URLs like \`/posts/1\` or \`/posts/hello-world\`.
   - Use functions like \`getStaticProps\`, \`getStaticPaths\`, and \`getServerSideProps\` for data fetching and pre-rendering.

## Building a Full-Stack App with Next.js

1. **Database Integration**  
   - You can connect to databases (MySQL, MongoDB, PostgreSQL, etc.) via API routes or server-side data fetching.
   - Popular ORMs like Prisma or Sequelize make it easier to interact with databases.

2. **Authentication**  
   - Use libraries like NextAuth or Auth0 to handle user sign-ups, logins, and tokens.
   - Store sensitive credentials in environment variables to keep your secrets safe.

3. **API Routes**  
   - Create endpoints inside \`pages/api/\` to handle server-side logic, such as sending emails, processing payments, or performing CRUD operations.
   - Deploying to platforms like Vercel automatically sets up these endpoints in a serverless environment.

4. **Deployment**  
   - Next.js deploys seamlessly to platforms like Vercel, where SSR and API routes are supported out of the box.
   - You can also deploy to AWS, Azure, or other services via Docker containers.

## Tips and Best Practices

- **Use \`getStaticProps\` and \`getServerSideProps\` Wisely**  
  - \`getStaticProps\` is perfect for data that doesn’t change often, while \`getServerSideProps\` fetches data on each request.
- **Optimize Images**  
  - Next.js’s built-in Image component automatically resizes and optimizes images on the fly.
- **Keep It Organized**  
  - As your app grows, maintain a clear folder structure for components, hooks, utility functions, and pages.

## Conclusion

Next.js offers a streamlined, powerful approach to building full-stack React applications. With features like server-side rendering, API routes, and automatic code splitting, you can create highly performant apps without juggling multiple frameworks. Whether you’re building a small personal project or a large enterprise platform, Next.js’s developer experience is both intuitive and scalable.

Ready to dive in? Install Next.js, experiment with its data fetching methods, and explore how it can simplify your stack. You’ll soon discover why Next.js is at the forefront of modern web development.`
  }
};
