import React, { useState } from "react";

const CursorContext = React.createContext();

const CursorProvider = ({ children }) => {
  const [cursorType, setCursorType] = useState({
    type: "default",
    imageName: null,
  });
  const [hoverElement, setHoverElement] = useState(null);

  const values = {
    cursorType,
    setCursorType,
    hoverElement,
    setHoverElement,
  };

  return (
    <CursorContext.Provider value={values}>{children}</CursorContext.Provider>
  );
};

export { CursorProvider };
export default CursorContext;
