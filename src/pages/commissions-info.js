import React, { useContext, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import SEO from "../components/seo";
import CursorContext from "../context/CursorContext";

const accordionItems = [
  {
    id: 0,
    title: "Fantasy",
    answer: "Fantasy",
  },
  {
    id: 1,
    title: "Nature",
    answer: "Fantasy",
  },
  {
    id: 2,
    title: "Futuristic",
    answer: "Fantasy",
  },
  {
    id: 3,
    title: "Close Up Objects",
    answer: "Fantasy",
  },
];

const Accordion = ({ details, expanded, setExpanded }) => {
  const isOpen = details.id === expanded;
  const [hovered, setHovered] = useState(false);
  const { setCursorType } = useContext(CursorContext);

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
        animate={{ height: isOpen ? "auto" : "0" }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
        className="text-base mb-2 ml-10 text-dark font-light font-display relative overflow-hidden"
      >
        <span className="block text-slate-100">{details.answer}</span>
      </motion.div>
    </>
  );
};

const CommissionsPage = () => {
  const { setCursorType } = useContext(CursorContext);
  const [expanded, setExpanded] = useState(0);
  const handleMouseEnter = (imageName) => {
    setCursorType({
      type: "link-image",
      imageName,
    });
  };

  const handleMouseLeave = () => {
    setCursorType({
      type: "default",
      imageName: null,
    });
  };

  return (
    <div className="pb-16">
      <SEO title="Comissions" />
      <h1 className="md:text-5xl lg:text-6xl text-slate-100 leading-extratight font-sans tracking-wide font-display mb-[32px] mt-[5vh]">
        Commisions are <span className="text-[#e78831]">Open</span>
      </h1>
      <div className="flex flex-col justify-between">
        <Services>
          <h3 className="md:text-3xl lg:text-4xl text-slate-100 leading-extratight font-normal tracking-wide font-display mb-[32px]">
            How Commissions Work
          </h3>
          {accordionItems.map((details, index) => (
            <Accordion
              key={index}
              details={details}
              expanded={expanded}
              setExpanded={setExpanded}
            />
          ))}
        </Services>
        <ul className="flex flex-col text-4xl text-slate-100 tracking-wide font-[500] font-sans font-normal  max-w-[454px] h-max cursor-none	">
          <h3 className="md:text-3xl lg:text-4xl text-slate-100 leading-extratight font-normal tracking-wide font-display mb-[32px]">
            Pricing
          </h3>
          <li
            className="mb-4 inline-block"
            onMouseEnter={() => handleMouseEnter("scenery")}
            onMouseLeave={handleMouseLeave}
          >
            Scenery <span>from 120 usd</span>
          </li>
          <li
            className="mb-4 inline-block	"
            onMouseEnter={() => handleMouseEnter("backgrounds")}
            onMouseLeave={handleMouseLeave}
          >
            Backgrounds <span>from 120 usd</span>
          </li>
          <li
            className="mb-4 inline-block	"
            onMouseEnter={() => handleMouseEnter("nature")}
            onMouseLeave={handleMouseLeave}
          >
            Nature <span>from 120 usd</span>
          </li>
          <li
            className="mb-4 inline-block	"
            onMouseEnter={() => handleMouseEnter("characters")}
            onMouseLeave={handleMouseLeave}
          >
            Characters <span>from 120 usd</span>
          </li>
          <li
            className="inline-block	"
            onMouseEnter={() => handleMouseEnter("architecture")}
            onMouseLeave={handleMouseLeave}
          >
            Architecture <span>from 120 usd</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Services = styled.div`
  width: 800px;
  max-width: 60%;
  margin-top: 5vh;
`;

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

export default CommissionsPage;
