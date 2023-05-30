import { useState, createContext, useEffect } from "react";
import { singleProjectData as singleProjectDataJson } from "../data/singleProjectData";
import { useParams } from "react-router-dom";
import {
  visualizeDijkstraData,
  games,
  gameServer,
  eCommerce,
  microsoftTeamsAndSlackBot,
  realEstateAPI,
  nextjsBlogApp,
} from "../data/singleProjectsData";

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
  const params = useParams();
  const [singleProjectData, setSingleProjectData] = useState(
    singleProjectDataJson
  );

  useEffect(() => {
    const projectName = params.projectName.toLowerCase();
    switch (projectName) {
      case "visualize-dijkstra-algorithm":
        setSingleProjectData(visualizeDijkstraData);
        break;
      case "games":
        setSingleProjectData(games);
        break;
      case "game-server":
        setSingleProjectData(gameServer);
        break;
      case "e-commerce":
        setSingleProjectData(eCommerce);
        break;
      case "microsoft-teams-and-slack-bot":
        setSingleProjectData(microsoftTeamsAndSlackBot);
        break;
      case "real-estate-api":
        setSingleProjectData(realEstateAPI);
        break;
      case "nextjs-blog-app":
        setSingleProjectData(nextjsBlogApp);
        break;

      default:
        setSingleProjectData(singleProjectDataJson);
        break;
    }
  }, [params.projectName]);

  return (
    <SingleProjectContext.Provider
      value={{ singleProjectData, setSingleProjectData }}
    >
      {children}
    </SingleProjectContext.Provider>
  );
};

export default SingleProjectContext;
