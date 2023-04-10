import React, { useContext } from "react";

import { getImage, GatsbyImage } from "gatsby-plugin-image";
import {
  motion,
  useViewportScroll,
  useTransform,
  circOut,
} from "framer-motion";
import useArtsColumns from "../hooks/useArtsPageColumns";
import CursorContext from "../context/CursorContext";

const StickySection = () => {
  return (
    <section className="h-96 text-white py-16 -mt-48 z-50 relative bg-bgMain">
      <h1 className="text-6xl text-center">Drop me a line!</h1>
    </section>
  );
};

const ArtWrapper = ({ handleMouseEnter, handleMouseLeave, column }) => {
  return (
    <div className="w-full">
      {column.art.map((artItem) => {
        const image = getImage(artItem.artImage);

        return (
          <div
            className="my-8"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            key={artItem.filename}
          >
            <GatsbyImage image={image} className="!w-full overflow-hidden	" />
          </div>
        );
      })}
    </div>
  );
};

const ArtsPage = () => {
  const { scrollY } = useViewportScroll();
  const { setCursorType } = useContext(CursorContext);
  const x1 = useTransform(scrollY, [0, 4500], [-120, 350]);
  const x2 = useTransform(scrollY, [0, 4500], [-600, 950], { ease: circOut });
  const x3 = useTransform(scrollY, [0, 4500], [-120, -100]);

  const ArtsPageColumns = useArtsColumns();

  const handleMouseEnter = () => {
    setCursorType("hover-image");
  };

  const handleMouseLeave = () => {
    setCursorType("default");
  };
  return (
    <>
      <div className="flex justify-center items-start h-full overflow-hidden -mx-4">
        {ArtsPageColumns.imagesColumns.map((column) => {
          switch (column.columnName) {
            case "Left Column":
              return (
                <motion.div
                  className="w-[30%] flex flex-col items-center justify-items-center transform side-column px-4"
                  style={{ y: x1 }}
                >
                  <ArtWrapper
                    column={column}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                  />
                </motion.div>
              );
            case "Center Column":
              return (
                <motion.div
                  className="w-[40%] flex flex-col center-column items-center justify-items-center px-4"
                  style={{ y: x2 }}
                >
                  <ArtWrapper
                    column={column}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                  />
                </motion.div>
              );
            case "Right Column":
              return (
                <motion.div
                  className="w-[30%] flex flex-col items-center justify-items-center px-4"
                  style={{ y: x3 }}
                >
                  <ArtWrapper
                    column={column}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                  />
                </motion.div>
              );
            default:
              return <></>;
          }
        })}
      </div>
      <StickySection />
    </>
  );
};

export default ArtsPage;
