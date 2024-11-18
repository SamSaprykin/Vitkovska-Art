import React, { useEffect, useRef, useContext } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import CursorContext from "../context/CursorContext";
import useAllArts from "../hooks/useAllArts";

gsap.registerPlugin(ScrollTrigger);

const ArtWrapper = ({ artItem, handleMouseEnter, handleMouseLeave }) => {
  const image = getImage(artItem.artImage); // Ensure artImage is compatible with GatsbyImage

  return (
    <div className="grid__item-img relative w-full aspect-square bg-cover bg-center mt-24">
      <Link
        className="my-2 md:my-4 lg:my-8 block hover:cursor-none"
        to={artItem.category.toLowerCase()}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <GatsbyImage image={image} className="!w-full overflow-hidden" />
      </Link>
    </div>
  );
};

const GridScrollAnimations = () => {
  const lenisRef = useRef();
  const { setCursorType } = useContext(CursorContext);

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  const allArts = useAllArts();

  useEffect(() => {
    const gridItems = [...document.querySelectorAll(".grid > .grid__item")];

    // GSAP animations for each grid item
    const lenis = lenisRef.current?.lenis;
    const scrollFn = (time) => {
      lenis?.raf(time);
      requestAnimationFrame(scrollFn);
    };
    requestAnimationFrame(scrollFn);
    gridItems.forEach((item) => {
      const image = item.querySelector(".grid__item-img");

      gsap
        .timeline({
          scrollTrigger: {
            trigger: item,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        })
        .set(image, {
          transformOrigin: `${gsap.utils.random(0, 1) > 0.5 ? 0 : 100}% 100%`,
        })
        .to(image, {
          ease: "none",
          scale: 0,
        });
    });
  }, []);
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

  return (
    <div className="text-gray-100 mt-12">
      <div className="content">
        <div className="grid grid-cols-4 gap-0 relative">
          {allArts.edges.map((artItem, i) => {
            const { row, col } = gridPositions[i] || { row: 1, col: 1 };
            return (
              <div
                key={i}
                className="grid__item relative group"
                style={{
                  "--r": row,
                  "--c": col,
                }}
              >
                <ArtWrapper
                  artItem={artItem.node}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                />
              </div>
            );
          })}
        </div>

        <div className="fixed inset-0 flex flex-col items-center justify-center pointer-events-none">
          <h2 className="text-[6vw] font-sans uppercase tracking-wider">
            Vitkovska
          </h2>
          <h3 className="text-[4vw] font-sans tracking-wider">ART</h3>
        </div>
      </div>
    </div>
  );
};

export default GridScrollAnimations;
