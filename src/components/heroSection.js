import PropTypes from "prop-types";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import ScrollDown from "./scrollDown";
import CursorContext from "../context/CursorContext";

export const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

export const sentencPosition = {
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

export const sentenceArt = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const letter = {
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

export const letterArt = {
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

function Hero() {
  const { setCursorType } = useContext(CursorContext);
  const handleMouseEnter = () => {
    setCursorType({
      type: "default",
      imageName: null,
    });
  };
  return (
    <div
      className="pt-8 md:pt-12 lg:pt-0 relative min-h-[520px] md:min-h-[620px] lg:min-h-screen overflow-hidden lg:mx-8 w-[100%] mb-12 md:mb-16 lg:mb-24 lg:mb-0"
      onMouseEnter={handleMouseEnter}
    >
      <motion.h2
        className="text-[60px] md:text-[112px] lg:text-[120px] flex overflow-hidden pr-px text-slate-100 font-normal font-sans relative z-10 leading-tight	mix-blend-difference"
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
        className="text-[112px] md:text-[132px] flex overflow-hidden pr-px text-slate-100 font-normal font-sans relative z-10 leading-tight mix-blend-difference"
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
      <div className="md:h-[92px] lg:h-[70px] md:mt-2 lg:mt-8 overflow-hidden">
        <motion.h5
          className="text-slate-100 italic font-serif text-2xl md:text-3xl lg:text-5xl relative z-10 leading-tight mix-blend-difference"
          variants={sentencPosition}
          initial="hidden"
          animate="visible"
        >
          {Line3}
        </motion.h5>
      </div>

      <div className="flex absolute translate-x-neg50 lg:rotate-neg90 bottom-0 lg:bottom-36 left-[50px] block">
        <ScrollDown />
      </div>
      <div className="absolute right-0 lg:right-16 top-30 md:top-32 lg:top-0 w-[260px] md:w-[360px] lg:w-[580px] overflow-hidden">
        <StaticImage
          src="../images/hero.jpg"
          alt="hero image"
          placeholder="dominantColor"
          layout="CONSTRAINED"
          width={600}
          quality={100}
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
