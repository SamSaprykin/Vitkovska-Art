import PropTypes from "prop-types";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import ScrollDown from "./scrollDown";
import CursorContext from "../context/CursorContext";

const revealInOut = {
  initial: { x: "100%", opacity: 0 },
  enter: {
    x: "0%",
    opacity: 1,
    transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] },
  },
};

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const sentenceArt = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
  hidden: {
    opacity: 0,
    y: 40,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
};

const letterArt = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 400,
    },
  },
  hidden: {
    opacity: 0,
    y: 40,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
};

const Line1 = "Vitkovskaya";
const Line2 = "Art";

function Hero({ siteTitle, location }) {
  const { setCursorType } = useContext(CursorContext);
  const handleMouseEnter = () => {
    setCursorType("default");
  };
  return (
    <div
      className="relative min-h-screen overflow-hidden mx-8"
      onMouseEnter={handleMouseEnter}
    >
      <motion.h2
        className="text-[140px] flex overflow-hidden pr-px text-slate-100 font-normal font-sans relative z-10 leading-tight	mix-blend-difference"
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {Line1.split("").map((char, index) => {
          return (
            <motion.span key={`${char}${index}`} variants={letter}>
              {char}
            </motion.span>
          );
        })}
      </motion.h2>
      <motion.h2
        className="text-[240px] flex overflow-hidden pr-px text-slate-100 font-normal font-sans relative z-10 leading-tight mix-blend-difference"
        variants={sentenceArt}
        initial="hidden"
        animate="visible"
      >
        {Line2.split("").map((char, index) => {
          return (
            <motion.span key={`${char}${index}`} variants={letterArt}>
              {char}
            </motion.span>
          );
        })}
      </motion.h2>
      <div className="flex absolute translate-x-neg50 rotate-neg90 bottom-36 left-[50px]">
        <ScrollDown />
      </div>
      <motion.div
        className="absolute right-0 top-0"
        whileHover={{
          scale: 1.1,
          rotateX: 10,
          rotateY: 10,
          perspective: "1000px",
        }}
      >
        <motion.div variants={revealInOut} transition={{ duration: 0.5 }}>
          <StaticImage
            src="../images/hero-image.png"
            alt="hero image"
            placeholder="tracedSVG"
            layout="fixed"
            width={600}
            height={660}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

Hero.propTypes = {
  siteTitle: PropTypes.string,
};

Hero.defaultProps = {
  siteTitle: ``,
};

export default Hero;
