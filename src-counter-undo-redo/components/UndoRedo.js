import React from "react";

const UndoRedo = ({ onUndo, onRedo }) => {
  return (
    <div>
      <button onClick={() => onUndo()}>Undo</button>
      <button onClick={() => onRedo()}>Redo</button>
    </div>
  );
};

export default UndoRedo;
