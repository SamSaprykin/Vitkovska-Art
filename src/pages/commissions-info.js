import React, { useContext, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import SEO from "../components/seo";
import CursorContext from "../context/CursorContext";

const accordionItems = [
  {
    id: 0,
    title: "How is the price for the artwork determined?",
    answer:
      "The price for the artwork is determined based on the complexity of the piece, and is negotiated individually with the client.",
  },
  {
    id: 1,
    title: "In what currency is the price quoted?",
    answer: "The price is quoted in USD.",
  },
  {
    id: 2,
    title: "How does payment work?",
    answer:
      "A minimum of 50% prepayment is required, with the remaining 50% to be paid upon completion of the artwork.",
  },
  {
    id: 3,
    title: "When will I receive the final artwork?",
    answer:
      "The final high quality artwork will be sent to the client after 100% payment has been received.",
  },
  {
    id: 4,
    title: "What information do I need to provide to get started?",
    answer:
      "To get started, the client should provide a detailed description of their idea, along with any references that may be useful. If necessary, the client should also provide a contract or NDA.",
  },
  {
    id: 5,
    title: "Are commercial rights included in the price?",
    answer: "Yes, commercial rights are included in the price.",
  },
  {
    id: 6,
    title: "How long will it take to receive my commission?",
    answer: "Commission delivery typically takes between 4-7 days.",
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
        className="text-2lg flex items-start text-2xl h-auto lg:h-[30px] mb-2 lg:mb-4 font-display text-slate-100 tracking-wide"
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
        <h4>{details.title}</h4>
      </motion.div>
      <motion.div
        key="content"
        animate={{ height: isOpen ? "auto" : "0" }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
        className="text-[18px] ml-10 text-dark font-light font-display relative overflow-hidden mb-2 lg:mb-4"
      >
        <span className="block text-slate-100 text-lg">{details.answer}</span>
      </motion.div>
    </>
  );
};

const CommissionsPage = () => {
  const { setCursorType } = useContext(CursorContext);
  const [expanded, setExpanded] = useState(0);

  const handleMouseEnterLink = () => {
    setCursorType({
      type: "hover-link",
      imageName: null,
    });
  };

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
    <div className="pb-16 w-[full] max-w-[1080px] mx-auto">
      <SEO
        title="Freelance Digital Artist | Portfolio of Vitkovskaya Kateryna"
        titleTemplate="Comissions + FAQ | Vitkovskaya Art"
      />
      <h1 className="text-[34px] md:text-6xl text-slate-100 leading-extratight font-normal tracking-wide font-display font-medium mb-2 lg:mb-[50px] mt-14 lg:mt-8">
        Commisions are{" "}
        <span className="text-[#e78831] font-sans font-medium">Open</span>
      </h1>
      <div className="flex flex-col justify-between">
        <ul className="flex flex-col text-4xl text-slate-100 tracking-wide font-[500] font-sans font-normal w-full h-max cursor-none">
          <div className="group w-full my-4 border-b-[1px] border-solid border-slate-100 py-4 md:py-8">
            <li className="mb-4 w-full flex flex-col md:flex-row justify-between items-end">
              <div
                onMouseEnter={() => handleMouseEnter("scenery")}
                onMouseLeave={handleMouseLeave}
              >
                <h2 className="text-[28px] md:text-3xl lg:text-4xl text-slate-100 leading-extratight font-black tracking-wide mb-[32px]">
                  Scenery
                </h2>
                <h5 className="text-[18px] max-w-[600px] text-slate-200 font-display">
                  Scenery art, also known as landscape art, is a genre of visual
                  art that depicts landscapes and natural scenery. It is a form
                  of representational art that aims to capture the beauty, mood,
                  and essence of a particular natural setting.
                </h5>
              </div>
              <div className="w-full md:w-auto pt-6 md:pt-0 flex flex-row md:flex-col justify-between">
                <div className="h-[36px] md:h-[54px] overflow-hidden">
                  <a
                    href={`mailto:vitkovskaya.artwork@gmail.com`}
                    className="ease-out duration-500 text-[#e78831] text-2xl lg:text-3xl hover:cursor-none h-[54px] block translate-y-[36px] md:translate-y-[54px] group-hover:translate-y-[0px] font-display "
                    onMouseEnter={handleMouseEnterLink}
                    onMouseLeave={handleMouseLeave}
                  >
                    Let&apos;s Discuss
                  </a>
                </div>
                <span className="text-2xl lg:text-3xl pt-0 md:pt-12 align-bottom h-full">
                  *from 250 usd
                </span>
              </div>
            </li>
          </div>
          <div className="group w-full my-4 border-b-[1px] border-solid border-slate-100 py-4 md:py-8">
            <li className="mb-4 w-full flex flex-col md:flex-row justify-between items-end">
              <div
                onMouseEnter={() => handleMouseEnter("backgrounds")}
                onMouseLeave={handleMouseLeave}
              >
                <h2 className="text-[28px] md:text-3xl lg:text-4xl text-slate-100 leading-extratight font-black tracking-wide mb-[32px]">
                  Backgrounds
                </h2>
                <h5 className="text-[18px] max-w-[600px] text-slate-200 font-display">
                  Background art refers to the visual elements that make up the
                  background of a work of art or design, such as a painting,
                  drawing, or digital artwork. It is an important component of
                  visual storytelling and can set the mood, tone, and atmosphere
                  of a piece.
                </h5>
              </div>
              <div className="w-full md:w-auto pt-6 md:pt-0 flex flex-row md:flex-col justify-between">
                <div className="h-[36px] md:h-[54px] overflow-hidden">
                  <a
                    href={`mailto:vitkovskaya.artwork@gmail.com`}
                    className="ease-out duration-500 text-[#e78831] text-2xl lg:text-3xl hover:cursor-none h-[54px] block translate-y-[36px] md:translate-y-[54px] group-hover:translate-y-[0px] font-display "
                    onMouseEnter={handleMouseEnterLink}
                    onMouseLeave={handleMouseLeave}
                  >
                    Let&apos;s Discuss
                  </a>
                </div>

                <span className="text-2xl lg:text-3xl pt-0 md:pt-12 align-bottom h-full">
                  *from 170 usd
                </span>
              </div>
            </li>
          </div>
          <div className="group w-full my-4 border-b-[1px] border-solid border-slate-100 py-4 md:py-8">
            <li className="mb-4 w-full flex flex-col md:flex-row justify-between items-end">
              <div
                onMouseEnter={() => handleMouseEnter("nature")}
                onMouseLeave={handleMouseLeave}
              >
                <h2 className="text-[28px] md:text-3xl lg:text-4xl text-slate-100 leading-extratight font-black tracking-wide mb-[32px]">
                  Nature
                </h2>
                <h5 className="text-[18px] max-w-[600px] text-slate-200 font-display ">
                  Nature art refers to art that is inspired by or depicts the
                  natural world, including landscapes, animals, plants, and
                  other natural phenomena. It can take many forms, including
                  painting, drawing, sculpture, photography, and installation
                  art, and can range from realistic depictions to abstract
                  interpretations.
                </h5>
              </div>
              <div className="w-full md:w-auto pt-6 md:pt-0 flex flex-row md:flex-col justify-between">
                <div className="h-[36px] md:h-[54px] overflow-hidden">
                  <a
                    href={`mailto:vitkovskaya.artwork@gmail.com`}
                    className="ease-out duration-500 text-[#e78831] text-2xl lg:text-3xl hover:cursor-none h-[54px] block translate-y-[36px] md:translate-y-[54px] group-hover:translate-y-[0px] font-display "
                    onMouseEnter={handleMouseEnterLink}
                    onMouseLeave={handleMouseLeave}
                  >
                    Let&apos;s Discuss
                  </a>
                </div>

                <span className="text-2xl lg:text-3xl pt-0 md:pt-12 align-bottom h-full">
                  *from 180 usd
                </span>
              </div>
            </li>
          </div>
          <div className="group w-full my-4 border-b-[1px] border-solid border-slate-100 py-4 md:py-8">
            <li className="mb-4 w-full flex flex-col md:flex-row justify-between items-end">
              <div
                onMouseEnter={() => handleMouseEnter("characters")}
                onMouseLeave={handleMouseLeave}
              >
                <div>
                  <h2 className="text-[28px] md:text-3xl lg:text-4xl text-slate-100 leading-extratight font-black tracking-wide mb-[32px]">
                    Characters
                  </h2>
                  <h5 className="text-[18px] max-w-[600px] text-slate-200 font-display ">
                    Character art refers to artwork that depicts characters,
                    whether they are fictional or real. It can take many forms,
                    including illustrations, sketches, digital art, sculptures,
                    and more. Character art is an important component of many
                    forms of media, such as video games, animation, comics, and
                    film.
                  </h5>
                </div>
              </div>
              <div className="w-full md:w-auto pt-6 md:pt-0 flex flex-row md:flex-col justify-between">
                <div className="h-[36px] md:h-[54px] overflow-hidden">
                  <a
                    href={`mailto:vitkovskaya.artwork@gmail.com`}
                    className="ease-out duration-500 text-[#e78831] text-2xl lg:text-3xl hover:cursor-none h-[54px] block translate-y-[36px] md:translate-y-[54px] group-hover:translate-y-[0px] font-display "
                    onMouseEnter={handleMouseEnterLink}
                    onMouseLeave={handleMouseLeave}
                  >
                    Let&apos;s Discuss
                  </a>
                </div>
                <span className="text-2xl lg:text-3xl pt-0 md:pt-12 align-bottom h-full">
                  *from 220 usd
                </span>
              </div>
            </li>
          </div>
          <div className="group w-full my-4 border-b-[1px] border-solid border-slate-100 py-4 md:py-8">
            <li className="mb-4 w-full flex flex-col md:flex-row justify-between items-end">
              <div
                onMouseEnter={() => handleMouseEnter("architecture")}
                onMouseLeave={handleMouseLeave}
              >
                <h2 className="text-[28px] md:text-3xl lg:text-4xl text-slate-100 leading-extratight font-black tracking-wide mb-[32px]">
                  Architecture
                </h2>
                <h5 className="text-[18px] max-w-[600px] text-slate-200 font-display ">
                  Architecture art refers to the design and creation of
                  buildings and other structures that are not only functional
                  but also visually appealing and aesthetically pleasing. It is
                  an art form that combines engineering, design, and creativity
                  to create structures that are both beautiful and functional.
                </h5>
              </div>
              <div className="w-full md:w-auto pt-6 md:pt-0 flex flex-row md:flex-col justify-between">
                <div className="h-[36px] md:h-[54px] overflow-hidden">
                  <a
                    href={`mailto:vitkovskaya.artwork@gmail.com`}
                    className="ease-out duration-500 text-[#e78831] text-2xl lg:text-3xl hover:cursor-none h-[36px] md:h-[54px] block translate-y-[36px] md:translate-y-[54px] group-hover:translate-y-[0px] font-display "
                    onMouseEnter={handleMouseEnterLink}
                    onMouseLeave={handleMouseLeave}
                  >
                    Let&apos;s Discuss
                  </a>
                </div>
                <span className="text-2xl lg:text-3xl pt-0 md:pt-12 align-bottom h-full">
                  *from 240 usd
                </span>
              </div>
            </li>
          </div>
        </ul>
      </div>
      <h5 className="sm:text-xs lg:text-base text-slate-100 leading-extratight font-black tracking-wide font-display mb-[32px] lg:mb-16 text-right font-sans mt-2">
        *Usually price depends on complexity of artwork and and negotiated
        individually
      </h5>
      <Services>
        <h3 className="text-3xl md:text-4xl lg:text-5xl text-slate-100 leading-extratight font-black tracking-wide font-display mb-[32px] lg:mb-16">
          Frequently asked questions
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
    </div>
  );
};

const Services = styled.div`
  width: 800px;
  max-width: 60%;
  margin-top: 80px;

  @media (max-width: 820px) {
    max-width: 100%;
  }
`;

const AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 8px;
  height: 36px;

  span {
    width: 16px;
    height: 3px;
    transition: all 0.1s ease-in-out;
  }
`;

export default CommissionsPage;
