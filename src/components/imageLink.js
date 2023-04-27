import React from "react";
import { navigate } from "gatsby";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { useMediaQuery } from "react-responsive";
import { slugify } from "../utils/slugify";

const ImageLink = ({ index, element }) => {
  const navigateTo = () => {
    navigate(slugify(element.node.artName));
  };
  const isDesktop = useMediaQuery({ minWidth: 820 });
  const rootMargin = isDesktop ? "-100px" : "0px";
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
    rootMargin,
  });
  const image = getImage(element.node.artImage.gatsbyImageData);
  console.log(image);
  return (
    <div
      ref={ref}
      className="h-full flex flex-col justify-center width-[320px] lg:width-[420px] overflow-hidden -mt-8"
    >
      <AnimatePresence>
        {inView && (
          <motion.div
            className="h-full flex flex-col justify-center"
            onClick={navigateTo}
            layoutId={`container-${index}`}
            initial={{ opacity: 0.8, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0.8, x: "100%" }}
            transition={{ duration: 0.8 }}
          >
            <GatsbyImage
              image={image}
              className="overflow-hidden flex-col justify-center"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default ImageLink;
