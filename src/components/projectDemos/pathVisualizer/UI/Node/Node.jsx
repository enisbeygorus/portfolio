import { useState, useEffect } from "react";
import "./Node.css";

export const Node = ({
  node,
  cellSize,
  controllerSelectedNode,
  showRoad,
  onNodeClick,
  nodeBgColorHandler,
}) => {
  const [growAnimation, setGrowAnimation] = useState(false);
  const startFinishWallNode = node.isStart || node.isFinish || node.isWall;

  useEffect(() => {
    let timeOut;

    if (node.isSearched && !showRoad) {
      timeOut = setTimeout(() => {
        setGrowAnimation(true);
      }, node.waitInMilliSecond);
    }

    return () => {
      clearTimeout(timeOut);
    };
  }, [node.isSearched, showRoad, node.waitInMilliSecond]);

  useEffect(() => {
    let timeOut;

    if (showRoad && node.isRoad) {
      timeOut = setTimeout(() => {
        setGrowAnimation(false);
      }, node.waitInMilliSecond / 3);
    }

    if (!showRoad) {
      setGrowAnimation(false);
    }
    return () => {
      clearTimeout(timeOut);
    };
  }, [node.isRoad, showRoad, node.waitInMilliSecond]);

  return (
    <div
      onClick={() => onNodeClick(node)}
      style={{
        width: cellSize + "px",
        height: cellSize + "px",
      }}
      className={`relative rounded w-10 h-10 border border-gray-500 ${nodeBgColorHandler(
        node
      )} ${controllerSelectedNode ? "cursor-pointer" : ""} `}
    >
      {!startFinishWallNode && node.isSearched && growAnimation ? (
        <div className={`pointer-events-none w-full h-full circle`}></div>
      ) : null}

      {/* {node.id} */}
    </div>
  );
};
