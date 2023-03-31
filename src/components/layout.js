import React, { useState } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import {
  motion,
  AnimatePresence,
  useSpring,
  useMotionValue,
} from "framer-motion";
import Header from "./header";

const Cursor = (props) => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = {
    damping: 35,
    stiffness: 700,
    mass: 1,
  };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  React.useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <motion.div
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
      className="fixed z-[99999] w-0 h-0 bg-red-500"
    >
      {!props.hideCursor == true ? (
        <motion.div
          layoutId="cursor"
          className="absolute w-4 h-4 -top-2 -left-2 bg-[#e78831] pointer-events-none rounded-full"
        ></motion.div>
      ) : null}
    </motion.div>
  );
};

const duration = 0.35;

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration,
    },
  },
};

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [magnetActive, setMagnetActive] = useState(false);
  return (
    <>
      <Cursor hideCursor={magnetActive} />
      <Header
        siteTitle={data.site.siteMetadata.title}
        location={location}
        setMagnetActive={setMagnetActive}
        magnetActive={magnetActive}
      />
      <div className="pt-32 px-8">
        <AnimatePresence>
          <motion.main
            key={location.pathname}
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
