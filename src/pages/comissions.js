import React, { useContext } from "react";

import SEO from "../components/seo";

import CursorContext from "../context/CursorContext";

const ComissionsPage = () => {
  const { setCursorType } = useContext(CursorContext);

  const handleMouseEnter = (imageName) => {
    setCursorType({
      type: "link-image",
      imageName,
    });
  };

  const handleMouseLeave = () => {
    setCursorType({
      type: "default",
      imageName: null,
    });
  };

  return (
    <div className="pb-16">
      <SEO title="Comissions" />
      <ul className="flex flex-col text-6xl text-slate-100 tracking-wide font-[500] font-sans font-normal  max-w-[454px] h-max cursor-none	">
        <li
          className="h-[80px] mb-4 inline-block"
          onMouseEnter={() => handleMouseEnter("scenery")}
          onMouseLeave={handleMouseLeave}
        >
          Scenery
        </li>
        <li
          className="h-[80px] mb-4 inline-block	"
          onMouseEnter={() => handleMouseEnter("backgrounds")}
          onMouseLeave={handleMouseLeave}
        >
          Backgrounds
        </li>
        <li
          className="h-[80px] mb-4 inline-block	"
          onMouseEnter={() => handleMouseEnter("nature")}
          onMouseLeave={handleMouseLeave}
        >
          Nature
        </li>
        <li
          className="h-[80px] mb-4 inline-block	"
          onMouseEnter={() => handleMouseEnter("characters")}
          onMouseLeave={handleMouseLeave}
        >
          Characters
        </li>
        <li
          className="h-[80px] inline-block	"
          onMouseEnter={() => handleMouseEnter("architecture")}
          onMouseLeave={handleMouseLeave}
        >
          Architecture
        </li>
      </ul>
    </div>
  );
};

export default ComissionsPage;
