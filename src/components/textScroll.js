import React, { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const TextScroll = () => {
  let artsContainer = useRef(null);
  const textRef = useRef([]);

  useEffect(() => {
    // We set this timeout because for some reason without it we're
    // not able to calculate the correct top position
    setTimeout(() => {
      const tl = gsap
        .timeline({ defaults: { ease: "none" } })
        .to(
          textRef.current[0],
          {
            xPercent: -50,
            yPercent: -30,
            left: "50%",
            top: "30%",
            rotation: "-270*4",
          },
          0,
        )
        .to(
          textRef.current[1],
          {
            xPercent: 10,
            yPercent: 20,
            left: "-10%",
            top: "20%",
            rotation: "360*5",
          },
          0,
        )
        .to(
          textRef.current[2],
          {
            xPercent: -90,
            yPercent: 30,
            left: "40%",
            top: "74%",
            rotation: "-160*3",
          },
          0,
        )
        .to(
          textRef.current[3],
          {
            xPercent: -50,
            yPercent: -80,
            left: "50%",
            top: "60%",
            rotation: "240*5",
          },
          0,
        )
        .to(
          textRef.current[4],
          {
            xPercent: -50,
            yPercent: -10,
            left: "-20%",
            top: "20%",
            rotation: "160*5",
          },
          0,
        )
        .to(
          textRef.current[5],
          {
            xPercent: -50,
            yPercent: -60,
            left: "30%",
            top: "66%",
            rotation: "360*5",
          },
          0,
        )
        .to(textRef.current[0], { scale: 10, opacity: 0.1 }, 0.8)
        .to(textRef.current[1], { scale: 10, opacity: 0.2 }, 0.8)
        .to(textRef.current[2], { scale: 10, opacity: 0.14 }, 0.8)
        .to(textRef.current[3], { scale: 10, opacity: 0.5 }, 0.8)
        .to(textRef.current[4], { scale: 10, opacity: 0.3 }, 0.8)
        .to(textRef.current[5], { scale: 10, opacity: 0.3 }, 0.8);

      ScrollTrigger.create({
        trigger: artsContainer,
        start: "top top",
        end: "+=2000 200vh",
        scroller: "#___gatsby",
        animation: tl,
        scrub: true,
        pin: true,
      });

      ScrollTrigger.addEventListener("refresh", () => window.scroll.update());
      ScrollTrigger.refresh();
    }, 200);
  }, [artsContainer, textRef]);

  return (
    <div className="relative bg-white">
      <div
        className={`relative inset-x-0 will-change-transform overflow-hidden`}
      >
        <section
          className="relative h-screen w-full flex items-center"
          ref={(el) => (artsContainer = el)}
        >
          <div className="relative flex h-full w-full">
            <h3
              ref={(el) => (textRef.current[0] = el)}
              className="text-[280px] rotate-30 w-[100%] absolute left-[0px] top-[100px] text-black font-light font-display z-100"
            >
              Nature
            </h3>
            <h3
              ref={(el) => (textRef.current[1] = el)}
              className="text-[250px] rotate-[-40deg] w-[100%] absolute left-[200px] top-[100vh] text-black font-light font-display z-100"
            >
              Arts
            </h3>
            <h3
              ref={(el) => (textRef.current[2] = el)}
              className="text-[220px] w-[100%] rotate-[60deg] absolute left-[60vw] top-[20vh] text-black font-light font-display z-100"
            >
              Fantasy
            </h3>
            <h3
              ref={(el) => (textRef.current[3] = el)}
              style={{ transform: "rotate(20deg);" }}
              className="text-[190px] w-[100%] rotate-180 absolute left-[50vw] top-[50vh] text-black font-light font-display z-100"
            >
              Animals
            </h3>
            <h3
              ref={(el) => (textRef.current[4] = el)}
              style={{ transform: "rotate(-10deg);" }}
              className="text-[220px] w-[100%] rotate-[-20deg] absolute left-[20vw] top-[52vh] text-black font-light font-display z-100"
            >
              Castle
            </h3>
            <h3
              ref={(el) => (textRef.current[5] = el)}
              style={{ transform: "rotate(3deg);" }}
              className="text-[190px] w-[100%] rotate-[90deg] absolute left-[60vw] top-[400px] text-black font-light font-display z-100"
            >
              Futurism
            </h3>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TextScroll;
