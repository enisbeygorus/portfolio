import { useEffect, useState, useRef, useCallback } from "react";
import { createAdjacenyMatrix, createNodes } from "./helperFunctions";
import { DijkstraAlgorithm } from "./dijkstraAlgorithm";
import { nodeColors } from "./constants";
import Nodes from "./UI/Node/Nodes";
import Controller from "./UI/Controller/Controller";
import { isMobile } from "../../../utils";
import { nodeAnimationWaitInMillisecond } from "./constants";

const PathVisualizer = () => {
  const cellSize = 30;

  const onAnimation = useRef(false);

  const [showRoad, setShowRoad] = useState(false);
  const [nodeConfig, setNodeConfig] = useState({
    numberOfRow: 12,
    numberOfColumn: 14,
    startNodeId: 20,
    finishNodeId: 2,
    wallNodes: [],
    searchedNodes: [],
    roadNodes: [],
  });

  const [controllerSelectedNode, setControllerSelectedNode] = useState("");

  const [nodes, setNodes] = useState(createNodes(nodeConfig));

  useEffect(() => {
    const _isMobile = isMobile();
    const sWidth = window.screen.width;
    const sHeight = window.screen.height;
    if (_isMobile) {
      if (sHeight > sWidth) {
        const newNumberOfColumn = Math.floor(sWidth / 40);
        const newNodeConfig = {
          ...nodeConfig,
          numberOfRow: newNumberOfColumn,
          numberOfColumn: newNumberOfColumn,
        };
        setNodeConfig(newNodeConfig);
        setNodes(createNodes(newNodeConfig));
      }
    }

    return () => {};
  }, []);

  const onNodeClick = useCallback(
    (node) => {
      if (onAnimation.current) return;

      const _nodeConfig = {
        ...nodeConfig,
        wallNodes: [...nodeConfig.wallNodes],
        searchedNodes: [...nodeConfig.searchedNodes],
      };

      // onClick change wall node
      if (controllerSelectedNode === "wall") {
        if (_nodeConfig.finishNodeId === -1 || _nodeConfig.startNodeId === -1) {
          return;
        }
        const { wallNodes } = _nodeConfig;
        const index = wallNodes.indexOf(node.id);
        if (index !== -1) {
          wallNodes.splice(index, 1);
        } else {
          _nodeConfig.wallNodes.push(node.id);
        }
      }

      // onClick change start or finish node
      if (controllerSelectedNode === "start") {
        _nodeConfig.startNodeId = node.id;
        if (node.isFinish) {
          _nodeConfig.finishNodeId = -1;
        }
      }

      if (controllerSelectedNode === "finish") {
        _nodeConfig.finishNodeId = node.id;
        if (node.isStart) {
          _nodeConfig.startNodeId = -1;
        }
      }

      // onClick clear searchedNodes and roadNodes
      if (
        controllerSelectedNode === "finish" ||
        controllerSelectedNode === "start"
      ) {
        _nodeConfig.searchedNodes = [];
        _nodeConfig.roadNodes = [];
      }

      setShowRoad(false);
      setNodeConfig(_nodeConfig);
      setNodes(createNodes(_nodeConfig));
    },
    [onAnimation.current, nodeConfig, nodes, controllerSelectedNode]
  );

  const visualizeButtonHandler = () => {
    if (nodeConfig.finishNodeId === -1 || nodeConfig.startNodeId === -1) {
      return;
    }

    onAnimation.current = true;

    const createdAdjacenyMatrix = createAdjacenyMatrix(
      nodeConfig.numberOfRow,
      nodeConfig.numberOfColumn,
      nodeConfig.wallNodes
    );

    const { pathArr, searchedNodes } = DijkstraAlgorithm(
      createdAdjacenyMatrix,
      nodeConfig.startNodeId,
      nodeConfig.finishNodeId
    );

    if (pathArr.length > 0) {
      // show road when animation finished
      setTimeout(() => {
        setShowRoad(true);
        onAnimation.current = false;
      }, ((searchedNodes.length * nodeAnimationWaitInMillisecond) / 4) * 7);
    }

    refreshNodes();

    setNodes(
      createNodes({
        ...nodeConfig,
        searchedNodes,
        roadNodes: pathArr,
      })
    );
  };

  const onControllerButtonClick = (name) => {
    if (name === controllerSelectedNode) {
      setControllerSelectedNode("");
      return;
    }
    setControllerSelectedNode(name);
  };

  const nodeBgColorHandler = (node) => {
    if (!node) return "";
    let backgroundColor = nodeColors.default;
    if (node.isStart) backgroundColor = nodeColors.start;
    if (node.isFinish) backgroundColor = nodeColors.finish;
    if (node.isWall) backgroundColor = nodeColors.wall;
    if (node.isRoad && showRoad) backgroundColor = nodeColors.road;

    return backgroundColor;
  };

  const refreshNodes = () => {
    const _nodeConfig = {
      ...nodeConfig,
      wallNodes: [],
      searchedNodes: [],
    };

    setShowRoad(false);
    setNodeConfig(_nodeConfig);
    setNodes(createNodes(_nodeConfig));
  };

  const drawController = () => {
    return (
      <Controller
        cellSize={cellSize}
        controllerSelectedNode={controllerSelectedNode}
        refreshNodes={refreshNodes}
        onControllerButtonClick={onControllerButtonClick}
      />
    );
  };

  const drawNodes = () => {
    return (
      <Nodes
        nodes={nodes}
        nodeProps={{
          controllerSelectedNode: controllerSelectedNode,
          cellSize: cellSize,
          showRoad: showRoad,
          onNodeClick: onNodeClick,
          nodeBgColorHandler: nodeBgColorHandler,
        }}
      />
    );
  };

  const drawVisualizeButton = () => {
    return (
      <div className="flex justify-center mt-4">
        <button
          disabled={onAnimation.current ? true : false}
          onClick={visualizeButtonHandler}
          className={`${
            onAnimation.current ? "bg-gray-500" : "bg-indigo-500"
          }  font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl  hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300`}
        >
          Visualize
        </button>
      </div>
    );
  };

  return (
    <div className="landscapeM:flex landscapeM:justify-center">
      {drawController()}
      {drawNodes()}
      {drawVisualizeButton()}
    </div>
  );
};

export default PathVisualizer;
