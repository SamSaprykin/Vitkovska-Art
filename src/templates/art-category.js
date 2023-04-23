import { motion, useAnimation, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import ImageLink from "../components/imageLink";
import preloadImages from "../utils/preloadImages";
import { defaultTransition } from "../helpers/transitionHelper";

const gridUtils = [600, 400, 600, 800, 600];

export default function CategoryPage({ data }) {
  const animation = useAnimation();
  const loaderControls = useAnimation();

  const gridRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const bgColor = useMotionValue("black");

  useEffect(() => {
    async function sequence() {
      await animation.set((index) => ({
        y: gridUtils[index % 5],
        scale: 1.1,
      }));

      await animation.start((i) => ({
        y: 0,
        transition: defaultTransition,
      }));

      bgColor.set("rgb(19, 20, 26)");

      await animation.start({
        scale: 1,
        transition: defaultTransition,
      });
    }

    loaderControls.start({
      opacity: 0,
      transition: { defaultTransition },
    });

    Promise.all([preloadImages(".grid-item-media")]).then(async () => {
      setTimeout(() => {
        loaderControls.start({
          opacity: 0,
          transition: { defaultTransition },
        });
        sequence();
      }, 10);
    });
  }, []);

  function gridParallax(event) {
    if (gridRef.current) {
      const speed = -10;
      const { width, height } = gridRef.current.getBoundingClientRect();

      const offsetX = event.pageX - width * 0.5;
      const offsetY = event.pageY - height * 0.5;

      const newTransformX = (offsetX * speed) / 100 - offsetX / 2 - 250;
      const newTransformY = (offsetY * speed) / 100 - offsetY / 2 - 100;

      x.set(newTransformX);
      y.set(newTransformY);
    }
  }

  const xMotion = useSpring(x, { stiffness: 400, damping: 90 });
  const yMotion = useSpring(y, { stiffness: 400, damping: 90 });

  const artsList = data.allContentfulArt.edges;
  return (
    <>
      <Content
        style={{
          backgroundColor: bgColor,
          transition: "background-color 1.25s ease-in-out",
        }}
        className="cursor-none"
      >
        <GridContainer>
          <GridElements
            onMouseMove={gridParallax}
            onTouchMove={gridParallax}
            ref={gridRef}
            transition={defaultTransition}
            style={{
              x: xMotion,
              y: yMotion,
            }}
          >
            {artsList.map((element, index) => (
              <Element key={element.slug} animate={animation} custom={index}>
                <ThumbnailWrapper>
                  <ImageLink index={index} element={element} />
                </ThumbnailWrapper>
              </Element>
            ))}
          </GridElements>
        </GridContainer>
      </Content>
    </>
  );
}

const Content = styled(motion.div)`
  position: relative;
  max-width: 100%;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  content-visibility: auto;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  display: flex;
  justify-content: center;
  background-color: rgba(19, 20, 26);

  @media (min-width: 1280px) {
    margin-top: 30px;
  }
`;

const GridContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 1170px;
  height: 1016px;
  top: calc(((var(--vh, 1vh) * 100) - 1016px) / 2);
  left: calc((100vw - 1170px) / 2);
  content-visibility: auto;

  @media (min-width: 1280px) {
    width: 1960px;
    height: 1456px;
    top: calc(((1vh * 100) - 1456px) / 2);
    left: calc((100vw - 1960px) / 2);
  }

  @media (min-width: 1440px) {
    width: 2110px;
    height: 1600px;
    top: calc(((1vh * 100) - 1600px) / 2);
    left: calc((100vw - 2110px) / 2);
  }
`;

const GridElements = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(5, 234px);
  padding: 25px 37.5px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 320px);
    padding: 64px 80px;
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(5, 392px);
    padding: 64px 92px;
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(5, 420px);
    padding: 64px 92px;
  }
`;

const Element = styled(motion.div)`
  padding: 25px 15px;
  width: 234px;
  height: 254px;

  @media (min-width: 820px) {
    width: 320px;
    height: 304px;
    padding: 32px 40px;
  }

  @media (min-width: 1280px) {
    width: 420px;
    height: 400px;
    padding: 32px 46px;
    margin: 0px 2vw;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const ThumbnailWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
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
