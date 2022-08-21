import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import ScrollDown from "./scrollDown";

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

const Line1 = "Vitkovskaya";

function Hero({ siteTitle, location }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <motion.h2
        className="text-[200px] flex overflow-hidden pr-px text-white font-light font-sans relative z-10 mix-blend-difference"
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
      <div className="bg-white flex absolute left-2/4 translate-x-neg50 bottom-32">
        <ScrollDown />
      </div>
      <div className="absolute right-0 top-0">
        <motion.div variants={revealInOut}>
          <StaticImage
            src="../images/hero-image.png"
            alt="hero image"
            placeholder="tracedSVG"
            layout="fixed"
            width={600}
            height={660}
          />
        </motion.div>
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
