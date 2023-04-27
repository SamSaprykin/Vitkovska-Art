import React, { useRef } from "react";
import { graphql } from "gatsby";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import styled from "styled-components";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ element }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <StyledSection className="h-screen flex justify-center items-center relative">
      <div ref={ref}>
        <img
          src={element.node.artImage.url}
          alt="A London skyscraper"
          className="absolute left-0 top-0 right-0 bottom-0 w-full h-full"
        />
      </div>
      <ImageHeading
        style={{ y }}
        className="absolute m-0  text-[54px] lg:text-[78px] tracking-wide  text-slate-100 font-sans capitalize z-10 leading-tight	mix-blend-difference"
      >
        {element.node.artName}
      </ImageHeading>
    </StyledSection>
  );
}

export default function CategoryPage({ data }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.006,
  });
  const artsList = data.allContentfulArt.edges;

  return (
    <div>
      {artsList.map((element) => (
        <Image element={element} key={element.slug} />
      ))}
      <div className="fixed w-full left-0 bottom-[50px] flex justify-center">
        <motion.div className="bg-white h-[5px] w-3/4" style={{ scaleX }} />
      </div>
    </div>
  );
}

const ImageHeading = styled(motion.h2)`
  left: calc(50% + 180px);

  @media (max-width: 780px) {
    left: 0%;
    margin-top: -450px !important;
  }
`;

const StyledSection = styled.section`
  scroll-snap-align: center;
  perspective: 500px;

  div {
    width: 400px;
    height: 500px;
    position: relative;
    max-height: 90vh;
    margin: 20px;
    overflow: hidden;

    img {
      object-fit: contain;
    }

    @media (max-width: 780px) {
      width: 360px;
      height: 400px;
      margin: 40px 0 0;
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
            gatsbyImageData(width: 400, placeholder: DOMINANT_COLOR)
            url
          }
        }
      }
    }
  }
`;
