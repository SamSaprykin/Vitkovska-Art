import React, { useState, useEffect, useContext } from "react";
// Styled Components
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled, { css } from "styled-components";
import CursorContext from "../context/CursorContext";

const accordionIds = [
  {
    id: 0,
    title: "Fantasy",
    results: [
      "Backgrounds",
      "Characters",
      "Creatures",
      "Fantasy Animals",
      "Architecture",
      "Fantasy interior",
    ],
  },
  {
    id: 1,
    title: "Nature",
    results: ["Landscapes", "Tress", "Mountains", "Dailies", "LTO-Archiving"],
  },
  {
    id: 2,
    title: "Futuristic",
    results: ["Architecture", "Backgrounds"],
  },
  {
    id: 3,
    title: "Close Up Objects",
    results: [
      "Backgrounds",
      "Characters",
      "Creatures",
      "Fantasy Animals",
      "Architecture",
      "Fantasy interior",
    ],
  },
];

const HomeServices = () => {
  // Default state, using number for our id. Which ever the number/id is in the state. That will be opened.
  const [expanded, setExpanded] = useState(0);
  const animation = useAnimation();
  const [aboutRef, inView] = useInView({
    triggerOnce: false,
    rootMargin: "-300px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };
  const Line1 = "Hello guys!";
  const Line2 = "My name is Ekaterina";
  const Line3 = "and I`m Digital artist";
  return (
    <div className="relative lg:min-h-screen overflow-hidden lg:mx-8 w-full lg:pl-12">
      <Container>
        <Flex alignTop spaceBetween>
          <About>
            <motion.h2
              variants={sentence}
              ref={aboutRef}
              initial="hidden"
              animate={animation}
              className="md:text-[36px] lg:text-[52px] text-slate-100 tracking-wide font-[500] font-sans font-normal  lg:max-w-[500px] "
            >
              {Line1.split("").map((char, index) => {
                return (
                  <motion.span key={`${char}${index}`} variants={letter}>
                    {char}
                  </motion.span>
                );
              })}
            </motion.h2>
            <motion.h2
              variants={sentence}
              ref={aboutRef}
              initial="hidden"
              animate={animation}
              className="md:text-[36px] lg:text-[52px] text-slate-100 tracking-wide font-[500] font-sans font-normal lg:max-w-[500px] "
            >
              {Line2.split("").map((char, index) => {
                return (
                  <motion.span key={`${char}${index}`} variants={letter}>
                    {char}
                  </motion.span>
                );
              })}
            </motion.h2>
            <motion.h2
              variants={sentence}
              ref={aboutRef}
              initial="hidden"
              animate={animation}
              className="md:text-[36px] lg:text-[52px] md:mb-6 lg:mb-[55px] text-slate-100 tracking-wide font-[500] font-sans font-normal  lg:max-w-[500px] "
            >
              {Line3.split("").map((char, index) => {
                return (
                  <motion.span key={`${char}${index}`} variants={letter}>
                    {char}
                  </motion.span>
                );
              })}
            </motion.h2>
            <motion.div
              animate={animation}
              initial="hidden"
              className="relative lg:min-h-screen overflow-hidden"
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    delay: 1.6,
                    ease: [0.6, 0.05, -0.01, 0.9],
                  },
                },
                hidden: { opacity: 0, y: 72 },
              }}
            >
              <p className="md:text-[20px] lg:text-[26px] text-slate-200 tracking-wide font-light font-display lg:max-w-[719px] leading-[1.2]">
                Fantasy art is a genre that allows the imagination to soar. It
                often features mythical creatures, magical landscapes, and epic
                battles. From dragons and unicorns to wizards and warriors,
                fantasy art can transport us to incredible worlds filled with
                wonder and adventure. Whether created through painting (using
                digital techniques) fantasy art can inspire us to dream big and
                believe in the impossible.
              </p>
            </motion.div>
          </About>
          <Services>
            <h3 className="md:text-[32px] lg:text-[48px] text-slate-100 leading-extratight font-normal tracking-wide font-display mb-[32px]">
              Services
            </h3>
            {accordionIds.map((details, index) => (
              <Accordion
                key={index}
                details={details}
                expanded={expanded}
                setExpanded={setExpanded}
              />
            ))}
          </Services>
        </Flex>
      </Container>
    </div>
  );
};

const Accordion = ({ details, expanded, setExpanded }) => {
  const isOpen = details.id === expanded;
  const [hovered, setHovered] = useState(false);
  const { setCursorType } = useContext(CursorContext);

  const handleMouseEnter = () => {
    setCursorType("hover-link");
  };

  const handleMouseLeave = () => {
    setCursorType("default");
  };
  return (
    <>
      <motion.div
        initial={false}
        onClick={() => setExpanded(isOpen ? false : details.id)}
        onHoverStart={() => setHovered(!hovered)}
        onHoverEnd={() => setHovered(!hovered)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex items-center text-2xl h-[32px] mb-2 font-display text-slate-100 tracking-wide"
      >
        <AccordionIcon>
          <motion.span
            className="bg-slate-100"
            animate={{ rotate: isOpen || hovered ? 0 : 45, x: 3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
          <motion.span
            className="bg-slate-100"
            animate={{ rotate: isOpen || hovered ? 0 : -45, x: -3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
        </AccordionIcon>
        {details.title}
      </motion.div>
      <motion.div
        key="content"
        animate={{ height: isOpen ? "100%" : "0" }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
        className="text-base mb-2 ml-10 text-dark font-light font-display relative overflow-hidden"
      >
        {details.results.map((result, index) => (
          <span className="block text-slate-100" key={index}>
            {result}
          </span>
        ))}
      </motion.div>
    </>
  );
};

const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;
  height: 100%;

  ${(props) =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      background: red;
      max-width: 100% !important;
    `}
`;

const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `};
  ${(props) =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `};
  ${(props) =>
    props.alignTop &&
    css`
      align-items: flex-start;
    `};
  ${(props) =>
    props.noHeight &&
    css`
      height: 0;
    `};
`;

const About = styled.div`
  width: 100%;
  max-width: 55%;
`;
const Services = styled.div`
  width: 500px;
  max-width: 35%;
  margin-top: 5vh;
`;

// Accordion

const AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 8px;
  span {
    width: 16px;
    height: 3px;

    transition: all 0.1s ease-in-out;
  }
`;

export default HomeServices;
