import { nodeColors } from "../../constants";

const Controller = ({
  cellSize,
  controllerSelectedNode,
  refreshNodes,
  onControllerButtonClick,
}) => {
  const _cellSize = (cellSize / 3) * 2;

  const selectNodeButton = (name, title, nodeColor) => {
    const onClick = () => onControllerButtonClick(name);
    const content = (
      <div
        className={`${nodeColor}  rounded`}
        style={{
          width: _cellSize + "px",
          height: _cellSize + "px",
        }}
      ></div>
    );
    const button = (
      <button
        onClick={onClick}
        style={{
          boxShadow: `${
            controllerSelectedNode === name
              ? "rgb(255 255 255) 0px 0px 9px"
              : ""
          }`,
        }}
        // className={controllerSelectedNode === name ? "bg-primaryDark2" : ""}
        className={`${
          controllerSelectedNode === name ? "bg-indigo-700" : "bg-indigo-500"
        } font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl  hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300`}
      >
        {content}
      </button>
    );
    return button;
  };

  const refreshButton = (name, title, nodeColor) => {
    const onClick = () => refreshNodes();
    const button = (
      <button
        onClick={onClick}
        // className={controllerSelectedNode === name ? "bg-primaryDark2" : ""}
        className={`${
          controllerSelectedNode === name ? "bg-indigo-700" : "bg-indigo-500"
        } font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl  hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300`}
      >
        {title}
      </button>
    );
    return button;
  };

  return (
    <div className="pt-2 mb-8">
      <div className="flex flex-wrap w-full justify-between landscapeM:flex-col">
        {selectNodeButton("start", "Start Node", nodeColors.start)}
        {selectNodeButton("finish", "Finish Node", nodeColors.finish)}
        {selectNodeButton("wall", "Wall Node", nodeColors.wall)}
        {refreshButton("refresh", "Refresh", nodeColors.wall)}
      </div>
    </div>
  );
};

export default Controller;
