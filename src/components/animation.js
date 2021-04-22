export const pageAnimation = {
  hidden: { y: 200, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.2 } },
  exit: {
    opacity: 1,
    y: 300,
    transition: {
      duration: 1,
    },
  },
};

export const homeAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3, staggerChildren: 0.5 } },
};

export const slider = {
  hidden: { x: "-130%", skew: "45deg" },
  show: {
    x: "100%",
    skew: "0deg",
    transition: { ease: "easeOut", duration: 0.5 },
  },
};

export const sliderContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.15, ease: "easeOut" },
  },
};
