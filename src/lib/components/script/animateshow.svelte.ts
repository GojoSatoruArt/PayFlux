import gsap from "gsap";

export const animateshow = (showelement) => {
  gsap.from(showelement, {
    autoAlpha: 0,
    duration: 1,
    x: -50,
    opacity: 0,
    ease: "power1.out",
  });
};
