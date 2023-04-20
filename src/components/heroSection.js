import PropTypes from "prop-types";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import ScrollDown from "./scrollDown";
import CursorContext from "../context/CursorContext";

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

const sentencPosition = {
  hidden: { y: 70 },
  visible: {
    y: 0,
    transition: {
      delay: 0.9,
      ease: [0.6, 0.05, -0.01, 0.9],
      duration: 1.2,
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
const Line3 = "freelance digital artist";

function Hero({ siteTitle, location }) {
  const { setCursorType } = useContext(CursorContext);
  const handleMouseEnter = () => {
    setCursorType("default");
  };
  return (
    <div
      className="relative lg:min-h-screen overflow-hidden lg:mx-8 w-full mb-24 lg:mb-0"
      onMouseEnter={handleMouseEnter}
    >
      <motion.h2
        className="md:text-[92px] lg:text-[120px] leading-none flex overflow-hidden pr-px text-slate-100 font-normal font-sans relative z-10 leading-tight	mix-blend-difference"
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
        className="md:text-[112px] text-[180px] leading-none flex overflow-hidden pr-px text-slate-100 font-normal font-sans relative z-10 leading-tight mix-blend-difference"
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
      <div className="md:h-[50px] lg:h-[70px] md:mt-2 lg:mt-8 overflow-hidden">
        <motion.h5
          className="text-slate-100 italic font-serif md:text-3xl lg:text-5xl relative z-10 leading-tight mix-blend-difference"
          variants={sentencPosition}
          initial="hidden"
          animate="visible"
        >
          {Line3}
        </motion.h5>
      </div>

      <div className="flex absolute translate-x-neg50 rotate-neg90 bottom-36 left-[50px] hidden lg:block">
        <ScrollDown />
      </div>
      <div className="absolute right-0 lg:right-0 top-0 w-[360px] lg:w-[600px] overflow-hidden">
        <StaticImage
          src="../images/hero-image.png"
          alt="hero image"
          placeholder="tracedSVG"
          layout="CONSTRAINED"
          width={600}
          height={660}
        />
      </div>
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
