import React, { useState, useEffect } from "react";
// Styled Components
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled, { css } from "styled-components";

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
    triggerOnce: true,
    rootMargin: "-300px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return (
    <motion.div
      ref={aboutRef}
      animate={animation}
      initial="hidden"
      className="my-30"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: { opacity: 0, y: 72 },
      }}
    >
      <Container>
        <Flex alignTop>
          <About>
            <h2 className="text-[45px] mb-[55px] text-dark tracking-wide font-[500] font-sans  max-w-[454px] leading-extratight">
              Hello guys! <br /> My name is Ekaterina and I`m Digital artist
            </h2>
            <p className="text-[20px] text-offblack tracking-wide font-light font-display  max-w-[719px] leading-[1.2]">
              Fantasy art is a genre of art that depicts magical or other
              supernatural themes, ideas, creatures or settings. While there is
              some overlap with science fiction, horror and other speculative
              fiction art, there are unique elements not generally found in
              other forms of speculative fiction art. Depictions of ancient
              myths and legends, as well as depictions of modern day fantasy in
              the form of divine interventions and other magical or supernatural
              forces, are very common elements, and help distinguish fantasy art
              from other forms. Dragons, wizards, fairies and other fantastical
              and mythical creatures are common features in fantasy art. <br />{" "}
              <br />
              Fantasy art is strongly linked to fantasy fiction. Indeed fantasy
              art pieces are often intended to represent specific characters or
              scenes from works of fantasy literature. Such works created by
              amateur artists may be called fanart.
            </p>
          </About>
          <Services>
            <h3 className="text-[48px] leading-extratight font-light tracking-wide font-display mb-[32px]">
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
    </motion.div>
  );
};

const Accordion = ({ details, expanded, setExpanded }) => {
  const isOpen = details.id === expanded;
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <motion.div
        initial={false}
        onClick={() => setExpanded(isOpen ? false : details.id)}
        onHoverStart={() => setHovered(!hovered)}
        onHoverEnd={() => setHovered(!hovered)}
        className="flex items-center text-2xl h-[32px] mb-2 font-display text-dark tracking-wide"
      >
        <AccordionIcon>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : 45, x: 3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
          <motion.span
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
          <span className="block" key={index}>
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
  padding: 0 32px;
  position: relative;
  width: auto;
  height: 100%;
  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  }
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
`;
const Services = styled.div`
  width: 300px;
`;

// Accordion

const AccordionHeader = styled(motion.div)`
  width: 100%;
  color: #ea281e;
  height: 32px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.15rem;
  margin: 8px 0;
  }
`;
const AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 8px;
  span {
    width: 16px;
    height: 4px;
    background: #e78831;
    transition: all 0.1s ease-in-out;
  }
`;

const AccordionContent = styled(motion.div)`
  overflow: hidden;
  padding-left: 40px;
  span {
    width: 100%;
    margin: 8px 0;
    font-size: 0.875rem;
    color: #ea281e;
    display: block;
    font-weight: 300;
  }
`;

export default HomeServices;
