export const framerEase = [0.44, 0, 0.56, 1] as const;

export const springUI = {
  type: "spring",
  duration: 0.4,
  bounce: 0.2,
} as const;

export const springSnappy = {
  type: "spring",
  duration: 0.35,
  bounce: 0.18,
} as const;

export const drawerSpring = {
  type: "spring",
  duration: 0.5,
  bounce: 0.1,
} as const;

export const tweenStandard = {
  type: "tween",
  duration: 0.55,
  ease: framerEase,
} as const;

export const buttonTween = {
  type: "tween",
  duration: 0.2,
  ease: framerEase,
} as const;

export const tabTween = {
  type: "tween",
  duration: 0.3,
  ease: framerEase,
} as const;

export const heroReveal = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.55,
    ease: framerEase,
  },
};

export const sectionReveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: {
    duration: 0.55,
    ease: framerEase,
  },
};
