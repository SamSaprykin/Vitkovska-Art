import {
  motion,
  useTransform,
  useViewportScroll,
  circOut,
  useSpring,
} from "framer-motion";
import React from "react";
import VideoComponent from "./videComponent";

const ImagesTest = () => {
  const { scrollY } = useViewportScroll();
  const spring = useSpring(scrollY, { stiffness: 300, damping: 20 });
  const image1Opacity = useTransform(
    scrollY,
    [0, 600, 800, 1400, 1600, 2000, 2200, 2400],
    [0, 1, 1, 0, 0, 0, 0, 0],
  );
  const image2Opacity = useTransform(
    scrollY,
    [0, 600, 800, 1400, 1600, 2000, 2200, 2400],
    [0, 0, 0, 1, 1, 0, 0, 0],
  );
  const image3Opacity = useTransform(
    scrollY,
    [0, 600, 800, 1400, 1600, 2000, 2200, 2400],
    [0, 0, 0, 0, 0, 1, 1, 0],
  );
  const divWidth = useTransform(
    spring,
    [0, 300, 1900, 2400],
    ["60%", "100%", "100%", "70%"],
    { ease: circOut },
  );

  const borderRadius = useTransform(
    spring,
    [0, 300, 1900, 2400],
    ["0px", "0px", "0px", "10px"],
    { ease: circOut },
  );

  const divHeight = useTransform(
    spring,
    [0, 300, 1900, 2400],
    ["50vh", "100vh", "100vh", "70vh"],
    { ease: circOut },
  );

  return (
    <div>
      <div
        style={{
          height: "600px",
        }}
      ></div>
      <div
        style={{
          height: "2400px",
          width: "100%",
          position: "relative",
        }}
      >
        <motion.div
          style={{
            width: divWidth,
            borderRadius,
            height: divHeight,
            margin: "0 auto",
            position: "sticky",
            top: "0px",
          }}
          className="overflow-hidden"
        >
          <VideoComponent iframeUrl="//videos.ctfassets.net/zogcnwgo7tun/6x7DVw7Ndjipd13Wwt0aa2/9e50e14663cd0ac55959db69fc19d3f1/Aluproteck.mp4" />
          <div className="w-3/4 border-b-2 border-slate-200 absolute bottom-[50px] left-0 opacity-50 mx-8">
            <span className="text-slate-100 font-display">Keep Scrolling</span>
          </div>
        </motion.div>
        <div
          style={{
            marginTop: "-40vh",
          }}
        >
          {" "}
          <motion.h5
            style={{
              opacity: image1Opacity,
              position: "relative",
              height: "100vh",
              left: 0,
              width: "100%",
              maxWidth: "600px",
              fontSize: "48px",
            }}
            className="lg:px-8 text-slate-200 font-display"
          >
            The fastest lead times in the industry.
          </motion.h5>
          <motion.h5
            style={{
              opacity: image2Opacity,
              position: "relative",
              height: "100vh",
              left: 0,
              width: "100%",
              maxWidth: "600px",
              fontSize: "48px",
            }}
            className="lg:px-8 text-slate-200 font-display"
          >
            26-foot reservoirs, 7 feet in depth
          </motion.h5>
          <motion.h5
            style={{
              opacity: image3Opacity,
              position: "relative",
              height: "100vh",
              left: 0,
              width: "100%",
              maxWidth: "600px",
              fontSize: "48px",
            }}
            className="lg:px-8 text-slate-200 font-display"
          >
            3-5 day turnaround, 24/7 operational capacity
          </motion.h5>
        </div>
      </div>
      <div
        style={{
          height: "60vh",
        }}
      ></div>
    </div>
  );
};

export default ImagesTest;
