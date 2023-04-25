import { Node } from "./Node";

const Nodes = ({ nodes, nodeProps }) => {
  return (
    <div className="flex flex-col items-center">
      {nodes.map((rowArr, i) => {
        return (
          <div className="flex" key={i}>
            {rowArr.map((node, j) => {
              return <Node node={node} {...nodeProps} key={node.id} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Nodes;
