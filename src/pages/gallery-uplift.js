import React from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { motion } from "framer-motion";
import GalleryGridList from "../components/galleryUplift";
import useAllArts from "../hooks/useAllArts";

const GalleryUplift = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  const allArts = useAllArts();
  return (
    <ReactLenis root>
      <motion.section initial="initial" animate="enter" exit="exit">
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{
            enter: { transition: { delayChildren: 0.5 } },
          }}
        >
          <div className="h-screen w-screen">
            <GalleryGridList data={allArts} />
          </div>
        </motion.div>
      </motion.section>
    </ReactLenis>
  );
};

export default GalleryUplift;
