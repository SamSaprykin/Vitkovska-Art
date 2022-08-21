import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { motion, AnimatePresence } from "framer-motion";

const revealInOut = {
  initial: { y: "-100%", opacity: 0 },
  enter: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    y: "-100%",
    opacity: 0,
    transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] },
  },
};

function Header({ location }) {
  return (
    <header className="z-50	 p-0 pb-0 md:p-0 md:pb-0 fixed top-0 left-0 right-0">
      <motion.div
        className="z-10 w-full bg-white"
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <ul className="flex flex-wrap justify-between items-center py-4 mx-8 border-b-[1px] border-black fixed top-0 left-0 right-0">
          <li className="overflow-hidden w-[203px]">
            <Link partiallyActive={true} activeClassName="opacity-100" to="/">
              <AnimatePresence exitBeforeEnter>
                <motion.div
                  variants={revealInOut}
                  key={location?.pathname}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                >
                  <StaticImage
                    src="../images/logo.png"
                    alt="main logo"
                    width={70}
                    placeholder="tracedSVG"
                  />
                </motion.div>
              </AnimatePresence>
            </Link>
          </li>
          <li>
            <h5 className="text-2xl md:text-2xl pr-px text-dark font-light font-display">
              Menu
            </h5>
          </li>

          <li className="w-[203px] flex justify-end">
            <Link
              className="text-xl md:text-xl pr-px text-dark font-light font-display"
              partiallyActive={true}
              activeClassName="opacity-100"
              to="/"
            >
              Hello@vitkovskaya.com
            </Link>
          </li>
        </ul>
      </motion.div>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
