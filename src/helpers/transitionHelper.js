export const fade = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
  },
};

export const revealInOut = {
  initial: { y: "110%", opacity: 0 },
  enter: {
    y: "0%",
    opacity: 1,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    y: "110%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export const revealInOutMini = {
  initial: { y: 50, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    y: 50,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export const defaultTransition = {
  duration: 1.25,
  ease: [0.43, 0.13, 0.23, 0.96],
};
