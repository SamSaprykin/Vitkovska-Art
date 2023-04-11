import React, { useContext, useState } from "react";

import { getImage, GatsbyImage } from "gatsby-plugin-image";
import {
  motion,
  useViewportScroll,
  useTransform,
  circOut,
} from "framer-motion";
import useArtsColumns from "../hooks/useArtsPageColumns";
import CursorContext from "../context/CursorContext";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ handleClose, onClick, modalImage }) => {
  const { setCursorType } = useContext(CursorContext);
  const handleMouseEnter = () => {
    console.log("hover-button");
    setCursorType("hover-image");
  };

  const handleMouseLeave = () => {
    setCursorType("default");
    console.log("stop-button");
  };
  return (
    <motion.div
      onClick={onClick}
      className="w-screen h-screen fixed left-0 top-0 z-[99] bg-bgMain/95 p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex justify-center flex-col items-center"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button
          onClick={handleClose}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="text-[#e78831] text-2xl font-bold font-display absolute top-5 w-20 h-20 bg-slate-100 rounded-full flex justify-center items-center p-1 z-[10] hover:cursor-none"
        >
          Close
        </button>
        <div className="my-8 h-screen">
          <GatsbyImage
            image={modalImage}
            className=" max-h-[90vh] overflow-hidden"
            objectFit="contain"
          />
        </div>
      </div>
    </motion.div>
  );
};

const StickySection = ({ setCursorType }) => {
  const handleMouseEnter = () => {
    setCursorType("hover-link");
  };

  const handleMouseLeave = () => {
    setCursorType("default");
  };
  return (
    <section className="h-96 text-white py-16 -mt-48 z-10 relative bg-bgMain">
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
          href={`mailto:vitkovskaya0592@gmail.com `}
          className="text-[#e78831] block italic font-serif text-3xl md:text-4xl xl:text-5xl 3xl:text-6xl nav--active nav--active--large relative hover:text-white focus:text-white transition ease-in-out duration-300 hover:cursor-none"
        >
          Drop me a line!
        </a>
      </motion.div>
    </section>
  );
};

const ArtWrapper = ({
  handleMouseEnter,
  handleMouseLeave,
  column,
  setModalOpen,
  setModalImage,
}) => {
  return (
    <div className="w-full">
      {column.art.map((artItem) => {
        const image = getImage(artItem.artImage);
        const handleOpenModal = () => {
          setModalOpen(true);
          setModalImage(image);
        };
        return (
          <div
            className="my-8"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            key={artItem.filename}
            onClick={handleOpenModal}
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

  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState();

  const close = () => setModalOpen(false);

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
                    setModalOpen={setModalOpen}
                    setModalImage={setModalImage}
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
                    setModalOpen={setModalOpen}
                    setModalImage={setModalImage}
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
                    setModalOpen={setModalOpen}
                    setModalImage={setModalImage}
                  />
                </motion.div>
              );
            default:
              return <></>;
          }
        })}
      </div>
      <StickySection setCursorType={setCursorType} />

      {modalOpen && (
        <Modal
          modalOpen={modalOpen}
          handleClose={close}
          modalImage={modalImage}
          setCursorType={setCursorType}
        />
      )}
    </>
  );
};

export default ArtsPage;
