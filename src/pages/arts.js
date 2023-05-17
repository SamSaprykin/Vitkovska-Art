import React, { useContext } from "react";

import { getImage, GatsbyImage } from "gatsby-plugin-image";
import {
  motion,
  useViewportScroll,
  useTransform,
  circOut,
} from "framer-motion";
import { Link } from "gatsby";
import useArtsColumns from "../hooks/useArtsPageColumns";
import CursorContext from "../context/CursorContext";
import { socialLinks } from "../components/categoryServices";
import IconsLibrary from "../components/iconsLibrary";

const StickySection = ({ setCursorType }) => {
  const handleMouseEnter = () => {
    setCursorType({
      type: "hover-link",
      imageName: null,
    });
  };

  const handleMouseLeave = () => {
    setCursorType({
      type: "default",
      imageName: null,
    });
  };
  return (
    <section className="-mx-4 h-96 text-white py-16 -mt-48 z-10 relative bg-bgMain">
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{
          enter: { transition: { delayChildren: 0.5 } },
        }}
        className="min-h-halfscreen w-full flex flex-wrap items-center justify-center relative z-10"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a
          href={`mailto:vitkovskaya.artwork@gmail.com`}
          className="text-[#e78831] block italic font-serif text-3xl md:text-4xl xl:text-5xl 3xl:text-6xl nav--active nav--active--large relative hover:text-white focus:text-white transition ease-in-out duration-300 hover:cursor-none"
        >
          Drop me a line!
        </a>
      </motion.div>
      <h5 className="text-center text-xl md:text-2xl pr-px text-slate-100 font-serif font-display hover:cursor-none mt-8">
        Or
      </h5>
      <h3 className="text-center text-slate-100 italic font-serif md:text-2xl lg:text-3xl relative z-10 leading-tight mix-blend-difference">
        Follow Me
      </h3>
      <div className="flex row justify-center w-full mt-8 items-center">
        {socialLinks.map((social) => {
          return (
            <div key={social.name} className="mx-2">
              <a
                href={social.link}
                className="hover:cursor-none"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <IconsLibrary type={social.name} />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const ArtWrapper = ({ handleMouseEnter, handleMouseLeave, column }) => {
  return (
    <div className="w-full">
      {column.art.map((artItem) => {
        const image = getImage(artItem.artImage);

        return (
          <Link
            className="my-2 md:my-4 lg:my-8 block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            key={artItem.filename}
            to={artItem.category.toLowerCase()}
          >
            <GatsbyImage image={image} className="!w-full overflow-hidden	" />
          </Link>
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
    setCursorType({
      type: "hover-image",
      imageName: null,
    });
  };

  const handleMouseLeave = () => {
    setCursorType({
      type: "default",
      imageName: null,
    });
  };

  return (
    <>
      <div className="flex justify-center items-start h-full overflow-hidden -mx-4">
        {ArtsPageColumns.imagesColumns.map((column) => {
          switch (column.columnName) {
            case "Left Column":
              return (
                <motion.div
                  className="hidden w-[30%] md:flex flex-col items-center justify-items-center transform side-column px-1 md:px-2 lg:px-4"
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
                  className="w-[64%] md:w-[40%] flex flex-col center-column items-center justify-items-center px-1 md:px-2 lg:px-4"
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
                  className="w-[36%] md:w-[30%] flex flex-col items-center justify-items-center px-1 md:px-2 lg:px-4"
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
      <StickySection setCursorType={setCursorType} />
    </>
  );
};

export default ArtsPage;
