export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  href?: string;
  image?: string;
};


export const PROJECTS: Project[] = [
  {
    id: "first-website",
    title: "My First Website",
    category: "First Project",
    description:
      "The first website I ever built. A modern, responsive internet café website that works both in mobile and desktop.",
    tags: ["HTML", "CSS"],
    href: "https://web-dev-personal-website-project.vercel.app/",
    image: "/projects/UGH.png",
  },
  {
    id: "first-react-project",
    title: "First React Project",
    category: "React",
    description:
      "My first React project, where I learned components, state, and props by building a simple and interactive Qoute of the Day website.",
    tags: ["React", "Tailwind"],
    href: "https://my-first-react-app-jet-beta.vercel.app/",
    image: "/projects/QOTD.png",
  },
  {
    id: "portfolio-v1",
    title: "Portfolio v1",
    category: "Portfolio",
    description:
      "An earlier version of my portfolio site.",
    tags: ["HTML", "CSS", "JavaScript"],
    href: "https://my-portfolio-beryl-phi-81.vercel.app/",
    image: "/projects/portfolio.png",
  },
  {
    id: "portfolio-v2",
    title: "Portfolio v2",
    category: "Portfolio",
    description:
      "The second iteration of my portfolio.",
    tags: ["HTML", "CSS", "JavaScript"],
    href: "https://freakshowzzz.github.io/My-Portfolio-S.I.A.P/",
    image: "/projects/portfolio2.png",
  },
  {
    id: "group-project1",
    title: "Infographics Project",
    category: "Group Project",
    description:
      "A group project on digital accessibility, where I contributed to creating and presenting an infographic about making websites more inclusive and accessible for people with disabilities.",
    tags: ["Team Collaboration", "HTML", "CSS"],
    href: "https://bocchi-69.github.io/SOCIAL-ISSUES-INFOGRAPHICS-1/?fbclid=IwY2xjawOfiR9leHRuA2FlbQIxMQBzcnRjBmFwcF9pZAwzNTA2ODU1MzE3MjgAAR7imNBF9lFkwNEwF4E5LK0Gy0g9HYlZCt9lEJau_okwgZmLtYvSSRFYEpLvkA_aem_tENQe-f_sjJITbCZumexjg",
    image: "/projects/group project.png",
  },
  {
    id: "group-project2",
    title: "Public Store Web System",
    category: "Group Project",
    description:
      "A group research project where we studied a local store and used our findings to design and develop a website for the business.",
    tags: ["Team Collaboration", "HTML", "CSS", "Javascript"],
    href: "https://bocchi-69.github.io/Alcabs-Landing-Page/index.html?fbclid=IwY2xjawOf05RleHRuA2FlbQIxMABicmlkETBqSTlSeVE1T01acUtXU1E1c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHoGkmkYJpJlw8ByIAPwXD1XQxVsZy8aTStDWJjaL5Lt5-1XwGiC4tTI1oFYu_aem_siuTZ5MEwQyAmoDSciZ2MQ",
    image: "/projects/alcabs landing page.png",
  },
];