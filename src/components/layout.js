import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./header";
import SmoothScroll from "./smoothScroll";

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

  return (
    <>
      <SmoothScroll callbacks={location} />
      <Header siteTitle={data.site.siteMetadata.title} location={location} />
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
