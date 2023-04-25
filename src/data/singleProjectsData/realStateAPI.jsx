// Import images
import Image1 from "../../images/real-estate.png";

export const realEstateAPI = {
  ProjectHeader: {
    title: "Real Estate API",
    publishDate: "",
    tags: "Backend",
  },
  ReferenceLink: { link: "https://github.com/Enisbeygorus/emlak-cuzdani-api" },
  ProjectImages: [
    {
      id: 1,
      title: "Real Estate API",
      img: Image1,
    },
  ],
  ProjectInfo: {
    ClientHeading: "",
    CompanyInfo: [],
    ObjectivesHeading: "Objective",
    ObjectivesDetails: "Create backend to do CRUD operations with MongoDB.",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: ["NodeJS", "MongoDB", "jsonwebtoken", "bcryptjs", "mongoose"],
      },
    ],
    ProjectDetailsHeading: "Challenge",
    ProjectDetails: [
      {
        id: 1,
        details:
          "This was my personal project to handle users api calls. My challenge is handling authentication, creating user, creating store, connecting users to stores. First I created the database with MongoDB then created collection and connected with server.",
      },
      {
        id: 2,
        details:
          "With express I added middleware functions to handle error and authetication. To handle error I used express-async-errors library to handle errors in middleware functions to increase code readability. In this project writing clean code was my top priority. I wrote this project with JavaScript but if I need to write it again I would chose TypeScript.",
      },
    ],
    SocialSharingHeading: "",
    SocialSharing: [],
  },
};
