import React, { useRef } from "react";
import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import styled from "styled-components";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ element, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  const image = getImage(element.node.artImage.gatsbyImageData);

  console.log(image);
  return (
    <StyledSection className="h-screen w-full flex justify-center items-center relative">
      <div ref={ref}>
        <GatsbyImage image={image} />
      </div>
      <ImageHeading
        style={{ y }}
        className="absolute m-0  text-[54px] lg:text-[78px] tracking-wide  text-slate-100 font-display capitalize z-10 leading-tight	mix-blend-difference"
      >
        {`${index < 10 ? `#00${index}` : `#0${index}`}`}
      </ImageHeading>
    </StyledSection>
  );
}

export default function CategoryPage({ data, pageContext }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.006,
  });
  const artsList = data.allContentfulArt.edges;

  return (
    <div>
      {artsList.map((element, index) => (
        <Image element={element} key={element.slug} index={index + 1} />
      ))}
      <div className="fixed w-full left-0 bottom-[20px] lg:bottom-[50px] flex flex-col	 justify-center items-center">
        <ImageHeading className="mb-5  text-[32px] lg:text-[48px] tracking-wide  text-[#e78831] font-display capitalize z-10 leading-tight	mix-blend-difference">
          {pageContext.category}
        </ImageHeading>
        <motion.div className="bg-white h-[5px] w-1/2" style={{ scaleX }} />
      </div>
    </div>
  );
}

const ImageHeading = styled(motion.h2)`
  left: calc(50% + 180px);

  @media (max-width: 780px) {
    left: 0%;
  }
`;

const StyledSection = styled.section`
  scroll-snap-align: center;
  perspective: 500px;

  div {
    position: relative;
    max-height: 70vh;
    margin: 20px;
    overflow: hidden;

    img {
      object-fit: contain;
    }

    @media (max-width: 780px) {
      margin: 0;
    }
  }
`;

export const query = graphql`
  query CategoryQuery {
    allContentfulArt(limit: 15) {
      edges {
        node {
          id
          category
          artName
          artImage {
            gatsbyImageData(width: 300, placeholder: DOMINANT_COLOR)
            url
          }
        }
      }
    }
  }
`;
