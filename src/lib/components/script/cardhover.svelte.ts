import { gsap } from "gsap";

export const boxanimate = (element) => {
  gsap.to(element, {
    x: 100,
    rotation: 360,
  });
};
