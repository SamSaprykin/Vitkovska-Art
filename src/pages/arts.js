import React, { useEffect, useRef, useContext, useState } from "react";
import { gsap } from "gsap";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { useLenis } from "@studio-freight/react-lenis";
import { motion, useScroll, useTransform } from "framer-motion";
import CursorContext from "../context/CursorContext";
import useAllArts from "../hooks/useAllArts";

const Modal = ({ isOpen, onClose, image }) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);
  const lenis = useLenis();
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
      lenis.stop();
      gsap.fromTo(
        modalRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" },
      );
      gsap.fromTo(
        contentRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          delay: 0.1,
        },
      );
    } else {
      document.body.classList.remove("no-scroll");
      lenis.start();
    }

    return () => {
      document.body.classList.remove("no-scroll");
      lenis.start();
    };
  }, [isOpen, lenis]);

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 p-16"
      onClick={onClose}
    >
      <div
        ref={contentRef}
        className="relative overflow-auto rounded-lg shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-full"
          aria-label="Close modal"
        ></button>
        <div className="flex justify-center items-center">
          <GatsbyImage
            image={image}
            className="rounded-lg object-contain h-full"
          />
        </div>
      </div>
    </div>
  );
};

const ArtWrapper = ({
  artItem,
  handleMouseEnter,
  handleMouseLeave,
  onClick,
  row,
  col,
}) => {
  const image = getImage(artItem.artImage);

  const handleClick = (e) => {
    e.preventDefault();
    onClick(artItem);
  };
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const opacity = useTransform(scrollYProgress, [0.2, 0.8], [0.5, 1]);

  return (
    <motion.div
      className={"grid__item relative group"}
      style={{
        "--r": row,
        "--c": col,
        scale: scrollYProgress,
        x: scrollYProgress,
        opacity,
      }}
      ref={ref}
    >
      <div className="grid__item-img relative w-full aspect-square bg-cover bg-center hover:cursor-none mb-12 lg:mb-24">
        <Link
          className="my-2 md:my-4 lg:my-8 block hover:cursor-none"
          to={artItem.category.toLowerCase()}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          <GatsbyImage image={image} className="!w-full overflow-hidden" />
        </Link>
      </div>
    </motion.div>
  );
};

const GridScrollAnimations = () => {
  const lenis = useLenis();
  const { setCursorType } = useContext(CursorContext);
  const [selectedArt, setSelectedArt] = useState(null);

  useEffect(() => {
    function update(time) {
      lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, [lenis]);

  const allArts = useAllArts();

  const gridPositions = [
    { row: 1, col: 1 },
    { row: 2, col: 2 },
    { row: 3, col: 3 },
    { row: 4, col: 4 },
    { row: 5, col: 1 },
    { row: 6, col: 2 },
    { row: 7, col: 3 },
    { row: 8, col: 4 },
    { row: 9, col: 1 },
    { row: 10, col: 2 },
    { row: 11, col: 3 },
    { row: 12, col: 4 },
    { row: 13, col: 1 },
    { row: 14, col: 2 },
    { row: 15, col: 3 },
    { row: 16, col: 4 },
    { row: 17, col: 1 },
    { row: 18, col: 2 },
    { row: 19, col: 3 },
    { row: 20, col: 4 },
    { row: 21, col: 1 },
    { row: 22, col: 2 },
    { row: 23, col: 3 },
    { row: 24, col: 4 },
    { row: 25, col: 1 },
    { row: 26, col: 2 },
    { row: 27, col: 3 },
    { row: 28, col: 4 },
    { row: 29, col: 1 },
    { row: 30, col: 2 },
    { row: 31, col: 3 },
    { row: 32, col: 4 },
    { row: 33, col: 1 },
    { row: 34, col: 2 },
    { row: 35, col: 3 },
    { row: 36, col: 4 },
    { row: 37, col: 1 },
    { row: 38, col: 2 },
    { row: 39, col: 3 },
    { row: 40, col: 4 },
  ];
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

  const handleArtClick = (artItem) => {
    setSelectedArt(artItem);
  };

  const handleCloseModal = () => {
    setSelectedArt(null);
  };

  return (
    <div className="text-gray-100 mt-12 selectedArt">
      <div className="content">
        <div className="grid grid-cols-4 gap-0 relative">
          {allArts.edges.map((artItem, i) => {
            const { row, col } = gridPositions[i] || { row: 1, col: 1 };
            return (
              <ArtWrapper
                key={i}
                artItem={artItem.node}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                onClick={handleArtClick}
                row={row}
                col={col}
              />
            );
          })}
        </div>

        <div className="fixed inset-0 flex flex-col items-center justify-center pointer-events-none">
          <h2 className="lg:text-7xl text-5xl font-sans uppercase tracking-wider">
            Vitkovskaya
          </h2>
          <h3 className="lg:text-6xl text-4xl font-sans tracking-wider">ART</h3>
        </div>
      </div>
      {selectedArt && (
        <Modal
          isOpen={!!selectedArt}
          onClose={handleCloseModal}
          image={getImage(selectedArt.artImage)}
          title={selectedArt.title}
          description={selectedArt.description}
        />
      )}
    </div>
  );
};

export default GridScrollAnimations;
