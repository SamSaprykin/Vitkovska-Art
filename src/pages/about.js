import React, { useContext, useEffect } from "react";

import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import SEO from "../components/seo";
import Header from "../components/header";
import { revealInOut, fade } from "../helpers/transitionHelper";
import CursorContext from "../context/CursorContext";

const AboutPage = () => {
  const { setCursorType } = useContext(CursorContext);

  const handleMouseEnter = () => {
    setCursorType("hover-link");
  };

  const handleMouseLeave = () => {
    setCursorType("default");
  };

  const handleMouseDefault = () => {
    setCursorType("default");
  };

  useEffect(() => {
    setCursorType("default");
  }, [setCursorType]);
  return (
    <div className="pb-16" onMouseEnter={handleMouseDefault}>
      <SEO title="About" />

      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        className="relative z-20"
      >
        <motion.div variants={fade}>
          <Header color="text-blue-light" aboutActiveOverride />
        </motion.div>
      </motion.div>

      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        className="flex flex-wrap md:-mx-10 text-slate-100 pt-40 pb-6 px-6 md:p-10 relative"
      >
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{
            enter: { transition: { staggerChildren: 0.055 } },
          }}
          className="w-full relative z-10 hidden md:block"
        >
          <h1 className="text-slate-100 mb-24 md:mb-24 xl:mb-32 pr-12 md:pr-0 max-w-6xl pb-0 text-6xl	">
            <h2 className="block relative overflow-hidden text-8xl">
              <motion.span
                variants={revealInOut}
                className="block italic font-serif"
              >
                Hi there!
              </motion.span>
            </h2>
            <span className="block relative overflow-hidden">
              <motion.span variants={revealInOut} className="block">
                I'm a{" "}
                <span className="italic font-serif">
                  freelance digital artist
                </span>{" "}
                and I specialize in creating stunning artwork using a variety of
                tools and techniques
              </motion.span>
            </span>
            <span className="block relative overflow-hidden">
              <motion.span variants={revealInOut} className="block">
                My primary tools are{" "}
                <span className="italic font-serif">
                  Adobe Photoshop, Clip Studio Paint, and Procreate,{" "}
                </span>{" "}
                which allow me to create intricate and detailed digital artwork
                with ease.
              </motion.span>
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{
            enter: { transition: { delayChildren: 0.5 } },
          }}
          className="flex flex-wrap relative z-10 mb-18"
        >
          <motion.div variants={fade} className="w-full md:w-5/12 md:pr-8">
            <StaticImage
              src="../images/about-image.jpeg"
              alt="hero image"
              placeholder="tracedSVG"
              layout="fixed"
              width={600}
              height={660}
              className="!w-full overflow-hidden"
            />
          </motion.div>

          <motion.div
            variants={fade}
            className="content content--list w-11/12 md:w-6/12 xl:w-7/12 md:px-8"
          >
            <p className="text-[26px] text-slate-200 tracking-wide font-light font-display leading-[1.2] mb-4 md:mb-6 3xl:mb-8">
              One of my favorite techniques is the kitbash technique, which
              involves using 3D models from software like Blender to create
              unique and complex artwork. <br /> <br /> By combining various 3D
              models and elements, I can create scenes and characters that are
              truly one-of-a-kind. In addition to kitbashing, I also use
              photobashing and painting techniques in Photoshop to bring my
              artwork to life. I love the challenge of taking an idea or concept
              and turning it into a stunning piece of art that evokes emotion
              and captivates the viewer. <br /> <br /> I should note that while
              I use a variety of digital tools and techniques, I don't use AI
              art. Instead, I rely on my own creativity, skill, and experience
              to create original artwork that stands out from the crowd. <br />{" "}
              <br /> If you're looking for a freelance digital artist who can
              bring your ideas to life,{" "}
              <a
                href={`mailto:vitkovskaya0592@gmail.com `}
                className="text-[#e78831] italic font-serif hover:cursor-none hover:text-slate-200 focus:text-slate-200transition ease-in-out duration-300"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                email me
              </a>{" "}
              or message me{" "}
              <a
                href="https://www.instagram.com/vitkovskaya_art/"
                className="text-[#e78831] italic font-serif hover:cursor-none hover:text-slate-200 focus:text-slate-200 transition ease-in-out duration-300"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                target="_blank"
                rel="noreferrer"
              >
                on social media
              </a>
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{
            enter: { transition: { delayChildren: 0.5 } },
          }}
          className="min-h-halfscreen w-full flex flex-wrap items-center justify-center relative z-10"
        >
          <motion.a
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            href={`mailto:vitkovskaya0592@gmail.com `}
            variants={fade}
            className="text-[#e78831] block italic font-serif text-3xl md:text-4xl xl:text-5xl 3xl:text-6xl nav--active nav--active--large relative hover:text-slate-200 focus:text-slate-200 transition ease-in-out duration-300 hover:cursor-none"
          >
            Drop me a line!
          </motion.a>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
