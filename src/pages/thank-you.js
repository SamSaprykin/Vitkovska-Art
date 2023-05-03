import { Link } from "gatsby";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import SEO from "../components/seo";
import CursorContext from "../context/CursorContext";
import { sentencPosition } from "../components/heroSection";

const ThankyouPage = () => {
  const { setCursorType } = useContext(CursorContext);
  const handleMouseDefault = () => {
    setCursorType({
      type: "default",
      imageName: null,
    });
  };

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
  return (
    <div
      className="pb-16 w-[full] max-w-[800px] mx-auto mb-4 md:mb-16 lg:mb-30"
      onMouseEnter={handleMouseDefault}
    >
      <SEO title="Thank you" />
      <div className="border-b-[1px] border-slate-100 w-full pb-8 md:pb-16 text-center pt-8">
        <h1 className="text-5xl md:text-7xl text-slate-100 leading-extratight font-normal tracking-wide font-sans font-medium mb-4 md:mb-[50px] mt-24">
          Thank you 🎉
        </h1>

        <div className="lg:h-[40px] overflow-hidden">
          <motion.p
            variants={sentencPosition}
            initial="hidden"
            animate="visible"
            className="mt-6 md:mt-0 text-[26px] text-slate-200 tracking-wide font-light font-display leading-[1.4] md:leading-[1.2]>"
          >
            You will hear back from me!
          </motion.p>
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          to="/"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="inline-block text-center my-8 mx-auto text-[#e78831] block italic font-serif text-2xl md:text-4xl xl:text-5xl 3xl:text-6xl nav--active nav--active--large relative hover:text-slate-200 focus:text-slate-200 transition ease-in-out duration-300 hover:cursor-none"
        >
          back to home page
        </Link>
      </div>
    </div>
  );
};

export default ThankyouPage;
