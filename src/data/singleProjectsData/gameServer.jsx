// Import images
import Image1 from "../../images/nodejs-logo.png";

export const gameServer = {
  ProjectHeader: {
    title: "Game Server",
    publishDate: "",
    tags: "WebSocket / Backend",
  },
  ProjectImages: [
    {
      id: 1,
      title: "Game Server",
      img: Image1,
    },
  ],
  ProjectInfo: {
    ClientHeading: "",
    CompanyInfo: [],
    ObjectivesHeading: "Objective",
    ObjectivesDetails:
      "Create game-server with WebSocket to play games online.",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: ["NodeJS", "Socket.IO", "WebSocket"],
      },
    ],
    ProjectDetailsHeading: "Challenge",
    ProjectDetails: [
      {
        id: 1,
        details:
          "After creating Games I developed a game-server to play online",
      },
      {
        id: 2,
        details:
          "Working with Socket.IO is taught me how to handle online gaming. Which data should send on current state. Learned room modules to create room for players. How to handle time for time based games like Chess.",
      },
      {
        id: 3,
        details:
          "After developing game-server we wanted to know our boundary like how many player can play each other at same time. So we tested our game-server with Load testing.",
      },
    ],
    SocialSharingHeading: "",
    SocialSharing: [],
  },
};
