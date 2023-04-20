import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState, useContext } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { motion, AnimatePresence } from "framer-motion";
import { MenuButton } from "./menuButton";
import CursorContext from "../context/CursorContext";

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

const links = [
  {
    linkName: "Home",
    url: "/",
  },
  {
    linkName: "Arts",
    url: "/arts",
  },
  {
    linkName: "About",
    url: "/about",
  },
  {
    linkName: "Contact",
    url: "/contact",
  },
];

const Menu = ({ isOpen, setOpen, handleMouseEnter, handleMouseLeave }) => {
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
        className="fixed inset-0 bg-bgMain/95 backdrop-blur z-[-1]"
      >
        <div className="flex px-8 flex-col justify-center h-full">
          {links.map((link) => {
            return (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={link.linkName}
                className="w-fit"
              >
                <Link
                  className="text-6xl text-slate-100 tracking-wide font-[500] font-sans font-normal  max-w-[454px] h-max cursor-none	"
                  to={link.url}
                  onClick={() => setOpen(!isOpen)}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {link.linkName}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

function Header({ location, setMagnetActive, magnetActive }) {
  const [isOpen, setOpen] = useState(false);
  const { setCursorType } = useContext(CursorContext);

  const handleMouseEnter = () => {
    setCursorType("hover-link");
  };

  const handleMouseLeave = () => {
    setCursorType("default");
  };
  return (
    <header className="z-50	 p-0 pb-0 md:p-0 md:pb-0 fixed top-0 left-0 right-0">
      <motion.div
        className="z-10 w-full"
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <ul className="flex flex-wrap justify-between items-center py-2 mx-8 border-b-[1px] border-white fixed top-0 left-0 right-0  bg-bgMain">
          <li className="overflow-hidden w-[68px] hover:cursor-none">
            <Link
              partiallyActive={true}
              activeClassName="opacity-100 cursor-none hover:cursor-none"
              to="/"
            >
              <AnimatePresence exitBeforeEnter>
                <motion.div
                  variants={revealInOut}
                  key={location?.pathname}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  className="hover:cursor-none"
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
                    magnetActive={magnetActive}
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
            <a
              className="text-xl md:text-xl pr-px text-slate-100 font-normal font-display hover:cursor-none"
              partiallyActive={true}
              activeClassName="opacity-100"
              to="/"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Hello@vitkovskaya.com
            </a>
          </li>
        </ul>
      </motion.div>
      <Menu
        isOpen={isOpen}
        setOpen={setOpen}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
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
