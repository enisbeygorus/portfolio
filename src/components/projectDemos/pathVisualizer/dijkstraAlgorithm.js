const MAX_VALUE = Infinity;

const selectMinVertex = (value, processed, graphLength) => {
  let minimum = MAX_VALUE;
  let vertex = 0;
  for (let i = 0; i < graphLength; ++i) {
    if (processed[i] === false && value[i] < minimum) {
      vertex = i;
      minimum = value[i];
    }
  }
  return vertex;
};

export const DijkstraAlgorithm = (graph, startNodeId, finishNodeId) => {
  const parent = [];
  const value = [];
  const processed = [];
  const searchedNodes = [];

  for (let i = 0; i < graph.length; i++) {
    value.push(MAX_VALUE);
    processed.push(false);
  }

  parent[startNodeId] = -1;
  value[startNodeId] = 0;

  for (let i = 0; i < graph.length - 1; i++) {
    const u = selectMinVertex(value, processed, graph.length);
    processed[u] = true;
    searchedNodes.push(u);

    for (let j = 0; j < graph.length; j++) {
      if (
        graph[u][j] !== 0 &&
        processed[j] === false &&
        value[u] !== MAX_VALUE &&
        value[u] + graph[u][j] < value[j]
      ) {
        value[j] = value[u] + graph[u][j];
        parent[j] = u;
      }
    }
  }

  let tempIndex = finishNodeId;

  let pathArr = [];

  for (let index = 0; index < parent.length; index++) {
    let element = parent[tempIndex];
    tempIndex = element;

    if (tempIndex !== undefined) pathArr.push(tempIndex);
  }

  pathArr.splice(pathArr.length - 2, 2);
  pathArr = pathArr.reverse();

  searchedNodes.shift();
  const indexFinishNodeId = searchedNodes.indexOf(finishNodeId);
  searchedNodes.splice(indexFinishNodeId);

  // console.log("searchedNodes: ", searchedNodes);
  // console.log("pathArr: ", pathArr);

  return { pathArr, searchedNodes };
};

function checkForDuplicates(array) {
  return new Set(array).size !== array.length;
}
