import React, { useState } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./header";
import CursorContext from "../context/CursorContext";
import Cursor from "./cursor";

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

  const [magnetActive, setMagnetActive] = useState(false);
  const [cursorType, setCursorType] = useState({
    type: "default",
    imageName: null,
  });
  return (
    <CursorContext.Provider value={{ cursorType, setCursorType }}>
      <Cursor hideCursor={magnetActive} />
      <Header
        siteTitle={data.site.siteMetadata.title}
        location={location}
        setMagnetActive={setMagnetActive}
        magnetActive={magnetActive}
      />
      <div className="pt-32 px-6 md:px-8 bg-bgMain">
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
    </CursorContext.Provider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
