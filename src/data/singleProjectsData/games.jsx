// Import images
import Image1 from "../../images/turn-based.jpg";

export const games = {
  ProjectHeader: {
    title: "Games",
    publishDate: "",
    tags: "UI / Frontend",
  },
  ProjectImages: [
    {
      id: 1,
      title: "Games UI",
      img: Image1,
    },
  ],
  WebsiteLink: { link: "https://guul.games/" },
  ProjectInfo: {
    ClientHeading: "",
    CompanyInfo: [],
    ObjectivesHeading: "Objective",
    ObjectivesDetails:
      "Create Games algorithm, game UI and connect web-socket to play online",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Redux",
          "TailwindCSS",
          "TypeScript",
        ],
      },
    ],
    ProjectDetailsHeading: "Challenge",
    ProjectDetails: [
      {
        id: 1,
        details:
          "In Guul Games I created the games algorithm and implemented the design to frontend.",
      },
      {
        id: 2,
        details:
          "Created Games: Backgammon, Chess, Checkers, Connect4, BattleShip, XOX, Bingo.",
      },
      {
        id: 3,
        details:
          "Creating a game algorithm is really kind of hard but also fun. It teaches to you how certain popular games are made or you gain clue about how they can be done. Also implementing the achievements and player statistics with REST APIs and while doing this I learned best practise about API calls.",
      },
      {
        id: 4,
        details:
          "For state management tools I have used Redux and React Context API",
      },
    ],
    SocialSharingHeading: "",
    SocialSharing: [],
  },
};
