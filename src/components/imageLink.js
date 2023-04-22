import React from "react";
import { navigate } from "gatsby";
import { motion } from "framer-motion";

import { defaultTransition } from "../helpers/transitionHelper";
import { slugify } from "../utils/slugify";

const ImageLink = ({ index, element }) => {
  console.log(element.node.artImage.url);
  const navigateTo = () => {
    navigate(slugify(element.node.artName));
  };
  return (
    <motion.img
      className="grid-item-media"
      onClick={navigateTo}
      transition={defaultTransition}
      layoutId={`container-${index}`}
      src={element.node.artImage.url}
    />
  );
};
export default ImageLink;
