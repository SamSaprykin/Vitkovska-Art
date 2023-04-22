import React, { useState, useEffect, useContext } from "react";
// Styled Components
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled, { css } from "styled-components";
import { navigate } from "gatsby";
import CursorContext from "../context/CursorContext";
import IconsLibrary from "./iconsLibrary";

export const socialLinks = [
  {
    name: "instagram",
    link: "https://www.instagram.com/vitkovskaya_art/",
  },
  {
    name: "twitter",
    link: "https://twitter.com/vitkovskaya_art",
  },
  {
    name: "art-station",
    link: "https://www.artstation.com/vitkovskaya",
  },
  {
    name: "tiktok",
    link: "https://www.tiktok.com/@vitkovskaya_art",
  },
];

const columnsList = [
  {
    id: 0,
    title: "Scenery",
    backgroundColor: "bg-orange-300",
    columnHeightClassname: "",
    widthColumn: "18%",
    heightColumn: "74%",
  },
  {
    id: 1,
    title: "Backgrounds",
    backgroundColor: "bg-cyan-500",
    columnHeightClassname: "",
    widthColumn: "18%",
    heightColumn: "77%",
  },
  {
    id: 2,
    title: "Nature",
    backgroundColor: "bg-fuchsia-600",
    columnHeightClassname: "",
    widthColumn: "20%",
    heightColumn: "83%",
  },
  {
    id: 3,
    title: "Characters",
    backgroundColor: "bg-neutral-500",
    columnHeightClassname: "",
    widthColumn: "20%",
    heightColumn: "90%",
  },
  {
    id: 4,
    title: "Architecture",
    backgroundColor: "bg-rose-200",
    columnHeightClassname: "",
    widthColumn: "20%",
    heightColumn: "83%",
  },
];

const CategoryServices = () => {
  // Default state, using number for our id. Which ever the number/id is in the state. That will be opened.
  const { setCursorType } = useContext(CursorContext);
  const [startHovering, setStartHovering] = useState({
    hovered: false,
    index: null,
  });

  const handleMouseEnter = (index) => {
    setCursorType({
      type: "hover-image",
      imageName: null,
    });
    setStartHovering({
      hovered: true,
      index,
    });
  };

  const handleMouseLeave = () => {
    setCursorType({
      type: "default",
      imageName: null,
    });
    setStartHovering({
      hovered: false,
      index: null,
    });
  };

  const handleMouseEnterLink = () => {
    setCursorType({
      type: "hover-link",
      imageName: null,
    });
  };

  const handleMouseLeaveLink = () => {
    setCursorType({
      type: "default",
      imageName: null,
    });
  };

  const handleMouseDefault = () => {
    setCursorType({
      type: "default",
      imageName: null,
    });
  };

  useEffect(() => {
    setCursorType({
      type: "default",
      imageName: null,
    });
  }, [setCursorType]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  return (
    <div
      className="relative min-h-screen overflow-hidden mr-8 flex justify-end"
      onMouseEnter={handleMouseDefault}
      ref={ref}
    >
      <Wrapper>
        <Container>
          <Flex
            alignEnd
            justifyEnd
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {columnsList.map((column, index) => {
              return (
                <Item
                  key={index}
                  index={index}
                  column={column}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                  startHovering={startHovering}
                  inView={inView}
                />
              );
            })}
          </Flex>
        </Container>
      </Wrapper>
      <FollowSocial className="pt-32 flex items-center flex-col">
        <h3 className="text-slate-100 italic font-serif md:text-3xl lg:text-4xl relative z-10 leading-tight mix-blend-difference">
          Follow Me
        </h3>
        <div className="flex row justify-center w-full mt-8 items-center">
          {socialLinks.map((social) => {
            return (
              <div key={social.name} className="mx-2">
                <a
                  href={social.link}
                  className="hover:cursor-none"
                  onMouseEnter={handleMouseEnterLink}
                  onMouseLeave={handleMouseLeaveLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconsLibrary type={social.name} />
                </a>
              </div>
            );
          })}
        </div>
        <h5 className="text-xl md:text-2xl pr-px text-slate-100 font-serif font-display hover:cursor-none mt-8">
          Or
        </h5>
        <a
          className="text-[#e78831] text-xl md:text-2xl pr-px text-slate-100 font-serif font-display hover:cursor-none mt-4 hover:text-slate-200 focus:text-slate-200 transition ease-in-out"
          partiallyActive={true}
          activeClassName="opacity-100"
          href={`mailto:vitkovskaya0592@gmail.com `}
          onMouseEnter={handleMouseEnterLink}
          onMouseLeave={handleMouseLeaveLink}
        >
          Mail
        </a>
      </FollowSocial>
    </div>
  );
};

const Item = ({
  column,
  handleMouseEnter,
  index,
  handleMouseLeave,
  startHovering,
  inView,
}) => {
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        height: column.heightColumn,
        transition: {
          duration: 0.15 * (index + 0.05),
          ease: [0.6, 0.05, -0.01, 0.9],
          damping: 12,
          stiffness: 200,
        },
      });
    } else {
      controls.start({ height: 0 });
    }
  }, [controls, inView]);

  const navigateTo = () => {
    navigate("/arts/architecture/");
  };
  return (
    <ColumnServices
      key={column.title}
      growDefault={column.growDefault}
      heightColumn={column.heightColumn}
      widthColumn={column.widthColumn}
      className={`${column.backgroundColor} overflow-hidden pl-4`}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
      startHovering={startHovering}
      itemIndex={index}
      initial={{ height: 0 }}
      animate={controls}
      onClick={navigateTo}
    >
      <DescriptionWrapper>
        <SmallDescription>{column.title}</SmallDescription>
        <CategoryName
          className="uppercase font-semibold font-sans text-[260px] tracking-wider mt-[22vh]"
          startHovering={startHovering}
          itemIndex={index}
        >
          {column.title}
        </CategoryName>
      </DescriptionWrapper>
    </ColumnServices>
  );
};

const FollowSocial = styled.div`
  width: 300px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  -webkit-box-pack: start;
  justify-content: flex-end;
  width: calc(var(--vh, 1vh) * 140);
`;

const DescriptionWrapper = styled.div`
  height: 70vh;
  position: relative;
`;

const ColumnServices = styled(motion.div)`
  display: flex;
  background-color: ${(props) => props.bgColor};
  height: ${(props) => props.heightColumn};
  width: ${(props) =>
    props.startHovering.hovered
      ? props.startHovering.hovered &&
        props.startHovering.index === props.itemIndex
        ? "40%"
        : "15%"
      : props.widthColumn};
  align-items: flex-end;
  position: relative;
  transition: all 0.5s ease-in-out;
`;

const CategoryName = styled.h3`
  margin-left: ${(props) =>
    props.startHovering.index === props.itemIndex ? "-15vw" : "0%"};
  transition: all 0.6s ease-in-out;
`;

const SmallDescription = styled.span`
  position: absolute;
  transform: rotate(90deg);
  left: 20px;
  top: 8vh;
  font-size: 16px;
  font-family: Helvetica Neue;
  transform-origin: 0% 100%;
`;

const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 100%;
  padding-left: calc(var(--vh, 1vh) * 2.5185);
  padding-right: calc(var(--vh, 1vh) * 6.8519);
`;

const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: calc(var(--vh, 1vh) * 84);
  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `};
  ${(props) =>
    props.justifyEnd &&
    css`
      justify-content: flex-end;
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
    props.alignEnd &&
    css`
      align-items: flex-end;
    `};
  ${(props) =>
    props.noHeight &&
    css`
      height: 0;
    `};
`;

export default CategoryServices;
