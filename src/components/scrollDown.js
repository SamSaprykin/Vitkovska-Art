import React from "react";
import IconsLibrary from "./iconsLibrary";

const ScrollDown = () => {
  return (
    <div className="relative rounded-t-full border-pink-500 inline-block">
      <div className="absolute left-2/4 top-2/4 translate-x-neg50 translate-y-neg50">
        <IconsLibrary type="scroll-arrow" />
      </div>
      <div className="animate-spin-slow">
        <IconsLibrary type="scroll-down" />
      </div>
    </div>
  );
};

ScrollDown.defaultProps = {};

ScrollDown.propTypes = {};

export default ScrollDown;
