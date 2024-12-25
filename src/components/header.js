import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState, useContext, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { MenuButton } from "./menuButton";
import CursorContext from "../context/CursorContext";
import { socialLinks } from "./categoryServices";

const revealInOut = {
  initial: { y: "-100%", opacity: 0.2 },
  enter: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    y: "-100%",
    opacity: 0.2,
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
  {
    linkName: "Commissions Info",
    url: "/commissions-info",
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
        className="fixed inset-0 bg-bgMain/95 backdrop-blur z-[-1] flex justify-center overflow-auto"
      >
        <div className="flex flex-col lg:flex-row px-6 lg:px-8 h-full w-full max-w-[1084px] items-start lg:items-center justify-start lg:justify-between mt-24 md:mt-32 lg:mt-0 min-h-[600px]">
          <div className="flex flex-col">
            {links.map((link) => {
              return (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  key={link.linkName}
                  className="w-fit"
                >
                  <Link
                    className="text-4xl md:text-5xl lg:text-6xl text-slate-100 tracking-wide font-[500] font-sans font-normal  max-w-[454px] h-max cursor-none	"
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
          <div className="mt-8 lg:mt-0">
            <h2 className="text-2xl md:text-3xl text-slate-100 tracking-wide font-[500] font-display font-normal  max-w-[454px]">
              Social Media
            </h2>
            <div className="flex flex-col w-full mt-4 lg:mt-6">
              {socialLinks.map((social) => {
                return (
                  <div
                    key={social.name}
                    className="my-1 lg:my-2"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <a
                      href={social.link}
                      className="hover:cursor-none h-[30px] lg:h-[36px] overflow-hidden block"
                    >
                      <div className="flex flex-col ease-out duration-500 md:hover:translate-y-[-30px] lg:hover:translate-y-[-36px] h-[72px]">
                        <h3 className="text-xl lg:text-2xl font-sans text-slate-200 tracking-wider capitalize">
                          {social.type}
                        </h3>
                        <h3 className="text-xl lg:text-2xl font-sans text-slate-100 tracking-wider capitalize">
                          {social.type}
                        </h3>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

function Header({ location, setMagnetActive, magnetActive }) {
  const [isOpen, setOpen] = useState(false);
  const { setCursorType } = useContext(CursorContext);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  const handleMouseEnter = () => {
    setCursorType({
      type: "hover-link",
      imageName: null,
    });
  };

  const handleMouseLeave = () => {
    setCursorType({
      type: "default",
      imageName: null,
    });
  };

  const isDesktop = useMediaQuery({ minWidth: 820 });
  return (
    <header className="max-w-full z-50	p-0 pb-0 md:p-0 md:pb-0 fixed top-0 left-0 right-0 md:px-0 lg:px-8">
      <motion.div
        className="z-10 w-full"
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <ul className="relative px-6 md:px-8 lg:px-0 flex flex-wrap justify-between items-center py-4 lg:py-2 fixed top-0 left-0 right-0">
          <li className="overflow-hidden w-[40px] md:w-[68px] hover:cursor-none">
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
          <li className="absolute left-[50%] translate-x-[-50%]">
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
          <AnimatePresence exitBeforeEnter>
            <motion.div
              variants={revealInOut}
              key={location?.pathname}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <li className="flex justify-end h-[40px] md:h-[68px] flex flex-col justify-center">
                <a
                  className="text-lg md:text-xl pr-px text-slate-100 font-normal font-display hover:cursor-none"
                  partiallyActive={true}
                  activeClassName="opacity-100"
                  href={`mailto:vitkovskaya.artwork@gmail.com`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {isDesktop ? "vitkovskaya.artwork@gmail.com" : "Mail me"}
                </a>
              </li>
            </motion.div>
          </AnimatePresence>
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
