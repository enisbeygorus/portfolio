import { nodeAnimationWaitInMillisecond } from "./constants";

export const createAdjacenyMatrix = (rowCount, columnCount, wallNodes = []) => {
  const newAdjancyArray = [];

  for (let i = 0; i < rowCount * columnCount; i++) {
    const row = [];
    for (let j = 0; j < rowCount * columnCount; j++) {
      row.push(adjacenyMatrixHelper(i, j, columnCount, wallNodes));
    }
    newAdjancyArray.push(row);
  }

  return newAdjancyArray;
};

export const adjacenyMatrixHelper = (row, column, columnCount, wallNodes) => {
  if (row === column) {
    return 0;
  } else if (
    Math.abs(row - column) === 1 &&
    checkNodeEndOfRow(row, column, columnCount) &&
    checkNodeStartOfRow(row, column, columnCount)
  ) {
    if (checkNodeIsWallNode(wallNodes, row, column)) {
      return 0;
    }
    return 1;
  } else if (Math.abs(row - column) === columnCount) {
    if (checkNodeIsWallNode(wallNodes, row, column)) {
      return 0;
    }
    return 1;
  } else {
    return 0;
  }
};

export const checkNodeEndOfRow = (row, column, columnCount) => {
  return !(row % columnCount === columnCount - 1 && column - row === 1);
};

export const checkNodeStartOfRow = (row, column, columnCount) => {
  return !(row % columnCount === 0 && row - column === 1);
};

export const checkNodeIsWallNode = (wallNodes, row, column) => {
  const wallNode =
    wallNodes.indexOf(row) !== -1 || wallNodes.indexOf(column) !== -1;
  return wallNode;
};

////////////////////////////// INIT NODES

export const createNodes = (createNodesObj) => {
  const nodes = [];
  for (let i = 0; i < createNodesObj.numberOfRow; i++) {
    const createColumsObj = { ...createNodesObj, row: i };

    const row = createColumns(createColumsObj);
    nodes.push(row);
  }

  return nodes;
};

export const createColumns = (createColumnsObj) => {
  const rowArr = [];
  for (let column = 0; column < createColumnsObj.numberOfColumn; column++) {
    rowArr.push(createNodeObject({ ...createColumnsObj, column }));
  }
  return rowArr;
};

export const createNodeObject = ({
  row,
  column,
  numberOfColumn,
  startNodeId,
  finishNodeId,
  wallNodes,
  searchedNodes,
  roadNodes,
}) => {
  const id = coordinateToId(row, column, numberOfColumn);
  const isStart = column + row * numberOfColumn === startNodeId ? true : false;
  const isFinish =
    column + row * numberOfColumn === finishNodeId ? true : false;

  let isWall = wallNodes.indexOf(id) !== -1 ? true : false;
  isWall = isStart ? false : isWall;
  isWall = isFinish ? false : isWall;

  const isSearched = searchedNodes.indexOf(id) !== -1 ? true : false;
  const waitInMilliSecond = isSearched
    ? searchedNodes.indexOf(id) * nodeAnimationWaitInMillisecond
    : 0;
  const isRoad = roadNodes.indexOf(id) !== -1 ? true : false;

  return {
    col: column,
    row: row,
    isStart,
    isFinish,
    isRoad,
    isWall,
    id,
    waitInMilliSecond,
    isSearched,
  };
};

export const coordinateToId = (i, j, numberOfColumn) => {
  return j + i * numberOfColumn;
};
