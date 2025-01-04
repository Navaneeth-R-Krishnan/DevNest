import PropTypes from 'prop-types';

const FileTreeNode = ({ fileName, nodes, onSelect, path }) => {
    const isDir = !!nodes;
    return (
      <div
        onClick={(e) => {
          e.stopPropagation();
          if (isDir) return;
          onSelect(path);
        }}
        style={{ marginLeft: "10px" }}
      >
        <p className={isDir ? "" : "file-node"}>{fileName}</p>
        {nodes && fileName !== "node_modules" && (
          <ul>
            {Object.keys(nodes).map((child) => (
              <li key={child}>
                <FileTreeNode
                  onSelect={onSelect}
                  path={path + "/" + child}
                  fileName={child}
                  nodes={nodes[child]}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  const FileTree = ({ tree, onSelect }) => (
    <FileTreeNode onSelect={onSelect} fileName="/" path="" nodes={tree} />
  );
  
  FileTreeNode.propTypes = {
    fileName: PropTypes.string.isRequired,
    nodes: PropTypes.object,
    onSelect: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired,
  };
  
  FileTree.propTypes = {
    tree: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired,
  };

  export default FileTree;