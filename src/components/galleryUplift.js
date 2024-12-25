"use client";

import React, { useEffect, useRef, useState, useContext } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import CursorContext from "../context/CursorContext";
import { Modal } from "../pages/arts";

const Section = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: hidden;
`;

const GalleryGridList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 6vw;
  width: -moz-fit-content;
  width: fit-content;
  height: auto;
  padding: 100px 0px;
  will-change: transform;
  list-style: none;
  width: fit-content;
  margin: 0;
`;

const GalleryGridListItem = styled.li`
  display: flex;
  padding: 6vw;
  width: 24vw;
  height: 24vw;

  &:nth-child(odd) {
    justify-content: center;
    align-items: flex-end;
  }

  &:nth-child(2n) {
    justify-content: center;
    align-items: flex-start;
  }

  &:hover .GalleryPicture {
    opacity: 1;
  }
`;

const GalleryImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const GalleryPicture = styled.picture`
  aspect-ratio: 3/4;
  overflow: hidden;
  opacity: 0.5;
  border-radius: 15px;
`;

const GalleryInformationSection = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  pointer-events: none;
  bottom: 30px;

  h1 {
    margin: 0;
  }

  p {
    margin: 0;
  }
`;

const GalleriesGrid = ({ data }) => {
  const { setCursorType } = useContext(CursorContext);
  const handleMouseEnter = () => {
    setCursorType({
      type: "hover-image",
      imageName: null,
    });
  };

  const handleMouseLeave = () => {
    setCursorType({
      type: "default",
      imageName: null,
    });
  };
  const galleries = data.edges;
  const [selectedArt, setSelectedArt] = useState(null);
  const [hoveredGallery, setHoveredGallery] = useState({
    place: "Travel place",
    date: "Travel date",
  });
  const ulRef = useRef(null);
  const liRefs = useRef([]);
  const pictureRefs = useRef([]);
  const imgRefs = useRef([]);

  useEffect(() => {
    const ulElement = ulRef.current;

    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;
    let gridWidth = ulElement.scrollWidth;
    let gridHeight = ulElement.scrollHeight;

    const updateDimensions = () => {
      viewportWidth = window.innerWidth;
      viewportHeight = window.innerHeight;
      gridWidth = ulElement.scrollWidth;
      gridHeight = ulElement.scrollHeight;
    };

    window.addEventListener("resize", updateDimensions);

    const animationConfig = {
      duration: 1.2,
      ease: "power4.out",
    };

    imgRefs.current.forEach((img) => {
      gsap.set(img, { scale: 1.3 });
    });

    const handleMouseMove = (e) => {
      const mouseXRatio = e.clientX / viewportWidth;
      const mouseYRatio = e.clientY / viewportHeight;

      const targetX = Math.min(
        0,
        Math.max(
          -(gridWidth - viewportWidth),
          -(gridWidth - viewportWidth) * (mouseXRatio * 0.95),
        ),
      );
      const targetY = Math.min(
        0,
        Math.max(
          -(gridHeight - viewportHeight),
          -(gridHeight - viewportHeight) * (mouseYRatio * 0.95),
        ),
      );

      gsap.to(ulElement, {
        x: targetX,
        y: targetY,
        ...animationConfig,
        overwrite: true,
      });

      imgRefs.current.forEach((img) => {
        const rect = img.getBoundingClientRect();
        const imgCenterX = rect.left + rect.width / 2;
        const imgCenterY = rect.top + rect.height / 2;

        const deltaX = (imgCenterX - viewportWidth / 2) / viewportWidth;
        const deltaY = (imgCenterY - viewportHeight / 2) / viewportHeight;

        gsap.to(img, {
          x: deltaX * -45,
          y: deltaY * -45,
          overwrite: true,
          duration: 0.8,
          ease: "power4.out",
        });
      });
    };

    let lastTime = 0;
    const throttleDelay = 16;

    const throttledHandleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime >= throttleDelay) {
        handleMouseMove(e);
        lastTime = now;
      }
    };

    ulElement.addEventListener("mousemove", throttledHandleMouseMove);

    liRefs.current.forEach((li, index) => {
      const picture = pictureRefs.current[index];
      const galleryData = galleries[index];
      const initialPosition = { x: 0, y: 0, rotation: 0 };

      const handleLiMouseEnter = () => {
        setHoveredGallery({ place: galleryData.place, date: galleryData.date });
        gsap.killTweensOf(picture);
        gsap.to(picture, {
          scale: 1.08,
          duration: 1.8,
          ease: "power4.out",
        });
      };

      const handleLiMouseMove = (e) => {
        const { width, height, top, left } = li.getBoundingClientRect();
        const x = e.clientX - left - width / 2;
        const y = e.clientY - top - height / 2;

        gsap.to(picture, {
          x: initialPosition.x + x * 0.15,
          y: initialPosition.y + y * 0.15,
          rotation: initialPosition.rotation,
          duration: 1.8,
          ease: "power4.out",
        });
      };

      const handleLiMouseLeave = () => {
        setHoveredGallery({ place: "Travel place", date: "Travel date" });
        gsap.killTweensOf(picture);
        gsap.to(picture, {
          x: initialPosition.x,
          y: initialPosition.y,
          rotation: initialPosition.rotation,
          scale: 1,
          duration: 1.8,
          ease: "power4.out",
        });
      };

      li.addEventListener("mouseenter", handleLiMouseEnter);
      li.addEventListener("mousemove", handleLiMouseMove);
      li.addEventListener("mouseleave", handleLiMouseLeave);

      return () => {
        li.removeEventListener("mouseenter", handleLiMouseEnter);
        li.removeEventListener("mousemove", handleLiMouseMove);
        li.removeEventListener("mouseleave", handleLiMouseLeave);
      };
    });

    return () => {
      ulElement.removeEventListener("mousemove", throttledHandleMouseMove);
      window.removeEventListener("resize", updateDimensions);
    };
  }, [galleries]);

  const completeGalleryList = () => {
    const galleryItems = [...galleries];
    while (galleryItems.length < 15) {
      const randomIndex = Math.floor(Math.random() * galleries.length);
      galleryItems.push({
        ...galleries[randomIndex],
        id: `${galleries[randomIndex].id}-duplicate-${galleryItems.length}`,
      });
    }
    return galleryItems;
  };

  const galleryItems =
    galleries.length >= 15 ? galleries : completeGalleryList();

  const handleArtClick = (artItem) => {
    setSelectedArt(artItem);
  };

  const handleCloseModal = () => {
    setSelectedArt(null);
  };

  return (
    <Section>
      <GalleryGridList ref={ulRef}>
        {galleryItems.map((gallery, index) => {
          const image = getImage(gallery.node.artImage);

          return (
            <GalleryGridListItem
              ref={(el) => (liRefs.current[index] = el)}
              key={gallery.id}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleArtClick(gallery.node)}
            >
              <GalleryPicture ref={(el) => (pictureRefs.current[index] = el)}>
                <GalleryImage
                  ref={(el) => (imgRefs.current[index] = el)}
                  image={image}
                  alt={`${gallery.node.artName} - ${gallery.node.category}`}
                />
              </GalleryPicture>
            </GalleryGridListItem>
          );
        })}
      </GalleryGridList>
      <GalleryInformationSection>
        <h1 className="step-2">{hoveredGallery.place}</h1>
        <p>{hoveredGallery.date}</p>
      </GalleryInformationSection>
      {selectedArt && (
        <Modal
          isOpen={!!selectedArt}
          onClose={handleCloseModal}
          image={getImage(selectedArt.artImage)}
          title={selectedArt.title}
          description={selectedArt.description}
          backgroundColor={selectedArt.artImage.gatsbyImageData.backgroundColor}
        />
      )}
    </Section>
  );
};

export default GalleriesGrid;
