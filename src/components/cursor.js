import React, { useContext } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import CursorContext from "../context/CursorContext";

const Cursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const { cursorType } = useContext(CursorContext);

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

  const getClassName = () => {
    switch (cursorType) {
      case "hover-link":
        return "w-10 h-10 rounded-full border-solid border-[#e78831] border-2";
      case "completed":
        return "bg-green-500 w-4 h-4 rounded-full";
      default:
        return "bg-[#e78831] w-4 h-4 rounded-full";
    }
  };

  return (
    <motion.div
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
      className="fixed z-[99999] w-0 h-0"
    >
      {cursorType === "hover-image" ? (
        <motion.div
          layoutId="cursor"
          className={`absolute w-24 h-24 bg-[#e78831] -top-12 -left-12 pointer-events-none rounded-full flex justify-center items-center p-2`}
        >
          <span className="text-xl md:text-xl pr-px text-slate-100 font-bold tracking-widest font-display hover:cursor-none text-center">
            Click Me
          </span>
        </motion.div>
      ) : (
        <motion.div
          layoutId="cursor"
          className={`absolute  -top-2 -left-2 pointer-events-none rounded-full ${getClassName()} `}
        ></motion.div>
      )}
    </motion.div>
  );
};

export default Cursor;
