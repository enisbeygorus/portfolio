// Import images
import Image1 from "../../images/sky-blog.png";

export const nextjsBlogApp = {
  ProjectHeader: {
    title: "Next.js Blog App",
    publishDate: "",
    tags: "UI / Frontend",
  },
  WebsiteLink: { link: "https://enisbeygorus-blog-app.netlify.app/" },
  SourceLink: { link: "https://github.com/Enisbeygorus/nextjs-blog-app" },
  ProjectImages: [
    {
      id: 1,
      title: "Blog App UI",
      img: Image1,
    },
  ],
  ProjectInfo: {
    ClientHeading: "",
    CompanyInfo: [],
    ObjectivesHeading: "Objective",
    ObjectivesDetails: "Build Blog App with NextJS and add CI/CD",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: [
          "Next.js",
          "JavaScript",
          "TypeScript",
          "React",
          "TailwindCSS",
          "React Testing Library",
          "Jest",
          "CI/CD",
        ],
      },
    ],
    ProjectDetailsHeading: "Challenge",
    ProjectDetails: [
      {
        id: 1,
        details:
          "I wanted to explore Next.js 13 with new app directory feature. So I build a blog app to understand the pros and cons of server side rendering with Next.js",
      },
      {
        id: 2,
        details:
          "If you want better SEO with static content and familiar with React, Next.js is really good option to take.",
      },
      {
        id: 3,
        details:
          "After building a blog page I wanted to test it so added test cases with Jest and React Testing Library.",
      },
      {
        id: 4,
        details:
          "Then I used the power of github actions to connect CI. On push to development branch I added github workflow to run our test cases.",
      },
      {
        id: 5,
        details:
          "When CI is finished and if our tests were passed I created a CD with Netlify. So when a commit occur on main branch, Netlify will deploy our new site.",
      },
      {
        id: 6,
        details:
          "Finally to design the website I used tailwind. I like simple and memorable desings so used few colors",
      },
      {
        id: 7,
        details: "You can check the website and source code.",
      },
    ],
    SocialSharingHeading: "",
    SocialSharing: [],
  },
};
