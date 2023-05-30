// Import images
import Image1 from "../../images/slack_v_teams.jpg";

export const microsoftTeamsAndSlackBot = {
  ProjectHeader: {
    title: "Microsoft Teams Bot",
    publishDate: "",
    tags: "Backend",
  },
  WebsiteLink: { link: "https://guul.games/microsoft-teams" },
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
      "Build a bot to play games and do repetitive tasks in microsoft teams and slack.",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: ["NodeJS", "botbuilder", "@slack/bolt", "@microsoft/teamsfx"],
      },
    ],
    ProjectDetailsHeading: "Challenge",
    ProjectDetails: [
      {
        id: 1,
        details:
          "Built a bot that can respond some of commands to play games in microsoft teams and slack.",
      },
      {
        id: 2,
        details:
          "Even both apps have similiar integration roadmap there are still differences in between. Microsoft teams published in 2016 so they are still updating some methods so one of the challenges are we need to adapt and react those changes in our bot so users still can access everything they need.",
      },
      {
        id: 3,
        details:
          "Our main challenge was to implement our game logic and UI in limited button and text formats.",
      },
      {
        id: 4,
        details:
          "With bot, our users can play games without leaving teams or slack. So without redirecting a new website we did handle a game ecosystem in chat applications.",
      },
    ],
    SocialSharingHeading: "",
    SocialSharing: [],
  },
};
