import React, { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

gsap.registerPlugin(ScrollTrigger);

const FeaturedArts = ({ arts }) => {
  let scrollContainer = useRef(null);
  useEffect(() => {
    gsap.to(scrollContainer, {
      xPercent: -200,
      scrollTrigger: {
        scroller: "#___gatsby",
        trigger: scrollContainer,
        start: "top top",
        scrub: true,
        pin: true,
        end: "+=20000",
      },
    });

    ScrollTrigger.addEventListener("refresh", () => window.scroll.update());
    ScrollTrigger.refresh();
  }, [scrollContainer]);

  return (
    <div className="relative">
      <div
        className={`relative inset-x-0 will-change-transform overflow-hidden`}
      >
        <h3 className="text-[96px] mb-[-96px]  text-black font-light font-sans relative z-100">
          Featured work
        </h3>
        <section
          className="relative h-screen w-full flex items-center"
          ref={(el) => (scrollContainer = el)}
        >
          <div className="relative flex items-center h-full">
            <h3 className="absolute text-[48px] w-[100%] fixed left-0 bottom-0 text-black font-light font-display z-100">
              Browse All
            </h3>
            {arts.length &&
              arts.map((art) => {
                console.log(art);
                const img = getImage(art?.node?.artImage);
                return (
                  <div
                    className="relative mr-48 flex items-center justify-center w-27vw"
                    key={art?.node?.artName}
                  >
                    <GatsbyImage image={img} />
                    <h5 className="absolute text-[52px] right-[-100px] bottom-[-30px] text-orangeMain font-normal	font-display z-100">
                      {art?.node?.artName}
                    </h5>
                  </div>
                );
              })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default FeaturedArts;
