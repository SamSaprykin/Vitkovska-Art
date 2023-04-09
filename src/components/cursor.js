import React, { useContext, useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import CursorContext from "../context/CursorContext";

const Cursor = (props) => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const { cursorType, hoverElement, setCursorType } = useContext(CursorContext);
  const [hovering, setHovering] = useState(false);
  const springConfig = {
    damping: 35,
    stiffness: 700,
    mass: 1,
  };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  React.useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  useEffect(() => {
    if (hoverElement) {
      setCursorType("hover");
    } else {
      setCursorType("default");
    }
  }, [hoverElement]);
  const defaultCursorClassess = "bg-[#e78831] w-4 h-4 rounded-full";
  const hoverCursorClasses =
    "w-10 h-10 rounded-full border-solid border-[#e78831] border-2";
  return (
    <motion.div
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
      className="fixed z-[99999] w-0 h-0"
    >
      {!props.hideCursor === true ? (
        <motion.div
          layoutId="cursor"
          className={`absolute  -top-2 -left-2 pointer-events-none rounded-full ${
            cursorType === "default"
              ? defaultCursorClassess
              : hoverCursorClasses
          } ${hovering ? "hovering" : ""}`}
        ></motion.div>
      ) : null}
    </motion.div>
  );
};

export default Cursor;
