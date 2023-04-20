import React, {
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
  useEffect,
  useContext,
} from "react";
import ResizeObserver from "resize-observer-polyfill";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useMediaQuery } from "react-responsive";
import CursorContext from "../context/CursorContext";

import Hero from "../components/heroSection";
import HomeServices from "../components/homeServices";
import CategoryServices from "../components/categoryServices";

const DesktopVariant = () => {
  const scrollRef = useRef(null);
  const ghostRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);
  useLayoutEffect(() => {
    scrollRef && setScrollRange(scrollRef.current.scrollWidth);
  }, [scrollRef]);

  const onResize = useCallback((entries) => {
    for (const entry of entries) {
      setViewportW(entry.contentRect.width);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => onResize(entries));
    resizeObserver.observe(ghostRef.current);
    return () => resizeObserver.disconnect();
  }, [onResize]);

  const { scrollYProgress } = useViewportScroll();
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW],
  );
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);
  return (
    <>
      <div className="fixed inset-x-0	will-change-transform">
        <motion.section
          ref={scrollRef}
          style={{ x: spring }}
          className="relative h-screen w-max flex pb-20"
        >
          <div className="relative flex">
            <div className="w-screen">
              <Hero />
            </div>
            <div className="w-screen flex">
              <HomeServices />
            </div>
            <div className="w-screen flex">
              <CategoryServices />
            </div>
          </div>
        </motion.section>
      </div>

      <div
        ref={ghostRef}
        style={{ height: scrollRange }}
        className="w-screen	"
      />
    </>
  );
};

const MobileVariant = () => {
  return (
    <div className="inset-x-0	will-change-transform">
      <div className="relative flex-col">
        <div className="w-screen">
          <Hero />
        </div>
        <div className="w-screen flex">
          <HomeServices />
        </div>
        <div className="w-screen flex">
          <CategoryServices />
        </div>
      </div>
    </div>
  );
};
const IndexPage = () => {
  const { setCursorType } = useContext(CursorContext);
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  useEffect(() => {
    setCursorType("default");
  }, [setCursorType]);

  return <>{isDesktop ? <DesktopVariant /> : <MobileVariant />}</>;
};

export default IndexPage;
