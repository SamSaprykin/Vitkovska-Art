import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { motion, AnimatePresence } from "framer-motion";
import { MenuButton } from "./menuButton";

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

const Menu = ({ isOpen, setOpen }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.nav
        transition={{
          type: "spring",
          damping: 100,
          stiffness: 500,
        }}
        initial={{
          y: "-100%",
        }}
        animate={{
          y: !isOpen ? "-100%" : "0%",
        }}
        className="fixed inset-0 bg-slate-50/90 backdrop-blur z-[-1]"
      >
        <div className="flex px-[5%] flex-col justify-center h-full">
          <Link
            className="text-[45px] text-dark tracking-wide font-[500] font-sans font-normal  max-w-[454px] "
            to="/"
            onClick={() => setOpen(!isOpen)}
          >
            Home
          </Link>
          <Link
            className="text-[45px] text-dark tracking-wide font-[500] font-sans font-normal  max-w-[454px] "
            to="/arts"
            onClick={() => setOpen(!isOpen)}
          >
            Arts
          </Link>
          <Link
            className="text-[45px] text-dark tracking-wide font-[500] font-sans font-normal  max-w-[454px] "
            to="/about"
            onClick={() => setOpen(!isOpen)}
          >
            About
          </Link>
          <Link
            className="text-[45px] text-dark tracking-wide font-[500] font-sans font-normal  max-w-[454px] "
            to="/contact"
            onClick={() => setOpen(!isOpen)}
          >
            Contact
          </Link>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

function Header({ location, setMagnetActive, magnetActive }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="z-50	 p-0 pb-0 md:p-0 md:pb-0 fixed top-0 left-0 right-0">
      <motion.div
        className="z-10 w-full bg-white"
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <ul className="flex flex-wrap justify-between items-center py-2 mx-8 border-b-[1px] border-black fixed top-0 left-0 right-0">
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
                    width={60}
                    placeholder="tracedSVG"
                  />
                </motion.div>
              </AnimatePresence>
            </Link>
          </li>
          <li>
            <AnimatePresence exitBeforeEnter>
              <motion.div
                variants={revealInOut}
                key={location?.pathname}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <h5
                  className={`relative w-14 h-14 bg-zinc-800/30 hover:bg-zinc-800/80 rounded-full flex flex-col items-center transition-all duration-300 justify-center`}
                  onPointerEnter={() => setMagnetActive(true)}
                  onPointerLeave={() => setMagnetActive(false)}
                  onClick={() => setOpen(!isOpen)}
                >
                  <MenuButton
                    isOpen={isOpen}
                    strokeWidth="1.5"
                    lineProps={{ strokeLinecap: "round" }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    width="56px"
                    height="56px"
                  />

                  {magnetActive ? (
                    <motion.div
                      layoutId="cursor"
                      className="absolute inset-0 bg-[#e78831] rounded-full"
                    ></motion.div>
                  ) : null}
                </h5>
              </motion.div>
            </AnimatePresence>
          </li>

          <li className="w-[203px] flex justify-end">
            <Link
              className="text-xl md:text-xl pr-px text-dark font-normal font-display"
              partiallyActive={true}
              activeClassName="opacity-100"
              to="/"
            >
              Hello@vitkovskaya.com
            </Link>
          </li>
        </ul>
      </motion.div>
      <Menu isOpen={isOpen} setOpen={setOpen} />
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
