import React, { useState, useEffect, useContext } from "react";
// Styled Components
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled, { css } from "styled-components";
import { navigate, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import CursorContext from "../context/CursorContext";
import IconsLibrary from "./iconsLibrary";

export const socialLinks = [
  {
    name: "instagram",
    type: "Instagram",
    link: "https://www.instagram.com/vitkovskaya_art/",
  },
  {
    name: "twitter",
    type: "Twitter",
    link: "https://twitter.com/vitkovskaya_art",
  },
  {
    name: "art-station",
    type: "Artstation",
    link: "https://www.artstation.com/vitkovskaya",
  },
  {
    name: "tiktok",
    type: "Tiktok",
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
    title: "Characters",
    backgroundColor: "bg-cyan-500",
    columnHeightClassname: "",
    widthColumn: "17%",
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
    title: "Fantasy",
    backgroundColor: "bg-neutral-500",
    columnHeightClassname: "",
    widthColumn: "22%",
    heightColumn: "94%",
    imageName: "crystal",
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

  const Images = useStaticQuery(graphql`
    query HighlightImage {
      crystal: contentfulArt(artName: { eq: "Portal2" }) {
        id
        artImage {
          gatsbyImageData(placeholder: DOMINANT_COLOR, width: 600, quality: 100)
        }
      }
    }
  `);
  return (
    <div
      className="relative lg:min-h-screen overflow-hidden mt-8 md:mt-16 lg:mt-0 mb-12 lg:mb-0 mr-0 lg:mr-8 flex flex-col lg:flex-row flex-start lg:justify-end"
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
                  images={Images}
                  startHovering={startHovering}
                  inView={inView}
                />
              );
            })}
          </Flex>
        </Container>
      </Wrapper>
      <FollowSocial className="pt-12 md:pt-32 flex items-center flex-col">
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
          href={`mailto:vitkovskaya.artwork@gmail.com`}
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
  images,
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
    navigate(`/arts/${column.title.toLowerCase()}/`);
  };

  const image = images[column.imageName];
  let gImage;
  if (image) {
    gImage = getImage(image.artImage);
  }

  return (
    <ColumnServices
      key={column.title}
      growDefault={column.growDefault}
      heightColumn={column.heightColumn}
      widthColumn={column.widthColumn}
      className={`${column.backgroundColor} overflow-hidden pl-3 md:pl-4`}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
      startHovering={startHovering}
      itemIndex={index}
      initial={{ height: 0 }}
      animate={controls}
      onClick={navigateTo}
    >
      {gImage && (
        <div className="absolute top-0 left-0 max-h-[200px] overflow-hidden flex jsutify-center items-center">
          <GatsbyImage image={gImage} alt={column.title} />
        </div>
      )}
      <DescriptionWrapper>
        <SmallDescription>{column.title}</SmallDescription>
        <CategoryName
          className="uppercase font-semibold font-sans text-[80px] md:text-[180px] lg:text-[260px] tracking-wider mt-[200px] md:mt-[22vh]"
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
  width: 100%;

  @media (min-width: 1280px) {
    width: 300px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  -webkit-box-pack: start;
  justify-content: flex-end;
  width: 100%;

  @media (min-width: 1280px) {
    width: calc(var(--vh, 1vh) * 140);
  }
`;

const DescriptionWrapper = styled.div`
  height: 320px;
  position: relative;

  @media (min-width: 820px) {
    height: 47vh;
  }
  @media (min-width: 1280px) {
    height: 62vh;
  }
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
    props.startHovering.index === props.itemIndex ? "-18vw" : "0%"};
  transition: all 0.6s ease-in-out;

  @media (min-width: 1280px) {
    margin-left: ${(props) =>
      props.startHovering.index === props.itemIndex ? "-15vw" : "0%"};
  }
`;

const SmallDescription = styled.span`
  position: absolute;
  transform: rotate(90deg);
  left: 0px;
  top: 10vh;
  font-size: 16px;
  font-family: Helvetica Neue;
  transform-origin: 0% 100%;

  @media (min-width: 820px) {
    left: 20px;
  }
`;

const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 100%;

  @media (min-width: 1280px) {
    padding-left: calc(var(--vh, 1vh) * 2.5185);
    padding-right: calc(var(--vh, 1vh) * 6.8519);
  }
`;

const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 380px;
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

  @media (min-width: 820px) {
    height: calc(var(--vh, 1vh) * 56);
  }
  @media (min-width: 1280px) {
    height: calc(var(--vh, 1vh) * 84);
  }
`;

export default CategoryServices;
