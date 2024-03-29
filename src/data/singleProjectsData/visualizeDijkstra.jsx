// Import images
import Image1 from "../../images/shortest-path.png";

export const visualizeDijkstraData = {
  ProjectHeader: {
    title: "Visualize Dijkstra Algorithm",
    publishDate: "",
    tags: "UI / Frontend",
  },
  Demo: {
    pathName: "visualize-dijkstra-algorithm",
    descriptions: [
      { id: 1, details: "There is 5 Nodes" },
      {
        id: 2,
        details: "Green: Start node. Algorithm will start to search from here.",
      },
      { id: 3, details: "Red: Finish node. We need to reach this node" },
      {
        id: 4,
        details:
          "Black: Wall Node. Algorithm can't search this node and can't pass through it.",
      },
      {
        id: 5,
        details: "Blue Node: Searched Nodes",
      },
      {
        id: 6,
        details: "White Node: Unsearched Nodes",
      },
      {
        id: 7,
        details:
          "Gameplay: Place green, red and black nodes on board and click Visualize button to find to shortest path.",
      },
    ],
  },
  ProjectImages: [
    {
      id: 1,
      title: "Visualize Dijkstra Algorithm UI",
      img: Image1,
    },
  ],
  ProjectInfo: {
    ClientHeading: "",
    CompanyInfo: [],
    ObjectivesHeading: "Objective",
    ObjectivesDetails:
      "Calculate the shortest path from vertice A to vertice B, while searching change color of vertices that searched. Finally change the color of shortest path",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS"],
      },
    ],
    ProjectDetailsHeading: "Challenge",
    ProjectDetails: [
      {
        id: 1,
        details:
          "Dijkstra's algorithm allows us to find the shortest path between any two vertices of a graph.",
      },
      {
        id: 2,
        details:
          "It differs from the minimum spanning tree because the shortest distance between two vertices might not include all the vertices of the graph.",
      },
      {
        id: 3,
        details:
          "Understand how algorithm work and implement this algorithm as code. After calculating the searched vertices and shortest path from vertice A to vertice B animate the vertices one-by-one",
      },
    ],
    SocialSharingHeading: "",
    SocialSharing: [],
  },
};
